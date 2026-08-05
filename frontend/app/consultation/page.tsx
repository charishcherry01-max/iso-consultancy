"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { AnimatedButton } from "@/components/AnimatedButton";
import { Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function ConsultationPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="pt-32 pb-20 min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-6">
              Book Your Free <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Consultation</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Take the first step towards streamlined ISO compliance. Our AI experts will help you identify the best path forward for your organization.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassCard className="p-8 md:p-12 relative overflow-hidden border-primary/20">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-20"
                >
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-400" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold text-white mb-4">Request Received!</h2>
                  <p className="text-muted-foreground mb-8 max-w-md">
                    Thank you for reaching out. One of our compliance specialists will contact you shortly to schedule your consultation.
                  </p>
                  <AnimatedButton href="/" variant="outline">
                    Return Home
                  </AnimatedButton>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-white">First Name</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-white">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white">Work Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-white">Company Name</label>
                    <input 
                      type="text" 
                      id="company" 
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Acme Corp"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="standard" className="text-sm font-medium text-white">ISO Standard of Interest</label>
                    <select 
                      id="standard"
                      className="w-full px-4 py-3 rounded-xl bg-[#0a1526] border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none"
                    >
                      <option value="9001">ISO 9001 (Quality Management)</option>
                      <option value="27001">ISO 27001 (Information Security)</option>
                      <option value="14001">ISO 14001 (Environmental Management)</option>
                      <option value="45001">ISO 45001 (Health & Safety)</option>
                      <option value="22000">ISO 22000 (Food Safety)</option>
                      <option value="21001">ISO 21001 (Educational Organizations)</option>
                      <option value="42001">ISO 42001 (AI Management)</option>
                      <option value="22301">ISO 22301 (Business Continuity)</option>
                      <option value="ims">IMS (Integrated Management System)</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-white">How can we help you?</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder="Tell us a bit about your current compliance status and goals..."
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <button type="submit" className="w-full group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-medium rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(37,99,235,0.4)]">
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative flex items-center gap-2">
                        Request Consultation <Send className="w-4 h-4" />
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
