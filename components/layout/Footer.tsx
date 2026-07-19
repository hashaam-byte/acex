"use client";

import Link from "next/link";
import Image from "next/image";
import { Send, MessageCircle } from "lucide-react";
import { FOOTER_LINKS } from "@/lib/nav";
import { YoutubeIcon, XIcon, InstagramIcon } from "@/components/ui/SocialIcons";

const SOCIALS = [
  { label: "Telegram", href: "https://t.me", Icon: Send },
  { label: "Discord", href: "https://discord.com", Icon: MessageCircle },
  { label: "YouTube", href: "https://youtube.com", Icon: YoutubeIcon },
  { label: "X", href: "https://x.com", Icon: XIcon },
  { label: "Instagram", href: "https://instagram.com", Icon: InstagramIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-elevated">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/logo/acex-mark.png"
                alt="AceX Trading Academy"
                width={30}
                height={30}
                className="h-7 w-7"
              />
              <span className="font-heading text-sm font-semibold text-text">AceX</span>
            </Link>
            <p className="mt-3 max-w-[26ch] text-[13px] leading-relaxed text-text-faint">
              Learn. Trade. Grow. Structured education and mentorship for Crypto, Forex &amp; Stocks.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-text-faint transition-colors hover:border-border-strong hover:text-brand-cyan"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Quick Links" links={FOOTER_LINKS.quickLinks} />
          <FooterColumn title="Resources" links={FOOTER_LINKS.resources} />
          <FooterColumn title="Legal" links={FOOTER_LINKS.legal} />

          <div className="col-span-2 md:col-span-1">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-text-faint">
              Newsletter
            </h4>
            <p className="mt-3 text-[13px] leading-relaxed text-text-faint">
              Weekly market notes, no noise.
            </p>
            <form className="mt-3 flex items-center gap-1.5" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="you@email.com"
                className="w-full min-w-0 rounded-full border border-border bg-surface px-3 py-2 text-xs text-text placeholder:text-text-faint focus:border-brand-blue"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-brand-blue px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand-blue-dim"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-text-faint sm:flex-row">
          <p>&copy; {new Date().getFullYear()} AceX Trading Academy. All rights reserved.</p>
          <p className="max-w-md text-center sm:text-right">
            Trading involves risk. Educational content only — not financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-text-faint">
        {title}
      </h4>
      <ul className="mt-3 flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-[13px] text-text-muted transition-colors hover:text-text"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
