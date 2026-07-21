import Image from "next/image";
import { Check } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Reveal } from "@/components/ui/Reveal";

const PLANS = [
  {
    name: "Starter",
    icon: "/icons/vip-starter.png",
    tagline: "For Beginners",
    price: "$55",
    features: ["Daily Vip Signals", "Community Access", "Weekly Market Update", "Basic Support"],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Pro Trader",
    icon: "/icons/vip-pro.png",
    tagline: "For Active Traders",
    price: "$105",
    features: [
      "All Starter Features",
      "Live Virtual Classes",
      "Trading Signals (Basic)",
      "Trade Reviews",
      "Priority Support",
    ],
    cta: "Join Now",
    featured: true,
    badge: "Most Popular",
  },
  {
    name: "Elite VIP",
    icon: "/icons/vip-elite.png",
    tagline: "Everything Included",
    price: "$255",
    features: [
      "All Pro Features",
      "Portfolio Review",
      "1-on-1 Mentorship",
      "Exclusive Discord Access",
      "Private Live Sessions",
    ],
    cta: "Go Elite",
    featured: false,
    gold: true,
  },
];

export function MembershipPlans() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-8">
      <Reveal className="mx-auto max-w-xl text-center">
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-text sm:text-4xl">
          Membership <span className="text-brand-blue">Plans</span>
        </h2>
        <p className="mt-3 text-sm text-text-muted">
          Choose the perfect plan for your trading journey.
        </p>
      </Reveal>

      <Reveal delay={100} className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {PLANS.map((plan) => (
          <SpotlightCard
            key={plan.name}
            className={`transition-premium relative flex flex-col rounded-3xl border p-7 hover:shadow-[var(--shadow-premium)] ${
              plan.featured
                ? "border-brand-blue bg-surface shadow-[0_0_50px_rgba(37,99,235,0.25)] lg:-translate-y-3"
                : plan.gold
                  ? "border-amber-300/40 bg-gradient-to-b from-amber-300/[0.06] to-surface"
                  : "border-border bg-surface"
            }`}
          >
            {plan.badge && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-blue px-3 py-1 text-[10px] font-semibold text-white">
                {plan.badge}
              </span>
            )}

            <div className="flex h-11 w-11 items-center justify-center">
              <Image src={plan.icon} alt="" width={44} height={44} className="h-full w-full object-contain" />
            </div>

            <h3 className="mt-3 font-heading text-lg font-semibold text-text">{plan.name}</h3>
            <p className="mt-1 text-xs text-text-faint">{plan.tagline}</p>

            <p className="mt-5 flex items-baseline gap-1">
              <span
                className={`font-numeric text-4xl font-semibold ${
                  plan.gold ? "text-amber-300" : "text-text"
                }`}
              >
                {plan.price}
              </span>
              <span className="text-sm text-text-faint">/month</span>
            </p>

            <ul className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2.5 text-sm text-text">
                  <Check
                    className={`h-4 w-4 shrink-0 ${plan.gold ? "text-amber-300" : "text-brand-cyan"}`}
                    strokeWidth={2}
                  />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              type="button"
              className={`mt-8 w-full rounded-full py-3 text-sm font-semibold transition-colors ${
                plan.gold
                  ? "bg-amber-300 text-[#1a1200] hover:bg-amber-200"
                  : plan.featured
                    ? "bg-brand-blue text-white hover:bg-brand-blue-dim"
                    : "border border-border-strong text-text hover:bg-surface-2"
              }`}
            >
              {plan.cta}
            </button>
          </SpotlightCard>
        ))}
      </Reveal>
    </section>
  );
}