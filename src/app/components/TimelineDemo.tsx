"use client";

import React from "react";
import { Timeline } from "@/app/components/ui/timeline";
import Image from "next/image";
import { AnimatedTooltip } from "@/app/components/ui/animated-tooltip";

const teamMembers = [
  {
    id: 1,
    name: "Archie7",
    designation: "Founder & CEO",
    image: "/archie.jpeg",
  },
  {
    id: 2,
    name: "Alyssa",
    designation: "Co-Founder, Project Manager",
    image: "/alyssa-avatar.jpg",
  },
  {
    id: 3,
    name: "Angel",
    designation: "Data Scientist",
    image: `https://api.dicebear.com/6.x/initials/svg?seed=Angel`,
  },
  {
    id: 4,
    name: "Anj",
    designation: "FrontEnd Developer",
    image: `https://api.dicebear.com/6.x/initials/svg?seed=Anj`,
  },
  {
    id: 5,
    name: "Arnie",
    designation: "Marketing Manager",
    image: `https://api.dicebear.com/6.x/initials/svg?seed=Arnie`,
  },
  {
    id: 6,
    name: "Christopher",
    designation: "Safety Officer, Security Manager",
    image: `https://api.dicebear.com/6.x/initials/svg?seed=Christopher`,
  },
  // Add more team members as needed
];

export function TimelineDemo() {
  const data = [
    {
      title: "Q3 2024",
      content: (
        <div className="space-y-4">
          <p className="text-neutral-700 dark:text-neutral-300 text-sm">
            Established partnerships with leading organizations.
          </p>
          <div className="grid grid-cols-2 gap-2">
            <Image
              src="https://images.unsplash.com/photo-1496115965489-21be7e6e59a0?fm=jpg&amp;q=60&amp;w=3000&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx"
              alt="AWS"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&amp;w=3270&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Legal Counsel"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://images.unsplash.com/photo-1667372283587-e1557c08aca4?q=80&amp;w=3132&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%"
                alt="Cloud"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Q2 2024",
      content: (
        <div className="space-y-4">
          <p className="text-neutral-700 dark:text-neutral-300 text-sm">
            Initial launch of seven7trades, Industry collaboration offering
            innovative solutions in education, transportation, cybersecurity,
            and legal automation services with AI.
          </p>
          <div className="grid grid-cols-2 gap-2">
            <Image
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&amp;w=3222&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Education innovation"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://images.unsplash.com/photo-1669903675614-1144986e23a1?w=900&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbmlsYSUyMHRyYWZmaWN8ZW58MHx8MHx8fDI%3D"
              alt="Transportation solutions"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://images.unsplash.com/photo-1675495277087-10598bf7bcd1?fm=jpg&amp;q=60&amp;w=3000&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Cybersecurity advancements"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="https://images.unsplash.com/photo-1599325313240-0402a1ba2c66?w=900&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0aWZpY2lhbCUyMGludGVsbGlnZW5"
                alt="AI and ML innovations"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Q1 2024",
      content: (
        <div className="space-y-4">
          <p className="text-neutral-700 dark:text-neutral-300 text-sm">
            Talk, conversation, endless meeting to seek collaboration.
            Established key partnerships and seeked out possible initial
            funding.
          </p>
          <div className="grid grid-cols-2 gap-2">
            <Image
              src="https://images.unsplash.com/photo-1422207049116-cfaf69531072?w=900&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGNvZmZlZSUyMHRhbGt8"
              alt="Coffee"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://images.unsplash.com/photo-1482059470115-0aadd6bf6834?q=80&amp;w=3269&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D"
              alt="Trave"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://images.unsplash.com/photo-1637580681839-6e3ed197ca93?q=80&amp;w=3000&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%"
                alt="Meeting"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Last quarter of 2023",
      content: (
        <div className="space-y-4">
          <p className="text-neutral-700 dark:text-neutral-300 text-sm">
            Conceptualized seven7trades because of a crazy idea, just see what
            will be our future. and began thinking about how can we make an
            impact by developing core technologies.
          </p>
          <Image
            src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&amp;w=3270&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Strategic planning"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      ),
    },
    {
      title: "Vision",
      content: (
        <div className="space-y-2">
          <p className="text-neutral-700 dark:text-neutral-300 text-sm">
            At seven7trades, we're committed to:
          </p>
          <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300 text-sm">
            <li>Revolutionizing education through technology</li>
            <li>Developing sustainable transportation solutions</li>
            <li>Enhancing cybersecurity for businesses and individuals</li>
            <li>Advancing AI and machine learning technologies</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Mission",
      content: (
        <div className="space-y-2">
          <p className="text-neutral-700 dark:text-neutral-300 text-sm">
            At seven7trades, our mission is to:
          </p>
          <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300 text-sm">
            <li>Create high-impact digital solutions that matter</li>
            <li>Optimize systems to reduce digital waste</li>
            <li>Innovate responsibly across key sectors</li>
            <li>Add value through sustainable technology</li>
            <li>Foster a culture of impactful, efficient development</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Our Team",
      content: (
        <div className="space-y-4">
          <p className="text-neutral-700 dark:text-neutral-300 text-sm">
            Meet the innovative minds behind seven7trades:
          </p>
          <div className="flex flex-row items-center justify-center mb-10 w-full">
            <AnimatedTooltip items={teamMembers} />
          </div>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm">
            Our diverse team of experts is dedicated to delivering valuable
            solutions in education, transportation, cybersecurity, and AI.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          <a
            href="https://www.seven7trades.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white hover:underline"
          >
            The seven7trades Journey
          </a>
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          Explore our timeline of innovation, participating team members and
          growth since our inception.
        </p>
      </div>
      <Timeline data={data} />
    </div>
  );
}
