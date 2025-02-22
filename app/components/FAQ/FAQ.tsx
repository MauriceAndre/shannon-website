import React, { useState, createContext, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
config.autoAddCss = false;

interface FAQItemProps {
  question: string;
  answer: string;
  itemKey: string | number;
}

interface FAQContextProps {
  openIndex: string | number | null;
  toggleAnswer: (key: string | number) => void;
}

const FAQContext = createContext<FAQContextProps | undefined>(undefined);

import PropTypes from "prop-types";

const FAQ: React.FC<{ children: React.ReactNode }> & {
  Item: React.FC<FAQItemProps>;
} = ({ children }) => {
  const [openIndex, setOpenIndex] = useState<string | number | null>(null);

  const toggleAnswer = (key: string | number) => {
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <FAQContext.Provider value={{ openIndex, toggleAnswer }}>
      <div>{children}</div>
    </FAQContext.Provider>
  );
};

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, itemKey }) => {
  const context = useContext(FAQContext);
  if (!context) {
    throw new Error("FAQ.Item must be used within a FAQ component");
  }

  const { openIndex, toggleAnswer } = context;

  return (
    <div className="mb-4">
      <button
        onClick={() => toggleAnswer(itemKey)}
        className="flex items-center bg-none border-none cursor-pointer text-xl font-semibold"
      >
        {openIndex === itemKey ? (
          <FontAwesomeIcon icon={faMinus} />
        ) : (
          <FontAwesomeIcon icon={faPlus} />
        )}
        <span className="text-xl font-semibold ml-2">{question}</span>
      </button>
      <AnimatePresence>
        {openIndex === itemKey && (
          <motion.p
            className="ml-7"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {answer}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

FAQ.propTypes = {
  children: PropTypes.node.isRequired,
};

FAQ.Item = FAQItem;

export default FAQ;
