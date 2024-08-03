import React from "react";
import footerLogo from "../assets/images/svg/footer-logo.svg";
import Facebook, { Instagram, Linkdin, Twitter } from "./Icon";

function Footer() {
  return (
    <>
      <footer className="bg-black pt-[138px] pb-9">
        <div className="container mx-auto px-4 xl:max-w-[1140px] 2xl:max-w-[1320px]">
          <div className="grid lg:grid-cols-12 sm:grid-cols-2 grid-cols-1 gap-6 justify-between pb-14">
            <div className="left-col lg:col-span-8">
              <a href="/">
                <img src={footerLogo} alt="Noble-Mind" className="h-[32px]" />
              </a>
              <div className="flex flex-col gap-2 mt-7">
                <span className="inline-block para-common-prop text-white">
                  Follow Us
                </span>
                <div className="flex gap-4 items-center">
                  <a href="https://www.facebook.com/" target="blank">
                    <Facebook />
                  </a>
                  <a href="https://www.instagram.com/" target="blank">
                    <Instagram />
                  </a>
                  <a href="https://x.com/?lang=en" target="blank">
                    <Twitter />
                  </a>
                  <a href="https://www.linkedin.com/feed/" target="blank">
                    <Linkdin />
                  </a>
                </div>
              </div>
            </div>
            <div className="right-col lg:col-span-4">
              <div className="grid grid-cols-2 gap-10 xl:gap-16 ">
                <div>
                  <ul className="flex flex-col items-start gap-[14px]">
                    <li className="mb-[2px] para-common-prop text-white">
                      Maine
                    </li>
                    <li>
                      <a
                        href="/"
                        className="para-common-prop text-white relative after:absolute after:w-0  hover:after:w-full after:transition-all after:bottom-[-2px] after:h-[2px] after:left-0 after:bg-white"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="#about"
                        className="para-common-prop text-white relative after:absolute after:w-0  hover:after:w-full after:transition-all after:bottom-[-2px] after:h-[2px] after:left-0 after:bg-white"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#services"
                        className="para-common-prop text-white relative after:absolute after:w-0  hover:after:w-full after:transition-all after:bottom-[-2px] after:h-[2px] after:left-0 after:bg-white"
                      >
                        Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="#whychooseus"
                        className="para-common-prop text-white relative after:absolute after:w-0  hover:after:w-full after:transition-all after:bottom-[-2px] after:h-[2px] after:left-0 after:bg-white"
                      >
                        Why Choose Us
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="flex flex-col gap-[14px]">
                    <li className="text-white mb-[2px] para-common-prop">
                      Legal
                    </li>
                    <li>
                      <a
                        href="/"
                        className="para-common-prop text-white relative after:absolute after:w-0  hover:after:w-full after:transition-all after:bottom-[-2px] after:h-[2px] after:left-0 after:bg-white"
                      >
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        href="#about"
                        className="para-common-prop text-white relative after:absolute after:w-0  hover:after:w-full after:transition-all after:bottom-[-2px] after:h-[2px] after:left-0 after:bg-white"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="#contactus"
                        className="para-common-prop text-white relative after:absolute after:w-0  hover:after:w-full after:transition-all after:bottom-[-2px] after:h-[2px] after:left-0 after:bg-white"
                      >
                        Contact
                      </a>
                    </li>
                    <li>
                      <a
                        href="tel:+629) 555-0129"
                        className="para-common-prop text-white relative after:absolute after:w-0  hover:after:w-full after:transition-all after:bottom-[-2px] after:h-[2px] after:left-0 after:bg-white"
                      >
                        (629) 555-0129
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-white"></div>
          <p className="pt-4 text-white text-center para-common-prop text-xsm">
            © Copyright 2024 Noble Mind | All rights reserved.{" "}
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
