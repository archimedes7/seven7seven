"use client";

import React from "react";

const CollaborationCTA = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href =
      "mailto:information@seven7trades.com?subject=Let's Collaborate";
  };
  return (
    <section className="py-16 bg-blue-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">
          Ready to Innovate Together?
        </h2>
        <p className="mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Whether you're looking to transform education, revolutionize
          transportation, enhance cybersecurity, or leverage AI, we're here to
          collaborate on solutions that drives your success.
        </p>
        <button
          onClick={handleClick}
          className="px-8 py-0.5 border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] hover:translate-x-[5px] hover:translate-y-[5px] hover:shadow-none"
        >
          Let's Collaborate
        </button>
      </div>
    </section>
  );
};

export default CollaborationCTA;
