"use client";
import React from "react";
import SectionHeader from "../Common/SectionHeader";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { motion } from "framer-motion";
import Image from "next/image";

const Testimonial = () => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top text-center mx-auto">
            <SectionHeader
              headerInfo={{
                title: `TESTIMONIALS`,
                subtitle: `Client’s Testimonials`,
                description: `VNOC – the cutting-edge platform and network that harnesses the power of blockchain technology, premium URL's, innovative business models (eCorp), and connected networks (Contrib) to empower you to build, manage, and monetize your digital assets like never before.`,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: -20,
            },

            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_top mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0 mt-15 xl:mt-20"
        >
          {/* <!-- Slider main container --> */}
          <div className="swiper testimonial-01 pb-22.5 mb-20">
            {/* <!-- Additional required wrapper --> */}
            <Swiper
              spaceBetween={50}
              slidesPerView={2}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              breakpoints={{
                // when window width is >= 640px
                0: {
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 2,
                },
              }}
            >
              <SwiperSlide>
                <div className="bg-white rounded-lg shadow-solid-9 dark:shadow-none dark:bg-blacksection dark:border dark:border-strokedark p-9 pt-7.5">
                  <div className="flex justify-between border-b border-stroke dark:border-strokedark pb-6 mb-7.5">
                    <div>
                      <h4 className="text-black dark:text-white text-metatitle3 mb-1.5">
                        Catherine Sicuya
                      </h4>
                      <p>Project Manager @ Tooreal Solutions</p>
                    </div>
                    <Image
                      width={60}
                      height={50}
                      className=""
                      src="./images/user/user-01.svg"
                      alt="User"
                    />
                  </div>

                  <p>
                  I am thrilled to share my experience with VNOC, a truly cutting-edge platform that has completely transformed the way I manage and monetize my digital assets. From the moment I started using VNOC, I was captivated by its innovative approach, leveraging the power of blockchain technology, premium URL's, the revolutionary eCorp business model, and the interconnected networks through Contrib.
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="bg-white rounded-lg shadow-solid-9 dark:shadow-none dark:bg-blacksection dark:border dark:border-strokedark p-9 pt-7.5">
                  <div className="flex justify-between border-b border-stroke dark:border-strokedark pb-6 mb-7.5">
                    <div>
                      <h4 className="text-black dark:text-white text-metatitle3 mb-1.5">
                        Seph AL Pine
                      </h4>
                      <p>Founter @ Camella Soft</p>
                    </div>
                    <Image
                      width={60}
                      height={50}
                      className=""
                      src="./images/user/user-02.svg"
                      alt="User"
                    />
                  </div>

                  <p>
                  One of the most striking features of VNOC is its utilization of blockchain technology. This advanced technology ensures security, transparency, and immutability in managing digital assets. Knowing that my assets are protected by the robust security of blockchain technology has given me peace of mind like never before.
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="bg-white rounded-lg shadow-solid-9 dark:shadow-none dark:bg-blacksection dark:border dark:border-strokedark p-9 pt-7.5">
                  <div className="flex justify-between border-b border-stroke dark:border-strokedark pb-6 mb-7.5">
                    <div>
                      <h4 className="text-black dark:text-white text-metatitle3 mb-1.5">
                        Lulu Conde
                      </h4>
                      <p>SEO Manager @ Damian Corp</p>
                    </div>
                    <Image
                      width={60}
                      height={50}
                      className=""
                      src="./images/user/user-01.svg"
                      alt="User"
                    />
                  </div>

                  <p>
                  Contrib, the interconnected network within VNOC, has been instrumental in expanding my reach and connections within the digital realm. The ability to collaborate with like-minded individuals and businesses has opened doors to opportunities I would have never imagined. Contrib truly embodies the spirit of community and collaboration, fostering an environment where innovation flourishes.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Testimonial;
