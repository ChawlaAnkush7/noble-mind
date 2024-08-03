import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import smallStar from "../assets/images/png/small-star-icon.webp";
import whyChooseUs from "../assets/images/png/why-choose-us.webp";

function WhyChooseUs() {
  return (
    <>
      <section id="whychooseus">
        <div className="container xl:max-w-[1140px] 2xl:max-w-[1320px] px-4 mx-auto">
          <span className="flex items-center text-primary-black font-exo2 leading-lh150 justify-center">
            <img src={smallStar} alt="star-icon" className="h-[26px]" />
            Why Choose Us
          </span>
          <h2 className="sub-heading max-w-[524px] text-center mx-auto mt-2 mb-[52px]">
            Driving Innovation &
            <span className="font-semibold"> Transforming Industries</span>
          </h2>
          <Swiper
            slidesPerView={1}
            spaceBetween={24}
            loop={true}
            pagination={{
              clickable: true,
            }}
            centeredSlides={true}
            className="mb-8"
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              500: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div className="slide-card card-one h-full p-[18px] border border-[#EEDDFB] rounded-xl">
                <span className="flex items-center justify-center border-[6px] w-[36px] h-[36px] rounded-[50%] ">
                  1
                </span>
                <h3 className="font-outfit text-md text-primary-black mt-[11px] mb-1">
                  Customer-Centric
                </h3>
                <p className="para-common-prop sm:max-w-[297px]">
                  Prioritize and anticipate client needs, ensuring our
                  technology solutions consistently deliver unparalleled value.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" slide-card card-two h-full p-[18px] border border-[#EEDDFB] rounded-xl">
                <span className="flex items-center justify-center border-[6px] w-[36px] h-[36px] rounded-[50%] ">
                  2
                </span>
                <h3 className="font-outfit text-md text-primary-black mt-[11px] mb-1">
                  Workplace Harmony
                </h3>
                <p className="para-common-prop sm:max-w-[303px]">
                  Create a nurturing and peaceful environment for our staff,
                  fostering growth, well-being, and unity.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-card card-three h-full p-[18px] border border-[#EEDDFB] rounded-xl">
                <span className="flex items-center justify-center border-[6px] w-[36px] h-[36px] rounded-[50%] ">
                  3
                </span>
                <h3 className="font-outfit text-md text-primary-black mt-[11px] mb-1">
                  Ethical Leadership
                </h3>
                <p className="para-common-prop sm:max-w-[297px]">
                  Maintain the highest standards in all practices, ensuring our
                  solutions are responsible, safe, and transparent.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-card card-one h-full p-[18px] border border-[#EEDDFB] rounded-xl">
                <span className="flex items-center justify-center border-[6px] w-[36px] h-[36px] rounded-[50%] ">
                  4
                </span>
                <h3 className="font-outfit text-md text-primary-black mt-[11px] mb-1">
                  Workplace Harmony
                </h3>
                <p className="para-common-prop sm:max-w-[297px]">
                  Prioritize and anticipate client needs, ensuring our
                  technology solutions consistently deliver unparalleled value.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
          <img
            src={whyChooseUs}
            alt="why-choose-us"
            className="rounded-3xl object-cover h-[300px] md:h-[340px] mx-auto lg:h-[527px] w-full"
          />
        </div>
      </section>
    </>
  );
}

export default WhyChooseUs;
