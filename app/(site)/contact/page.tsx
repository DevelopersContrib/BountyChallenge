import React from "react";
import Script from "next/script";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Support Page - Solid SaaS Boilerplate",
  description: "This is Support page for Solid Pro",
  // other metadata
};

const ContactPage = () => {
  return (
    <div className="widget2">
    <Script src="https://tools.contrib.com/pages/contact?d=bountychallenge.com&class=widget2&header=0&footer=0" />
    </div>
   
  );
};

export default ContactPage;