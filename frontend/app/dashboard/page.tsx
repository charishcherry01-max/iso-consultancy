import { GlassCard } from "@/components/GlassCard";
import { UserX, Plus } from "lucide-react";
import { AnimatedButton } from "@/components/AnimatedButton";

export default function DashboardPage() {
  // Simulate database state for clients
  const hasRegisteredClients = false;

  return (
    <div className="container mx-auto pt-32 pb-20 px-4 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">Dashboard</h1>
        {hasRegisteredClients && (
          <AnimatedButton href="/register" className="hidden sm:flex">
            <Plus className="w-4 h-4 mr-2" /> Add Client
          </AnimatedButton>
        )}
      </div>

      {!hasRegisteredClients ? (
        <GlassCard className="w-full py-24 flex flex-col items-center justify-center text-center border-dashed border-2 border-white/20">
          <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6 shadow-inner">
            <UserX className="w-10 h-10 text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-3">No Clients Registered Yet</h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            Your dashboard is currently empty. Once a client registers or is added to the system, their profile and compliance metrics will appear here.
          </p>
          <AnimatedButton href="/register">
            Register New Client
          </AnimatedButton>
        </GlassCard>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard className="p-6">
            <h2 className="text-xl font-semibold text-foreground mb-2">Active Projects</h2>
            <p className="text-3xl font-bold text-blue-400">12</p>
          </GlassCard>
          <GlassCard className="p-6">
            <h2 className="text-xl font-semibold text-foreground mb-2">Pending Audits</h2>
            <p className="text-3xl font-bold text-blue-400">3</p>
          </GlassCard>
          <GlassCard className="p-6">
            <h2 className="text-xl font-semibold text-foreground mb-2">Compliance Score</h2>
            <p className="text-3xl font-bold text-blue-400">98%</p>
          </GlassCard>
        </div>
      )}
    </div>
  );
}
