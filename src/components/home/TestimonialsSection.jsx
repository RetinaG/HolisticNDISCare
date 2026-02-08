import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    role: "NDIS Participant",
    text: "The team at NDIS CarePlus has been incredible. Their nurses are not only skilled but genuinely caring. They've helped me achieve independence I never thought possible.",
    rating: 5,
  },
  {
    name: "James T.",
    role: "Family Member",
    text: "Finding quality NDIS support was stressful until we found NDIS CarePlus. Their personalised approach and consistent communication gave our family real peace of mind.",
    rating: 5,
  },
  {
    name: "Maria L.",
    role: "Support Coordinator",
    text: "I've referred many participants to NDIS CarePlus and the feedback is always overwhelmingly positive. Professional, reliable, and truly passionate about what they do.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);
  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

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
                {Array.from({ length: TESTIMONIALS[current].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed italic">
                "{TESTIMONIALS[current].text}"
              </p>
              <div className="mt-8">
                <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white font-bold text-xl">
                  {TESTIMONIALS[current].name[0]}
                </div>
                <div className="mt-3 font-bold text-gray-900">{TESTIMONIALS[current].name}</div>
                <div className="text-sm text-gray-400">{TESTIMONIALS[current].role}</div>
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
              {TESTIMONIALS.map((_, i) => (
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