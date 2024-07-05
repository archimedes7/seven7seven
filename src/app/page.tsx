import Image from "next/image";
import Link from "next/link";
import { GlobeDemo } from "./components/GlobeDemo";

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50">
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/sevenlogo.png"
            alt="Seven Trades Logo"
            width={40}
            height={40}
          />
          <span className="ml-2 font-bold">SEVEN7TRADES</span>
        </div>
        <button className="bg-blue-100 text-black px-4 py-2 rounded-md hover:bg-gray-100">
          Join us
        </button>
      </header>

      <main className="container mx-auto px-4 py-12 md:flex items-center">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Tailor your digital space
          </h1>
          <p className="mb-6">
            Leveraging open-source technology to provide cybersecurity tools,
            digital forensic analysis free - legal scholar support for law
            students, IN-HOUSE Legal fo Business and innovative transport
            solutions through open-source applications and specialised services.
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
      <footer className="bg-blue-50 text-black py-6 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">
            We extend our heartfelt thanks to our sponsors and acknowledge the
            incredible contributions of the following open-source projects:
          </p>
          <div className="flex flex-wrap justify-center items-center space-x-4 mb-4">
            <span className="text-xs md:text-sm lg:text-base">Python</span>
            <span className="text-xs md:text-sm lg:text-base">Next.js</span>
            <span className="text-xs md:text-sm lg:text-base">Wazuh</span>
            <span className="text-xs md:text-sm lg:text-base">OLLama</span>
            <span className="text-xs md:text-sm lg:text-base">OpenWebUI</span>
            <span className="text-xs md:text-sm lg:text-base">
              Aceternity UI
            </span>
            <span className="text-xs md:text-sm lg:text-base">OAuth</span>
          </div>
          <div className="flex flex-wrap justify-center items-center space-x-4">
            <Image src="" alt="Logo 1" width={40} height={40} className="m-2" />
            <Image src="" alt="Logo 2" width={40} height={40} className="m-2" />
            {/* Add more logos as needed */}
          </div>
        </div>
      </footer>
    </div>
  );
}
