import Image from "next/image";
import { experience, projects } from "@/lib/content";
import { socialIcons } from "@/lib/tech";
import { ArrowUpRight, Glyph, SectionHeading } from "./ui";

export function Work() {
  return (
    <section id="work" className="section-y relative overflow-hidden">
      <div className="bloom top-40 -left-24 h-96 w-96 bg-rose/15" aria-hidden="true" />

      <div className="relative z-10 container-page">
        <SectionHeading
          title="Featured"
          accent="Projects"
          subtitle="Two systems I designed and shipped end to end. Both are deployed and running right now, so click through and poke at them."
        />

        <div className="mt-14 grid gap-7 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.name} className="card card-hover flex flex-col p-7 sm:p-8">
              {/* Screenshot doubles as the link to the running app. */}
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`Open the live ${project.name} app`}
                className="group/shot relative -mx-7 -mt-7 mb-7 block aspect-[16/7] overflow-hidden rounded-t-2xl sm:-mx-8 sm:-mt-8"
              >
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 620px"
                  className="object-cover object-top transition-transform duration-500 group-hover/shot:scale-[1.04]"
                />
                {/* Settles a bright screenshot into the dark card. */}
                <span
                  className="absolute inset-0 bg-bg/15"
                  aria-hidden="true"
                />
                <span
                  className="absolute inset-x-0 bottom-0 h-24"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent, rgba(13,20,36,0.95))",
                  }}
                  aria-hidden="true"
                />
                <span
                  className="absolute right-4 bottom-4 rounded-full border border-white/20 bg-bg/75 px-3.5 py-1.5 text-[0.8rem] font-medium text-text backdrop-blur-sm"
                  aria-hidden="true"
                >
                  Live
                </span>
              </a>

              <div
                className={`grad-bg mb-6 h-1 w-14 rounded-full bg-gradient-to-r ${project.accent}`}
                aria-hidden="true"
              />

              <h3 className="text-3xl font-bold">{project.name}</h3>
              <p className="mt-1.5 text-[1rem] font-medium text-blue">{project.tagline}</p>
              <p className="mt-4 leading-relaxed text-muted">{project.summary}</p>

              <dl className="mt-6 grid grid-cols-3 gap-3">
                {project.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-xl border border-line bg-bg-3/50 px-3 py-3 text-center"
                  >
                    <dd className="grad-text font-display text-2xl font-bold">
                      {metric.value}
                    </dd>
                    <dt className="mt-1 text-[0.8rem] text-muted">{metric.label}</dt>
                  </div>
                ))}
              </dl>

              <ul className="mt-6 space-y-3 text-[1rem] leading-relaxed text-muted">
                {project.points.map((point) => (
                  <li key={point.slice(0, 24)} className="flex gap-3">
                    <span
                      className="grad-bg mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line bg-bg-3/60 px-3.5 py-1.5 text-[0.85rem] text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-3 pt-1">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="grad-bg inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.04]"
                >
                  Live Demo
                  <ArrowUpRight />
                </a>
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-bg-3/60 px-5 py-2.5 text-sm font-semibold transition-colors duration-300 hover:border-blue/60 hover:text-blue"
                  >
                    <Glyph path={socialIcons.github} className="h-4 w-4" />
                    Source
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Experience */}
        <div className="mt-24">
          <SectionHeading
            title="Where I've"
            accent="Worked"
            subtitle="Software written close to the hardware, and the debugging habits that came with it."
          />

          <div className="mt-14 space-y-6">
            {experience.map((job) => (
              <article
                key={job.company}
                className="card card-hover grid gap-8 p-7 sm:p-9 lg:grid-cols-[1fr_34rem] lg:items-start lg:gap-10"
              >
                <div>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold sm:text-[1.75rem]">
                        {job.role}
                      </h3>
                      <p className="mt-1.5 text-muted">
                        {job.company}, {job.location}
                      </p>
                    </div>
                    <span className="rounded-full border border-blue/30 bg-blue/10 px-4 py-1.5 text-[0.85rem] font-medium text-blue">
                      {job.period}
                    </span>
                  </div>

                  <ul className="mt-6 space-y-3 leading-relaxed text-muted">
                    {job.points.map((point) => (
                      <li key={point.slice(0, 24)} className="flex gap-3">
                        <span
                          className="grad-bg mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full"
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-line bg-bg-3/60 px-3.5 py-1.5 text-[0.85rem] text-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>

                {job.image && (
                  // The source is exactly 4:3, so this frame crops nothing.
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line">
                    <Image
                      src={job.image}
                      alt={job.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 544px"
                      className="object-cover"
                    />
                    <span
                      className="absolute inset-0 bg-bg/20"
                      aria-hidden="true"
                    />
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
