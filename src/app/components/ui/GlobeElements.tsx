import React, { useEffect, useRef, useMemo } from "react";
import { useThree } from "@react-three/fiber";
import { CSS2DRenderer, CSS2DObject } from "../../utils/CSS2DRenderer"; // Update this path as needed

type HtmlElementData = {
  label: string;
  link: string;
  lat: number;
  lng: number;
};

const testData: HtmlElementData[] = [
  {
    label: "Cybersecurity",
    link: "https://www.seven7trades.com/cybersecurity",
    lat: 40.7128,
    lng: -74.006,
  },
  {
    label: "Digital Forensics",
    link: "https://www.seven7trades.com/digital-forensics",
    lat: 51.5074,
    lng: -0.1278,
  },
  {
    label: "Cloud Security",
    link: "https://www.seven7trades.com/cloud-security",
    lat: 35.6762,
    lng: 139.6503,
  },
];

export function GlobeElements({
  globeRef,
}: {
  globeRef: React.RefObject<any>;
}) {
  const { scene, camera, size } = useThree();
  const labelRendererRef = useRef<CSS2DRenderer | null>(null);

  const htmlElements = useMemo(() => {
    return testData.map((point) => ({
      ...point,
      element: createHtmlElement(point),
    }));
  }, []);

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current
        .htmlElementsData(htmlElements)
        .htmlElement((d) => d.element)
        .htmlAltitude(0.1)
        .htmlTransitionDuration(1000);

      // Set up CSS2DRenderer
      if (!labelRendererRef.current) {
        const labelRenderer = new CSS2DRenderer();
        labelRenderer.setSize(size.width, size.height);
        labelRenderer.domElement.style.position = "absolute";
        labelRenderer.domElement.style.top = "0px";
        labelRenderer.domElement.style.pointerEvents = "none";
        document.body.appendChild(labelRenderer.domElement);
        labelRendererRef.current = labelRenderer;
      }

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
        if (labelRendererRef.current) {
          labelRendererRef.current.render(scene, camera);
        }
      };
      animate();
    }

    // Cleanup
    return () => {
      if (labelRendererRef.current) {
        document.body.removeChild(labelRendererRef.current.domElement);
      }
    };
  }, [globeRef, htmlElements, scene, camera, size]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (labelRendererRef.current) {
        labelRendererRef.current.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return null; // This component doesn't render anything directly
}

function createHtmlElement(point: HtmlElementData): CSS2DObject {
  const el = document.createElement("div");
  el.className = "globe-label";
  el.innerHTML = `
    <div style="background-color: rgba(255,255,255,0.8); padding: 5px; border-radius: 5px; font-family: Arial, sans-serif;">
      <strong>${point.label}</strong><br>
      <a href="${point.link}" target="_blank" style="color: blue; text-decoration: none;">Learn More</a>
    </div>
  `;
  el.style.pointerEvents = "auto";
  el.style.cursor = "pointer";
  el.style.opacity = "0";
  el.style.transition = "opacity 0.3s";
  el.addEventListener("mouseenter", () => {
    el.style.opacity = "1";
  });
  el.addEventListener("mouseleave", () => {
    el.style.opacity = "0";
  });
  return new CSS2DObject(el);
}
