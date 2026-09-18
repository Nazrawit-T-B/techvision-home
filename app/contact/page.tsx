import { SiteNav } from "@/components/site/site-nav"
import { SiteFooter } from "@/components/site/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f3] text-[#1d2430]">
      <SiteNav />

      <section className="mx-auto max-w-[1200px] px-4 pb-14 pt-32 sm:px-6 lg:px-8 lg:pt-36">
        <div className="mx-auto max-w-[980px] pt-6 text-center sm:pt-10">
          <h1 className="mx-auto max-w-[820px] text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-[0.94] tracking-[-0.06em] text-[#1e2430]">
            Let&apos;s Build Reliable
            <span className="mt-2 block">Infrastructure Together</span>
          </h1>

          <p className="mx-auto mt-7 max-w-[780px] text-base text-[#4f5865] sm:text-lg">
            Tell us about your organization and what you want to improve. Our team will get back to you
            within one business day.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.6fr_0.9fr]">
          <div className="rounded-[18px] border border-[#d7d7d4] bg-[#f7f7f5] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.35)] sm:p-8">
            <h2 className="text-[clamp(1.7rem,2vw,2.3rem)] font-semibold tracking-[-0.04em] text-[#1d2430]">
              Schedule a Consultation
            </h2>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#5a636d]">
                  First Name
                </label>
                <Input className="h-12 rounded-none border-[#d2d5d9] bg-transparent text-base text-[#1d2430] placeholder:text-[#8b9199]" />
              </div>

              <div>
                <label className="mb-2 block text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#5a636d]">
                  Last Name
                </label>
                <Input className="h-12 rounded-none border-[#d2d5d9] bg-transparent text-base text-[#1d2430] placeholder:text-[#8b9199]" />
              </div>

              <div>
                <label className="mb-2 block text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#5a636d]">
                  Work Email
                </label>
                <Input className="h-12 rounded-none border-[#d2d5d9] bg-transparent text-base text-[#1d2430] placeholder:text-[#8b9199]" />
              </div>

              <div>
                <label className="mb-2 block text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#5a636d]">
                  Phone Number
                </label>
                <Input className="h-12 rounded-none border-[#d2d5d9] bg-transparent text-base text-[#1d2430] placeholder:text-[#8b9199]" />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#5a636d]">
                  Company Name
                </label>
                <Input className="h-12 rounded-none border-[#d2d5d9] bg-transparent text-base text-[#1d2430] placeholder:text-[#8b9199]" />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#5a636d]">
                  Area of Interest
                </label>
                <div className="relative">
                  <select className="h-12 w-full appearance-none rounded-none border border-[#d2d5d9] bg-transparent px-3 text-base text-[#1d2430] outline-none">
                    <option>Network Solutions</option>
                    <option>Infrastructure</option>
                    <option>Security</option>
                    <option>Managed Services</option>
                  </select>
                  <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[#5a636d]">
                    ▾
                  </span>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#5a636d]">
                  Project Details
                </label>
                <textarea
                  rows={5}
                  className="w-full resize-none rounded-none border border-[#d2d5d9] bg-transparent p-3 text-base text-[#1d2430] placeholder:text-[#8b9199] outline-none"
                />
              </div>
            </div>

            <Button
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#1e2a3a] px-6 py-5 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-white hover:bg-[#172131]"
            >
              Submit Request
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <aside className="self-start rounded-[18px] border border-[#cfcfc9] bg-[#f4f3f0] p-5 shadow-[0_12px_30px_rgba(18,28,38,0.08),0_0_0_1px_rgba(17,24,39,0.04)] sm:p-8">
            <h3 className="text-[clamp(1.7rem,2vw,2.4rem)] font-semibold tracking-[-0.04em] text-[#1d2430]">
              Contact Information
            </h3>

            <div className="mt-7 space-y-6">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#dff6eb] text-[#2b8d64]">
                  <MapPin className="h-3.5 w-3.5" />
                </span>
                <div>
                  <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#5a636d]">
                    Headquarters
                  </p>
                  <p className="mt-1 text-base text-[#1d2430]">Bole Road</p>
                  <p className="text-base text-[#1d2430]">Addis Ababa, Ethiopia</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#dff6eb] text-[#2b8d64]">
                  <Phone className="h-3.5 w-3.5" />
                </span>
                <div>
                  <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#5a636d]">
                    Phone
                  </p>
                  <p className="mt-1 text-base text-[#1d2430]">+251 11 123 4567</p>
                  <p className="text-base text-[#1d2430]">Mon-Fri, 8:30am-11:30pm EAT</p>
                  <p className="text-base text-[#1d2430]">Local Ethiopian Support</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#dff6eb] text-[#2b8d64]">
                  <Mail className="h-3.5 w-3.5" />
                </span>
                <div>
                  <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#5a636d]">
                    Email
                  </p>
                  <p className="mt-1 text-base text-[#1d2430]">hello@techvision.et</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}


