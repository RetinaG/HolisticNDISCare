import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  
  const { data: testimonials = [] } = useQuery({
    queryKey: ['testimonials'],
    queryFn: () => base44.entities.Testimonial.filter({ is_active: true }, 'order'),
  });

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  if (testimonials.length === 0) return null;

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-teal-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block px-4 py-1 bg-orange-50 text-orange-600 text-sm font-semibold rounded-full mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            What Our <span className="text-teal-600">Participants Say</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute -top-6 left-8 text-teal-100">
            <Quote className="w-20 h-20" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 sm:p-12 text-center relative"
            >
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating || 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed italic">
                "{testimonials[current].text}"
              </p>
              <div className="mt-8">
                <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white font-bold text-xl">
                  {testimonials[current].name[0]}
                </div>
                <div className="mt-3 font-bold text-gray-900">{testimonials[current].name}</div>
                <div className="text-sm text-gray-400">{testimonials[current].role}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav */}
          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-gray-200 hover:bg-teal-50 hover:border-teal-200 flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? "bg-teal-600 w-7" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full border border-gray-200 hover:bg-teal-50 hover:border-teal-200 flex items-center justify-center transition-all"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}