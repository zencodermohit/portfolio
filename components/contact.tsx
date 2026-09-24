"use client";

import { useState } from "react";
import { contact, profile } from "@/lib/content";
import { socialIcons } from "@/lib/tech";
import { Glyph, SectionHeading } from "./ui";

type Status = "idle" | "sending" | "sent" | "error";

const FIELD =
  "w-full rounded-xl border border-line bg-bg-3/60 px-4 py-3.5 text-[1rem] text-text placeholder:text-muted/60 transition-colors focus:border-blue/70 focus:outline-none";

function PinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-[18px] w-[18px]"
      aria-hidden="true"
    >
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-[18px] w-[18px]"
      aria-hidden="true"
    >
      <path d="M5 3h3.5l1.8 4.5-2.2 1.6a12 12 0 0 0 5.8 5.8l1.6-2.2L20 14.5V18a2 2 0 0 1-2.2 2A16.8 16.8 0 0 1 3 5.2 2 2 0 0 1 5 3Z" />
    </svg>
  );
}

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const subject = String(data.get("subject") ?? "");
    const message = String(data.get("message") ?? "");

    // No form service configured, so hand off to the visitor's mail client.
    if (!contact.formEndpoint) {
      const body = `${message}\n\nFrom:\n${name}\n${email}`;
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
        subject || `Portfolio enquiry from ${name}`,
      )}&body=${encodeURIComponent(body)}`;
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(contact.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!response.ok) throw new Error(String(response.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-y relative overflow-hidden">
      <div className="bloom bottom-0 left-1/4 h-96 w-96 bg-blue/15" aria-hidden="true" />

      <div className="relative z-10 container-page">
        <SectionHeading
          title="Get in"
          accent="Touch"
          subtitle={contact.subheading}
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Details */}
          <div className="card p-7 sm:p-8">
            <h3 className="text-2xl font-semibold">Let&rsquo;s talk</h3>
            <p className="mt-3 text-[1rem] leading-relaxed text-muted">
              Fastest way to reach me is email. I read everything and reply to
              anything that isn&rsquo;t a crypto pitch.
            </p>

            <ul className="mt-7 space-y-4">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 text-[1rem] transition-colors hover:text-blue"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-bg-3/70 text-blue">
                    <Glyph path={socialIcons.mail} className="h-[18px] w-[18px]" />
                  </span>
                  <span className="break-all">{profile.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-[1rem] text-muted">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-bg-3/70 text-violet">
                  <PhoneIcon />
                </span>
                {profile.phone}
              </li>
              <li className="flex items-center gap-3 text-[1rem] text-muted">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-bg-3/70 text-rose">
                  <PinIcon />
                </span>
                {profile.location}
              </li>
            </ul>

            <div className="mt-8 flex gap-3">
              {[
                { href: profile.github, path: socialIcons.github, label: "GitHub" },
                { href: profile.linkedin, path: socialIcons.linkedin, label: "LinkedIn" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-bg-3/60 text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-blue/60 hover:text-blue"
                >
                  <Glyph path={social.path} />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="card p-7 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium">Name</span>
                <input name="name" required placeholder="Your name" className={FIELD} />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className={FIELD}
                />
              </label>
            </div>

            <label className="mt-4 block">
              <span className="mb-2 block text-sm font-medium">Subject</span>
              <input
                name="subject"
                placeholder="What's this about?"
                className={FIELD}
              />
            </label>

            <label className="mt-4 block">
              <span className="mb-2 block text-sm font-medium">Message</span>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me what you're building."
                className={`${FIELD} resize-y`}
              />
            </label>

            <button
              type="submit"
              disabled={status === "sending"}
              className="grad-bg mt-6 w-full rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.01] disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>

            <p
              role="status"
              aria-live="polite"
              className="mt-4 min-h-[1.25rem] text-center text-sm"
            >
              {status === "sent" && (
                <span className="text-emerald-400">
                  {contact.formEndpoint
                    ? "Thanks, I'll get back to you soon."
                    : "Your mail app should be opening with this message ready to send."}
                </span>
              )}
              {status === "error" && (
                <span className="text-rose">
                  That didn&rsquo;t send. Email me directly at {profile.email}.
                </span>
              )}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
