import Image from "next/image";
import { PortraitCard } from "./PortraitCard";
import { Reveal } from "@/components/ui/Reveal";

const ROLES = ["Professional Trader", "Tutor", "Mentor", "Financial Analyst"];

const INFO = [
  { icon: "/icons/contact-location.png", label: "Location", value: "Nigeria 🇳🇬" },
  { icon: "/icons/contact-email.png", label: "Email", value: "infonownation@gmail.com" },
  {
    icon: "/icons/contact-availability.png",
    label: "Availability",
    value: "Available to discuss with proven traders",
  },
];

export function AboutIntro() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 h-[380px] w-[380px] rounded-full bg-brand-blue/15 blur-[120px]"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-8 lg:py-24">
        <Reveal className="relative z-10 order-2 lg:order-1">
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-text sm:text-5xl">
            About <span className="text-brand-blue">AceX</span>
          </h1>

          <div className="mt-3 flex flex-wrap gap-2">
            {ROLES.map((role, i) => (
              <span key={role} className="flex items-center text-xs text-text-faint">
                {role}
                {i < ROLES.length - 1 && <span className="mx-2 text-border-strong">&middot;</span>}
              </span>
            ))}
          </div>

          <p className="mt-6 max-w-[56ch] text-[15px] leading-relaxed text-text-muted">
            I am AceX — a seasoned crypto trader. I strive to
            attain complete financial freedom, and to put others on that same path through proper
            education, mentorship, and proven trading knowledge.
          </p>

          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap">
            {INFO.map(({ icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 rounded-xl border border-border bg-surface px-3.5 py-2.5"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center">
                  <Image src={icon} alt="" width={24} height={24} className="h-full w-full object-contain" />
                </div>
                <div>
                  <p className="text-[10px] text-text-faint">{label}</p>
                  <p className="text-xs font-medium text-text">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <blockquote className="transition-premium mt-9 max-w-md rounded-2xl border border-border bg-surface p-6 hover:border-border-strong hover:shadow-[var(--shadow-card)]">
            <p className="font-heading text-lg font-medium leading-snug text-text">
              &ldquo;Trading is not about predicting the future -
              <br />
              It is about using the past to understand the present.&rdquo;
            </p>
            <footer className="mt-3 text-xs text-text-faint">— AceX</footer>
          </blockquote>
        </Reveal>

        <Reveal delay={100} className="relative z-10 order-1 lg:order-2">
          <PortraitCard />
        </Reveal>
      </div>
    </section>
  );
}