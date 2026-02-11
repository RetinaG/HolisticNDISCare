import React, { useState } from "react";
import { toast } from "sonner";
import { base44 } from "@/api/base44Client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

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

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (field, value) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit triggered", form);

    setSending(true);

    // Basic validation
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      setSending(false);
      return;
    }

    try {
      // Ensure Select has a default value
      const serviceValue = form.service || "Other";

      console.log("Calling function with:", { name: form.name, email: form.email, phone: form.phone, service: serviceValue });

      const response = await base44.functions.invoke("sendReferralEmail", {
        name: form.name,
        email: form.email,
        phone: form.phone,
        service: serviceValue,
        message: form.message,
      });

      console.log("Function response received:", response);
      console.log("Response status:", response?.status);
      console.log("Response data:", response?.data);
      
      // Check if the response indicates success
      if (response?.status === 200 || response?.data?.success !== false) {
        console.log("Success - showing confirmation");
        toast.success("✓ Message sent successfully! We'll get back to you soon.", {
          duration: 5000,
          position: 'top-center'
        });
        
        setSent(true);
        setForm({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        console.log("Function returned failure");
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      console.error("Error details:", error.message, error.stack);
      toast.error("Error sending message: " + error.message);
    } finally {
      console.log("Setting sending to false");
      setSending(false);
    }
  };

  return (
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
  );
}