import React from "react";
import Betaform from "@/components/Betaform";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Beta Signup to  bountychallenge",
  description: "Beta signup options for bountychallenge",
  // other metadata
};

const BetaSignupPage = () => {
  return (
    <div className="pt-40 pb-20">
      <Betaform />
    </div>
  );
};

export default BetaSignupPage;
