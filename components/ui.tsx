/* ---------- Brand / glyph icon ---------- */

export function Glyph({
  path: d,
  className = "h-5 w-5",
}: {
  path: string;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

/* ---------- Section heading ---------- */

export function SectionHeading({
  title,
  accent,
  subtitle,
  align = "center",
}: {
  title: string;
  accent?: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const centred = align === "center";
  return (
    <div className={centred ? "text-center" : "text-left"}>
      <h2 className="text-section font-bold">
        {title} {accent && <span className="grad-text">{accent}</span>}
      </h2>
      <div
        className={`grad-bg mt-4 h-[3px] w-20 rounded-full ${centred ? "mx-auto" : ""}`}
      />
      {subtitle && (
        <p
          className={`mt-5 text-[1.075rem] leading-relaxed text-muted ${
            centred ? "mx-auto max-w-[56ch]" : "max-w-[56ch]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ---------- Buttons ---------- */

export function GradientButton({
  href,
  children,
  external,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      className={`grad-bg inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-12px_rgba(99,102,241,0.9)] transition-transform duration-300 hover:scale-[1.04] ${className}`}
    >
      {children}
    </a>
  );
}

export function OutlineButton({
  href,
  children,
  external,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      className={`inline-flex items-center gap-2 rounded-full border border-line bg-card/60 px-6 py-3 text-sm font-semibold text-text transition-colors duration-300 hover:border-blue/60 hover:text-blue ${className}`}
    >
      {children}
    </a>
  );
}

export function ArrowUpRight({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}
