import React from "react";
import { Metadata } from "next";
import PrivacyPolicyText from "@/components/Legal/privacypolicy";


export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Agent Dao Privacy Policy",
  // other metadata
};

const PrivacyPage = () => {
  return (
   <PrivacyPolicyText />
  );
};

export default PrivacyPage;