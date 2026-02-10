import React, { useState } from "react";
import PageBanner from "../components/shared/PageBanner";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { base44 } from "@/api/base44Client";
import { toast } from "sonner";


const CONTACT_INFO = [
  { icon: Phone, label: "Phone", value: "0420 671 136", href: "tel:0420671136" },
  { icon: Mail, label: "Email", value: "holisticndiscare@gmail.com", href: "mailto:holisticndiscare@gmail.com" },
  { icon: MapPin, label: "Service Areas", value: "Brisbane Northside, Logan, Ipswich, Bayside, Brisbane South West" },
  { icon: Clock, label: "Hours", value: "Mon – Sun: 8am – 6pm" },
];

const SERVICES_LIST = [
  "Complex Nursing Care",
  "Wound Care",
  "Medication Management",
  "Support Coordination",
  "Travel & Transport",
  "Cleaning Services",
  "Support Worker",
  "Life Skills Development",
  "Hospital to Home Transition",
  "Personal Activities",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (field, value) => setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    
    try {
      // Save to database
      await base44.entities.ContactInquiry.create({
        name: form.name,
        email: form.email,
        phone: form.phone,
        service: form.service || "Other",
        message: form.message,
        status: "new"
      });
      
      setSending(false);
      setSent(true);
    } catch (error) {
      setSending(false);
      toast.error("Failed to send message. Please try again or call us directly.");
      console.error(error);
    }
  };

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
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Get In Touch</h2>
                <p className="text-gray-400 mb-8">Fill in the form below and we'll get back to you shortly.</p>

                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-20 h-20 mx-auto rounded-full bg-teal-50 flex items-center justify-center mb-6">
                      <CheckCircle className="w-10 h-10 text-teal-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-gray-500">Your message has been sent. We'll get back to you soon.</p>
                    <Button
                      onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", service: "", message: "" }); }}
                      variant="outline"
                      className="mt-6 rounded-full"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          value={form.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          required
                          className="h-12 rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          placeholder="Your phone number"
                          value={form.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          className="h-12 rounded-xl"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your email"
                          value={form.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          required
                          className="h-12 rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interested In</Label>
                        <Select value={form.service} onValueChange={(v) => handleChange("service", v)}>
                          <SelectTrigger className="h-12 rounded-xl">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {SERVICES_LIST.map((s) => (
                              <SelectItem key={s} value={s}>{s}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us how we can help..."
                        value={form.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        required
                        className="min-h-[140px] rounded-xl"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={sending}
                      className="w-full h-12 rounded-xl bg-teal-600 hover:bg-teal-700 text-base font-semibold shadow-lg shadow-teal-600/25"
                    >
                      {sending ? (
                        <span className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-4 h-4" /> Submit Now
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}