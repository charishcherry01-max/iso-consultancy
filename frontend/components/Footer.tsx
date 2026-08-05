import Link from "next/link";
import { Twitter, Linkedin, Github } from "lucide-react";
import Image from "next/image";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass border-t border-border/50 mt-auto">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <Image src="/logo.png" alt="Sri Management Logo" width={32} height={32} className="rounded-lg object-contain bg-white" />
              <span className="text-lg font-heading font-bold text-white">
                Sri Management
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Empowering organizations globally with AI-driven ISO compliance, training, and certification solutions.
            </p>
            <div className="flex flex-col gap-2 mb-6">
              <span className="text-sm text-muted-foreground text-left">G-10, 12-12-999, Kiran Heights Appartments, Bharath Nagra, Hyderabad</span>
              <a href="mailto:sri.qci@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">sri.qci@gmail.com</a>
              <a href="tel:+919396884261" className="text-sm text-muted-foreground hover:text-primary transition-colors">+91 93968 84261</a>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li><Link href="/services/training" className="text-sm text-muted-foreground hover:text-white transition-colors">ISO Training</Link></li>
              <li><Link href="/services/documentation" className="text-sm text-muted-foreground hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="/services/audit" className="text-sm text-muted-foreground hover:text-white transition-colors">Internal Audits</Link></li>
              <li><Link href="/services/ai" className="text-sm text-muted-foreground hover:text-white transition-colors">AI Assistance</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Standards</h3>
            <ul className="space-y-3">
              <li><Link href="/standards/9001" className="text-sm text-muted-foreground hover:text-white transition-colors">ISO 9001:2015</Link></li>
              <li><Link href="/standards/27001" className="text-sm text-muted-foreground hover:text-white transition-colors">ISO 27001:2022</Link></li>
              <li><Link href="/standards/14001" className="text-sm text-muted-foreground hover:text-white transition-colors">ISO 14001:2015</Link></li>
              <li><Link href="/standards/45001" className="text-sm text-muted-foreground hover:text-white transition-colors">ISO 45001:2018</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookies" className="text-sm text-muted-foreground hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Sri Management. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-sm text-muted-foreground">Premium AI ISO Platform</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
