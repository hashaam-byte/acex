import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import {
  Coins,
  LineChart,
  TrendingUp,
  Brain,
  ShieldCheck,
  BarChart3,
  Newspaper,
  BookOpen,
  Clock,
  ArrowRight,
} from "lucide-react";
import { BLOG_CATEGORY_STYLE } from "@/lib/blog-category";
import { FALLBACK_POSTS } from "@/lib/blog-fallback";

const ICONS: Record<string, React.ElementType> = {
  coins: Coins,
  "line-chart": LineChart,
  "trending-up": TrendingUp,
  brain: Brain,
  "shield-check": ShieldCheck,
  "bar-chart": BarChart3,
  newspaper: Newspaper,
  "book-open": BookOpen,
};

const TONE_CLASSES: Record<string, string> = {
  amber: "text-amber-400",
  blue: "text-brand-blue",
  cyan: "text-brand-cyan",
  violet: "text-indigo-400",
};

const TONE_BG: Record<string, string> = {
  amber: "from-amber-400/15 to-transparent",
  blue: "from-brand-blue/15 to-transparent",
  cyan: "from-brand-cyan/15 to-transparent",
  violet: "from-indigo-400/15 to-transparent",
};

export type BlogCardData = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTimeMins: number;
  coverImageUrl: string | null;
};

export function BlogGrid({ posts }: { posts?: BlogCardData[] }) {
  const visiblePosts = posts ?? FALLBACK_POSTS;

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
      <Reveal className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visiblePosts.map(({ slug, title, excerpt, category, date, readTimeMins, coverImageUrl }) => {
          const style = BLOG_CATEGORY_STYLE[category] || { icon: "newspaper", tone: "blue" };
          const Icon = ICONS[style.icon] || Newspaper;

          return (
            <Link
              key={slug}
              href={`/blog/${slug}`}
              className="transition-premium group flex flex-col overflow-hidden rounded-3xl border border-border bg-surface hover:-translate-y-1 hover:border-border-strong hover:shadow-[var(--shadow-premium)]"
            >
              <div
                className={`relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br ${TONE_BG[style.tone]} bg-surface-2`}
              >
                {coverImageUrl ? (
                  <Image src={coverImageUrl} alt="" fill className="object-cover" />
                ) : (
                  <Icon className={`h-9 w-9 ${TONE_CLASSES[style.tone]}`} strokeWidth={1.5} />
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <span
                  className={`text-[11px] font-semibold uppercase tracking-wide ${TONE_CLASSES[style.tone]}`}
                >
                  {category}
                </span>
                <h3 className="mt-2 font-heading text-base font-semibold leading-snug text-text">
                  {title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">{excerpt}</p>

                <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-text-faint">
                  <span>{date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {readTimeMins} min read
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1 border-t border-border px-6 py-3 text-xs font-semibold text-brand-blue">
                Read Article
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          );
        })}
      </Reveal>
    </section>
  );
}