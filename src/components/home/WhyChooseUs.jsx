import React from "react";
import { motion } from "framer-motion";
import { Award, Users, HandHeart, Target, Clock, ShieldCheck } from "lucide-react";

const REASONS = [
  {
    icon: Award,
    title: "Highly Skilled Staff",
    desc: "Experienced support workers and registered nurses dedicated to your care."
  },
  {
    icon: ShieldCheck,
    title: "Professional & Reliable",
    desc: "Driven by professionalism and reliability in every service we provide."
  },
  {
    icon: HandHeart,
    title: "Compassionate Care",
    desc: "We treat you like family, with empathy and genuine understanding."
  },
  {
    icon: Target,
    title: "Tailored Plans",
    desc: "Custom support plans designed around your unique lifestyle and goals."
  },
  {
    icon: Clock,
    title: "Commitment to Excellence",
    desc: "Continuously improving our services to deliver exceptional results."
  },
  {
    icon: Users,
    title: "Multicultural Team",
    desc: "Diverse backgrounds enabling us to serve all communities effectively."
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 bg-white/10 text-teal-300 text-sm font-semibold rounded-full mb-4">
            Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Why Choose Us for NDIS Support{" "}
            <span className="text-orange-400">Services?</span>
          </h2>
          <p className="mt-4 text-gray-400 leading-relaxed">
            We create an environment where you feel supported and comfortable through every step of your journey.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-teal-500/20 flex items-center justify-center mb-5 group-hover:bg-teal-500/30 transition-colors">
                <r.icon className="w-7 h-7 text-teal-400" />
              </div>
              <h3 className="font-bold text-lg mb-2">{r.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}