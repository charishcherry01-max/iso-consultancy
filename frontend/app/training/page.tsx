import { GlassCard } from "@/components/GlassCard";

export default function TrainingPage() {
  return (
    <div className="container mx-auto pt-32 pb-20 px-4 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-8">Training Modules</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <GlassCard className="p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">ISO 27001 Awareness</h2>
            <p className="text-muted-foreground mb-4">Essential security training for all employees to understand data protection principles.</p>
          </div>
          <div className="w-full bg-black/40 rounded-full h-2 mb-4 overflow-hidden border border-white/5">
            <div className="bg-blue-500 h-2 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]" style={{ width: '45%' }}></div>
          </div>
          <button className="w-full py-3 bg-white/10 hover:bg-white/20 text-foreground rounded-lg transition-colors font-medium">Continue Course</button>
        </GlassCard>
        
        <GlassCard className="p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Internal Auditor Training</h2>
            <p className="text-muted-foreground mb-4">Advanced certification for compliance officers and designated auditors within the organization.</p>
          </div>
          <div className="w-full bg-black/40 rounded-full h-2 mb-4 overflow-hidden border border-white/5">
            <div className="bg-blue-500 h-2 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]" style={{ width: '0%' }}></div>
          </div>
          <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-foreground rounded-lg transition-colors font-medium">Start Course</button>
        </GlassCard>
      </div>
    </div>
  );
}
