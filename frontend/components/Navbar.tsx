"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { AnimatedButton } from "./AnimatedButton";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Standards", href: "/standards" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Doc Center", href: "/docs" },
    { name: "Training", href: "/training" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-transparent",
          isScrolled
            ? "glass py-4 border-border/50 shadow-lg"
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <Image src="/logo.png" alt="Sri Management Logo" width={40} height={40} className="rounded-xl object-contain bg-white" />
            <span className="text-xl font-heading font-bold tracking-tight text-foreground">
              Sri Management
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <AnimatedButton href="/register">
              Register
            </AnimatedButton>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 glass pt-24 pb-8 px-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-heading font-bold text-foreground border-b border-border/50 pb-4"
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-auto flex flex-col gap-4">
              <AnimatedButton href="/register" className="w-full justify-center">
                Register
              </AnimatedButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
