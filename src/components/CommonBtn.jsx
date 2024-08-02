import React from "react";

function CommonBtn({ btnFs, name }) {
  return (
    <>
      <a
        href="#contactus"
        className={`${btnFs} py-3.5 px-6 bg-btn-bg text-white rounded-4 hover:bg-black transition-all font-outfit leading-lh150 font-semibold text-sm  inline-block `}
      >
        {name}
      </a>
    </>
  );
}

export default CommonBtn;
