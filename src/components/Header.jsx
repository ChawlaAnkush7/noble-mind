import React, { useState } from "react";
import logo from "../assets/images/svg/logo.svg";
import open from "../assets/images/svg/open.svg";
import close from "../assets/images/svg/close.svg";
import smallStar from "../assets/images/png/small-star-icon.png";
import smallHero from "../assets/images/png/small-hero.png";
import heroBg from "../assets/images/png/hero.png";
import CommonBtn from "./CommonBtn";
function Header() {
  const [show, setShow] = useState(false);
  return (
    <>
      <header className="xl:min-h-[810px] min-h-[650px]  flex flex-col lg:bg-hero-bg   bg-contain bg-center bg-no-repeat relative ">
        <nav className="w-full">
          <div className="xl:max-w-[1140px] 2xl:max-w-[1320px] container px-4 mx-auto flex py-[19px] items-center justify-between">
            <a href="/">
              <img
                src={logo}
                alt="Noble-Minds"
                className="h-[30px] md:h-[38.43px]"
              />
            </a>

            <ul
              className={`${
                show
                  ? "left-0 w-full h-screen justify-center text-[25px] bg-slate-200 transition-all duration-300 ease-linear"
                  : "left-[-100%]"
              } fixed z-10 lg:static  top-0 flex-col lg:flex-row   flex  items-center gap-6 font-exo2 lg:text-sm text-[25px] leading-lh150 `}
            >
              <li>
                <a
                  href="/"
                  className="leading-lh150 block lg:text-sm text-[25px] "
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#About-Us"
                  className="leading-lh150 block lg:text-sm text-[25px] "
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#Services"
                  className="leading-lh150 block lg:text-sm text-[25px] "
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#Why-Choose-Us"
                  className="leading-lh150 block lg:text-sm text-[25px] "
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a
                  href="#Blogs"
                  className="leading-lh150 block lg:text-sm text-[25px] "
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="#FAQ"
                  className="leading-lh150 block lg:text-sm text-[25px] "
                >
                  FAQ
                </a>
              </li>
              <li className="ms-4">
                <CommonBtn btnFs="lg:text-sm text-[25px] " name="Contact Us" />
              </li>
            </ul>
            <button
              className="lg:hidden  relative z-10"
              onClick={() => setShow(!show)}
            >
              <img
                src={`${show ? close : open}`}
                className="h-[30px]"
                alt="menu"
              />
            </button>
          </div>
        </nav>
        <div className="hero-section grow flex py-8 lg:py-0">
          <div className="w-full xl:max-w-[1140px] 2xl:max-w-[1340px] container px-4 mx-auto flex items-center">
            <div className="grid grid-cols-1 gap-6">
              <div className="left-col flex items-center lg:items-start flex-col">
                <span className="flex items-center text-primary-black font-exo2 leading-lh150">
                  <img src={smallStar} alt="star-icon" className="h-[26px]" />
                  AI With Noble Mind
                </span>
                <h1 className="font-outfit font-light  lg:text-xl md:text-[40px] text-[35px] text-center lg:text-left leading-lh120 mb-4 mt-2 max-w-[584px]">
                  Inspiring Innovation, Elevating Solutions –{" "}
                  <span className="font-semibold">Noble Mind"</span>
                </h1>
                <p className="para-common-prop max-w-[584px] text-center lg:text-left">
                  At Noble Mind is a forward-thinking AI specialised company
                  dedicated to reshaping the future of how we live, work, and
                  learn. Our mission is to create ground-breaking AI solutions
                  for Healthcare, Education, and beyond, aligning with Saudi
                  Arabia’s Vision 2030.”
                </p>
              </div>
              <div className="right-col  lg:hidden">
                <img
                  src={smallHero}
                  alt="hero-img"
                  className="sm:w-[75%] mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
