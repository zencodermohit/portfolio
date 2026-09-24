import Image from "next/image";
import { about, education, profile } from "@/lib/content";
import { GradientButton, SectionHeading } from "./ui";
import { Portrait } from "./portrait";

function DownloadIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 19h16" />
    </svg>
  );
}

export function About() {
  return (
    <section id="about" className="section-y relative overflow-hidden">
      <div className="bloom top-10 -left-32 h-80 w-80 bg-violet/15" aria-hidden="true" />

      <div className="relative z-10 container-page">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Photo */}
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div
              className="grad-bg absolute -inset-2 rounded-3xl opacity-30 blur-2xl"
              aria-hidden="true"
            />
            <div className="grad-bg relative rounded-3xl p-[2px]">
              <Portrait
                alt={profile.name}
                rounded="rounded-3xl"
                className="aspect-[4/5] w-full bg-bg"
                sizes="(max-width: 1024px) 90vw, 420px"
                zoom={1.3}
              />
            </div>
          </div>

          {/* Copy */}
          <div>
            <SectionHeading title="About" accent="Me" align="left" />

            <div className="mt-7 space-y-4 leading-relaxed text-muted">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 26)}>{paragraph}</p>
              ))}
            </div>

            <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {about.quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-xl border border-line bg-card/60 px-4 py-3"
                >
                  <dt className="text-[0.85rem] text-muted">{fact.label}</dt>
                  <dd className="mt-1 text-[1.05rem] font-medium">{fact.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8">
              <GradientButton href={profile.resume} external>
                Download Resume
                <DownloadIcon />
              </GradientButton>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="card card-hover mt-14 overflow-hidden">
          <div className="grid md:grid-cols-[minmax(0,22rem)_1fr]">
            <div className="relative aspect-[5/4] min-h-[15rem] md:aspect-auto">
              <Image
                src={education.image}
                alt={education.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 352px"
                className="object-cover"
              />
              {/* Fades the daylight photo into the card on its inner edge. */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(8,11,20,0.25), rgba(8,11,20,0.75))",
                }}
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 hidden md:block"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 55%, rgba(13,20,36,0.95))",
                }}
                aria-hidden="true"
              />
            </div>

            <div className="p-7 sm:p-9">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold">{education.school}</h3>
                  <p className="mt-2 text-[1.05rem] text-muted">
                    {education.degree}
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-[0.95rem] font-medium text-blue">
                    {education.period}
                  </p>
                </div>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {education.coursework.map((course) => (
                  <li
                    key={course}
                    className="rounded-full border border-line bg-bg-3/60 px-3.5 py-1.5 text-[0.85rem] text-muted"
                  >
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
