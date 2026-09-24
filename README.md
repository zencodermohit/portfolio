# Mohit Katre — portfolio

Single-page portfolio. Next.js 16 (App Router) + Tailwind 4. Fully static, no backend.

Dark navy ground, blue → violet → rose gradient accents, glowing cards.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm run start    # serve the production build
```

## Editing content

**All text lives in `lib/content.ts`.** Don't edit components to change wording.

| Export        | What it drives                                  |
| ------------- | ----------------------------------------------- |
| `profile`     | Name, role, links, hero blurb, availability tag |
| `nav`         | Nav links and their section anchors             |
| `about`       | About paragraphs and the quick-fact tiles       |
| `stats`       | The four-up stat strip under the hero           |
| `projects`    | OptiStock and Castle cards                      |
| `experience`  | Sarvaksh internship                             |
| `education`   | RCOEM and coursework tags                       |
| `credentials` | AWS certs and the IEEE publication              |
| `beyondCode`  | DSA, MUN, Spiritual Club                        |
| `contact`     | Contact copy and the optional form endpoint     |

Skill cards come from `lib/tech.ts`, which pulls real brand logos and colours
from `simple-icons`. Add a skill by adding an entry there and listing its key in
`skillGrid`. `orbit` controls which icons float around the hero portrait.

## Your photo

Currently `public/profile.jpeg` (800x800). Any of `profile.jpg|jpeg|png|webp|avif`
is picked up automatically at build time — no code change needed. If none exists,
both slots fall back to an "MK" monogram rather than a broken image.

The photo is colour-graded in CSS to match the palette, not baked into the file,
so the original stays untouched and the treatment is tunable in
`components/portrait.tsx`:

- `filter: saturate(.72) contrast(1.1) brightness(.92)` cools the warm suit
- a soft-light gradient wash tints it blue -> violet -> rose
- a radial vignette sinks the edges into the dark background
- `zoom` crops in on the face (1.32 in the hero circle, 1.15 in the About frame)

Turn it all off with `<Portrait tone={false} />`.

## Tab icon (favicon)

`app/icon.png` (256px) and `app/apple-icon.png` (180px) — Next.js picks these up
by filename, no config needed. Both are a circular crop of your face inside a
blue -> violet -> rose gradient ring, generated from `public/profile.jpeg`.

At a real 16px tab the face is small; an "MK" monogram stays sharper at that
size. If you'd rather have the monogram, say so and it can be swapped — or
replace both PNGs with anything square and rebuild.

## Contact form

Works out of the box: with no service configured it opens the visitor's mail
client pre-filled. To receive submissions as email instead, create a free form
at [formspree.io](https://formspree.io) and paste the endpoint into
`contact.formEndpoint` in `lib/content.ts`.

## Live links

All wired up and verified reachable:

- LinkedIn, GitHub (`zencodermohit`)
- OptiStock — https://optistock.duckdns.org/
- Castle — https://d3895jyfnxjrwh.cloudfront.net/d/dashboard/#/
- Credly profile (both AWS certs link here)
- IEEE Xplore — https://ieeexplore.ieee.org/document/11600019

Resume PDF is at `public/mohit-katre-resume.pdf` — overwrite it to update, and
keep the filename the same.

Source links: OptiStock points at `zencodermohit/optistock` (public, works).
Castle points at `zencodermohit/deployment-platform`, which is **private** — it
returns 404 for anyone not signed in as you. Either make that repo public on
GitHub, or set `projects[1].repo` to `null` in `lib/content.ts` to hide its
"Source" button.

## Responsive behaviour

Layout is fluid rather than fixed at a few breakpoints:

- `container-page` scales max width (80rem, 90rem above 1600px) and gutters
  (`clamp(1.25rem, 4vw, 2.75rem)`) together, so wide monitors don't strand the
  content in a narrow band
- `text-hero` and `text-section` use `clamp()` so headings scale continuously
  instead of jumping at `sm:`
- `section-y` scales vertical rhythm with the viewport
- Hero splits into two columns at `md` (768px); skills go 1 -> 2 -> 3 -> 4
  columns up to `2xl`

Verified by screenshot at 375, 430, 768, 1024, 1366, 1440 and 1920 px.

## Deploy to Vercel

```bash
git init && git add -A && git commit -m "Portfolio"
gh repo create portfolio --public --source=. --push
```

Then import the repo at [vercel.com/new](https://vercel.com/new). Vercel detects
Next.js automatically. Every push to `main` redeploys.
