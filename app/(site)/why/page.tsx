import Image from "next/image";
export default function WhyPage() {
  return (
    <>
      <title>Why VNOC</title>
      <section className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 pt-25 md:pt-30 xl:pt-36 pb-20 xl:pb-25 overflow-hidden">
        <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
          <div className=" md:w-1/2">            
            <h1 className="bg-gradient-to-r from-txtgrad1 to-black bg-clip-text text-transparent text-5xl xl:text-hero font-bold mb-5 pr-16 dark:text-white">
            Why VNOC
            </h1>
            <p>
            VNOC leverages blockchain technology to provide unmatched levels of security, transparency, and efficiency when it comes to managing your digital assets. With our comprehensive suite of blockchain tools, you can seamlessly transfer assets to the blockchain and even distribute fractional ownership to contributors via our Blockchain Asset Marketplace.
            </p>
          </div>
          <div className="animate_right md:w-1/2 hidden lg:block">
            <div className="relative">                
              <div className=" relative aspect-[1090/810] w-full">
                <Image
                  className="dark:hidden shadow-solid-l"
                  src="/images/hero/vnboard_image3.png"
                  alt="Hero"
                  fill
                />
                <Image
                  className="hidden dark:block shadow-solid-l"
                  src="/images/hero/vnboard_image3.png"
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
                <div className="animate_top text-center mx-auto">
                  <h2 className="font-bold text-3xl xl:text-sectiontitle3 text-black dark:text-white md:w-4/5 xl:w-1/2 mx-auto mb-4">Cutting-Edge Technology</h2>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                  In a rapidly evolving digital landscape, the need for a platform that empowers individuals and businesses to maximize their online assets has never been greater. Welcome to VNOC – Your Next-Gen Digital Asset Platform. Our cutting-edge technology and innovative approach are revolutionizing the way you manage, build, and monetize your digital assets. Here's why VNOC should be your top choice:
                  </p>
                </div>
                <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">                    
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-7.5 xl:gap-12.5 mt-12.5 lg:mt-15 xl:mt-20">
                    <div className="animate_top border border-white shadow-solid-3 rounded-lg p-7.5 xl:p-12.5 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark dark:border-strokedark dark:bg-blacksection z-40 bg-white">
                      <div className="flex items-center justify-center rounded-[4px] bg-primary w-16 h-16 relative">
                        <Image src="/images/icon/icon-05.svg" width={36} height={36} alt="title" />
                      </div>
                      <h3 className="font-semibold text-xl xl:text-itemtitle text-black dark:text-white mt-7.5 mb-5">Unleash the power of Blochain</h3>
                      <p>VNOC harnesses the power of blockchain technology to offer unparalleled security, transparency, and efficiency in managing your digital assets. Our integrated blockchain tools allow you to push assets onto the blockchain and even allocate fractional ownership to contributors through our Blockchain Asset Marketplace.</p>
                    </div>
                    <div className="animate_top border border-white shadow-solid-3 rounded-lg p-7.5 xl:p-12.5 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark dark:border-strokedark dark:bg-blacksection z-40 bg-white">
                      <div className="flex items-center justify-center rounded-[4px] bg-primary w-16 h-16 relative">
                        <Image src="/images/icon/icon-06.svg" width={36} height={36} alt="title" />
                      </div>
                      <h3 className="font-semibold text-xl xl:text-itemtitle text-black dark:text-white mt-7.5 mb-5">Centralize and Control</h3>
                      <p>Say goodbye to scattered tools and fragmented processes. VNOC's Control Panel provides a centralized hub for managing your ventures, assets, and data. With real-time data insights and flexible data management options, you're empowered to make informed decisions and optimize your strategies.</p>
                    </div>
                    <div className="animate_top border border-white shadow-solid-3 rounded-lg p-7.5 xl:p-12.5 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark dark:border-strokedark dark:bg-blacksection z-40 bg-white">
                      <div className="flex items-center justify-center rounded-[4px] bg-primary w-16 h-16 relative">
                        <Image src="/images/icon/icon-03.svg" width={36} height={36} alt="title" />
                      </div>
                      <h3 className="font-semibold text-xl xl:text-itemtitle text-black dark:text-white mt-7.5 mb-5">Comprehensive Network Apps</h3>
                      <p>VNOC offers a wide range of internal apps that seamlessly integrate into your ventures. With over 22 integrated apps, you can customize your experience to suit your specific needs. From communication tools to task automation, VNOC empowers you to streamline your workflows and enhance collaboration.</p>
                    </div> 
                    <div className="animate_top border border-white shadow-solid-3 rounded-lg p-7.5 xl:p-12.5 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark dark:border-strokedark dark:bg-blacksection z-40 bg-white">
                      <div className="flex items-center justify-center rounded-[4px] bg-primary w-16 h-16 relative">
                        <Image src="/images/icon/icon-02.svg" width={36} height={36} alt="title" />
                      </div>
                      <h3 className="font-semibold text-xl xl:text-itemtitle text-black dark:text-white mt-7.5 mb-5">Built-In Brand Builder</h3>
                      <p>Turning a dormant domain into a thriving business has never been easier. VNOC's Brand Builder empowers you to transform underutilized domains into high-growth ventures. With custom and default frameworks, you'll have the tools to create and manage brands that resonate in the digital world.</p>
                    </div> 
                    <div className="animate_top border border-white shadow-solid-3 rounded-lg p-7.5 xl:p-12.5 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark dark:border-strokedark dark:bg-blacksection z-40 bg-white">
                      <div className="flex items-center justify-center rounded-[4px] bg-primary w-16 h-16 relative">
                        <Image src="/images/icon/icon-01.svg" width={36} height={36} alt="title" />
                      </div>
                      <h3 className="font-semibold text-xl xl:text-itemtitle text-black dark:text-white mt-7.5 mb-5">Contrib Network</h3>
                      <p>Become a part of VNOC's thriving community through the Contrib Network. Whether you're a talented individual looking to contribute your skills or an entrepreneur seeking the right professionals, Contrib Network connects you with the right people to enhance your ventures.</p>
                    </div> 
                     <div className="animate_top border border-white shadow-solid-3 rounded-lg p-7.5 xl:p-12.5 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark dark:border-strokedark dark:bg-blacksection z-40 bg-white">
                      <div className="flex items-center justify-center rounded-[4px] bg-primary w-16 h-16 relative">
                        <Image src="/images/icon/icon-04.svg" width={36} height={36} alt="title" />
                      </div>
                      <h3 className="font-semibold text-xl xl:text-itemtitle text-black dark:text-white mt-7.5 mb-5">Monetize your Ddigital Assets</h3>
                      <p>VNOC puts the power of monetization in your hands. From flexible domain monetization options to referral programs and network ad optimization, you have the tools to generate revenue from your brands while keeping control over your strategies.</p>
                    </div>
                    <div className="animate_top border border-white shadow-solid-3 rounded-lg p-7.5 xl:p-12.5 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark dark:border-strokedark dark:bg-blacksection z-40 bg-white">
                      <div className="flex items-center justify-center rounded-[4px] bg-primary w-16 h-16 relative">
                        <Image src="/images/icon/024-content management system.svg" width={36} height={36} alt="title" />
                      </div>
                      <h3 className="font-semibold text-xl xl:text-itemtitle text-black dark:text-white mt-7.5 mb-5">Proven Vertical Management</h3>
                      <p>Our proven frameworks take the guesswork out of managing verticals. VNOC's strategies and tools are designed to convert visitors into engaged contributors, giving your brands a competitive edge.</p>
                    </div> 
                     <div className="animate_top border border-white shadow-solid-3 rounded-lg p-7.5 xl:p-12.5 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark dark:border-strokedark dark:bg-blacksection z-40 bg-white">
                      <div className="flex items-center justify-center rounded-[4px] bg-primary w-16 h-16 relative">
                        <Image src="/images/icon/033-social media.svg" width={36} height={36} alt="title" />
                      </div>
                      <h3 className="font-semibold text-xl xl:text-itemtitle text-black dark:text-white mt-7.5 mb-5">Unmatched Social Tools</h3>
                      <p>Harness the potential of social media with VNOC's Social Suite Application. Effortlessly create, manage, and distribute content across your social handles, amplifying your online presence with ease.</p>
                    </div>
                    <div className="animate_top border border-white shadow-solid-3 rounded-lg p-7.5 xl:p-12.5 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark dark:border-strokedark dark:bg-blacksection z-40 bg-white">
                      <div className="flex items-center justify-center rounded-[4px] bg-primary w-16 h-16 relative">
                        <Image src="/images/icon/019-digital marketing.svg" width={36} height={36} alt="title" />
                      </div>
                      <h3 className="font-semibold text-xl xl:text-itemtitle text-black dark:text-white mt-7.5 mb-5">Expertise Meets Innovation</h3>
                      <p>Backed by a team of industry experts, VNOC combines decades of experience with cutting-edge technology. This synergy creates a platform that not only addresses your current needs but anticipates future trends, keeping you ahead of the curve.</p>
                      
                    </div>                
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
