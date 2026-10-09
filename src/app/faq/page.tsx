"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Do you ship internationally?",
    a: "Yes, we ship globally using premium, insured courier services. Shipping costs and times vary by destination. Please enquire via WhatsApp with your exact location for a quote."
  },
  {
    q: "Are the sarees pure silk?",
    a: "Absolutely. All our Kanjivaram and Banarasi sarees are woven using 100% pure silk and authentic zari. Each saree comes with a Silk Mark certification."
  },
  {
    q: "Can I customize a saree?",
    a: "We do take bespoke orders for bridal trousseaus. This process requires a consultation and takes between 3 to 6 months depending on the complexity of the weave."
  },
  {
    q: "Do the sarees come with a blouse piece?",
    a: "Yes, almost all our sarees come with an unstitched, matching or contrasting blouse piece attached, measuring between 0.8 to 1 meter."
  },
  {
    q: "How can I purchase a saree shown on the website?",
    a: "As a premium boutique, we handle all purchases personally to ensure you get exactly what you need. Click 'Enquire on WhatsApp' on any product page, and our team will assist you with availability, pricing, and secure payment links."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <h1 className="font-serif text-5xl text-primary mb-6">
          Frequently Asked <span className="times-italic font-normal" style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: "italic" }}>Questions</span>
        </h1>
        <p className="font-sans text-secondary">
          Everything you need to know about our collections, shipping, and services.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-accent/20">
            <button 
              className="w-full flex justify-between items-center p-6 text-left focus:outline-none focus:bg-primary/5 hover:bg-primary/5 transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-serif text-xl text-primary">{faq.q}</span>
              <ChevronDown 
                size={20} 
                className={`text-accent transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
              />
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 font-sans text-secondary leading-relaxed">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
