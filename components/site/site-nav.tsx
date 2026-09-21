"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/site-data";
import { PageLoader } from "@/components/site/page-loader";
import { ThemeToggle } from "@/components/site/theme-toggle";

export function SiteNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href === pathname) return;
    e.preventDefault();
    
    setIsLoading(true);
    setIsMobileMenuOpen(false);
    
    setTimeout(() => {
      router.push(href);
    }, 200);
  };

  useEffect(() => {
  setIsLoading(false);
}, [pathname]);

  return (
  <>
    {isLoading && <PageLoader />}

    <header className="fixed top-0 left-0 right-0 z-50 bg-background">
      <nav className="mx-auto max-w-[1320px] bg-background border border-border rounded-2xl">
        <div className="flex h-20 items-center justify-between px-5 lg:px-8">
          <Link href="/" onClick={(e) => handleNavigation(e, "/")} className="flex items-center gap-2.5 group">
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
                  onClick={(e) => handleNavigation(e, link.href)}
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
            <ThemeToggle />
            <Button asChild variant="ghost" size="sm" className="rounded-full text-foreground/80 hover:text-foreground">
              <Link href="/contact">Sign in</Link>
            </Button>
            <Button
              asChild
              size="sm"
              className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-5 shadow-sm shadow-primary/30"
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
                onClick={(e) => handleNavigation(e, link.href)}
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
  </>
  );
}
