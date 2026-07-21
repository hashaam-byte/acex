import { MessageCircle, Send, Phone, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const CHANNELS = [
  {
    icon: MessageCircle,
    name: "Discord",
    description: "Live chat, trade reviews, and daily market talk with the full community.",
    members: "12,400+ members",
    href: "https://discord.com",
    tone: "border-indigo-400/30 bg-indigo-400/10 text-indigo-400",
  },
  {
    icon: Send,
    name: "Telegram",
    description: "Fast announcements, session recaps, and quick-fire Q&A.",
    members: "9,800+ subscribers",
    href: "https://t.me/AceXTradingAcademy",
    tone: "border-brand-blue/30 bg-brand-blue/10 text-brand-blue",
  },
  {
    icon: Phone,
    name: "WhatsApp",
    description: "A tighter circle for accountability groups and study partners.",
    members: "2,100+ members",
    href: "https://wa.me",
    tone: "border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan",
  },
];

export function CommunityChannels() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-8">
      <Reveal className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {CHANNELS.map(({ icon: Icon, name, description, members, href, tone }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="transition-premium group flex flex-col rounded-3xl border border-border bg-surface p-7 hover:-translate-y-1 hover:border-border-strong hover:shadow-[var(--shadow-premium)]"
          >
            <div className={`flex h-12 w-12 items-center justify-center rounded-full border ${tone}`}>
              <Icon className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <h3 className="mt-5 flex items-center gap-1.5 font-heading text-lg font-semibold text-text">
              {name}
              <ExternalLink className="h-3.5 w-3.5 text-text-faint transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">{description}</p>
            <p className="mt-4 font-numeric text-xs font-medium text-text-faint">{members}</p>
          </a>
        ))}
      </Reveal>
    </section>
  );
}