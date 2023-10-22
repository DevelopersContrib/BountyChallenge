import React from "react";
import { Metadata } from "next";
import TermsText from "@/components/Legal/terms";


export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service",
  // other metadata
};

const TermsPage = () => {
  return (
   <TermsText />
  );
};

export default TermsPage;