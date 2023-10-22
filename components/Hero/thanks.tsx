"use client";
import React, { useState } from "react";
import HubspotContactForm from "../Betaform/form";
import Image from "next/image";

import { motion } from "framer-motion";


const Thanks = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
        <section className="pt-[170px] pb-[120px]">
     
        
        <div className="mx-auto p-8 bg-gradient-to-r from-white via-purple-100 to-primary-200 max-w-prose w-full md:w-[650px] sm:w-4/5">

              <h4 className="text-black dark:text-white text-lg font-medium mb-4.5">
                🔥 Thank You for Your Interest in bountychallenge Beta Access!
              </h4>
              <h1 className="text-black dark:text-white text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl bg-gradient-to-r from-black to-primary bg-clip-text text-transparent">
              You're Awesome! 🚀             
              </h1>
              <div className="blog-details">
                <p>Thank you for joining the bountychallenge community. Your support means the world to us.</p>

                  <h3>Want to Take It to the Next Level?</h3>
                  
             
                  <p>
                    <a href="https://contrib.com/to/bountychallenge" className="dark:text-white font-bold tracking-tight text-gray-900 bg-gradient-to-r from-primary to-black bg-clip-text text-transparent">
                  #1. Contribute :
                   </a>
                      If you're excited about what we're building and want to be part of our journey beyond beta access, consider contributing to our mission. Your support helps us innovate faster and better. 🙌

                  </p>
                  
                  <p>
                    <a href="/" className="dark:text-white font-bold tracking-tight text-gray-900 bg-gradient-to-r from-primaryho to-black bg-clip-text text-transparent">
                        #2. Invest Early : 
                    </a>
                    Ready to take a deeper dive into bountychallenge? Explore the opportunity to become an early investor. Join us in shaping the future of domain and trademark management. Your investment fuels our growth and impact. 💼
                 </p>

                  <h3>Why Contribute or Invest?</h3>

                  <p>Be a Pioneer: Contribute or invest now to secure your place as a pioneer in redefining how domains and trademarks are managed in the digital age.</p>

                  <p>Exclusive Benefits: Gain access to exclusive perks, insights, and experiences that only our contributors and investors enjoy.</p>

                  <p>Help Us Grow: Your support accelerates our progress, enabling us to bring innovation to even more businesses and individuals.</p>

                  <h3>Stay Connected:</h3>

                  <p>Keep an eye on your inbox. We'll be sending you updates on our progress, exciting news, and opportunities to engage further with bountychallenge.</p>

                  <p>Questions or ideas? Don't hesitate to reach out to us at [Contact Email]. We love hearing from our community!</p>

                  <p>Once again, thank you for being part of our journey. Together, we're shaping the future of domain and trademark management.</p>

                  <p>Best Regards,</p>

                  <p>bountychallenge Team</p>
               </div>
            </div>          
        
      </section>
    </>
  );
};

export default Thanks;
