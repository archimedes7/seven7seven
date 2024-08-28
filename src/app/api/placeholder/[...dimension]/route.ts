// src/app/api/placeholder/[...dimensions]/route.ts

import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { dimensions: string[] } }
) {
  const dimensions = params.dimensions || [];
  const [width, height] = dimensions;
  const imageId = request.nextUrl.searchParams.get("id") || "OyCl7Y4y0Bk";

  if (!width || !height) {
    return new NextResponse("Width and height are required", { status: 400 });
  }

  const imageUrl = `https://source.unsplash.com/${imageId}/${width}x${height}`;

  try {
    const response = await fetch(imageUrl);
    if (!response.ok) throw new Error("Failed to fetch image");
    const buffer = await response.arrayBuffer();

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "image/jpeg",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    console.error("Error fetching image:", error);
    return new NextResponse("Error fetching image", { status: 500 });
  }
}
