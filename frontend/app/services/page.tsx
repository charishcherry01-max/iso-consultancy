"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { 
  GraduationCap, 
  FileText, 
  Search, 
  ClipboardCheck, 
  Award, 
  Bot, 
  AlertTriangle, 
  Layers 
} from "lucide-react";
import { AnimatedButton } from "@/components/AnimatedButton";

const services = [
  {
    icon: GraduationCap,
    title: "ISO Training",
    description: "Comprehensive training modules for your entire organization, tailored to specific ISO standards.",
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "AI-assisted generation and management of required ISO documents, manuals, and procedures.",
  },
  {
    icon: Search,
    title: "Gap Analysis",
    description: "Detailed assessment of your current systems against ISO requirements to identify areas for improvement.",
  },
  {
    icon: ClipboardCheck,
    title: "Internal Audit",
    description: "Rigorous internal auditing services to ensure continuous compliance and readiness for certification.",
  },
  {
    icon: Award,
    title: "Certification Support",
    description: "End-to-end guidance through the certification process with external auditing bodies.",
  },
  {
    icon: Bot,
    title: "AI Compliance Assistant",
    description: "24/7 intelligent chatbot to answer compliance questions and guide implementation steps.",
  },
  {
    icon: AlertTriangle,
    title: "Risk Assessment",
    description: "Identify, evaluate, and mitigate organizational risks with our automated risk management tools.",
  },
  {
    icon: Layers,
    title: "Integrated Management",
    description: "Seamlessly combine multiple ISO standards (e.g., 9001, 14001, 27001) into a single unified system.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-6"
          >
            <span className="text-sm font-medium text-white">Our Solutions</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-white mb-6"
          >
            Comprehensive ISO Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Leverage our cutting-edge AI platform and expert consultants to streamline every aspect of your ISO compliance journey.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <GlassCard className="h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors border border-primary/20">
                    <service.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                <div className="mt-auto">
                  <AnimatedButton variant="outline" size="sm" className="w-full">
                    Learn More
                  </AnimatedButton>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
