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
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-bg/80 backdrop-blur-lg"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image
            src="/logo/acex-mark.png"
            alt="AceX Trading Academy"
            width={34}
            height={34}
            className="h-8 w-8 shrink-0"
            priority
          />
          <span className="font-heading text-[15px] font-semibold leading-none tracking-tight text-text">
            AceX
            <span className="block text-[9px] font-medium uppercase tracking-[0.2em] text-text-faint">
              Trading Academy
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13.5px] font-medium text-text-muted transition-colors hover:text-text"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Link
            href="/dashboard"
            className="text-[13.5px] font-medium text-text-muted transition-colors hover:text-text"
          >
            Log in
          </Link>
          <Link
            href="/community"
            className="rounded-full bg-brand-blue px-4 py-2 text-[13.5px] font-semibold text-white shadow-[0_0_0_1px_rgba(37,99,235,0.4)] transition-all hover:bg-brand-blue-dim hover:shadow-[0_0_20px_rgba(37,99,235,0.45)]"
          >
            Join the Community
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-bg px-6 pb-6 pt-2 lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-text-muted transition-colors hover:bg-surface-2 hover:text-text"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-border pt-4">
              <Link
                href="/dashboard"
                onClick={() => setOpen(false)}
                className="rounded-lg border border-border px-3 py-2.5 text-center text-sm font-semibold text-text"
              >
                Log in
              </Link>
              <Link
                href="/community"
                onClick={() => setOpen(false)}
                className="rounded-full bg-brand-blue px-3 py-2.5 text-center text-sm font-semibold text-white"
              >
                Join the Community
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
