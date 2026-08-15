import { GlassCard } from "@/components/GlassCard";
import { AnimatedButton } from "@/components/AnimatedButton";

export default function TrainingPage() {
  const modules = [
    {
      title: "Awareness",
      description: "Essential training for all employees to understand core ISO standards and compliance principles.",
      progress: 0,
      buttonText: "Start Course",
      buttonClass: "bg-blue-600 hover:bg-blue-700"
    },
    {
      title: "Internal Auditor",
      description: "Advanced certification for compliance officers and designated auditors within the organization.",
      progress: 0,
      buttonText: "Start Course",
      buttonClass: "bg-blue-600 hover:bg-blue-700"
    },
    {
      title: "Lead Auditor",
      description: "Expert-level training to lead external audits and manage complete certification processes.",
      progress: 0,
      buttonText: "Start Course",
      buttonClass: "bg-blue-600 hover:bg-blue-700"
    },
    {
      title: "Lead Implementor",
      description: "Comprehensive training on how to plan, implement, and maintain ISO management systems.",
      progress: 0,
      buttonText: "Start Course",
      buttonClass: "bg-blue-600 hover:bg-blue-700"
    }
  ];

  return (
    <div className="container mx-auto pt-32 pb-20 px-4 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-8 text-center">Training Modules</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {modules.map((mod, index) => (
          <GlassCard key={index} className="p-8 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-3">{mod.title}</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">{mod.description}</p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10">
              <AnimatedButton variant="outline" className="w-full justify-center">
                {mod.buttonText}
              </AnimatedButton>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
