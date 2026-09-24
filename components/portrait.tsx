import "server-only";

import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

/*
 * Resolved at build time, so the page never ships a broken image and you don't
 * have to care whether your file is .jpg, .jpeg, .png or .webp. Drop any of
 * them in public/ named "profile" and it gets picked up on the next build.
 */
function findPhoto(): string | null {
  const dir = path.join(process.cwd(), "public");
  for (const ext of ["jpg", "jpeg", "png", "webp", "avif"]) {
    if (fs.existsSync(path.join(dir, `profile.${ext}`))) return `/profile.${ext}`;
  }
  return null;
}

export const photoSrc = findPhoto();
export const hasPhoto = photoSrc !== null;

export function Portrait({
  alt,
  className = "",
  rounded = "rounded-full",
  sizes = "320px",
  priority = false,
  tone = true,
  zoom = 1.66,
}: {
  alt: string;
  className?: string;
  rounded?: string;
  sizes?: string;
  priority?: boolean;
  /** Grades the photo into the site's blue/violet palette. */
  tone?: boolean;
  /** Crop tightness. 1 shows the whole source image. */
  zoom?: number;
}) {
  if (photoSrc) {
    return (
      <div className={`relative overflow-hidden ${rounded} ${className}`}>
        <Image
          src={photoSrc}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
          style={{
            // The source is loosely framed, so zoom in on the face rather than
            // showing half the lecture hall.
            transform: `scale(${zoom})`,
            transformOrigin: "50% 38%",
            ...(tone
              ? { filter: "saturate(0.66) contrast(1.32) brightness(0.76)" }
              : {}),
          }}
        />
        {tone && (
          <>
            {/* Pulls the whole frame into the blue/violet/rose ramp. */}
            <div
              className="absolute inset-0 opacity-[0.48] mix-blend-overlay"
              style={{
                background:
                  "linear-gradient(160deg, #3b82f6, #8b5cf6 50%, #f43f5e)",
              }}
              aria-hidden="true"
            />
            {/* Recolours the warm beige so it stops fighting the navy. */}
            <div
              className="absolute inset-0 bg-blue/30 mix-blend-color"
              aria-hidden="true"
            />
            {/* Knocks down the blown-out ceiling along the top edge. */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(8,11,20,0.75) 0%, transparent 26%)",
              }}
              aria-hidden="true"
            />
            {/* Fades the edges to the page background so it isn't a hard cut-out. */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 46%, transparent 12%, rgba(8,11,20,0.6) 52%, rgba(8,11,20,1) 100%)",
              }}
              aria-hidden="true"
            />
          </>
        )}
      </div>
    );
  }

  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-2 overflow-hidden border border-line bg-bg-3 px-6 text-center ${rounded} ${className}`}
      role="img"
      aria-label={`${alt}, photo not added yet`}
    >
      <div className="grad-bg absolute inset-0 opacity-25" aria-hidden="true" />
      <span className="grad-text relative font-display text-5xl font-bold sm:text-6xl">
        MK
      </span>
      <span className="relative text-[11px] leading-tight text-muted">
        Add <code className="text-blue">public/profile.jpg</code>
      </span>
    </div>
  );
}
