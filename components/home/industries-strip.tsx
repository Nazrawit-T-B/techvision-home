import Link from "next/link";
import { industries } from "@/lib/site-data";

export function IndustriesStrip() {
  return (
    <section className="relative pt-4 pb-16 lg:pt-6 lg:pb-20">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground">
              Industries
            </h2>
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.25em] text-foreground">
              Made for the way you work
            </p>
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div key={industry.name} className="relative">
              {/* Offset layer behind the card */}
              <div
                className={`absolute -left-1 top-1 h-full w-full border-l-4 border-b-4 ${
                  index < 4 ? "border border-border" : "border-[#00D38D]"
                }`}
              />

              {/* Actual card */}
              <div className="relative z-10 h-full border border-border bg-background p-6 text-center transition-all duration-300 ease-out hover:scale-[1.03] hover:z-20 hover:bg-accent/40">
                <h3 className="font-display text-xl tracking-tight">
                  {industry.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}

          <div className="relative">
            {/* Offset layer behind the card */}
            <div className="absolute -left-1 top-1 h-full w-full border-l-4 border-b-4 border border-border" />

            {/* Actual card */}
            <Link
              href="/contact"
              className="relative z-10 flex h-full min-h-[150px] items-center justify-center border border border-border bg-background p-6 transition-colors hover:bg-accent/40"
              aria-label="Contact us about your industry"
            >
              <span className="font-display text-2xl uppercase tracking-tight">
                Your sector?
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}