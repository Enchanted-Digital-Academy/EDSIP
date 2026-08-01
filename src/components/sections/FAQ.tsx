import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is EDSIP?",
    answer:
      "EDSIP is designed to help students bridge the gap between academic learning and real-world career experience through structured learning, mentorship, practical experience, and career development opportunities.",
  },
  {
    question: "Who can participate in EDSIP?",
    answer:
      "The programme is designed for students who want to develop practical experience, strengthen their employability skills, and prepare for opportunities beyond the classroom.",
  },
  {
    question: "What does the programme offer?",
    answer:
      "EDSIP provides structured learning, mentorship, practical experience, career development opportunities, and connections that can help students explore potential career pathways.",
  },
  {
    question: "How long is the programme?",
    answer:
      "The EDSIP programme runs for 12 weeks, giving participants time to learn, build practical experience, connect with mentors, and grow their career readiness.",
  },
  {
    question: "What can I gain from participating?",
    answer:
      "Participants can develop practical experience and employability skills while gaining mentorship, career guidance, and exposure to opportunities that can help prepare them for the world beyond university.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Heading */}
          <div>
            <p className="text-brand-orange text-sm font-semibold uppercase tracking-widest mb-3">
              FAQ
            </p>

            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-brown leading-tight">
              Questions?
              <br />
              We've Got Answers.
            </h2>

            <p className="mt-5 text-gray-500 text-lg leading-relaxed max-w-md">
              Everything you need to know about the EDSIP programme and what
              you can expect from the experience.
            </p>
          </div>

          {/* Questions */}
          <div className="border-t border-gray-200">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-gray-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-brand-brown font-semibold">
                      {faq.question}
                    </span>

                    <span className="flex-shrink-0 w-8 h-8 rounded-full border border-orange-100 flex items-center justify-center text-brand-orange">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pb-6 pr-12">
                      <p className="text-gray-500 leading-relaxed text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;