import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="relative pt-4 pb-16 lg:pt-6 lg:pb-20">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <div className="relative overflow-hidden border border-border bg-background px-8 py-12 lg:px-12 lg:py-14">
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-balance">
              Ready to transform your organization?
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Book a personalized demo and see how TechVision can streamline learning, operations,
              and people management — all in one place.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-14 text-base shadow-lg shadow-primary/30 group"
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
                className="rounded-full h-14 px-8 text-base border-border bg-background/60 hover:bg-background"
              >
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
