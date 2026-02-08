import React from "react";
import { motion } from "framer-motion";

export default function PageBanner({ title, subtitle }) {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-500 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-5xl font-bold text-white">{title}</h1>
          {subtitle && (
            <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}