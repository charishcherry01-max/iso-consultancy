import { GlassCard } from "@/components/GlassCard";

export default function DocsPage() {
  return (
    <div className="container mx-auto pt-32 pb-20 px-4 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-8">Document Center</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <GlassCard className="p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">ISO 9001 Templates</h2>
          <p className="text-muted-foreground mb-6">Access all standard operating procedures and quality manual templates.</p>
          <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-foreground rounded-lg transition-colors font-medium">Browse Documents</button>
        </GlassCard>
        <GlassCard className="p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Audit Reports</h2>
          <p className="text-muted-foreground mb-6">View and download your recent internal and external audit reports.</p>
          <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-foreground rounded-lg transition-colors font-medium">View Reports</button>
        </GlassCard>
      </div>
    </div>
  );
}
