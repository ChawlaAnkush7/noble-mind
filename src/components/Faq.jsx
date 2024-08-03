import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
function Faq() {
  const data = [
    {
      id: 1,
      headerTitle: "What is Artificial Intelligence (AI)?",
      content:
        "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.",
    },
    {
      id: 2,
      headerTitle: "How does AI benefit our company?",
      content:
        "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.",
    },
    {
      id: 3,
      headerTitle:
        "What types of AI technologies are relevant to our industry?",
      content:
        "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.",
    },
    {
      id: 4,
      headerTitle: "How can our employees adapt to AI integration?",
      content:
        "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.",
    },
    {
      id: 5,
      headerTitle: "How can our company ensure data security with AI?",
      content:
        "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.",
    },
  ];

  const [open, setOpen] = React.useState(1);
  const handleOpen = (value) => {
    setOpen(open === value ? 1 : value);
  };

  return (
    <>
      <section id="faq">
        <div className="container mx-auto px-4 xl:max-w-[1140px] 2xl:max-w-[1320px] ">
          <h2 className="sub-heading text-center">
            Frequently <span className="font-semibold">Asked Questions</span>
          </h2>
          <p className="para-common-prop text-center mx-auto max-w-[497px] mt-4">
            Lorem ipsum dolor sit amet consectetur. Orci augue mollis eu
            volutpat mi leo. Nibh nisl consequat metus.
          </p>
          <div className="lg:max-w-[62%] mx-auto flex flex-col gap-[18px] items-start mt-14">
            {data.map((n, index) => {
              return (
                <Accordion
                  className={` border border-[#eddcfa] rounded-xl shadow-accordion-shadow ${
                    open === n.id ? "border-b-[6px] border-[#A854E9]" : ""
                  }`}
                  key={index}
                  open={open === n.id}
                  icon={<Icon id={n.id} open={open} />}
                >
                  <AccordionHeader
                    onClick={() => handleOpen(n.id)}
                    className="overflow-hidden text-start p-3 sm:p-4 md:p-6"
                  >
                    {n.headerTitle}
                  </AccordionHeader>
                  <AccordionBody className="px-6 pb-6">
                    {n.content}
                  </AccordionBody>
                </Accordion>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
