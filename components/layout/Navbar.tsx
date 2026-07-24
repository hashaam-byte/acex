"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { NAV_LINKS } from "@/lib/nav";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full px-3 pt-3 sm:px-4 sm:pt-4">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-3 py-2 transition-all duration-300 sm:pl-4 sm:pr-2 ${
          scrolled
            ? "border-border bg-bg/75 shadow-[var(--shadow-card)] backdrop-blur-xl"
            : "border-white/[0.06] bg-bg/40 backdrop-blur-md"
        }`}
      >
        <Link href="/" className="flex shrink-0 items-center gap-2" onClick={() => setOpen(false)}>
          <Image
            src="/logo/acex-mark.png"
            alt="AceX Trading Academy"
            width={30}
            height={30}
            className="h-7 w-7 shrink-0"
            priority
          />
          <span className="font-heading text-sm font-semibold tracking-tight text-text">AceX Trading Academy</span>
        </Link>

        <div className="hidden items-center gap-0.5 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-[13px] font-medium text-text-muted transition-colors hover:bg-surface-2 hover:text-text"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-1.5 lg:flex">
          <ThemeToggle />
          <Link
            href="/dashboard"
            className="rounded-full px-3.5 py-2 text-[13px] font-medium text-text-muted transition-colors hover:text-text"
          >
            Log in
          </Link>
          <Link
            href="/community"
            className="rounded-full bg-text px-4 py-2 text-[13px] font-semibold text-bg transition-opacity hover:opacity-85"
          >
            Join Now
          </Link>
        </div>

        <div className="flex items-center gap-1.5 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-text"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl border border-border bg-bg/95 px-4 pb-5 pt-3 shadow-[var(--shadow-premium)] backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-text-muted transition-colors hover:bg-surface-2 hover:text-text"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-border pt-4">
              <Link
                href="/dashboard"
                onClick={() => setOpen(false)}
                className="rounded-full border border-border px-3 py-2.5 text-center text-sm font-semibold text-text"
              >
                Log in
              </Link>
              <Link
                href="/community"
                onClick={() => setOpen(false)}
                className="rounded-full bg-text px-3 py-2.5 text-center text-sm font-semibold text-bg"
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}