import Image from "next/image";
import Link from "next/link";
import { GlobeDemo } from "@/app/components/GlobeDemo";
import {
  CodeBracketIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  WindowIcon,
  CubeTransparentIcon,
  KeyIcon,
  CloudIcon,
  CircleStackIcon,
  ServerIcon,
} from "@heroicons/react/24/outline";
import { metadata } from "./metadata";
export { metadata };

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50 dark:bg-gray-900">
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/sevenlogo.png"
            alt="Seven Trades Logo"
            width={40}
            height={40}
          />
          <span className="ml-2 font-bold text-black dark:text-white">
            SEVEN7TRADES
          </span>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 md:flex items-center">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
            Tailor your digital space
          </h1>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4">
            <p className="text-gray-700 dark:text-gray-300">
              Connected by innovation, empowered by open source.
            </p>
          </blockquote>
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            Expanding horizons, sharing solutions - because progress is
            universal.
          </p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <Image
            src="/tailor.png"
            alt="Digital Space Illustration"
            width={500}
            height={400}
          />
        </div>
      </main>
      <section>
        <GlobeDemo />
      </section>
      <footer className="bg-blue-50 dark:bg-gray-800 text-black dark:text-white py-6 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">
            We extend our heartfelt thanks to our sponsors and acknowledge the
            incredible contributions of the following open-source technologies:
          </p>
          <div className="flex flex-wrap justify-center items-center space-x-4 mb-4">
            {/* Technology icons */}
            {[
              { icon: CodeBracketIcon, name: "Python" },
              { icon: GlobeAltIcon, name: "Next.js" },
              { icon: ShieldCheckIcon, name: "Wazuh" },
              { icon: CpuChipIcon, name: "OLLama" },
              { icon: WindowIcon, name: "OpenWebUI" },
              { icon: CubeTransparentIcon, name: "Aceternity UI" },
              { icon: KeyIcon, name: "OAuth" },
              { icon: CloudIcon, name: "AWS" },
              { icon: CircleStackIcon, name: "PostgreSQL" },
              { icon: ServerIcon, name: "Docker" },
              { icon: GlobeAltIcon, name: "Cloudflare" },
            ].map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <tech.icon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                <span className="text-xs md:text-sm lg:text-base mt-1">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
