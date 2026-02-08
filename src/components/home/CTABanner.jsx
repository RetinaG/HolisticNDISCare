import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-300 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-teal-100 text-lg max-w-2xl mx-auto mb-8">
            Call us today to learn more about our NDIS nursing and disability support services. We're here to help you live your best life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:0420671136"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-teal-700 font-bold text-lg hover:bg-gray-50 shadow-xl transition-all"
            >
              <Phone className="w-5 h-5" /> 0420 671 136
            </a>
            <Link
              to={createPageUrl("Contact")}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold shadow-xl transition-all"
            >
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}