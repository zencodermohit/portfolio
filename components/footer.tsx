import { nav, profile } from "@/lib/content";
import { socialIcons } from "@/lib/tech";
import { Glyph } from "./ui";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg-2">
      <div className="container-page py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <a href="#home" className="grad-text font-display text-lg font-bold">
              {profile.name}
            </a>
            <p className="mt-2 text-[0.95rem] text-muted">
              {profile.role}, {profile.location}
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[0.95rem] text-muted transition-colors hover:text-text"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-3">
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
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-card text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-blue/60 hover:text-blue"
              >
                <Glyph path={social.path} className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-line pt-6">
          <p className="text-center text-[0.95rem] text-muted">
            &copy; {new Date().getFullYear()} {profile.name}. Built with Next.js
            and Tailwind.
          </p>
        </div>
      </div>
    </footer>
  );
}
