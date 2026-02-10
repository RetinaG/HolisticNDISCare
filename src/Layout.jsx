import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "./utils";
import { Menu, X, Phone, Mail, MapPin, Clock, ChevronDown, Heart, Facebook, Instagram, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { label: "Home", page: "Home" },
  { label: "About Us", page: "About" },
  { label: "Our Services", page: "Services" },
  { label: "FAQs", page: "FAQs" },
  { label: "Contact", page: "Contact" },
];

export default function Layout({ children, currentPageName }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [currentPageName]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <style>{`
        :root {
          --teal: #0D9488;
          --teal-dark: #0B7C72;
          --orange: #F97316;
          --orange-dark: #EA580C;
          --cream: #FFF7ED;
          --peach: #FFF1E6;
        }
        html { scroll-behavior: smooth; }
        .gradient-teal { background: linear-gradient(135deg, #0D9488 0%, #14B8A6 100%); }
        .gradient-orange { background: linear-gradient(135deg, #F97316 0%, #FB923C 100%); }
      `}</style>

      {/* Top Bar */}
      <div className="hidden md:block bg-teal-700 text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:0420671136" className="flex items-center gap-2 hover:text-orange-300 transition-colors">
              <Phone className="w-3.5 h-3.5" /> 0420 671 136
            </a>
            <a href="mailto:holisticndiscare@gmail.com" className="flex items-center gap-2 hover:text-orange-300 transition-colors">
              <Mail className="w-3.5 h-3.5" /> holisticndiscare@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5" />
            <span>Mon – Sun: 8am – 6pm</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white shadow-sm"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center gap-3 group">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698816c8974c10bb3e401113/e90c0ae61_6b8f8e73-b136-4c00-a2af-5e5f053f246d.jpeg"
                alt="Holistic NDIS Care Logo"
                className="h-14 w-auto"
              />
              <div className="leading-tight">
                <span className="text-xl font-bold text-teal-700 tracking-tight">HOLISTIC NDIS CARE</span>
                <div className="text-[10px] uppercase tracking-[0.15em] text-teal-500 font-medium">Care That Feels Like Family</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.page}
                  to={createPageUrl(item.page)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    currentPageName === item.page
                      ? "text-teal-700 bg-teal-50"
                      : "text-gray-600 hover:text-teal-700 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to={createPageUrl("Contact")}
                className="px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 transition-all shadow-md hover:shadow-lg"
              >
                Referral
              </Link>
              <Link
                to={createPageUrl("Contact")}
                className="px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 transition-all shadow-md hover:shadow-lg"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.page}
                    to={createPageUrl(item.page)}
                    className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                      currentPageName === item.page
                        ? "text-teal-700 bg-teal-50"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-3 flex flex-col gap-2">
                  <Link to={createPageUrl("Contact")} className="block text-center px-5 py-3 rounded-full font-semibold text-white bg-teal-600">
                    Referral
                  </Link>
                  <Link to={createPageUrl("Contact")} className="block text-center px-5 py-3 rounded-full font-semibold text-white bg-orange-500">
                    Contact Us
                  </Link>
                </div>
                <div className="pt-3 border-t mt-3 space-y-2 text-sm text-gray-500">
                  <a href="tel:0420671136" className="flex items-center gap-2"><Phone className="w-4 h-4" /> 0420 671 136</a>
                  <a href="mailto:holisticndiscare@gmail.com" className="flex items-center gap-2"><Mail className="w-4 h-4" /> holisticndiscare@gmail.com</a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Page Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/698816c8974c10bb3e401113/e90c0ae61_6b8f8e73-b136-4c00-a2af-5e5f053f246d.jpeg"
                  alt="Holistic NDIS Care"
                  className="h-10 w-auto"
                />
                <div>
                  <span className="text-lg font-bold text-white">Holistic NDIS Care</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-400">
                NDIS-registered provider dedicated to supporting individuals living with disabilities. Care that feels like family.
              </p>
              <div className="flex gap-3 mt-5">
                {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-teal-600 flex items-center justify-center transition-colors">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2.5 text-sm">
                {NAV_ITEMS.map((item) => (
                  <li key={item.page}>
                    <Link to={createPageUrl(item.page)} className="hover:text-teal-400 transition-colors">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2.5 text-sm">
                {["Community Nursing", "Personal Care", "Life Stage Transition", "Respite Care", "Therapeutic Supports"].map((s) => (
                  <li key={s}>
                    <Link to={createPageUrl("Services")} className="hover:text-teal-400 transition-colors">{s}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 mt-0.5 text-teal-400 shrink-0" />
                  <a href="tel:0420671136" className="hover:text-teal-400 transition-colors">0420 671 136</a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 mt-0.5 text-teal-400 shrink-0" />
                  <a href="mailto:holisticndiscare@gmail.com" className="hover:text-teal-400 transition-colors">holisticndiscare@gmail.com</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 text-teal-400 shrink-0" />
                  <span>Brisbane Northside, Logan, Ipswich, Bayside & South West</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-4 h-4 mt-0.5 text-teal-400 shrink-0" />
                  <span>Mon – Sun: 8am – 6pm</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>© 2026 Holistic NDIS Care. All rights reserved. ABN: 93 674 900 737</p>
          <p>Registered NDIS Provider</p>
        </div>
        </div>
      </footer>
    </div>
  );
}