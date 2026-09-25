import Link from "next/link";

const footerLinks = [
  { name: "Privacy Policy", href: "#privacy-policy" },
  { name: "Terms of Service", href: "#terms-of-service" },
  { name: "Compliance", href: "#compliance" },
  { name: "SLA", href: "#sla" },
  { name: "Global Support", href: "#global-support" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1200px] px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="font-display text-[1.7rem] font-semibold tracking-[-0.06em] text-foreground">
            TechVision
          </Link>

          <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground md:flex-1 md:justify-center">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <p className="text-sm text-muted-foreground md:text-right">
            © 2024 TechVision Enterprise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
