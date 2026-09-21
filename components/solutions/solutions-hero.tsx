import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SolutionsHero() {
  return (
    <section className="relative overflow-hidden bg-[#FCF8FA] pt-32 pb-24 border-b border-border">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-12">
        <div className="flex max-w-4xl flex-col gap-4">
          <span className="font-mono text-[14px] uppercase tracking-widest text-[#374151]">
            Enterprise Solutions
          </span>

          <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-[#111827] lg:text-[64px] lg:leading-[72px] lg:tracking-[-1.28px]">
            Powerful products for learning, operations, and people
          </h1>

          <p className="max-w-[640px] text-lg text-[#45464C]">
            Each TechVision product is a complete, cloud-based system on its own
            - and even more powerful together. Buy what you need, scale when
            you&apos;re ready.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4">
            <Link
              href="#lms"
              className="inline-flex items-center justify-center gap-2 rounded-[3px] bg-[#111827] px-8 py-3 font-mono text-[14px] text-white shadow-[-5px_5px_0_0_#2DB266]"
            >
              Explore Solutions
              <ArrowRight className="h-auto w-auto" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-[3px] border border-[#111827] bg-[#FBF8F8] px-8 py-3 font-mono text-[14px] text-[#111827] shadow-[-5px_5px_0_0_#FCF8FA,-5px_5px_0_1px_#111827]"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
