import React from "react";
import PageBanner from "../components/shared/PageBanner";
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
  BedDouble,
  UsersRound,
  MapPin,
  Building,
  Compass,
  Brain,
  HeartPulse,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import CTABanner from "../components/home/CTABanner";

const SERVICES = [
  {
    icon: Stethoscope,
    title: "Complex Nursing Care",
    desc: "Tracheostomy care, indwelling catheter (IDC) care, suprapubic catheter (SPC) care, stoma care, PEG feeding, palliative nursing, pressure area prevention, and continence assessments/care by qualified nurses.",
    color: "teal"
  },
  {
    icon: HandHelping,
    title: "Wound Care",
    desc: "Comprehensive wound care including complex wound management, dressing changes, and pressure injury prevention delivered by experienced nurses.",
    color: "orange"
  },
  {
    icon: UserCheck,
    title: "Support Worker Services",
    desc: "Dedicated support workers to assist with personal care, daily activities, and community participation with dignity and respect.",
    color: "teal"
  },
  {
    icon: Utensils,
    title: "Medication Administration",
    desc: "Safe medication administration and management by registered nurses, ensuring correct dosages and adherence to treatment plans.",
    color: "orange"
  },
  {
    icon: Compass,
    title: "Support Coordination",
    desc: "Expert guidance to help you navigate the NDIS, maximise your plan, and connect with the right providers and services.",
    color: "teal"
  },
  {
    icon: Car,
    title: "Travel & Transport",
    desc: "Community access support, social visits, and transport assistance to allied health appointments and community activities.",
    color: "orange"
  },
  {
    icon: Home,
    title: "Cleaning Services",
    desc: "Professional cleaning support to maintain a comfortable and hygienic living environment in your home.",
    color: "teal"
  },
  {
    icon: GraduationCap,
    title: "Development of Life Skills",
    desc: "Building independence through structured skill development programs covering daily living skills, communication, and personal growth.",
    color: "orange"
  },
  {
    icon: ArrowRightLeft,
    title: "Hospital to Community Transition",
    desc: "Smooth transition support from hospital back to home, ensuring continuity of care and proper setup of home nursing needs.",
    color: "teal"
  },
  {
    icon: UsersRound,
    title: "Personal Activities Support",
    desc: "Assistance with personal activities including grooming, meal preparation, communication, and maintaining personal independence.",
    color: "orange"
  },
  {
    icon: Utensils,
    title: "Household Tasks",
    desc: "Support with housework, laundry, meal preparation, shopping, and home maintenance to ensure a comfortable living environment.",
    color: "teal"
  },
  {
    icon: MapPin,
    title: "Community Access",
    desc: "Support to participate in community events, recreational activities, volunteering, and social outings that enrich your life.",
    color: "orange"
  },
];

const colorMap = {
  teal: {
    icon: "bg-teal-100 text-teal-600 group-hover:bg-teal-600 group-hover:text-white",
    border: "group-hover:border-teal-200",
    dot: "bg-teal-500"
  },
  orange: {
    icon: "bg-orange-100 text-orange-600 group-hover:bg-orange-500 group-hover:text-white",
    border: "group-hover:border-orange-200",
    dot: "bg-orange-500"
  }
};

export default function Services() {
  return (
    <div>
      <PageBanner
        title="OUR SERVICES"
        subtitle="Comprehensive NDIS nursing and disability support services tailored to your needs"
      />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Comprehensive NDIS Support{" "}
              <span className="text-teal-600">Services We Offer</span>
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              We provide a wide range of NDIS services to simplify your life and enable you to enjoy continued freedom. We guide you through every step with precision and care.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => {
              const colors = colorMap[service.color];
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (i % 6) * 0.08 }}
                  className={`group p-7 rounded-2xl border border-gray-100 ${colors.border} hover:shadow-xl transition-all duration-300`}
                >
                  <div className={`w-14 h-14 rounded-xl ${colors.icon} flex items-center justify-center mb-5 transition-all duration-300`}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50/60 to-teal-50/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Quality Care You Can <span className="text-orange-500">Trust</span>
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            As a registered NDIS provider, we uphold the highest standards of quality and safety. Our team undergoes regular training and our services are continuously reviewed and improved based on participant feedback and industry best practices.
          </p>
          <Link
            to={createPageUrl("Contact")}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-semibold shadow-lg shadow-teal-600/25 transition-all"
          >
            Get In Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}