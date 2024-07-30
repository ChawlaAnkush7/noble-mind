import React, { useState } from "react";
import contactUs from "../assets/images/png/contact-us.png";
import CommonBtn from "./CommonBtn";

function ContactUs() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    message: "",
  });
  const handleInput = (e) => {
    // console.log(e.target.value);
    setFormData(() => {
      const { name, value } = e.target;
      // console.log(name, value, e.target);
      return { ...formData, [name]: value };
    });
  };
  const saveData = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ fname: "", lname: "", email: "", message: "" });
  };
  return (
    <>
      <section>
        <div className="2xl:max-w-[1320px] xl:max-w-[1140px] container  mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="form-section md:col-span-5">
              <h2 className="sub-heading">
                <span className="font-semibold">Contact</span> Us
              </h2>
              <p className="para-common-prop max-w-[409px]">
                Feel free to contact us any time . We will get back to you as
                soon as we can!
              </p>
              <form
                className="flex gap-4 flex-col items-start"
                onSubmit={saveData}
              >
                <div className="flex gap-[11px] w-full">
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="fname" className="para-common-prop">
                      First Name
                    </label>
                    <input
                      id="fname"
                      type="text"
                      name="fname"
                      value={formData.fname}
                      onChange={handleInput}
                      autoComplete="off"
                      placeholder="first name"
                      className="h-[48px] w-full border border-[#1312002d] rounded-lg px-2 outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="lname" className="para-common-prop">
                      Last Name
                    </label>
                    <input
                      id="lname"
                      type="text"
                      name="lname"
                      value={formData.lname}
                      onChange={handleInput}
                      autoComplete="off"
                      placeholder="Last name"
                      className="h-[48px] w-full border border-[#1312002d] rounded-lg px-2 outline-none"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="email" className="para-common-prop">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInput}
                    autoComplete="off"
                    placeholder="Email-address"
                    className="h-[48px] w-full border border-[#1312002d] rounded-lg px-2 outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="message" className="para-common-prop">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInput}
                    autoComplete="off"
                    className="resize-none h-[135px] border border-[#1312002d] rounded-lg px-2 outline-none"
                  ></textarea>
                </div>
                <button className="mt-2" onClick={saveData}>
                  <CommonBtn name="Submit" />
                </button>
              </form>
            </div>
            <div className="contact-section-img md:col-span-7">
              <img
                src={contactUs}
                alt="contact-us"
                className="w-full rounded-xl max-h-[572px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
