import { Building2, FlaskConical, Presentation, Users, Library, School as SchoolIcon } from "lucide-react";

const FEATURES = [
  { icon: Building2, title: "Physical Campus", description: "A dedicated home for hands-on trading education." },
  { icon: FlaskConical, title: "Trading Lab", description: "Live-market terminals for real-time practice." },
  { icon: Presentation, title: "Smart Classrooms", description: "Tech-equipped rooms for interactive lessons." },
  { icon: SchoolIcon, title: "Seminar Hall", description: "Space for guest speakers and larger events." },
  { icon: Users, title: "Student Community", description: "A shared space to learn and grow together." },
  { icon: Library, title: "Financial Library", description: "Curated resources for deeper, self-led study." },
];

export function CampusFeatures() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-text sm:text-4xl">
          Future <span className="text-brand-blue">Vision</span>
        </h2>
        <p className="mt-3 text-sm text-text-muted">What the physical campus will bring together.</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-border-strong"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-blue/25 bg-brand-blue/10">
              <Icon className="h-5 w-5 text-brand-blue" strokeWidth={1.75} />
            </div>
            <h3 className="mt-4 font-heading text-base font-semibold text-text">{title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-text-muted">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}