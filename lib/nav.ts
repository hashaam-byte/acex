export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academy", href: "/academy" },
  { label: "Courses", href: "/courses" },
  { label: "VIP", href: "/vip" },
  { label: "School", href: "/school" },
  { label: "Community", href: "/community" },
  { label: "Blog", href: "/blog" },
] as const;

export const FOOTER_LINKS = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Courses", href: "/courses" },
    { label: "VIP", href: "/vip" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Help Center", href: "/contact" },
    { label: "Risk Disclosure", href: "/legal/risk-disclosure" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms of Service", href: "/legal/terms" },
    { label: "Refund Policy", href: "/legal/refund" },
    { label: "Disclaimer", href: "/legal/disclaimer" },
  ],
} as const;

export const SOCIAL_LINKS = [
  { label: "Telegram", href: "https://t.me" },
  { label: "Discord", href: "https://discord.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "X", href: "https://x.com" },
  { label: "Instagram", href: "https://instagram.com" },
] as const;
