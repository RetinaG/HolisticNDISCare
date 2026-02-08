import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";

const FEATURES = [
  "Highly skilled and experienced nursing staff",
  "Compassionate, person-centred approach",
  "Culturally diverse and inclusive team",
  "Tailored support plans for individual needs",
  "NDIS registered and fully compliant",
];

export default function AboutPreview() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-orange-50/60 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=700&h=500&fit=crop"
                alt="Team of nurses"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-2xl overflow-hidden shadow-lg border-4 border-white hidden sm:block">
              <img
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=300&h=300&fit=crop"
                alt="Caring support"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-teal-500/10 rounded-full blur-xl" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1 bg-teal-50 text-teal-700 text-sm font-semibold rounded-full mb-4">
              Welcome To NDIS CarePlus
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Disability Support with{" "}
              <span className="text-orange-500">Professionalism</span> &{" "}
              <span className="text-teal-600">Compassion</span>
            </h2>
            <p className="mt-5 text-gray-500 leading-relaxed">
              We are more than a care organisation. We are your partners in achieving independence and well-being. Our evidence-based, tailored approach ensures your choices are valued and our care positively impacts your life.
            </p>
            <ul className="mt-6 space-y-3">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 shrink-0" />
                  <span className="text-gray-600">{f}</span>
                </li>
              ))}
            </ul>
            <Link
              to={createPageUrl("About")}
              className="mt-8 inline-flex items-center gap-2 px-7 py-3 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-semibold shadow-lg shadow-teal-600/25 transition-all"
            >
              Learn More About Us <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}