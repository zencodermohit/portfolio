/**
 * Everything the site says lives here. Edit this file, not the components.
 */

export const profile = {
  name: "Mohit Katre",
  first: "Mohit",
  role: "AWS Certified Cloud Practitioner",
  roleSecond: "AWS Certified AI Practitioner",
  location: "Nagpur, India",
  email: "katremohit4@gmail.com",
  phone: "+91 96235 76470",
  linkedin: "https://www.linkedin.com/in/mohit-katre-61467b356/",
  github: "https://github.com/zencodermohit",
  credly: "https://www.credly.com/users/mohit-katre",
  resume: "/mohit-katre-resume.pdf",
  heroBlurb:
    "I build backends and cloud infrastructure that hold up in production, and I once streamed live video over a lightbulb.",
  available: "Open to backend & cloud internships",
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  heading: "About Me",
  paragraphs: [
    "I'm in my third year of Electronics & Communication at RCOEM, Nagpur, but most of my time goes into backend systems and cloud infrastructure. I like the problems that only show up at scale: delivering every event exactly once, making deploys reversible, and figuring out why the latency spikes at 3am.",
    "I've shipped an inventory platform running on event streams with 82 endpoints, and a deployment platform that provisions roughly 20 AWS services entirely through Terraform and runs for about $2 a month. Both are live, not screenshots.",
    "My electronics side still shows up. During my internship I built a Li-Fi prototype that streamed live video over visible light, which taught me more about timing and debugging than any course did.",
  ],
  quickFacts: [
    { label: "Based in", value: "Nagpur, India" },
    { label: "Studying", value: "B.Tech ECE, RCOEM" },
    { label: "Graduating", value: "June 2027" },
    { label: "Focus", value: "Backend, cloud, distributed systems" },
  ],
};

export const stats = [
  { value: "300+", label: "DSA problems solved" },
  { value: "2", label: "Certifications" },
  { value: "20+", label: "AWS services deployed" },
  { value: "1", label: "IEEE publication" },
];

export const projects = [
  {
    name: "OptiStock",
    image: "/optistock.png",
    imageAlt:
      "OptiStock dashboard showing a 3D warehouse view for Chennai Port Facility with capacity, stock lines and revenue metrics",
    tagline: "Inventory intelligence for multiple tenants",
    summary:
      "An inventory system built on event streams, with a demand planning engine and an AI assistant, made for tenants who cannot afford a dropped event.",
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis Streams",
      "React",
      "TypeScript",
      "Docker",
      "AWS",
    ],
    points: [
      "82 REST endpoints across 24 PostgreSQL tables, using the Transactional Outbox pattern and Redis Streams so every event is delivered reliably and only counted once.",
      "A demand planning engine that chews through three years of transaction history nightly to drive ABC classification, forecasting and reorder points.",
      "An assistant powered by Gemini with SSE streaming, tools isolated per tenant and JWT auth, running on EC2 with Docker Compose and Nginx.",
    ],
    metrics: [
      { value: "82", label: "endpoints" },
      { value: "24", label: "tables" },
      { value: "3yr", label: "history analysed" },
    ],
    demo: "https://optistock.duckdns.org/",
    repo: "https://github.com/zencodermohit/optistock" as string | null,
    accent: "from-blue to-violet",
  },
  {
    name: "Castle",
    image: "/castle.png",
    imageAlt:
      "Castle landing page reading 'Push a repository. Get a live URL.' with the five stage deploy pipeline below",
    tagline: "Cloud deployment platform",
    summary:
      "A platform in the spirit of Vercel, where every Git push triggers an isolated container build served through a CDN. All of it is Terraform, none of it was clicked together by hand.",
    stack: ["AWS", "Terraform", "TypeScript", "React", "Docker", "CloudFront"],
    points: [
      "Provisions roughly 20 AWS services entirely as code, so the whole platform can be torn down and rebuilt from a clean account.",
      "Immutable builds with the live URL acting as a pointer, so rolling back to any previous version takes under a second and never rebuilds.",
      "Untrusted builds run sandboxed, each with its own credentials limited to a single S3 prefix, for about $2 a month.",
    ],
    metrics: [
      { value: "20+", label: "AWS services" },
      { value: "<1s", label: "rollback" },
      { value: "$2", label: "per month" },
    ],
    demo: "https://d3895jyfnxjrwh.cloudfront.net/d/dashboard/#/",
    // NOTE: this repo is currently private, so visitors get a 404. Make it
    // public on GitHub, or set this back to null to hide the Source button.
    repo: "https://github.com/zencodermohit/deployment-platform" as string | null,
    accent: "from-violet to-rose",
  },
];

