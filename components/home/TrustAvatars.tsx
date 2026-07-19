const AVATARS = [
  { initials: "DT", color: "#2563EB" },
  { initials: "MK", color: "#22D3EE" },
  { initials: "AR", color: "#6366F1" },
  { initials: "SN", color: "#0EA5E9" },
];

export function TrustAvatars() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex -space-x-2.5">
        {AVATARS.map((a) => (
          <span
            key={a.initials}
            style={{ backgroundColor: a.color }}
            className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-bg text-[10px] font-semibold text-white"
          >
            {a.initials}
          </span>
        ))}
        <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-bg bg-brand-blue text-[10px] font-semibold text-white">
          +160
        </span>
      </div>
      <p className="text-xs text-text-faint">
        <span className="font-medium text-text">Join thousands of traders</span> worldwide, and growing&hellip;
      </p>
    </div>
  );
}
