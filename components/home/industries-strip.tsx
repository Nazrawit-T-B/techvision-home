import Link from "next/link";
import { industries } from "@/lib/site-data";
import { ArrowRight } from "lucide-react";

export function IndustriesStrip() {
  return (
    <section className="relative pt-4 pb-16 lg:pt-6 lg:pb-20">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="font-mono text-xs tracking-widest text-foreground uppercase underline underline-offset-4">
              Industries
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-[52px] font-semibold tracking-tight">
              Made for the way you work
            </h2>
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry) => (
            <div key={industry.name} className="border border-border bg-card p-6 transition-colors hover:bg-accent/40">
              <h3 className="font-display text-xl tracking-tight">{industry.name}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{industry.description}</p>
            </div>
          ))}
          <div className="flex items-center justify-between bg-primary p-7 text-primary-foreground">
            <span className="font-display text-2xl tracking-tight">Your sector?</span>
            <Link
              href="/contact"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/20 hover:bg-background/30 transition-colors"
              aria-label="Contact us about your industry"
            >
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
