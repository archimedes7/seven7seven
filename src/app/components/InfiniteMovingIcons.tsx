"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Import all SVG files
import awsSvg from "@/assets/logos/amazonwebservices.svg";
import apacheKafkaSvg from "@/assets/logos/apachekafka.svg";
import cloudflareSvg from "@/assets/logos/cloudflare.svg";
import couchbaseSvg from "@/assets/logos/couchbase.svg";
import dockerSvg from "@/assets/logos/docker.svg";
import jenkinsSvg from "@/assets/logos/jenkins.svg";
import nextjsSvg from "@/assets/logos/nextdotjs.svg";
import notionSvg from "@/assets/logos/notion.svg";
import ollamaSvg from "@/assets/logos/ollama.svg";
import postgresqlSvg from "@/assets/logos/postgresql.svg";
import pythonSvg from "@/assets/logos/python.svg";
import ubuntuSvg from "@/assets/logos/ubuntu.svg";

const logos = [
  { src: awsSvg, alt: "AWS" },
  { src: apacheKafkaSvg, alt: "Apache Kafka" },
  { src: cloudflareSvg, alt: "Cloudflare" },
  { src: couchbaseSvg, alt: "Couchbase" },
  { src: dockerSvg, alt: "Docker" },
  { src: jenkinsSvg, alt: "Jenkins" },
  { src: nextjsSvg, alt: "Next.js" },
  { src: notionSvg, alt: "Notion" },
  { src: ollamaSvg, alt: "Ollama" },
  { src: postgresqlSvg, alt: "PostgreSQL" },
  { src: pythonSvg, alt: "Python" },
  { src: ubuntuSvg, alt: "Ubuntu" },
];

export const InfiniteMovingIcons = ({
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-8 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {logos.map((logo, idx) => (
          <li key={idx} className="flex-shrink-0">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={48}
              height={48}
              className="h-12 w-auto invert dark:invert-0"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
