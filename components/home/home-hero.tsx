"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HomeHero() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  return (
    <section className="relative bg-background border-b border-border">

      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 pt-44 lg:pt-64 pb-28">
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-foreground">
            IT Infrastructure Solutions
          </p>

          <h1 className="mt-6 max-w-5xl font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight">
            Transform your Organization with Smart
            <br className="hidden md:block" /> digital Solutions
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            LMS, Education ERP, ERP, and HR Management — one cloud platform to run your school,
            university, or business smarter. Built for scale, backed by local Ethiopian support.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-14 text-base shadow-lg shadow-primary/30 group"
            >
              <Link href="/contact">
                Request Demo
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className=" h-14 px-8 text-base border-border hover:bg-accent"
            >
              <Link href="/solutions">VIEW SERVICES</Link>
            </Button>
          </div>

          <div className="mt-10 w-full border-t border-border pt-5 grid grid-cols-1 sm:grid-cols-3 font-mono text-xs text-muted-foreground">
            {["No credit card required", "14-day free trial", "Local support"].map((item) => (
              <span key={item} className="text-center">
                {item}
              </span>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
