import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { motion } from "framer-motion";
import {
  Stethoscope,
  HandHelping,
  ArrowRightLeft,
  Car,
  Home,
  UserCheck,
  GraduationCap,
  Utensils,
  ArrowRight
} from "lucide-react";

const SERVICES = [
  {
    icon: Stethoscope,
    title: "Community Nursing Care",
    desc: "Extensive clinical care to manage health conditions and accelerate recovery.",
    color: "teal"
  },
  {
    icon: HandHelping,
    title: "Personal Care – High Intensity",
    desc: "Personalised support for participants with high-level care needs.",
    color: "orange"
  },
  {
    icon: ArrowRightLeft,
    title: "Life Stage Transition",
    desc: "Helping you adapt to changes and navigate new life phases smoothly.",
    color: "teal"
  },
  {
    icon: Car,
    title: "Travel & Transport",
    desc: "Assistance with mobility aids and travel to your chosen destinations.",
    color: "orange"
  },
  {
    icon: Home,
    title: "Daily Tasks & Shared Living",
    desc: "Support with daily routines and shared living arrangements.",
    color: "teal"
  },
  {
    icon: UserCheck,
    title: "Therapeutic Supports",
    desc: "Evidence-based therapeutic interventions for your wellbeing.",
    color: "orange"
  },
  {
    icon: GraduationCap,
    title: "Development & Life Skills",
    desc: "Building independence through skill development and training.",
    color: "teal"
  },
  {
    icon: Utensils,
    title: "Household Tasks",
    desc: "Help with housework, meal preparation, and home maintenance.",
    color: "orange"
  },
];

const colorMap = {
  teal: {
    bg: "bg-teal-50",
    icon: "bg-teal-100 text-teal-600",
    hover: "group-hover:bg-teal-600 group-hover:text-white",
    border: "group-hover:border-teal-200"
  },
  orange: {
    bg: "bg-orange-50",
    icon: "bg-orange-100 text-orange-600",
    hover: "group-hover:bg-orange-500 group-hover:text-white",
    border: "group-hover:border-orange-200"
  }
};

export default function ServicesOverview() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 bg-teal-50 text-teal-700 text-sm font-semibold rounded-full mb-4">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Comprehensive NDIS Support{" "}
            <span className="text-teal-600">Services We Offer</span>
          </h2>
          <p className="mt-4 text-gray-500 leading-relaxed">
            We foster a safe, inclusive environment for participants to feel empowered
            and thrive at a pace they are comfortable with.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => {
            const colors = colorMap[service.color];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link
                  to={createPageUrl("Services")}
                  className={`group block p-6 rounded-2xl border border-gray-100 ${colors.border} hover:shadow-xl transition-all duration-300 h-full`}
                >
                  <div className={`w-14 h-14 rounded-xl ${colors.icon} ${colors.hover} flex items-center justify-center mb-5 transition-all duration-300`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
                  <div className="mt-4 flex items-center text-sm font-medium text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to={createPageUrl("Services")}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gray-900 hover:bg-gray-800 text-white font-semibold transition-all"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}