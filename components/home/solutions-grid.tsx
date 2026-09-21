import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/lib/site-data";

export function SolutionsGrid() {
  return (
    <section id="solutions" className="relative py-24 lg:py-32">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground">
              Solutions
          </h2>
          <p className="mt-5 font-mono text-xs uppercase tracking-[0.25em] text-foreground">
             One platform, four powerful products
          </p>
          <p className="mt-8 max-w-4xl text-lg md:text-xl leading-relaxed text-muted-foreground">
            Buy each product individually or bundle them into a suite. Everything is
            cloud-based, secure, and built to work together.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.slug} className="relative">
              <div className="absolute -left-2 top-3 h-full w-full border border-primary" />
            <Link
              href={`/solutions#${product.slug}`}
              className="group relative overflow-hidden  border border-border transition-transform duration-300 ease-out hover:scale-[1.03] hover:z-20"
            >
              <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-foreground">
                      {product.short}
                    </span>
                    <h3 className="mt-3 font-display text-2xl tracking-tight">{product.name}</h3>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <p className="mt-3 text-muted-foreground leading-relaxed">{product.tagline}</p>
                <p className="mt-4 text-sm text-muted-foreground">
                  From{" "}
                  <span className="font-medium text-foreground">${product.startingPrice}</span>/mo
                </p>
              </div>
            </Link>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
}
