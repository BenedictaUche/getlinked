import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import "./Faq.css";

export default function Faq() {
  const data = [
    {
      id: 1,
      question: "Can i work on a project i started before the hackathon?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      id: 2,
      question: "What happens if i need help during the hackathon?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      id: 3,
      question: "What happens if i don't have an idea for a project?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      id: 4,
      question: "Can i join a team or do i have to come with one?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      id: 5,
      question: "What happens after the hackathon ends?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      id: 6,
      question: "Can i work on a project i started before the hackathon?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
  ];

  return (
    <>
    <div className="flex flex-col md:mt-10 md:flex-row  intro justify-center align-middle items-center" id="faq">
      <div className="text-white">
        <h2 className="rules-text">
          Frequently Asked <span className="text-[#D434FE]">Questions</span>
        </h2>
        <p className="faq-p mt-7">
          We got answers to the questions that you might want to ask about
          <span> getlinked Hackathon 1.0</span>
        </p>
        <Accordion className="accord" allowMultiple>
          {data.map((item) => (
            <AccordionItem key={item.id}>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton className="border-b-[#D434FE] border-b-2">
                      <Box as="span" flex="1" textAlign="left" className="">
                        {item.question}
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" className="text-[#D434FE]" />
                      ) : (
                        <AddIcon fontSize="12px" className="text-[#D434FE]"/>
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} className="w-[500px]">{item.answer}</AccordionPanel>
                </>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className='faq-img'>
        <img
          src="./images/man_thinking.png"
          alt="man thinking"
          className="w-[741px] h-[741px]"
        />
      </div>
    </div>
    <hr />
    </>
  );
}
