"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/site-data";

export function SiteNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ${
        isScrolled ? "top-4 left-4 right-4" : "top-0 left-0 right-0"
      }`}
    >
      <nav
        className={`mx-auto transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? "bg-background/80 backdrop-blur-xl border border-border rounded-2xl shadow-lg shadow-primary/5 max-w-[1200px]"
            : "bg-transparent max-w-[1320px]"
        }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 px-5 lg:px-8 ${
            isScrolled ? "h-14" : "h-20"
          }`}
        >
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground font-display text-lg shadow-sm shadow-primary/30">
              T
            </span>
            <span className="font-display text-xl tracking-tight">TechVision</span>
          </Link>

          <div className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm transition-colors duration-300 relative group ${
                    active ? "text-foreground" : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button asChild variant="ghost" size="sm" className="inline-flex items-center justify-center gap-2 rounded-[3px] bg-[#111827] px-8 py-3 font-mono text-[14px] text-white shadow-[-5px_5px_0_0_#2DB266]">
              <Link href="/contact">Sign in</Link>
            </Button>
            <Button
              asChild
              size="sm"
              className="inline-flex items-center justify-center rounded-[3px] border border-[#111827] bg-[#FBF8F8] px-8 py-3 font-mono text-[14px] text-[#111827] shadow-[-5px_5px_0_0_#FCF8FA,-5px_5px_0_1px_#111827]"
            >
              <Link href="/contact">Request Demo</Link>
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <div
        className={`lg:hidden fixed inset-0 bg-background z-40 transition-all duration-500 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full px-8 pt-28 pb-8">
          <div className="flex-1 flex flex-col justify-center gap-6">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-4xl font-display text-foreground transition-all duration-500 ${
                  isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? `${i * 60}ms` : "0ms" }}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex gap-4 pt-8 border-t border-border">
            <Button asChild variant="outline" className="flex-1 rounded-full h-14 text-base">
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Sign in
              </Link>
            </Button>
            <Button asChild className="flex-1 bg-primary text-primary-foreground rounded-full h-14 text-base">
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Request Demo
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
