import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "HABEEB RAHMAN",
  initials: "DV",
  url: "https://dillion.io",
  location: "Kerala, India",
  locationLink: "https://www.google.com/maps/place/Kerala,+India",
  description:
    "Web developer turned entrepreneur. I love building things and helping people. I'm very active on LinkedIn and Instagram.",
  summary:
    "I am currently pursuing a degree in Computer Science at Calicut University, where I am deepening my knowledge and skills in technology. As a freelance developer, I enjoy taking on diverse projects that challenge my coding abilities and allow me to bring innovative ideas to life. My passion for coding drives me to continuously learn and grow, enabling me to create effective solutions that meet the needs of my clients.",
  avatarUrl: "/me.png",
  skills: ["React", "Next.js", "Typescript", "Node.js", "Python", "Java", "C++"],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "habeebbk950@gmail.com",
    tel: "+91 7034897950",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/habeebbk",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/habeeb-rahman-063374248/",
        icon: Icons.linkedin,
        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://x.com/yourusername",
      //   icon: Icons.x,
      //   navbar: true,
      // },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/habeeb__bk?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        icon: Icons.instagram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:habeebbk950@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and set up production Kubernetes clusters. Architected a data lake using AWS S3 and Athena for historical backtesting of Bitcoin trading strategies. Built a mobile app using React Native and Typescript.",
    },
  ],
  education: [
    {
      school: "Calicut University",
      href: "https://www.uoc.ac.in/",
      degree: "Bachelor's Degree in Computer Science (BCS)",
      logoUrl: "/buildspace.png",
      start: "2024",
      end: "2028",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the OpenAI GPT Store, I decided to build a SaaS platform that allows users to collect email addresses from their GPT users, helping them build an audience and monetize GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed, and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application that delivers bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
