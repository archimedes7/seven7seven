import { SevenDemo } from "@/app/components/SevenDemo";
import { InfiniteMovingIcons } from "@/app/components/InfiniteMovingIcons";
import CollaborationCTA from "@/app/components/CollaborationCTA";
import { LegalModal } from "./components/LegalModal";
import { metadata } from "./metadata";
export { metadata };

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50 dark:bg-gray-900">
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <span className="ml-2 font-bold text-black dark:text-white">
            seven7trades
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
      </main>

      <section className="py-12">
        <SevenDemo />
      </section>
      <CollaborationCTA />
      <div>
        {/* Primary Footer */}
        <footer className="bg-gray-900 dark:bg-gray-900 text-gray-100 py-6">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="font-bold text-lg">seven7trades</h3>
              <p className="text-sm">Copyright © 2024 seven7trades</p>
              <p className="text-sm">All rights reserved</p>
            </div>
            <div className="mb-4 md:mb-0">
              <h4 className="font-semibold text-sm">Company</h4>
              <ul className="text-sm">
                <li>
                  <a href="/blog" className="hover:text-gray-400">
                    About
                  </a>
                </li>
                <li>
                  <a href="/comingsoon" className="hover:text-gray-400">
                    Coming Soon
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-4 md:mb-0">
              <h4 className="font-semibold text-sm">Legal</h4>
              <ul className="text-sm">
                <li>
                  <LegalModal />
                </li>
                <li>
                  <a href="#contact" className="hover:text-gray-400">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm">Social</h4>
              <ul className="text-sm">
                <li>
                  <a href="#twitter" className="hover:text-gray-400">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#linkedin" className="hover:text-gray-400">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#github" className="hover:text-gray-400">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>

        {/* Secondary Footer with Technology Acknowledgments */}
        <footer className="bg-gray-800 text-white py-10">
          <div className="container mx-auto px-4 text-center">
            <p className="text-lg mb-4">
              Powered by Open Source and Global Leading Technologies
            </p>
            <InfiniteMovingIcons
              direction="left"
              speed="normal"
              pauseOnHover={true}
              className="py-4"
            />
          </div>
        </footer>
      </div>
    </div>
  );
}
