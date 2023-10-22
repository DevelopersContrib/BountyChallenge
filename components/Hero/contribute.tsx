"use client";
import React, { useState } from "react";

import Image from "next/image";

import { motion } from "framer-motion";


const Contributecomponent = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
        <section className="pt-40 pb-20 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark">
     
        
        <div className="font-bolder mx-auto bg-gradient-to-r from-white via-purple-100 to-primary-200 max-w-prose w-full md:w-[650px] sm:w-4/5">

              <h4 className="text-black dark:text-white text-lg font-medium mb-4.5">
                🔥 Contribute to Bountychallenge.com
              </h4>
              <h1 className="text-black dark:text-white text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl bg-gradient-to-r from-black to-primary bg-clip-text text-transparent">
              You're Awesome! 🚀             
              </h1>
              <div className="blog-details">
                <p>We're thrilled that you want to contribute to Bountychallenge.com! As an open-source platform within the VNOC ecosystem, we welcome contributions from developers like you to help us improve and grow.
                  </p>

                  <h2>How To Start Contributing</h2>
                  
             
                  <h3>
                    <a href="https://docs.bountychallenge.com" className="dark:text-white font-bold tracking-tight text-gray-900 bg-gradient-to-r from-primary to-black bg-clip-text text-transparent">
                    💡 Check out our Docs
                   </a>
                   </h3>
                   <p>
                      If you're excited about what we're building and want to be part of our journey beyond beta access, consider contributing to our mission. Your support helps us innovate faster and better. 🙌

                      </p>
            

                  <p>Be a Pioneer: Contribute or invest now to secure your place as a pioneer in redefining how domains and trademarks are managed in the digital age.</p>

                  <p>Exclusive Benefits: Gain access to exclusive perks, insights, and experiences that only our contributors and investors enjoy.</p>

                  <p>Help Us Grow: Your support accelerates our progress, enabling us to bring innovation to even more businesses and individuals.</p>

                  <h3>Stay Connected:</h3>

                  <p>Keep an eye on your inbox. We'll be sending you updates on our progress, exciting news, and opportunities to engage further with bountychallenge.</p>

                  <p>Questions or ideas? Don't hesitate to reach out to us at <a href="mailto:support@bountychallenge.com">support@ bountychallenge.com</a>. We love hearing from our community!</p>

                  <p>Once again, thank you for being part of our journey. Together, we're shaping the future of domain and trademark management.</p>

                  <p>Best Regards,</p>

                  <p>bountychallenge Team</p>
               </div>
            </div>          
        
      </section>
    </>
  );
};

export default Contributecomponent;