export const experience = [
  {
    company: "Sarvaksh Communications Technologies Pvt. Ltd.",
    role: "Embedded Software Engineering Intern",
    location: "Nagpur, India",
    period: "Jan 2026 to Apr 2026",
    image: "/sarvaksh.jpg",
    imageAlt:
      "Three photos: the Sarvaksh Communications signboard at VNIT, the Li-Fi prototype built from Raspberry Pi boards, breadboards and an LED strip, and the VNIT building at dusk",
    points: [
      "Built a Li-Fi optical wireless prototype on a Raspberry Pi 5 that streams live video over visible light, holding latency under 50 ms end to end.",
      "Implemented and tuned an On-Off Keying modulation protocol, reaching 95% reliable transmission over 1 to 2 metres by analysing signal quality across repeated tests.",
      "Cut signal and synchronisation failures by 40% by tracing timing and firmware faults back to their root cause, working across hardware and software.",
    ],
    tags: ["Python", "Linux", "Bash", "Raspberry Pi", "Signal processing"],
  },
];

export const education = {
  image: "/college.jpg",
  imageAlt:
    "The RCOEM Digital Tower building in Nagpur",
  school: "Shri Ramdeobaba College of Engineering and Management",
  short: "RCOEM, Nagpur",
  degree: "B.Tech, Electronics & Communication Engineering",
  period: "Aug 2023 to Jun 2027",
  coursework: [
    "Data Structures & Algorithms",
    "Object Oriented Programming",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
  ],
};

export const credentials = [
  {
    title: "AWS Certified Cloud Practitioner",
    code: "CLF-C02",
    logo: "/cert-aws-ccp.png",
    logoAlt: "AWS Certified Cloud Practitioner foundational badge",
    kind: "Certification",
    detail:
      "Cloud architecture, EC2, S3, IAM and the security model underneath it all.",
    href: "https://www.credly.com/users/mohit-katre",
    linkText: "View badge",
  },
  {
    title: "AWS Certified AI Practitioner",
    code: "AIF-C01",
    logo: "/cert-aws-aip.png",
    logoAlt: "AWS Certified AI Practitioner foundational badge",
    kind: "Certification",
    detail:
      "Generative AI, the AWS AI and ML service stack, and responsible AI practice.",
    href: "https://www.credly.com/users/mohit-katre",
    linkText: "View badge",
  },
  {
    title: "Urban land cover classification",
    code: "IEEE",
    logo: "/cert-ieee.png",
    logoAlt: "IEEE Xplore Digital Library logo",
    kind: "Publication",
    detail:
      "Random Forest classification of Landsat 8/9 satellite imagery, with uncertainty analysis.",
    href: "https://ieeexplore.ieee.org/document/11600019",
    linkText: "Read on IEEE Xplore",
  },
];

export const beyondImage = {
  src: "/beyond.jpg",
  alt: "Six photos of Mohit speaking: at a Model UN conference, presenting to a classroom, addressing a hall of several hundred students, seated in committee, on stage with a microphone, and hosting a club event.",
};

export const beyondCode = [
  {
    title: "300+ problems solved",
    detail:
      "Across LeetCode, HackerRank and CodeChef, mostly because I genuinely enjoy them.",
  },
  {
    title: "Chaired 3 MUN committees",
    detail:
      "UNGA committees plus 20+ public forums. Moderating a room of delegates turns out to be good practice for design reviews.",
  },
  {
    title: "Led a 100+ member club",
    detail:
      "Management & content coordinator for the Spiritual Club, running 5+ events and keeping everyone in the loop.",
  },
];

export const contact = {
  heading: "Get in touch",
  subheading:
    "I'm looking for backend and cloud internships, and I'm always happy to talk shop about distributed systems, AWS bills, or whatever you're stuck on.",
  /**
   * Optional. Create a free form at https://formspree.io, paste the endpoint
   * here, and the contact form posts directly. Left empty, the form falls back
   * to opening the visitor's mail client with everything already filled in, so
   * it works either way.
   */
  formEndpoint: "",
};
