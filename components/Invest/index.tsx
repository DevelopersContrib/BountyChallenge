"use client";
import React, { useState } from 'react';

const InvestContent: React.FC = () => {
    const [videoOpen, setVideoOpen] = useState(false);

    return (
        <>
        <section id="support" className="px-4 md:px-8 2xl:px-0">
        <div className="mx-auto max-w-c-1390 relative pt-10 lg:pt-15 xl:pt-20 px-7.5 lg:px-15 xl:px-20 overflow-hidden">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4 lg:w-1/2 ">
                        <div className="bg-primary relative z-10 mb-12 py-12 px-5 sm:px-12 lg:mb-0 2xl:p-[70px]">
                            <h1 className="mb-6 text-xl font-bold uppercase">Invest in the Future with VNOC and bountychallenge</h1>
                            <p className="mb-6 text-base leading-relaxed text-gray-4">
                            Welcome to the investment hub of VNOC,where you can become a part of shaping the digital landscape and unlocking growth potential.Whether you're an individual investor or a visionary seeking exciting opportunities,our platform offers a range of investment models designed to suit your preferences and goals.
                            </p>
                            <p className="mb-8 text-base leading-relaxed text-gray-4">
                                Curabitur ut rutrum tellus. Nullam ornare nunc non felis viverra
                                tempus.
                            </p>
                            <div className="items-end justify-between md:flex lg:block xl:flex">
                                <div className="">
                                    <div className="flex items-center">
                                        <span className="text-5xl font-extrabold text-white"> 20 </span>
                                        <p className="pl-3 text-base">
                                            <span className="block font-semibold text-white">
                                                We have
                                            </span>
                                            <span className="text-gray-4"> Years of experience </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="pt-4 md:text-right lg:text-left xl:text-right">
                                    {/* This part should link to another page or another section */}
                                    <a href="https://vnoc.com" className="flex items-center text-base font-medium text-white">
                                        Meet the Team
                                        
                                    </a>
                                </div>
                            </div>
                            {/* Add SVG here */}
                        </div>
                    </div>
                    <div className="w-full px-4 lg:w-1/2">
                        <div className="flex items-center justify-center w-full h-full">
                            <img src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-06/video-thumbnail.jpg" alt="image" className="top-0 left-0 z-[-1] h-full w-full" />
                            <button onClick={() => setVideoOpen(true)} className="absolute z-40 flex h-20 w-20 items-center justify-center rounded-full bg-white md:h-[100px] md:w-[100px]">
                            <span
                    className="absolute top-0 right-0 z-[-1] h-full w-full animate-ping rounded-full bg-white bg-opacity-20 delay-300 duration-1000"
                  ></span>
                  <svg
                    width="23"
                    height="27"
                    viewBox="0 0 23 27"
                    className="fill-current"
                  >
                    <path
                      d="M22.5 12.634C23.1667 13.0189 23.1667 13.9811 22.5 14.366L2.25 26.0574C1.58333 26.4423 0.750001 25.9611 0.750001 25.1913L0.750002 1.80866C0.750002 1.03886 1.58334 0.557731 2.25 0.942631L22.5 12.634Z"
                    />
                  </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {videoOpen && (
                <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-screen bg-black bg-opacity-80">
                    <div className="mx-auto w-full max-w-[550px] bg-white">
                        <iframe className="h-[320px] w-full" src="https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1&mute=1" />
                    </div>
                    <button onClick={() => setVideoOpen(false)} className="absolute top-0 right-0 flex items-center justify-center w-20 h-20 bg-black cursor-pointer text-body-color hover:bg-dark">
                        {/* Add SVG here */}
                    </button>
                </div>
            )}
        </section>
        <section  className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
          <div  className="container mx-auto">
            <div  className="-mx-4 flex flex-wrap">
              <div  className="w-full px-4">
                <div  className="mx-auto mb-[60px] max-w-[510px] text-center">
                  <span  className="text-primary mb-2 block text-lg font-semibold">
                    Ongoing Projects
                  </span>
                  <h2
                     className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]"
                  >
                    Current and available investment opportunities:
                  </h2>
                  <p  className="text-body-color text-base">
                  At VNOC,we believe in the power of collaboration and innovation.When you invest through our platform,you're not just contributing financially – you're joining a community of like-minded individuals who are passionate about driving positive change.Here's why you should consider investing with us:
                  </p>
                </div>
              </div>
            </div>
            <div  className="-mx-3 flex flex-wrap justify-center">
              <div  className="w-full px-3 md:w-1/2 xl:w-1/3">
                <div  className="mx-auto mb-10 w-full max-w-[370px]">
                  <div  className="relative overflow-hidden rounded-lg">
                  <a href="https://vnoc.com">
                    <img
                      src="/images/invest/vnoc.png"
                      alt="Invest in VNOC"
                       className="w-full"
                    />
                    </a>
                    <div  className="absolute bottom-5 left-0 w-full text-center">
                      <div
                         className="relative mx-5 overflow-hidden rounded-lg bg-white py-5 px-3"
                      >
                        <h3  className="text-dark text-base font-semibold">
                        <a href="https://vnoc.com">VNOC
                        </a></h3>
                        <p  className="text-body-color text-sm"><a href="https://docs.google.com/presentation/d/e/2PACX-1vS1bZdcENGlIPT7Ds4vBjF-zYFr20bVvTBqBLWmKyyC-J_4Bgi39IDgKXW17R37mA/pub?start=false&loop=false&delayms=3000#slide=id.p1">Pitch deck</a></p>
                        <div>
                          <span  className="absolute left-0 bottom-0">
                            <svg
                              width="61"
                              height="30"
                              viewBox="0 0 61 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="16"
                                cy="45"
                                r="45"
                                fill="#13C296"
                                fill-opacity="0.11"
                              />
                            </svg>
                          </span>
                          <span  className="absolute top-0 right-0">
                            <svg
                              width="20"
                              height="25"
                              viewBox="0 0 20 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="0.706257"
                                cy="24.3533"
                                r="0.646687"
                                transform="rotate(-90 0.706257 24.3533)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="24.3533"
                                r="0.646687"
                                transform="rotate(-90 6.39669 24.3533)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="24.3533"
                                r="0.646687"
                                transform="rotate(-90 12.0881 24.3533)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="24.3533"
                                r="0.646687"
                                transform="rotate(-90 17.7785 24.3533)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="0.706257"
                                cy="18.6624"
                                r="0.646687"
                                transform="rotate(-90 0.706257 18.6624)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="18.6624"
                                r="0.646687"
                                transform="rotate(-90 6.39669 18.6624)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="18.6624"
                                r="0.646687"
                                transform="rotate(-90 12.0881 18.6624)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="18.6624"
                                r="0.646687"
                                transform="rotate(-90 17.7785 18.6624)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="0.706257"
                                cy="12.9717"
                                r="0.646687"
                                transform="rotate(-90 0.706257 12.9717)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="12.9717"
                                r="0.646687"
                                transform="rotate(-90 6.39669 12.9717)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="12.9717"
                                r="0.646687"
                                transform="rotate(-90 12.0881 12.9717)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="12.9717"
                                r="0.646687"
                                transform="rotate(-90 17.7785 12.9717)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="0.706257"
                                cy="7.28077"
                                r="0.646687"
                                transform="rotate(-90 0.706257 7.28077)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="7.28077"
                                r="0.646687"
                                transform="rotate(-90 6.39669 7.28077)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="7.28077"
                                r="0.646687"
                                transform="rotate(-90 12.0881 7.28077)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="7.28077"
                                r="0.646687"
                                transform="rotate(-90 17.7785 7.28077)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="0.706257"
                                cy="1.58989"
                                r="0.646687"
                                transform="rotate(-90 0.706257 1.58989)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="1.58989"
                                r="0.646687"
                                transform="rotate(-90 6.39669 1.58989)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="1.58989"
                                r="0.646687"
                                transform="rotate(-90 12.0881 1.58989)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="1.58989"
                                r="0.646687"
                                transform="rotate(-90 17.7785 1.58989)"
                                fill="#3056D3"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            
            <div  className="w-full px-3 md:w-1/3 xl:w-1/3">
                <div  className="mx-auto mb-10 w-full max-w-[370px]">
                  <div  className="relative overflow-hidden rounded-lg">
                  <a href="https://contrib.com">
                    <img
                      src="/images/invest/contrib.png"
                      alt="Contrib"
                       className="w-full"
                    />
                    </a>
                    <div  className="absolute bottom-5 left-0 w-full text-center">
                      <div
                         className="relative mx-5 overflow-hidden rounded-lg bg-white py-5 px-3"
                      >
                        <h3  className="text-dark text-base font-semibold">
                          <a href="https://contrib.com">Contrib.com</a>
                        </h3>
                        <p  className="text-body-color text-sm"><a href="https://www.contrib.com/crypto/purchase">Get CTB Tokens</a></p>
                           <div>
                          <span  className="absolute left-0 bottom-0">
                            <svg
                              width="61"
                              height="30"
                              viewBox="0 0 61 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="16"
                                cy="45"
                                r="45"
                                fill="#13C296"
                                fill-opacity="0.11"
                              />
                            </svg>
                          </span>
                          <span  className="absolute top-0 right-0">
                            <svg
                              width="20"
                              height="25"
                              viewBox="0 0 20 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="0.706257"
                                cy="24.3533"
                                r="0.646687"
                                transform="rotate(-90 0.706257 24.3533)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="24.3533"
                                r="0.646687"
                                transform="rotate(-90 6.39669 24.3533)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="24.3533"
                                r="0.646687"
                                transform="rotate(-90 12.0881 24.3533)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="24.3533"
                                r="0.646687"
                                transform="rotate(-90 17.7785 24.3533)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="0.706257"
                                cy="18.6624"
                                r="0.646687"
                                transform="rotate(-90 0.706257 18.6624)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="18.6624"
                                r="0.646687"
                                transform="rotate(-90 6.39669 18.6624)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="18.6624"
                                r="0.646687"
                                transform="rotate(-90 12.0881 18.6624)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="18.6624"
                                r="0.646687"
                                transform="rotate(-90 17.7785 18.6624)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="0.706257"
                                cy="12.9717"
                                r="0.646687"
                                transform="rotate(-90 0.706257 12.9717)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="12.9717"
                                r="0.646687"
                                transform="rotate(-90 6.39669 12.9717)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="12.9717"
                                r="0.646687"
                                transform="rotate(-90 12.0881 12.9717)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="12.9717"
                                r="0.646687"
                                transform="rotate(-90 17.7785 12.9717)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="0.706257"
                                cy="7.28077"
                                r="0.646687"
                                transform="rotate(-90 0.706257 7.28077)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="7.28077"
                                r="0.646687"
                                transform="rotate(-90 6.39669 7.28077)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="7.28077"
                                r="0.646687"
                                transform="rotate(-90 12.0881 7.28077)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="7.28077"
                                r="0.646687"
                                transform="rotate(-90 17.7785 7.28077)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="0.706257"
                                cy="1.58989"
                                r="0.646687"
                                transform="rotate(-90 0.706257 1.58989)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="1.58989"
                                r="0.646687"
                                transform="rotate(-90 6.39669 1.58989)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="1.58989"
                                r="0.646687"
                                transform="rotate(-90 12.0881 1.58989)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="1.58989"
                                r="0.646687"
                                transform="rotate(-90 17.7785 1.58989)"
                                fill="#3056D3"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             
              <div  className="w-full px-3 md:w-1/3 xl:w-1/3">
                <div  className="mx-auto mb-10 w-full max-w-[370px]">
                  <div  className="relative overflow-hidden rounded-lg">
                  <a href="https://realtydao.com">
                    <img
                      src="/images/invest/realtydao.png"
                      alt="Realtydao"
                       className="w-full"
                    />
                </a>
                    <div  className="absolute bottom-5 left-0 w-full text-center">
                      <div
                         className="relative mx-5 overflow-hidden rounded-lg bg-white py-5 px-3"
                      >
                        <h3  className="text-dark text-base font-semibold">
                          <a href="https://realtydao.com">REALTYDAO</a>
                        </h3>
                        <p  className="text-body-color text-sm"><a href="https://realtydao.com/buy">Buy rDAO Tokens</a></p>
                       
                        <div>
                          <span  className="absolute left-0 bottom-0">
                            <svg
                              width="61"
                              height="30"
                              viewBox="0 0 61 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="16"
                                cy="45"
                                r="45"
                                fill="#13C296"
                                fill-opacity="0.11"
                              />
                            </svg>
                          </span>
                          <span  className="absolute top-0 right-0">
                            <svg
                              width="20"
                              height="25"
                              viewBox="0 0 20 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="0.706257"
                                cy="24.3533"
                                r="0.646687"
                                transform="rotate(-90 0.706257 24.3533)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="24.3533"
                                r="0.646687"
                                transform="rotate(-90 6.39669 24.3533)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="24.3533"
                                r="0.646687"
                                transform="rotate(-90 12.0881 24.3533)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="24.3533"
                                r="0.646687"
                                transform="rotate(-90 17.7785 24.3533)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="0.706257"
                                cy="18.6624"
                                r="0.646687"
                                transform="rotate(-90 0.706257 18.6624)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="18.6624"
                                r="0.646687"
                                transform="rotate(-90 6.39669 18.6624)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="18.6624"
                                r="0.646687"
                                transform="rotate(-90 12.0881 18.6624)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="18.6624"
                                r="0.646687"
                                transform="rotate(-90 17.7785 18.6624)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="0.706257"
                                cy="12.9717"
                                r="0.646687"
                                transform="rotate(-90 0.706257 12.9717)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="12.9717"
                                r="0.646687"
                                transform="rotate(-90 6.39669 12.9717)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="12.9717"
                                r="0.646687"
                                transform="rotate(-90 12.0881 12.9717)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="12.9717"
                                r="0.646687"
                                transform="rotate(-90 17.7785 12.9717)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="0.706257"
                                cy="7.28077"
                                r="0.646687"
                                transform="rotate(-90 0.706257 7.28077)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="7.28077"
                                r="0.646687"
                                transform="rotate(-90 6.39669 7.28077)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="7.28077"
                                r="0.646687"
                                transform="rotate(-90 12.0881 7.28077)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="7.28077"
                                r="0.646687"
                                transform="rotate(-90 17.7785 7.28077)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="0.706257"
                                cy="1.58989"
                                r="0.646687"
                                transform="rotate(-90 0.706257 1.58989)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="1.58989"
                                r="0.646687"
                                transform="rotate(-90 6.39669 1.58989)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="1.58989"
                                r="0.646687"
                                transform="rotate(-90 12.0881 1.58989)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="1.58989"
                                r="0.646687"
                                transform="rotate(-90 17.7785 1.58989)"
                                fill="#3056D3"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="support" className="px-4 md:px-8 2xl:px-0">
        <div className="mx-auto max-w-c-1390 relative pt-10 lg:pt-15 xl:pt-20 px-7.5 lg:px-15 xl:px-20 overflow-hidden">
             <h2 className="text-black dark:text-white text-4xl font-bold tracking-tight text-gray-900 sm:text-8xl bg-gradient-to-r from-bggrad1 to-primary bg-clip-text text-transparent">
                Join Us
            </h2>

            <p className="mb-6 text-lg">
                At VNOC, we believe in the power of collaboration and innovation. When you invest through our platform, you're not just contributing financially – you're joining a community of like-minded individuals who are passionate about driving positive change. Here's why you should consider investing with us:
            </p>

            <ul className="list-disc pl-8 mb-6">
                <li className="mb-3">
                    <strong>Diverse Investment Models:</strong> Choose from a variety of investment models, including equity-based, revenue-sharing, and token-based options. Find the model that aligns with your investment strategy.
                </li>
                <li className="mb-3">
                    <strong>Potential Returns:</strong> Benefit from potential returns on your investment as our projects and domains grow and thrive within the VNOC ecosystem.
                </li>
                <li className="mb-3">
                    <strong>Access to Premium Features:</strong> As an investor, you'll enjoy exclusive access to premium features, early insights into projects, and a front-row seat to the latest innovations.
                </li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4">Mitigating Risks</h3>
            <p className="mb-6 text-lg">
                Investing is an exciting journey, but it's important to acknowledge potential risks. While our team diligently evaluates projects and opportunities, it's essential to remember that all investments carry inherent uncertainties. We provide transparent information about risks associated with each opportunity to help you make informed decisions.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Get Started Today</h3>
            <p className="text-lg">
                Ready to embark on your investment journey with VNOC? Sign up today to explore our investment opportunities, connect with our vibrant investor community, and be a part of the future of digital innovation.
            </p>
           </div> 
        </section>
        </>        
    );
}

export default InvestContent;
