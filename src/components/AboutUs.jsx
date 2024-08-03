import React from "react";
import aboutUs from "../assets/images/png/about-us.webp";
import smallStar from "../assets/images/png/small-star-icon.webp";
import CommonBtn from "./CommonBtn";
function AboutUs() {
  return (
    <>
      <section
        id="aboutus"
        className="my-10 md:my-20 lg:my-[100px] xl:my-[150px]"
      >
        <div className="2xl:max-w-[1320px] xl:max-w-[1140px] container  mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-6 lg:gap-[75px]">
            <div className="left-col order-1">
              <img
                src={aboutUs}
                alt="about-section-img"
                className=" sm:w-[75%] lg:w-full mx-auto object-cover"
              />
            </div>
            <div className="right-col lg:order-2 flex flex-col items-center lg:items-start">
              <span className="flex items-center text-primary-black font-exo2 leading-lh150">
                <img src={smallStar} alt="star-icon" className="h-[26px]" />
                About Us
              </span>
              <h2 className="sub-heading max-w-[524px] text-center lg:text-start mt-2 mb-4">
                Pioneering Vision & Mission-{" "}
                <span className="font-semibold">
                  Driven Sectoral Innovation
                </span>
              </h2>
              <p className="para-common-prop max-w-[584px] lg:max-w-[491px] text-center lg:text-start mb-10">
                Imagine a future in Saudi Arabia influenced by the potential of
                Al, with Noble Mind at the forefront of this transformation.
                Healthcare stands to gain with the promise of enhanced data
                precision. In education, there's the potential for
                individualized learning experiences. Finance could witness
                seamless transactions, and entertainment may revel in customized
                experiences. Through Al's promise, transportation could innovate
                and cities might adapt smarter infrastructures. In every domain,
                the vision of Noble Mind hints at a brighter, more efficient
                nation.
              </p>
              <button aria-label="read-more-btn">
                <CommonBtn name="Read More" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
