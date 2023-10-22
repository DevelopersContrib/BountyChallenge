import Image from "next/image";
export default function UCPage() {
  return (
    <>
      <title>Use Cases</title>
      <section className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 pt-25 md:pt-30 xl:pt-36 pb-20 xl:pb-25 overflow-hidden">
        <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
          <div className=" md:w-1/2">            
            <h1 className="bg-gradient-to-r from-txtgrad1 to-black bg-clip-text text-transparent text-5xl xl:text-hero font-bold mb-5 pr-16 dark:text-white">
            Use Cases
            </h1>
            <p>
            VNOC platform offers a comprehensive solution for digital entrepreneurs, allowing them to effortlessly turn their dormant domains into successful online enterprises. With the assistance of the Brand Builder tool, domains can be rapidly transformed into fully-developed brands, complete with customized structures.
            </p>
          </div>
          <div className="animate_right md:w-1/2 hidden lg:block">
            <div className="relative">                
              <div className=" relative aspect-[1090/810] w-full">
                <Image
                  className="dark:hidden shadow-solid-l"
                  src="/images/hero/vnboard_image1a.png"
                  alt="Hero"
                  fill
                />
                <Image
                  className="hidden dark:block shadow-solid-l"
                  src="/images/hero/vnboard_image1a.png"
                  alt="Hero"
                  fill
                />
              </div>
            </div>
          </div> 
        </div> 
      </section>      
      <section className="pb-16 md:pb-20 lg:pb-24 pt-10 md:pt-10 lg:pt-10">
        <div className="max-w-c-1390 relative mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 lg:w-4/4 mx-auto">
              <div className="blog-details blog-details-docs rounded-sm bg-white py-11 px-8 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">    
                <div className="flex items-center gap-8 lg:gap-19">                  
                  <div className="animate_right md:w-1/2 hidden lg:block">
                    <div className="relative 2xl:-mr-7.5">                
                      <div className=" relative aspect-[700/444] w-full">
                        <Image
                          className="dark:hidden shadow-solid-l"
                          src="/images/hero/uc-image5.png"
                          alt="Hero"
                          fill
                        />
                        <Image
                          className="hidden dark:block shadow-solid-l"
                          src="/images/hero/uc-image5.png"
                          alt="Hero"
                          fill
                        />
                      </div>
                    </div>
                  </div> 
                  <div className=" md:w-1/2"> 
                    <h5 className="text-black dark:text-white font-medium uppercase">Use Case 1</h5>           
                    <h2 className="relative font-bold text-black dark:text-white text-3xl mb-6">Digital Entrepreneurs</h2>
                    <p>
                    Scaling Success with VNOC: Empowering Digital Entrepreneurs
                    </p>
                  </div>
                </div>
                <section id="features" className="">
                  <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7.5 xl:gap-12.5 mt-10 lg:mt-10 xl:mt-10">
                      <div className="animate_top border border-white shadow-solid-3 rounded-lg p-7.5 xl:p-12.5 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark dark:border-strokedark dark:bg-blacksection z-40 bg-white">
                        <div className="flex items-center justify-center rounded-[4px] bg-primary w-16 h-16 relative">
                          <Image src="/images/icon/icon-01.svg" width={36} height={36} alt="title" />
                        </div>
                        <h3 className="font-semibold text-xl xl:text-itemtitle text-black dark:text-white mt-7.5 mb-5">Challenge:</h3>
                        <p>Digital entrepreneurs often possess a multitude of digital assets, from domains to ventures, which can become overwhelming to manage. The challenge lies in efficiently building, managing, and monetizing these assets to maximize ROI. Assess the value of each asset in your portfolio. This evaluation should consider factors like traffic, revenue, brand recognition, and market demand.</p>
                      </div>
                      <div className="animate_top border border-white shadow-solid-3 rounded-lg p-7.5 xl:p-12.5 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark dark:border-strokedark dark:bg-blacksection z-40 bg-white">
                        <div className="flex items-center justify-center rounded-[4px] bg-primary w-16 h-16 relative">
                          <Image src="/images/icon/icon-02.svg" width={36} height={36} alt="title" />
                        </div>
                        <h3 className="font-semibold text-xl xl:text-itemtitle text-black dark:text-white mt-7.5 mb-5">Solution:</h3>
                        <p>VNOC provides a comprehensive platform where digital entrepreneurs can seamlessly transform their underutilized domains into thriving online businesses. The Brand Builder tool enables the quick conversion of domains into fully-fledged brands with tailored frameworks. Additionally, the integrated Social Suite simplifies the management and distribution of content across multiple social platforms.</p>
                      </div>                      
                    </div>
                  </div>
                  <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">                    
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-7.5 xl:gap-12.5 mt-10 lg:mt-10 xl:mt-10">
                      <div className="animate_top border border-white shadow-solid-3 rounded-lg p-7.5 xl:p-12.5 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark dark:border-strokedark dark:bg-blacksection z-40 bg-white">
                        <h2 className="relative font-bold text-black dark:text-white text-3xl xl:text-hero mb-6">
                          Benefits:
                        </h2>
                        <div className="mt-7.5 flex items-center gap-5">
                          <div className="w-15 h-15 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                            <div className="text-black dark:text-white font-semibold text-metatitle2">
                              01
                            </div>
                          </div>
                          <div className="w-3/4">
                            <h5 className="text-black dark:text-white text-metatitle2 mb-0.5">
                              Streamlined Brand Creation
                            </h5>
                            <p>VNOC accelerates the process of turning domains into profitable ventures through its customizable brand frameworks.</p>
                          </div>
                        </div> 
                        <div className="mt-7.5 flex items-center gap-5">
                          <div className="w-15 h-15 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                            <div className="text-black dark:text-white font-semibold text-metatitle2">
                              02
                            </div>
                          </div>
                          <div className="w-3/4">
                            <h5 className="text-black dark:text-white text-metatitle2 mb-0.5">
                             Monetization Opportunities
                            </h5>
                            <p>The platform's flexible domain monetization features facilitate revenue generation through optimized network ads and referral programs.</p>
                          </div>
                        </div>
                        <div className="mt-7.5 flex items-center gap-5">
                          <div className="w-15 h-15 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                            <div className="text-black dark:text-white font-semibold text-metatitle2">
                              03
                            </div>
                          </div>
                          <div className="w-3/4">
                            <h5 className="text-black dark:text-white text-metatitle2 mb-0.5">
                              Enhanced Management
                            </h5>
                            <p>VNOC's centralized Control Panel and network apps simplify venture management, saving time and effort.</p>
                          </div>
                        </div>                        
                      </div>
                    </div>
                  </div>
                </section>
                <div className="flex items-center gap-8 lg:gap-19 mt-12.5 lg:mt-15 xl:mt-20">                  
                  <div className="animate_right md:w-1/2 hidden lg:block">
                    <div className="relative 2xl:-mr-7.5">                
                      <div className=" relative aspect-[700/444] w-full">
                        <Image
                          className="dark:hidden shadow-solid-l"
                          src="/images/hero/uc-image6.png"
                          alt="Hero"
                          fill
                        />
                        <Image
                          className="hidden dark:block shadow-solid-l"
                          src="/images/hero/uc-image6.png"
                          alt="Hero"
                          fill
                        />
                      </div>
                    </div>
                  </div> 
                  <div className=" md:w-1/2"> 
                    <h5 className="text-black dark:text-white font-medium uppercase">Use Case 2</h5>           
                    <h2 className="relative font-bold text-black dark:text-white text-3xl mb-6">Domainers:</h2>
                    <p>
                    Monetizing Domains with Ease: VNOC's Edge for Domainers
                    </p>
                  </div>
                </div>
                <section id="features" className="">
                  <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7.5 xl:gap-12.5 mt-10 lg:mt-10 xl:mt-10">
                      <div className="animate_top border border-white shadow-solid-3 rounded-lg p-7.5 xl:p-12.5 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark dark:border-strokedark dark:bg-blacksection z-40 bg-white">
                        <div className="flex items-center justify-center rounded-[4px] bg-primary w-16 h-16 relative">
                          <Image src="/images/icon/icon-01.svg" width={36} height={36} alt="title" />
                        </div>
                        <h3 className="font-semibold text-xl xl:text-itemtitle text-black dark:text-white mt-7.5 mb-5">Challenge:</h3>
                        <p>Domainers possess an extensive collection of domains, but efficiently capitalizing on these assets can be complex. The challenge lies in categorizing, managing, and generating revenue from their domain portfolio.</p>
                      </div>
                      <div className="animate_top border border-white shadow-solid-3 rounded-lg p-7.5 xl:p-12.5 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark dark:border-strokedark dark:bg-blacksection z-40 bg-white">
                        <div className="flex items-center justify-center rounded-[4px] bg-primary w-16 h-16 relative">
                          <Image src="/images/icon/icon-02.svg" width={36} height={36} alt="title" />
                        </div>
                        <h3 className="font-semibold text-xl xl:text-itemtitle text-black dark:text-white mt-7.5 mb-5">Solution:</h3>
                        <p>VNOC revolutionizes domainers' asset management by providing AI-driven categorization, making portfolio organization effortless. The Blockchain Asset Marketplace allows domainers to allocate fractions of digital assets to contributors, amplifying the overall network value.</p>
                      </div>                      
                    </div>
                  </div>
                  <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">                    
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-7.5 xl:gap-12.5 mt-10 lg:mt-10 xl:mt-10">
                      <div className="animate_top border border-white shadow-solid-3 rounded-lg p-7.5 xl:p-12.5 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark dark:border-strokedark dark:bg-blacksection z-40 bg-white">
                        <h2 className="relative font-bold text-black dark:text-white text-3xl xl:text-hero mb-6">
                          Benefits:
                        </h2>
                        <div className="mt-7.5 flex items-center gap-5">
                          <div className="w-15 h-15 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                            <div className="text-black dark:text-white font-semibold text-metatitle2">
                              01
                            </div>
                          </div>
                          <div className="w-3/4">
                            <h5 className="text-black dark:text-white text-metatitle2 mb-0.5">
                            Simplified Asset Management
                            </h5>
                            <p>VNOC's AI-powered categorization streamlines domain portfolio management, enhancing efficiency.</p>
                          </div>
                        </div> 
                        <div className="mt-7.5 flex items-center gap-5">
                          <div className="w-15 h-15 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                            <div className="text-black dark:text-white font-semibold text-metatitle2">
                              02
                            </div>
                          </div>
                          <div className="w-3/4">
                            <h5 className="text-black dark:text-white text-metatitle2 mb-0.5">
                            Blockchain Advantage
                            </h5>
                            <p>VNOC's Blockchain Asset Marketplace facilitates fractional ownership, contributing to increased engagement and asset value.</p>
                          </div>
                        </div>
                        <div className="mt-7.5 flex items-center gap-5">
                          <div className="w-15 h-15 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                            <div className="text-black dark:text-white font-semibold text-metatitle2">
                              03
                            </div>
                          </div>
                          <div className="w-3/4">
                            <h5 className="text-black dark:text-white text-metatitle2 mb-0.5">
                            Higher ROI
                            </h5>
                            <p>Domainers leveraging VNOC efficiently monetize and utilize their domains, resulting in a more substantial return on investment.</p>
                          </div>
                        </div>                        
                      </div>
                    </div>
                  </div>
                </section>
                <div className="flex items-center gap-8 lg:gap-19 mt-12.5 lg:mt-15 xl:mt-20">                  
                  <div className="animate_right md:w-1/2 hidden lg:block">
                    <div className="relative 2xl:-mr-7.5">                
                      <div className=" relative aspect-[700/444] w-full">
                        <Image
                          className="dark:hidden shadow-solid-l"
                          src="/images/hero/uc-image7.png"
                          alt="Hero"
                          fill
                        />
                        <Image
                          className="hidden dark:block shadow-solid-l"
                          src="/images/hero/uc-image7.png"
                          alt="Hero"
                          fill
                        />
                      </div>
                    </div>
                  </div> 
                  <div className=" md:w-1/2"> 
                    <h5 className="text-black dark:text-white font-medium uppercase">Use Case 3</h5>           
                    <h2 className="relative font-bold text-black dark:text-white text-3xl mb-6">Digital Creatives:</h2>
                    <p>
                    Unleash Creativity with VNOC: A Haven for Digital Creatives
                    </p>
                  </div>
                </div>
                <section id="features" className="">
                  <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7.5 xl:gap-12.5 mt-10 lg:mt-10 xl:mt-10">
                      <div className="animate_top border border-white shadow-solid-3 rounded-lg p-7.5 xl:p-12.5 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark dark:border-strokedark dark:bg-blacksection z-40 bg-white">
                        <div className="flex items-center justify-center rounded-[4px] bg-primary w-16 h-16 relative">
                          <Image src="/images/icon/icon-01.svg" width={36} height={36} alt="title" />
                        </div>
                        <h3 className="font-semibold text-xl xl:text-itemtitle text-black dark:text-white mt-7.5 mb-5">Challenge:</h3>
                        <p>Digital creatives are driven by innovative ideas but often face challenges in bringing them to life. The process of building brands and effectively collaborating with others can be demanding.</p>
                      </div>
                      <div className="animate_top border border-white shadow-solid-3 rounded-lg p-7.5 xl:p-12.5 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark dark:border-strokedark dark:bg-blacksection z-40 bg-white">
                        <div className="flex items-center justify-center rounded-[4px] bg-primary w-16 h-16 relative">
                          <Image src="/images/icon/icon-02.svg" width={36} height={36} alt="title" />
                        </div>
                        <h3 className="font-semibold text-xl xl:text-itemtitle text-black dark:text-white mt-7.5 mb-5">Solution:</h3>
                        <p>VNOC empowers digital creatives by offering a Brand Builder with customizable frameworks and a Content Library, streamlining the creation process. The Contrib Network provides a collaborative platform where experts and contributors can join forces to enhance brands.</p>
                      </div>                      
                    </div>
                  </div>
                  <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">                    
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-7.5 xl:gap-12.5 mt-10 lg:mt-10 xl:mt-10">
                      <div className="animate_top border border-white shadow-solid-3 rounded-lg p-7.5 xl:p-12.5 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark dark:border-strokedark dark:bg-blacksection z-40 bg-white">
                        <h2 className="relative font-bold text-black dark:text-white text-3xl xl:text-hero mb-6">
                          Benefits:
                        </h2>
                        <div className="mt-7.5 flex items-center gap-5">
                          <div className="w-15 h-15 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                            <div className="text-black dark:text-white font-semibold text-metatitle2">
                              01
                            </div>
                          </div>
                          <div className="w-3/4">
                            <h5 className="text-black dark:text-white text-metatitle2 mb-0.5">
                            Effortless Brand Creation
                            </h5>
                            <p>VNOC's Brand Builder simplifies the journey from ideas to fully-fledged brands with tailored frameworks.</p>
                          </div>
                        </div> 
                        <div className="mt-7.5 flex items-center gap-5">
                          <div className="w-15 h-15 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                            <div className="text-black dark:text-white font-semibold text-metatitle2">
                              02
                            </div>
                          </div>
                          <div className="w-3/4">
                            <h5 className="text-black dark:text-white text-metatitle2 mb-0.5">
                            Collaborative Ecosystem
                            </h5>
                            <p>The Contrib Network fosters collaboration among creatives, experts, and contributors, enriching brand quality and reach.</p>
                          </div>
                        </div>
                        <div className="mt-7.5 flex items-center gap-5">
                          <div className="w-15 h-15 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                            <div className="text-black dark:text-white font-semibold text-metatitle2">
                              03
                            </div>
                          </div>
                          <div className="w-3/4">
                            <h5 className="text-black dark:text-white text-metatitle2 mb-0.5">
                            Focus on Creativity
                            </h5>
                            <p>VNOC's tools enable digital creatives to dedicate more time to their creative visions by handling technical aspects.</p>
                          </div>
                        </div>                        
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
