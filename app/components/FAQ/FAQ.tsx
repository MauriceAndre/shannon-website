import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { faCaretDown, faCaretRight } from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false;

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} style={{ marginBottom: "1em" }}>
          <button
            onClick={() => toggleAnswer(index)}
            style={{
              display: "flex",
              alignItems: "center",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "1.2em",
            }}
          >
            {openIndex === index ? (
              <FontAwesomeIcon icon={faCaretDown} />
            ) : (
              <FontAwesomeIcon icon={faCaretRight} />
            )}
            <span style={{ marginLeft: "0.5em" }}>{item.question}</span>
          </button>
          {openIndex === index && (
            <p style={{ marginLeft: "1.7em" }}>{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
