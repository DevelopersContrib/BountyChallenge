"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";

const FeatureCenter = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      
      <section className="h-screen flex items-center justify-center overflow-hidden">
    <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
      <div className="flex lg:items-center lg:gap-8 xl:gap-32.5 justify-center">
        <div className="dark:bg-gray-800">
          <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "Discover VNOC Core Features",
              subtitle: "Our Core Features",
              description: `These core features define what VNOC is today and what VNOC will be tomorrow. Join us and define the future of domaining.`,
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 xl:gap-12.5 mt-12.5 lg:mt-15 xl:mt-20">
            {/* <!-- Features item Start --> */}

            {featuresData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
        </div>
        </div>
        </div>
      </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default FeatureCenter;
