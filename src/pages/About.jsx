import React from "react";
import PageBanner from "../components/shared/PageBanner";
import { motion } from "framer-motion";
import {
  Heart,
  Eye,
  Target,
  CheckCircle,
  Users,
  ShieldCheck,
  Award,
  HandHeart,
  Sparkles,
  ArrowRight } from
"lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import CTABanner from "../components/home/CTABanner";

const VALUES = [
{ icon: Heart, title: "Compassion", desc: "We care deeply for every participant and treat them like family." },
{ icon: Eye, title: "Our Vision", desc: "To be the leading NDIS provider empowering lives across Australia." },
{ icon: Target, title: "Our Mission", desc: "Delivering person-centred care that unlocks potential and builds independence." }];


const QUALITIES = [
{ icon: Users, title: "Experienced Team", desc: "Our team includes registered nurses, therapists, and skilled support workers with years of NDIS experience." },
{ icon: ShieldCheck, title: "Quality Assured", desc: "We adhere to the highest NDIS Quality & Safeguards standards, ensuring safe and effective care delivery." },
{ icon: Award, title: "Evidence-Based", desc: "Our approach is grounded in evidence-based practices, continuously updated with the latest healthcare research." },
{ icon: HandHeart, title: "Person-Centred", desc: "Every support plan is tailored to the individual, respecting their choices, goals, and cultural background." },
{ icon: Sparkles, title: "Continuous Improvement", desc: "We actively seek feedback and innovate our services to deliver better outcomes for our participants." },
{ icon: Heart, title: "Holistic Wellbeing", desc: "We address physical, emotional, and social needs to support the whole person, not just their condition." }];


export default function About() {
  return (
    <div>
      <PageBanner
        title="ABOUT US"
        subtitle="Learn about our commitment to exceptional NDIS nursing and disability support" />


      {/* Intro */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>

              <div className="inline-block px-4 py-1 bg-teal-50 text-teal-700 text-sm font-semibold rounded-full mb-4">
                Who We Are
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                Nurse-Owned &{" "}
                <span className="text-teal-600">Family-Focused Care</span>
              </h2>
              <p className="mt-5 text-gray-500 leading-relaxed">
                Holistic NDIS Care is owned and run by two experienced nurses with over 20 years of combined experience in nursing and caring for vulnerable people. We have seen firsthand how difficult daily life can be for many individuals and their loved ones.
              </p>
              <p className="mt-4 text-gray-500 leading-relaxed">
                We strive to provide family-like care that is backed by experienced nurses and best practice standards. We believe that with the right support, people can live fulfilling and independent lives.
              </p>
              <p className="mt-4 text-gray-500 leading-relaxed">
                Our mission is to make you feel heard, respected, and empowered — because no one should feel alone on their journey. We navigate everyday challenges with care and empathy, treating every participant like family.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative">

              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=700&h=500&fit=crop"
                  alt="Healthcare professional" className="bg-slate-900 w-full h-[450px] object-contain" />


              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                    <Award className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">10+ Years</div>
                    <div className="text-sm text-gray-400">Of Excellence</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gradient-to-br from-orange-50/60 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {VALUES.map((v, i) =>
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">

                <div className="w-16 h-16 mx-auto rounded-xl bg-teal-50 flex items-center justify-center mb-5">
                  <v.icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-500 leading-relaxed">{v.desc}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Qualities Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Preserving Quality & Consistency in{" "}
              <span className="text-teal-600">Disability Support</span>
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              We adhere to established standards and constantly update our services to deliver high-quality, reliable support.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {QUALITIES.map((q, i) =>
            <motion.div
              key={q.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-6 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-teal-100 transition-all group">

                <div className="w-12 h-12 rounded-xl bg-orange-50 group-hover:bg-orange-100 flex items-center justify-center mb-4 transition-colors">
                  <q.icon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{q.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{q.desc}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>);

}