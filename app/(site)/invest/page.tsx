
import React from "react";
import { Metadata } from "next";
import InvestContent from "@/components/Invest";



export const metadata: Metadata = {
  title: "Invest in bountychallenge",
  description: "Why Invest in Autonomous Agents for Your Company?",
  // other metadata
};

const InvestPage = () => {
  return (
    <div className="pt-40 pb-20">
    <InvestContent />
    </div>
  );
};

export default InvestPage;