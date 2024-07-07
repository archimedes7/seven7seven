import { Vector3, Matrix4, Object3D, Scene, Camera } from "three";

export class CSS2DObject extends Object3D {
  element: HTMLElement;
  isCSS2DObject: boolean;

  constructor(element: HTMLElement = document.createElement("div")) {
    super();

    this.element = element;
    this.element.style.position = "absolute";
    this.element.style.userSelect = "none";

    this.element.setAttribute("draggable", "false");

    this.addEventListener("removed", function () {
      this.traverse(function (object: CSS2DObject) {
        if (
          object.element instanceof Element &&
          object.element.parentNode !== null
        ) {
          object.element.parentNode.removeChild(object.element);
        }
      });
    });

    this.isCSS2DObject = true;
  }

  copy(source: CSS2DObject, recursive?: boolean): this {
    super.copy(source, recursive);

    this.element = source.element.cloneNode(true) as HTMLElement;

    return this;
  }
}

interface ObjectData {
  distanceToCameraSquared: number;
}

export class CSS2DRenderer {
  domElement: HTMLDivElement;
  private _width: number;
  private _height: number;
  private _widthHalf: number;
  private _heightHalf: number;
  private _cache: { objects: WeakMap<CSS2DObject, ObjectData> };
  private _vector: Vector3;
  private _viewMatrix: Matrix4;
  private _viewProjectionMatrix: Matrix4;
  private _a: Vector3;
  private _b: Vector3;

  constructor() {
    this._width = 0;
    this._height = 0;
    this._widthHalf = 0;
    this._heightHalf = 0;

    this._cache = {
      objects: new WeakMap(),
    };

    this.domElement = document.createElement("div");
    this.domElement.style.overflow = "hidden";

    this._vector = new Vector3();
    this._viewMatrix = new Matrix4();
    this._viewProjectionMatrix = new Matrix4();
    this._a = new Vector3();
    this._b = new Vector3();
  }

  getSize(): { width: number; height: number } {
    return {
      width: this._width,
      height: this._height,
    };
  }

  render(scene: Scene, camera: Camera): void {
    if (scene.autoUpdate === true) scene.updateMatrixWorld();
    if (camera.parent === null) camera.updateMatrixWorld();

    this._viewMatrix.copy(camera.matrixWorldInverse);
    this._viewProjectionMatrix.multiplyMatrices(
      camera.projectionMatrix,
      this._viewMatrix
    );

    this.renderObject(scene, scene, camera);
    this.zOrder(scene);
  }

  setSize(width: number, height: number): void {
    this._width = width;
    this._height = height;

    this._widthHalf = this._width / 2;
    this._heightHalf = this._height / 2;

    this.domElement.style.width = width + "px";
    this.domElement.style.height = height + "px";
  }

  private renderObject(
    object: Object3D | CSS2DObject,
    scene: Scene,
    camera: Camera
  ): void {
    if ("isCSS2DObject" in object && object.isCSS2DObject) {
      this._vector.setFromMatrixPosition(object.matrixWorld);
      this._vector.applyMatrix4(this._viewProjectionMatrix);

      const element = object.element;

      if (/apple/i.test(navigator.vendor)) {
        // https://github.com/mrdoob/three.js/issues/21415
        element.style.transform = `translate(-50%,-50%) translate(${Math.round(
          this._vector.x * this._widthHalf + this._widthHalf
        )}px,${Math.round(
          -this._vector.y * this._heightHalf + this._heightHalf
        )}px)`;
      } else {
        element.style.transform = `translate(-50%,-50%) translate(${
          this._vector.x * this._widthHalf + this._widthHalf
        }px,${-this._vector.y * this._heightHalf + this._heightHalf}px)`;
      }

      element.style.display =
        this.getDistance(this._vector, camera) < 0 ? "none" : "";

      const objectData = {
        distanceToCameraSquared: this.getDistanceToSquared(
          this._vector,
          camera
        ),
      };

      this._cache.objects.set(object, objectData);

      if (element.parentNode !== this.domElement) {
        this.domElement.appendChild(element);
      }
    }

    for (let i = 0, l = object.children.length; i < l; i++) {
      this.renderObject(object.children[i], scene, camera);
    }
  }

  private getDistance(pos: Vector3, camera: Camera): number {
    this._a.setFromMatrixPosition(pos.matrixWorld);
    this._b.setFromMatrixPosition(camera.matrixWorld);

    return this._a.distanceTo(this._b);
  }

  private getDistanceToSquared(pos: Vector3, camera: Camera): number {
    this._a.setFromMatrixPosition(pos.matrixWorld);
    this._b.setFromMatrixPosition(camera.matrixWorld);

    return this._a.distanceToSquared(this._b);
  }

  private zOrder(scene: Scene): void {
    const sorted = scene.children
      .filter(
        (obj): obj is CSS2DObject => "isCSS2DObject" in obj && obj.isCSS2DObject
      )
      .sort((a, b) => {
        const distanceA =
          this._cache.objects.get(a)?.distanceToCameraSquared ?? 0;
        const distanceB =
          this._cache.objects.get(b)?.distanceToCameraSquared ?? 0;
        return distanceA - distanceB;
      });

    const zMax = sorted.length;

    for (let i = 0; i < zMax; i++) {
      sorted[i].element.style.zIndex = (zMax - i).toString();
    }
  }
}
