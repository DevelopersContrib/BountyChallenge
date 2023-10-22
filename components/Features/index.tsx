"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";

const Feature = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-80 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "bountychallenge Core Components",
              subtitle: "Welcoming New URL Assets",
              description: `Our network is ever-expanding, with new URL assets continuously onboarding into AgentDAO. Each agent starts with a base URL, serving as the root for its operations, all culminating with a .com. Here's a glimpse of our growing family:`,
            }}
          />

          <h4 className="mt-15 text-2xl font-semibold text-center text-primaryho dark:text-white md:w-4/5 xl:w-1/2 mx-auto mb-4">
          🏗️ Build. 💰 Invest. 📊 Manage. 💸 Monetize.
          </h4>
          {/* <!-- Section Title End --> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 xl:gap-12.5 mt-12.5 lg:mt-15 xl:mt-20">
            {/* <!-- Features item Start --> */}

            {featuresData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
