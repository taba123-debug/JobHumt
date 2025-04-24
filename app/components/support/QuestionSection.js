"use client"
import React, {useState} from "react"
const faqs = [
    {
      question: "How do I apply for a job?",
      answer:
        "Simply browse our job listings, click on a job card, and follow the application instructions provided by the employer.",
    },
    {
      question: "Can I contact employers directly?",
      answer:
        "Yes, if the job listing includes employer contact info. Otherwise, use the platform's messaging system when available.",
    },
    {
      question: "How do I verify my skills?",
      answer:
        "You can take our built-in skill assessments or upload certifications to validate your expertise for employers.",
    },
  ];
  
function QuestionSection() {
    const [openIndex, setOpenIndex] = useState(null);
        //  accordian for question and answers !
    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  return (
    <section className=" py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-10 text-center">
          Frequently Asked <span className="text-[#6C5CE7]">Question</span>
          </h2> 

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-xl bg-white shadow-sm">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 text-lg font-semibold flex justify-between items-center hover:text-[#6C5CE7] transition"
              >
                {faq.question}
                <span>{openIndex === index ? '-' : '^'}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600 transition">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
    
  
}

export default QuestionSection
