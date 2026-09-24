import * as si from "simple-icons";

export type Tech = {
  name: string;
  /** SVG path data, 24x24 viewBox. */
  path: string;
  /** Brand colour, used for the icon tint and its glow. */
  hex: string;
  blurb: string;
};

const icon = (key: keyof typeof si) => si[key] as unknown as { path: string; hex: string };

/*
 * AWS, Java and Power BI were pulled from simple-icons over trademark policy,
 * so these three are neutral glyphs drawn here rather than brand marks.
 */
const CLOUD =
  "M6.5 19A5.5 5.5 0 0 1 6 8.03a6.5 6.5 0 0 1 12.4 1.6A4.5 4.5 0 0 1 17.5 19H6.5Zm0-2h11a2.5 2.5 0 0 0 .2-4.99l-.86-.07-.13-.85A4.5 4.5 0 0 0 7.8 9.6l-.2.85-.87.06A3.5 3.5 0 0 0 6.5 17Z";
const COFFEE =
  "M4 3h12v9a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V3Zm2 2v7a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3V5H6Zm12 0h1.5A3.5 3.5 0 0 1 23 8.5 3.5 3.5 0 0 1 19.5 12H18v-2h1.5a1.5 1.5 0 0 0 0-3H18V5ZM3 19h14v2H3v-2Z";
const CHART =
  "M3 3h2v16h16v2H3V3Zm5 10h2.5v4H8v-4Zm4.5-6H15v10h-2.5V7ZM17 10h2.5v7H17v-7Z";

export const tech: Record<string, Tech> = {
  python: {
    name: "Python",
    ...icon("siPython"),
    blurb: "My default for backends, data work and anything that needs to ship today.",
  },
  fastapi: {
    name: "FastAPI",
    ...icon("siFastapi"),
    blurb: "82 typed endpoints on OptiStock, with async I/O and generated OpenAPI docs.",
  },
  postgresql: {
    name: "PostgreSQL",
    ...icon("siPostgresql"),
    blurb: "24-table schemas, tenant isolation and the transactional outbox pattern.",
  },
  redis: {
    name: "Redis",
    ...icon("siRedis"),
    blurb: "Redis Streams for idempotent, at-least-once event delivery between services.",
  },
  aws: {
    name: "AWS",
    path: CLOUD,
    hex: "FF9900",
    blurb: "Certified twice over. EC2, S3 and IAM in production, on a student's budget.",
  },
  terraform: {
    name: "Terraform",
    ...icon("siTerraform"),
    blurb: "Around 20 AWS services on Castle provisioned entirely as code.",
  },
  docker: {
    name: "Docker",
    ...icon("siDocker"),
    blurb: "Compose stacks behind Nginx, plus isolated containers for untrusted builds.",
  },
  typescript: {
    name: "TypeScript",
    ...icon("siTypescript"),
    blurb: "Front ends and infrastructure code, because I like my errors at compile time.",
  },
  react: {
    name: "React",
    ...icon("siReact"),
    blurb: "The dashboards on top of both platforms, including live SSE streaming.",
  },
  java: {
    name: "Java",
    path: COFFEE,
    hex: "E76F00",
    blurb: "Where I learned OOP properly, and most of my 300+ algorithm problems.",
  },
  linux: {
    name: "Linux",
    ...icon("siLinux"),
    blurb: "Bash, systemd and serial debugging on a Raspberry Pi at 3am.",
  },
  kafka: {
    name: "Apache Kafka",
    ...icon("siApachekafka"),
    hex: "9AB4FF",
    blurb: "Event streaming, partitions, and thinking in logs instead of tables.",
  },
  githubactions: {
    name: "GitHub Actions",
    ...icon("siGithubactions"),
    blurb: "CI that builds, tests and deploys so I never ship from my laptop.",
  },
  raspberrypi: {
    name: "Raspberry Pi",
    ...icon("siRaspberrypi"),
    blurb: "The machine that streamed video over a flickering LED at under 50 ms.",
  },
  powerbi: {
    name: "Power BI",
    path: CHART,
    hex: "F2C811",
    blurb: "DAX and Power Query, for when the answer has to land in a boardroom.",
  },
  nginx: {
    name: "Nginx",
    ...icon("siNginx"),
    blurb: "Reverse proxy, TLS termination and static serving in front of everything.",
  },
};

export const skillGrid: string[] = [
  "python",
  "fastapi",
  "postgresql",
  "redis",
  "aws",
  "terraform",
  "docker",
  "typescript",
  "react",
  "java",
  "linux",
  "kafka",
];

/** The smaller icons that orbit the hero portrait. */
export const orbit: string[] = [
  "python",
  "aws",
  "docker",
  "postgresql",
  "terraform",
  "react",
];

export const socialIcons = {
  github: icon("siGithub").path,
  linkedin:
    "M4.98 3.5a2.5 2.5 0 1 1-.02 5 2.5 2.5 0 0 1 .02-5ZM3 9h4v12H3V9Zm7 0h3.8v1.71h.05A4.17 4.17 0 0 1 17.6 8.7c3.9 0 4.62 2.5 4.62 5.76V21h-4v-5.66c0-1.35-.02-3.08-1.9-3.08-1.9 0-2.2 1.46-2.2 2.98V21h-3.99V9Z",
  mail: "M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13Zm2.2.2L12 12l7.8-6.3a.5.5 0 0 0-.3-.1h-15a.5.5 0 0 0-.3.1ZM20 8.1l-7.37 5.95a1 1 0 0 1-1.26 0L4 8.1v10.4a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V8.1Z",
  leetcode: icon("siLeetcode").path,
  credly: icon("siCredly").path,
  ieee: icon("siIeee").path,
};
