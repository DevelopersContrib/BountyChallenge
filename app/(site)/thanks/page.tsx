import React from "react";
import { Metadata } from "next";
import Thanks from "@/components/Hero/thanks";


export const metadata: Metadata = {
  title: "Thank you for signing up",
  description: "Thank you for signing up",
  // other metadata
};

const ThankYouPage = () => {
  return (
      <Thanks />
   
  );
};

export default ThankYouPage;
