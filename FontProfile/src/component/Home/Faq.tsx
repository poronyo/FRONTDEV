import Container from "../Shared/Main/Container";
import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "Electric vehicle ?",
    answer:
      "AT KMITL, I'm a PEA Volta application developer team. Responded in Ev charger and EV car communication test . and In growatt we are an alliance with GWM motor   ",
  },
  {
    question: "Data analyst ?",
    answer:
      "At SYS company, I'm a crossfunctional team member to develop production predictive project & Image processing task in company   .",
  },
  {
    question: "Machine programable? ",
    answer:
      "At SYS company, I got an opportunity to execute robot & automation project that must use siemen PLC commissioning ",
  },
];

function FaqItem({ item }: { item: FaqItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-5">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none bg-gray-200 dark:bg-gray-800 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
          {item.question}
        </p>

        <IoIosArrowDropdown
          className={`size-7 text-gray-600 dark:text-gray-400 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="p-4 pt-4">
          <p className="text-gray-600 dark:text-gray-400">{item.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function Faq() {
  return (
    <Container>
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqData.map((item, index) => (
          <FaqItem key={index} item={item} />
        ))}
      </div>
    </Container>
  );
}
