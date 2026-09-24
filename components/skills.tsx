import { skillGrid, tech } from "@/lib/tech";
import { Glyph, SectionHeading } from "./ui";

export function Skills() {
  return (
    <section id="skills" className="section-y relative overflow-hidden">
      <div className="bloom top-20 right-0 h-80 w-80 bg-blue/15" aria-hidden="true" />

      <div className="relative z-10 container-page">
        <SectionHeading
          title="Skills &"
          accent="Technologies"
          subtitle="The tools I reach for when something has to run reliably, scale sideways and not wake me up at night."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {skillGrid.map((slug) => {
            const item = tech[slug];
            return (
              <article key={slug} className="card card-hover group p-6">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-xl border border-line bg-bg-3/80 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: `#${item.hex}` }}
                >
                  <Glyph path={item.path} className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{item.name}</h3>
                <p className="mt-2 text-[1rem] leading-relaxed text-muted">{item.blurb}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
