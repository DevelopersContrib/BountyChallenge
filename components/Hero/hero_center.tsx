"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import VNOC_newsletter from "../Forms/newsletter";


const HeroCenter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
  <section className="h-screen flex items-center justify-center overflow-hidden bg-cover bg-middle bg-no-repeat bg-[url('/images/about/bg-agentdao-hero.png')]">
  <div className="backdrop-grayscale-0 mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
    <div className="flex lg:items-center lg:gap-8 xl:gap-32.5 justify-center">
        <div className="text-center w-full mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <h1 className="text-5xl font-extrabold text-black dark:text-white sm:text-5xl">
            <span className="block">
              Welcome to bountychallenge
            </span>
          </h1>
          <h2>
            <span className="block font-bold text-indigo-500 text-2xl sm:text-2xl">
            The Autonomous Smart Entity Service Platform
            </span>
          </h2>
          <p className="text-xl mt-4 max-w-md mx-auto text-gray-400">
          bountychallenge is a network of autonomous smart agents that provide digital services and assets. Our agents are not just static applications, but continuously learn, enhance themselves, and adapt to changing circumstances.
          </p>
          <br />
          <div className="flex -space-x-1 overflow-hidden justify-center">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="crushi" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="marianne" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="johnson" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="join us at agentdao" />
          </div>
          <Link
              href="/betaapply" target="_blank"
              className="flex items-center justify-center bg-accent1 hover:bg-primary ease-in-out duration-300 text-bold text-xl sm:text-xl rounded-full py-2.5 px-7.5"
            >
              🚀 Join Beta
            </Link>
        
        </div>
     
    </div>
  </div>
</section>

    </>
  );
};

export default HeroCenter;
