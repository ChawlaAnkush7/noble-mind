import React from "react";
import footerLogo from "../assets/images/svg/footer-logo.svg";
import Facebook, { Instagram, Linkdin, Twitter } from "./Icon";

function Footer() {
  return (
    <>
      <footer className="bg-black pt-[138px] pb-9">
        <div className="container mx-auto px-4 xl:max-w-[1140px] 2xl:max-w-[1320px]">
          <div className="grid lg:grid-cols-12 sm:grid-cols-2 grid-cols-1 justify-between pb-14">
            <div className="left-col lg:col-span-8">
              <a href="/">
                <img src={footerLogo} alt="Noble-Mind" className="h-[32px]" />
              </a>
              <div className="flex flex-col gap-2 mt-7">
                <span className="inline-block para-common-prop text-white">
                  Follow Us
                </span>
                <div className="flex gap-4 items-center">
                  <a href="/">
                    <Facebook />
                  </a>
                  <a href="/">
                    <Instagram />
                  </a>
                  <a href="/">
                    <Twitter />
                  </a>
                  <a href="/">
                    <Linkdin />
                  </a>
                </div>
              </div>
            </div>
            <div className="right-col lg:col-span-4">
              <div className="grid grid-cols-2 gap-10 xl:gap-16 ">
                <div>
                  <ul className="flex flex-col items-start gap-[14px]">
                    <li className="mb-[2px] text-white">Maine</li>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="#about">About Us</a>
                    </li>
                    <li>
                      <a href="#services">Services</a>
                    </li>
                    <li>
                      <a href="#whychooseus">Why Choose Us</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="flex flex-col gap-[14px]">
                    <li className="text-white mb-[2px]">Legal</li>
                    <li>
                      <a href="/">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="#about">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#services">Contact</a>
                    </li>
                    <li>
                      <a href="#whychooseus">(629) 555-0129</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-white"></div>
          <p className="pt-4 text-white text-center">
            © Copyright 2024 Noble Mind | All rights reserved.{" "}
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
