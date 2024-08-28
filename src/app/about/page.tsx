import React from "react";
import Image from "next/image";

const teamMembers = [
  { name: "John Doe", role: "Founder & CEO", image: "/john-doe.jpg" },
  { name: "Jane Smith", role: "CTO", image: "/jane-smith.jpg" },
  { name: "Alex Johnson", role: "Lead Developer", image: "/alex-johnson.jpg" },
  // Add more team members as needed
];

const partnerships = [
  { name: "AWS", logo: "/techcorp-logo.png" },
  { name: "Couchbase", logo: "/innovatesoft-logo.png" },
  { name: "Confluent", logo: "/securenet-logo.png" },
  // Add more partnerships as needed
];

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-blue-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          About Seven7trades
        </h1>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-4 flex flex-col items-center">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="rounded-full"
                  />
                  <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
            Our Partnerships
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {partnerships.map((partner, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex items-center justify-center"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={60}
                  objectFit="contain"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
