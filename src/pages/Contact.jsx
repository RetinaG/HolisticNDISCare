import React from "react";
import PageBanner from "../components/shared/PageBanner";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "../components/ContactForm";

const CONTACT_INFO = [
  { icon: Phone, label: "Phone", value: "0420 671 136", href: "tel:0420671136" },
  { icon: Mail, label: "Email", value: "holisticndiscare@gmail.com", href: "mailto:holisticndiscare@gmail.com" },
  { icon: MapPin, label: "Service Areas", value: "Brisbane Northside, Logan, Ipswich, Bayside, Brisbane South West" },
  { icon: Clock, label: "Hours", value: "Mon – Sun: 8am – 6pm" },
];

export default function Contact() {

  return (
    <div>
      <PageBanner
        title="CONTACT US"
        subtitle="Get in touch with our team for enquiries, referrals, or to learn more about our services"
      />

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Have questions about our NDIS services? We'd love to hear from you. Reach out through any of the channels below or fill in the form.
              </p>

              <div className="space-y-6">
                {CONTACT_INFO.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 font-medium">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-gray-900 font-semibold hover:text-teal-600 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-gray-900 font-semibold">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-10 rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-52 bg-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1829169.0!2d152.9!3d-27.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b93b5bbda44b7db%3A0x4a1e0e9ce1f6c9e9!2sBrisbane%20QLD!5e0!3m2!1sen!2sau!4v1600000000000!5m2!1sen!2sau"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-3"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}