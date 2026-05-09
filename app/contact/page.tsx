"use client";

import { useState } from "react";
import Contact from "@/components/sections/Contact";
import { ChevronDown, ChevronUp } from "lucide-react";

interface AccordionItem {
  question: string;
  answer: string;
}

const faqItems: AccordionItem[] = [
  {
    question: "What kind of internships am I looking for?",
    answer:
      "I am looking for web development or software engineering internships where I can apply my skills in HTML, CSS, JavaScript, and Python to real-world projects.",
  },
  {
    question: "Am I open to remote work?",
    answer:
      "Yes, I am open to both remote and on-site internship opportunities. I am flexible and adaptable to different working environments.",
  },
  {
    question: "What is my preferred tech stack?",
    answer:
      "I am most comfortable with HTML5, CSS3, JavaScript for web development, and Java/Android Studio for mobile app development. I am also learning React Native.",
  },
  {
    question: "When am I available to start?",
    answer:
      "I am available immediately for internship opportunities. I can manage my schedule to accommodate both full-time and part-time positions.",
  },
];

export default function ContactPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Contact />

      {/* FAQ Section */}
      <section className="w-full bg-white py-20 border-t-[3px] border-black">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12">
          <div className="mb-8 inline-block">
            <h2 className="font-mono font-bold text-heading uppercase text-black border-b-[3px] border-black pb-2 pr-4">
              WHAT I&apos;M LOOKING FOR
            </h2>
          </div>

          <div className="flex flex-col max-w-3xl">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border-[2px] border-black mb-[-2px]"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-4 font-mono text-sm uppercase tracking-widest text-left hover:bg-black hover:text-white transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <span>{item.question}</span>
                  {openIndex === index ? (
                    <ChevronUp size={16} className="shrink-0 ml-2" />
                  ) : (
                    <ChevronDown size={16} className="shrink-0 ml-2" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="p-4 border-t-[2px] border-black bg-white">
                    <p className="font-inter text-sm leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
