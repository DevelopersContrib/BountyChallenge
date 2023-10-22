import React from "react";
import { Metadata } from "next";




export const metadata: Metadata = {
  title: "Webinars - Check out our VNOC session webinars",
  description: "Contrib and VNOC Webinars",
  // other metadata
};

const WebinarPage = () => {
  return (
    <section className="bg-gradient-to-r from-bggrad1 via-white via-30% to-txt-grad2 pt-35 md:pt-40 xl:pt-6 pb-20 xl:pb-25 overflow-hidden">
      
    <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 md:pt-30 xl:pt-36 pb-20 xl:pb-25 overflow-hidden">
        
            <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">            
                <h1 className="bg-gradient-to-r from-txtgrad1 to-black bg-clip-text text-transparent text-5xl xl:text-hero font-bold mb-5 pr-16 dark:text-white">
                JOIN OUR LIVE WEBINARS
                </h1>
                <div className="bg-zumthor dark:bg-blacksection dark:border dark:border-strokedark inline-block rounded-full py-1.5 px-4.5 mb-4">
            <h4 className="font-medium text-sectiontitle text-black dark:text-white"><a href="https://app.livestorm.co/p/0fa43c49-393f-4719-8498-e073959e21f7/live?s=dcca3ca3-9e94-4ded-9510-e0299ad28f6b">
                BROWSE WEBINAR SESSIONS</a>
            </h4>
        </div>
            </div>
            <div className="animate_right md:w-1/2 hidden lg:block">
                <div className="relative">                
                <div className=" relative aspect-[1090/810] w-full">
                <iframe
                className="justify-self-center"
                width="90%"
                height="780"
                frameBorder="0"
                src="https://app.livestorm.co/p/0fa43c49-393f-4719-8498-e073959e21f7/form"
            ></iframe>
                </div>
                </div>
            </div> 
            </div> 
        </div>
    </section>        
   



  );
};

export default WebinarPage;