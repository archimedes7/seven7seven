import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import {
  IconSchool,
  IconTruck,
  IconShieldLock,
  IconScale,
  IconBrain,
  IconRocket,
  IconHistory,
  IconBooks,
  IconTruckDelivery,
  IconFingerprint,
  IconGavel,
  IconRobot,
  IconLighter,
  IconSailboat2,
} from "@tabler/icons-react";
import Link from "next/link";

export function SevenDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto gap-4">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center justify-center w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    {children}
  </div>
);

const items = [
  {
    title: "Education",
    description: "Empowering minds through innovative learning solutions.",
    header: (
      <IconWrapper>
        <IconBooks className="w-12 h-12 text-blue-500" stroke={1.5} />
      </IconWrapper>
    ),
    icon: <IconSchool className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Transportation",
    description:
      "Revolutionizing mobility with smart, sustainable technologies.",
    header: (
      <IconWrapper>
        <IconTruckDelivery className="w-12 h-12 text-green-500" stroke={1.5} />
      </IconWrapper>
    ),
    icon: <IconTruck className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Cybersecurity",
    description: "Safeguarding digital assets with cutting-edge protection.",
    header: (
      <IconWrapper>
        <IconFingerprint className="w-12 h-12 text-red-500" stroke={1.5} />
      </IconWrapper>
    ),
    icon: <IconShieldLock className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Legal Tech",
    description:
      "Transforming legal processes through innovative digital solutions.",
    header: (
      <IconWrapper>
        <IconGavel className="w-12 h-12 text-purple-500" stroke={1.5} />
      </IconWrapper>
    ),
    icon: <IconScale className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "AI & Machine Learning",
    description:
      "Harnessing the power of intelligent algorithms for complex problem-solving.",
    header: (
      <IconWrapper>
        <IconRobot className="w-12 h-12 text-yellow-500" stroke={1.5} />
      </IconWrapper>
    ),
    icon: <IconBrain className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Innovation Lab",
    description:
      "Fostering creativity and bringing groundbreaking ideas to life.",
    header: (
      <IconWrapper>
        <IconLighter className="w-12 h-12 text-orange-500" stroke={1.5} />
      </IconWrapper>
    ),
    icon: <IconRocket className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "seven7trades Journey",
    description:
      "Exploring our evolution from startup to industry contributor and innovator.",
    header: (
      <Link href="/blog" className="block w-full h-full">
        <IconWrapper>
          <IconSailboat2 className="w-12 h-12 text-indigo-500" stroke={1.5} />
        </IconWrapper>
      </Link>
    ),
    icon: <IconHistory className="h-4 w-4 text-neutral-500" />,
  },
];
