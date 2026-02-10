import React, { useState } from "react";
import PageBanner from "../components/shared/PageBanner";
import { motion } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";

const FAQ_CATEGORIES = [
  {
    category: "About NDIS",
    questions: [
      {
        q: "What is the NDIS?",
        a: "The National Disability Insurance Scheme (NDIS) is an Australian government initiative that provides funding and support to people with permanent and significant disabilities. It helps participants achieve their goals and live more independently. For more information, visit the official NDIS website at ndis.gov.au"
      },
      {
        q: "Who is eligible for NDIS funding?",
        a: "To be eligible for NDIS, you must be under 65 years old, live in Australia, be an Australian citizen or permanent resident, and have a permanent and significant disability that affects your ability to take part in everyday activities."
      },
      {
        q: "How do I access the NDIS?",
        a: "You can make an Access Request by contacting the NDIS directly via phone (1800 800 110), through their website, or with assistance from a healthcare professional, family member, or support organization."
      }
    ]
  },
  {
    category: "Our Services",
    questions: [
      {
        q: "What nursing services do you provide?",
        a: "We provide comprehensive registered nursing care including complex wound management, medication administration, PEG feeding, tracheostomy care, catheter management, bowel care, diabetes management, post-surgical care, and chronic disease monitoring. All care is delivered by experienced registered nurses in your home."
      },
      {
        q: "Are your nurses registered and qualified?",
        a: "Yes, all our nurses are registered with AHPRA (Australian Health Practitioner Regulation Agency) and have extensive experience in disability and community nursing care. We are owned and operated by registered nurses with over 20 years combined experience."
      },
      {
        q: "Do you provide 24/7 care?",
        a: "We provide flexible care services Monday to Sunday, 8am to 6pm. For after-hours or emergency nursing support, please contact us to discuss your specific needs and we can arrange appropriate services."
      },
      {
        q: "What areas do you service?",
        a: "We service Brisbane Northside, Logan, Ipswich, Bayside, and Brisbane South West regions. If you're outside these areas, please contact us as we may still be able to assist."
      }
    ]
  },
  {
    category: "Getting Started",
    questions: [
      {
        q: "How do I make a referral?",
        a: "You can make a referral by calling us on 0420 671 136, emailing holisticndiscare@gmail.com, or filling out our contact form. We'll arrange an initial consultation to discuss your needs and NDIS plan."
      },
      {
        q: "What information do I need to provide?",
        a: "We'll need your NDIS plan details, contact information, a brief description of your support needs, and any relevant medical information. We'll guide you through the process during your initial contact."
      },
      {
        q: "How long does it take to start services?",
        a: "Once we receive your referral and NDIS plan details, we typically conduct an initial assessment within 3-5 business days. Services can usually commence within 1-2 weeks depending on your needs and our availability."
      },
      {
        q: "Can I choose my support worker or nurse?",
        a: "Yes! We believe in building strong, trusting relationships. We'll introduce you to suitable team members and ensure you're comfortable with your care providers. You can request changes at any time."
      }
    ]
  },
  {
    category: "Funding & NDIS Plans",
    questions: [
      {
        q: "How do I know if my NDIS plan covers your services?",
        a: "Our services typically fall under Core Supports (Daily Activities) and Capacity Building Supports (Health & Wellbeing). We'll review your plan with you to identify appropriate funding categories and ensure services are within your budget."
      },
      {
        q: "What if I run out of NDIS funding?",
        a: "We'll help you monitor your plan spending and provide regular updates. If funding is running low, we can help you request a plan review with the NDIS or adjust services to stay within budget. We can also discuss private payment options if needed."
      },
      {
        q: "Do you offer plan management or self-management support?",
        a: "Yes, we work with plan-managed, self-managed, and NDIA-managed participants. We can submit invoices directly to your plan manager or NDIA, and provide detailed reports for self-managed participants."
      },
      {
        q: "How are services invoiced?",
        a: "Services are invoiced according to NDIS pricing guidelines. You'll receive detailed invoices showing services provided, hours, and NDIS support item numbers. Invoices are typically processed weekly or fortnightly."
      }
    ]
  },
  {
    category: "Quality & Safety",
    questions: [
      {
        q: "Are you a registered NDIS provider?",
        a: "Yes, we are fully registered with the NDIS Quality and Safeguards Commission and comply with all NDIS Practice Standards and regulatory requirements."
      },
      {
        q: "What COVID-19 safety measures do you have?",
        a: "All staff are fully vaccinated, follow strict infection control protocols, use appropriate PPE, conduct health screenings, and maintain hygiene standards as per health department guidelines."
      },
      {
        q: "How do you ensure quality of care?",
        a: "We maintain rigorous quality assurance through regular staff training, supervision, participant feedback surveys, clinical audits, incident management systems, and continuous improvement processes."
      },
      {
        q: "What if I'm not satisfied with a service?",
        a: "Your satisfaction is our priority. We have a formal complaints and feedback process. Please contact us immediately if you have concerns and we'll work with you to resolve them promptly. You can also contact the NDIS Commission if needed."
      }
    ]
  }
];

export default function FAQs() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (category, index) => {
    const key = `${category}-${index}`;
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div>
      <PageBanner
        title="FREQUENTLY ASKED QUESTIONS"
        subtitle="Find answers to common questions about our NDIS nursing care services"
      />

      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* NDIS Resource Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 p-6 bg-teal-50 border border-teal-100 rounded-2xl"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-2">Learn More About the NDIS</h3>
            <p className="text-gray-600 mb-4">
              For comprehensive information about the National Disability Insurance Scheme, eligibility criteria, and how to apply, visit the official NDIS website.
            </p>
            <a
              href="https://www.ndis.gov.au"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-full transition-all shadow-md hover:shadow-lg"
            >
              Visit NDIS.gov.au <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

          {/* FAQ Categories */}
          <div className="space-y-8">
            {FAQ_CATEGORIES.map((cat, catIndex) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: catIndex * 0.1 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{cat.category}</h2>
                <div className="space-y-3">
                  {cat.questions.map((item, idx) => {
                    const isOpen = openItems[`${cat.category}-${idx}`];
                    return (
                      <div
                        key={idx}
                        className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-teal-200 transition-colors"
                      >
                        <button
                          onClick={() => toggleItem(cat.category, idx)}
                          className="w-full px-6 py-4 flex items-center justify-between text-left"
                        >
                          <span className="font-semibold text-gray-900 pr-4">{item.q}</span>
                          <ChevronDown
                            className={`w-5 h-5 text-teal-600 shrink-0 transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                            {item.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center p-8 bg-gradient-to-br from-teal-50 to-orange-50 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Still Have Questions?</h3>
            <p className="text-gray-600 mb-6">
              Our team is here to help. Get in touch and we'll be happy to answer any questions about our services.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:0420671136"
                className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-full transition-all shadow-md hover:shadow-lg"
              >
                Call 0420 671 136
              </a>
              <a
                href="mailto:holisticndiscare@gmail.com"
                className="px-6 py-3 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-full border-2 border-gray-200 transition-all"
              >
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}