import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Users, HeartHandshake } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-teal-50">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-0 w-20 h-20 opacity-10">
        {Array.from({ length: 6 }).map((_, row) =>
          Array.from({ length: 4 }).map((_, col) => (
            <div
              key={`${row}-${col}`}
              className="absolute w-2 h-2 bg-teal-500 rounded-full"
              style={{ left: col * 14, top: row * 14 }}
            />
          ))
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-50 border border-teal-100 rounded-full text-teal-700 text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Registered NDIS Provider
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight">
              <span className="block text-teal-600">Care That Feels</span>
              <span className="block">Like Family</span>
            </h1>
            <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-lg">
              Owned and run by two experienced nurses with over 20 years of combined nursing experience. We provide family-like care backed by best practice standards.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to={createPageUrl("Contact")}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-semibold shadow-lg shadow-teal-600/25 hover:shadow-xl hover:shadow-teal-600/30 transition-all"
              >
                Make a Referral <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to={createPageUrl("Services")}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-gray-200 hover:border-teal-200 text-gray-700 hover:text-teal-700 font-semibold transition-all"
              >
                Our Services
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 flex gap-8 sm:gap-12">
              {[
                { value: "20+", label: "Years Experience" },
                { value: "5+", label: "Service Regions" },
                { value: "100%", label: "Nurse-Owned" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698816c8974c10bb3e401113/65645d540_NDISpic.png"
                alt="Nurse providing care to patient at home"
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent" />
            </div>
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                  <HeartHandshake className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Trusted Provider</div>
                  <div className="text-sm text-gray-500">NDIS Registered & Certified</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                  <Users className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">Multicultural Team</div>
                  <div className="text-xs text-gray-400">Diverse & Inclusive</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}