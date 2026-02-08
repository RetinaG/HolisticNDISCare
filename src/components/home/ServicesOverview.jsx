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
  ArrowRight,
  Compass,
  UsersRound,
  MapPin
} from "lucide-react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";

const iconMap = {
  Stethoscope,
  HandHelping,
  ArrowRightLeft,
  Car,
  Home,
  UserCheck,
  GraduationCap,
  Utensils,
  Compass,
  UsersRound,
  MapPin
};

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
  const { data: services = [] } = useQuery({
    queryKey: ['services-home'],
    queryFn: () => base44.entities.Service.filter({ show_on_home: true }, 'order'),
  });

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
          {services.map((service, i) => {
            const IconComponent = iconMap[service.icon] || Stethoscope;
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
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
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