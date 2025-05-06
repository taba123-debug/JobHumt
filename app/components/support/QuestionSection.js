"use client";

import React, { useEffect, useState } from "react";

// Async function to fetch FAQs
async function getFreqQuestion() {
  const res = await fetch("http://localhost:1337/api/faq-questions");
  if (!res.ok) throw new Error("Failed to fetch FAQ data");
  const json = await res.json();

 
  return json.data.map((item) => ({
    question: item.Question,
    answer: item.Answer,
  }));
}

function QuestionSection() {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const faqData = await getFreqQuestion();
        setFaqs(faqData);
      } catch (err) {
        console.error("Error fetching FAQs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-10 text-center">
          Frequently Asked <span className="text-[#6C5CE7]">Questions</span>
        </h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-xl bg-white shadow-sm">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-4 text-lg font-semibold flex justify-between items-center hover:text-[#6C5CE7] transition"
                >
                  {faq.question}
                  <span>{openIndex === index ? "-" : "^"}</span>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 text-gray-600 transition">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default QuestionSection;
