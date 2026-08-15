"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { Target, Eye, ShieldCheck, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-6"
          >
            <span className="text-sm font-medium text-foreground">Who We Are</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-extrabold text-foreground mb-6"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Sri Management</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            We are a premier ISO consulting firm dedicated to helping businesses worldwide achieve compliance, improve their processes, and secure their operations through expert guidance and AI-powered tools.
          </motion.p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <GlassCard className="h-full p-10 border-primary/20 bg-gradient-to-br from-primary/10 to-transparent">
              <Target className="w-10 h-10 text-primary mb-6" />
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To simplify and accelerate the ISO certification process for enterprises of all sizes, ensuring high-quality standards and regulatory compliance without the traditional administrative burden.
              </p>
            </GlassCard>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <GlassCard className="h-full p-10 border-accent/20 bg-gradient-to-br from-accent/10 to-transparent">
              <Eye className="w-10 h-10 text-accent mb-6" />
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To become the global leader in compliance and quality management, pioneering the integration of Artificial Intelligence into traditional auditing and consultancy practices.
              </p>
            </GlassCard>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-foreground">Why Choose Us?</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            <GlassCard className="p-8 flex gap-6 items-start">
              <div className="p-4 rounded-full bg-blue-500/10 border border-blue-500/20 shrink-0">
                <ShieldCheck className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Unmatched Expertise</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Our team consists of lead auditors and industry veterans who have guided hundreds of companies to successful certification.</p>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            <GlassCard className="p-8 flex gap-6 items-start">
              <div className="p-4 rounded-full bg-purple-500/10 border border-purple-500/20 shrink-0">
                <Users className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Client-Centric Approach</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">We don't believe in one-size-fits-all. We tailor our consultancy, training, and auditing frameworks to fit your unique organizational culture.</p>
              </div>
            </GlassCard>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
