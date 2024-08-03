import React from "react";
import CommonBtn from "./CommonBtn";

function Newsletter() {
  return (
    <>
      <section className="mt-10 md:mt-[80px] lg:mt-[100px] xl:mt-[150px]">
        <div className="container mx-auto px-4 xl:max-w-[1140px] 2xl:max-w-[1320px]">
          <div className="bg-newsletter bg-cover bg-no-repeat bg-center mb-[-84px] relative z-[1] rounded-[20px] p-8 sm:p-[60px] flex flex-col items-center justify-center">
            <h2 className="sub-heading text-white">
              Subscribe to our{" "}
              <span className="font-semibold">Newsletter!</span>
            </h2>
            <p className="para-common-prop text-white mt-2">
              Be the first to get exclusive offers and the latest news.
            </p>
            <div className="mailbox p-[10px] rounded-md border border-[#fdfdfd] bg-[#fdfdfd21] mt-9 max-w-[448px] w-full flex justify-between">
              <input
                type="email"
                placeholder="Enter Your Email "
                className="border-0 outline-0 bg-transparent placeholder-white placeholder:font-outfit ps-3 text-white"
              />
              <button aria-label="subscribe-btn">
                <CommonBtn
                  name="Subscribe"
                  btnFs="border-white bg-transparent border hidden sm:block"
                />
              </button>
            </div>
            <button>
              <CommonBtn
                name="Subscribe"
                btnFs="border-white bg-transparent border mt-4 sm:hidden"
              />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Newsletter;
