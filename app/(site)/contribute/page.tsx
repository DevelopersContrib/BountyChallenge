import React from "react";
import Script from "next/script";
import { Metadata } from "next";

import Contribute from "@/components/Hero/contribute";


export const metadata: Metadata = {
  title: "Contribution Platform",
  description: "What is Contrib and what does it do?",
  // other metadata
};

const ContribPage = () => {
  return (
    <div>
     <Contribute />
    </div>
   
  );
};

export default ContribPage;