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
      <section>
        <div className="container mx-auto px-4 xl:max-w-[1140px] 2xl:max-w-[1320px] flex flex-col gap-6">
          {data.map((n, index) => {
            return (
              <Accordion
                className={` border border-black rounded-xl ${
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
                <AccordionBody className="px-6 pb-6">{n.content}</AccordionBody>
              </Accordion>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Faq;

// import React, { useState } from "react";

// function Faq() {
//   const data = [
//     {
//       id: 1,
//       headerTitle: "What is Artificial Intelligence (AI)?",
//       content:
//         "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.",
//     },
//     {
//       id: 2,
//       headerTitle: "How does AI benefit our company?",
//       content:
//         "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.",
//     },
//     {
//       id: 3,
//       headerTitle:
//         "What types of AI technologies are relevant to our industry?",
//       content:
//         "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.",
//     },
//     {
//       id: 4,
//       headerTitle: "How can our employees adapt to AI integration?",
//       content:
//         "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.",
//     },
//     {
//       id: 5,
//       headerTitle: "How can our company ensure data security with AI?",
//       content:
//         "Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.",
//     },
//   ];
//   const [state, setState] = useState(0);
//   const handleClick = (value) => {
//     setState(state === value ? 0 : value);
//   };
//   function Icon({ state, value }) {
//     return (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth={2}
//         stroke="currentColor"
//         className={`${
//           state === value ? "rotate-180" : ""
//         } h-5 w-5 transition-transform`}
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M19.5 8.25l-7.5 7.5-7.5-7.5"
//         />
//       </svg>
//     );
//   }
//   return (
//     <>
//       <section className="pb-[200px]">
//         <div className="container mx-auto px-4 xl:max-w-[1140px] 2xl:max-w-[1320px]">
//           <div className="accordion-section flex flex-col gap-12">
//             {data.map((n, index) => {
//               return (
//                 <div
//                   key={index}
//                   className="overflow-hidden"
//                   onClick={() => handleClick(n.id)}
//                 >
//                   <div className="flex  justify-between">
//                     <span className="font-outfit font-medium leading-lh150 text-black opacity-80">
//                       {n.headerTitle}
//                     </span>
//                     <Icon state={state} value={n.id} />
//                   </div>
//                   <p
//                     className={`${
//                       state === n.id ? "max-h-[200px]" : "max-h-0 "
//                     } transition-[max-height] duration-500 ease-in-out`}
//                   >
//                     {n.content}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Faq;
