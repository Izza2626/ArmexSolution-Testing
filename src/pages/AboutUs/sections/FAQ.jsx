import React, { useState } from "react";
import {
  FiChevronDown,
  FiChevronUp,
  FiHelpCircle,
  FiMail,
  FiPhone
} from "react-icons/fi";

import "./FAQ.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What standards do you follow?",
      answer: "BS 8666 (UK), Eurocode 2 (Europe), ACI 318 (USA), and IS Codes (India)."
    },
    {
      question: "Which software do you use?",
      answer: "AutoCAD, Revit, Tekla, RebarCAD, and Navisworks for BIM coordination."
    },
    {
      question: "What is your turnaround time?",
      answer: "3-7 working days for most projects. Timeline provided at project start."
    },
    {
      question: "Do you offer revisions?",
      answer: "Yes, revisions are included. We work closely to implement changes accurately."
    },
    {
      question: "Which countries do you serve?",
      answer: "USA, UK, UAE, Saudi Arabia, and India with local code compliance."
    },
    {
      question: "How do you ensure quality?",
      answer: "Multi-level quality checks: technical review, code compliance, coordination check."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container-fluid">

        {/* Header */}
        <div className="faq-header">
          <span className="faq-subtitle">HAVE QUESTIONS?</span>
          <h2 className="faq-title">
            Frequently Asked <span>Questions</span>
          </h2>
        </div>

        {/* FAQ Grid - 2 Columns */}
        <div className="faq-grid-2col">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div 
                className={`faq-question ${openIndex === index ? 'faq-open' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question-left">
                  <FiHelpCircle className="faq-question-icon" />
                  <h3>{faq.question}</h3>
                </div>
                <span className="faq-toggle">
                  {openIndex === index ? <FiChevronUp /> : <FiChevronDown />}
                </span>
              </div>
              
              <div className={`faq-answer ${openIndex === index ? 'faq-answer-open' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Compact Contact */}
        <div className="faq-compact-contact">
          <div className="faq-compact-content">
            <FiHelpCircle className="faq-compact-icon" />
            <span>Still have questions?</span>
            <a href="mailto:admin@armexsolutions.com" className="faq-compact-link">
              <FiMail /> admin@armexsolutions.com
            </a>
            <a href="tel:+919840000000" className="faq-compact-link">
              <FiPhone /> +91-98400 00000
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;