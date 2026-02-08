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
    title: "Community Nursing Care",
    desc: "Our registered nurses provide extensive clinical care including wound management, medication administration, catheter care, PEG feeding, and health monitoring to help you manage your condition and accelerate recovery.",
    color: "teal"
  },
  {
    icon: HandHelping,
    title: "Assist Personal Care – High Intensity",
    desc: "For participants with high support needs, we provide personalised assistance with personal hygiene, grooming, dressing, and other daily personal activities with dignity and respect.",
    color: "orange"
  },
  {
    icon: ArrowRightLeft,
    title: "Assist-Life Stage Transition",
    desc: "We support you through major life transitions, helping you adapt to changes in your NDIS plan and access new services, housing, and community connections.",
    color: "teal"
  },
  {
    icon: Car,
    title: "Assist Travel & Transport",
    desc: "Our support workers help you travel safely to appointments, social activities, and community events using mobility aids and accessible transport options.",
    color: "orange"
  },
  {
    icon: Home,
    title: "Daily Tasks & Shared Living",
    desc: "Support with everyday routines in shared living environments, ensuring you maintain independence while having assistance with household and personal tasks.",
    color: "teal"
  },
  {
    icon: UserCheck,
    title: "Assist Personal Activities",
    desc: "Comprehensive support for daily personal activities including meal preparation, communication, mobility, and community participation tailored to your needs.",
    color: "orange"
  },
  {
    icon: GraduationCap,
    title: "Development & Life Skills",
    desc: "Building your independence through structured skill development programs covering budgeting, cooking, social skills, and other essential life competencies.",
    color: "teal"
  },
  {
    icon: Utensils,
    title: "Household Tasks",
    desc: "Practical support with housework, laundry, meal preparation, shopping, and home maintenance to help you maintain a comfortable living environment.",
    color: "orange"
  },
  {
    icon: Brain,
    title: "Therapeutic Supports",
    desc: "Evidence-based therapeutic interventions including occupational therapy, speech therapy, physiotherapy, and behavioural support from qualified professionals.",
    color: "teal"
  },
  {
    icon: Building,
    title: "Specialised Disability Housing",
    desc: "Access to purpose-built or modified housing designed to meet your specific needs, with 24/7 support available to ensure your comfort and safety.",
    color: "orange"
  },
  {
    icon: UsersRound,
    title: "Group & Centre Activities",
    desc: "Engaging group programs and centre-based activities that promote social connection, skill development, and community participation.",
    color: "teal"
  },
  {
    icon: MapPin,
    title: "Community Access",
    desc: "Support to participate in community events, recreational activities, volunteering, and social outings that enrich your life experience.",
    color: "orange"
  },
  {
    icon: BedDouble,
    title: "Respite Care",
    desc: "Short-term accommodation and support giving both you and your carers a well-deserved break while ensuring continuity of high-quality care.",
    color: "teal"
  },
  {
    icon: Compass,
    title: "Support Coordination",
    desc: "Expert guidance to help you understand, navigate, and maximise your NDIS plan, connecting you with the right providers and services.",
    color: "orange"
  },
  {
    icon: HeartPulse,
    title: "Psychosocial Recovery",
    desc: "Specialised support for participants with psychosocial disabilities, focused on recovery-oriented practices and building resilience.",
    color: "teal"
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