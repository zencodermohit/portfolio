import Image from "next/image";
import { beyondCode, beyondImage, credentials } from "@/lib/content";
import { ArrowUpRight, SectionHeading } from "./ui";

export function Credentials() {
  return (
    <section className="section-y relative overflow-hidden">
      <div className="bloom top-16 right-0 h-80 w-80 bg-violet/15" aria-hidden="true" />

      <div className="relative z-10 container-page">
        <SectionHeading
          title="Certifications &"
          accent="Research"
          subtitle="Verified credentials and published work. Every one of these links out to the source."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {credentials.map((item) => (
            <article key={item.title} className="card card-hover flex flex-col p-7">
              {/*
                The three logos have different aspect ratios and mixed
                backgrounds (one transparent, two white), so a shared white
                plate plus object-contain gives them one consistent footprint
                without distorting or cropping any of them.
              */}
              <div className="relative h-40 w-full overflow-hidden rounded-xl bg-white">
                <Image
                  src={item.logo}
                  alt={item.logoAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-contain p-4"
                />
              </div>

              <div className="mt-5 flex items-start justify-between gap-3">
                <h3 className="text-xl leading-snug font-semibold">{item.title}</h3>
                <span className="shrink-0 rounded-full border border-line bg-bg-3/60 px-3 py-1 text-[0.8rem] text-muted">
                  {item.code}
                </span>
              </div>
              <p className="mt-2.5 grow text-[1rem] leading-relaxed text-muted">
                {item.detail}
              </p>

              <a
                href={item.href}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-6 inline-flex items-center gap-1.5 text-[0.95rem] font-semibold text-blue transition-colors hover:text-rose"
              >
                {item.linkText}
                <ArrowUpRight />
              </a>
            </article>
          ))}
        </div>

        {/* Beyond code */}
        <div className="mt-20">
          <SectionHeading
            title="Beyond the"
            accent="Keyboard"
            subtitle="The parts of me that don't fit in a commit history."
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
            {/* The source is square, so this frame crops nothing. */}
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-line">
              <Image
                src={beyondImage.src}
                alt={beyondImage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 620px"
                className="object-cover"
              />
              <span className="absolute inset-0 bg-bg/20" aria-hidden="true" />
            </div>

            <div className="space-y-5">
              {beyondCode.map((item) => (
                <article key={item.title} className="card card-hover p-7">
                  <h3 className="grad-text font-display text-xl font-bold">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[1rem] leading-relaxed text-muted">
                    {item.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
