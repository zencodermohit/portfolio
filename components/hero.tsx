import { profile, stats } from "@/lib/content";
import { orbit, tech, socialIcons } from "@/lib/tech";
import { ArrowUpRight, Glyph, GradientButton, OutlineButton } from "./ui";
import { Portrait } from "./portrait";

/*
 * Icons sit on the ring itself, evenly spaced. Positions are derived rather
 * than hand placed so every icon is the same distance from the centre and the
 * angular gaps are identical. 50% puts each centre exactly on the ring; the
 * first icon starts at 12 o'clock and the rest follow clockwise.
 */
const ORBIT_RADIUS = 50;
const ORBIT_START_DEG = -90;

function orbitPosition(index: number, count: number) {
  const angle = ((ORBIT_START_DEG + (360 / count) * index) * Math.PI) / 180;
  return {
    left: `${50 + ORBIT_RADIUS * Math.cos(angle)}%`,
    top: `${50 + ORBIT_RADIUS * Math.sin(angle)}%`,
  };
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-[clamp(3rem,5vw,6rem)] sm:pt-36">
      <div className="bloom -top-32 -left-24 h-96 w-96 bg-blue/25" aria-hidden="true" />
      <div className="bloom top-24 -right-20 h-96 w-96 bg-rose/20" aria-hidden="true" />

      <div className="relative z-10 container-page grid items-center gap-14 md:grid-cols-[1.08fr_0.92fr] md:gap-8 lg:gap-12">
        {/* Copy */}
        <div className="rise">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card/70 px-4 py-1.5 text-xs font-medium text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 [animation:pulse-ring_2.4s_ease-out_infinite]" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {profile.available}
          </span>

          <h1 className="text-hero mt-6 font-bold">
            Hi, I&rsquo;m
            <br />
            <span className="grad-text">{profile.name}</span>
          </h1>

          <p className="grad-text mt-4 font-display text-xl font-semibold sm:text-2xl">
            {profile.role}
          </p>
          <p className="mt-1.5 font-display text-base font-medium text-muted sm:text-lg">
            {profile.roleSecond}
          </p>

          <p className="mt-6 max-w-[52ch] text-[1.0625rem] leading-relaxed text-muted sm:text-lg">
            {profile.heroBlurb}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <GradientButton href="#work">View Projects</GradientButton>
            <OutlineButton href={profile.resume} external>
              Resume
              <ArrowUpRight />
            </OutlineButton>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {[
              { href: profile.github, path: socialIcons.github, label: "GitHub" },
              { href: profile.linkedin, path: socialIcons.linkedin, label: "LinkedIn" },
              { href: `mailto:${profile.email}`, path: socialIcons.mail, label: "Email" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                {...(social.href.startsWith("mailto")
                  ? {}
                  : { target: "_blank", rel: "noreferrer noopener" })}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-card/60 text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-blue/60 hover:text-blue"
              >
                <Glyph path={social.path} />
              </a>
            ))}
          </div>
        </div>

        {/* Portrait with orbiting stack */}
        <div className="relative mx-auto w-full max-w-[20rem] sm:max-w-[24rem] md:max-w-none">
          <div className="relative mx-auto aspect-square w-[82%] sm:w-[76%] md:w-[88%] lg:w-[80%]">
            <div
              className="grad-bg absolute -inset-3 rounded-full opacity-40 blur-2xl"
              aria-hidden="true"
            />
            <div className="grad-bg absolute inset-0 rounded-full p-[3px]">
              <Portrait
                alt={profile.name}
                className="h-full w-full bg-bg"
                sizes="(max-width: 1024px) 70vw, 340px"
                priority
              />
            </div>

            {orbit.map((slug, i) => {
              const item = tech[slug];
              const pos = orbitPosition(i, orbit.length);
              return (
                <div
                  key={slug}
                  className="float absolute flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-line bg-card/90 backdrop-blur-sm sm:h-12 sm:w-12"
                  style={{
                    top: pos.top,
                    left: pos.left,
                    animationDelay: `${i * 0.55}s`,
                    color: `#${item.hex}`,
                    boxShadow: `0 8px 26px -10px #${item.hex}88`,
                  }}
                  title={item.name}
                >
                  <Glyph path={item.path} className="h-6 w-6" />
                  <span className="sr-only">{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Stat strip */}
      <div className="relative z-10 container-page mt-12 sm:mt-16">
        <dl className="card grid grid-cols-2 gap-px overflow-hidden bg-line/60 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-card px-5 py-7 text-center">
              <dd className="grad-text font-display text-3xl font-bold sm:text-4xl">
                {stat.value}
              </dd>
              <dt className="mt-1.5 text-[0.9rem] text-muted">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
