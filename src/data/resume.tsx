import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Pratik Raj",
  initials: "PR",
  url: "https://localhost:3000",
  location: "Kolkata, West Bengal, India",
  locationLink: "https://www.google.com/maps/place/Kolkata,+West+Bengal",
  description:
    "Passionate developer skilled in algorithms, solving problems, contributing to projects, and continuously learning new technologies.",
  summary:
    "Passionate software developer skilled in algorithms, data structures, and problem-solving, dedicated to building impactful solutions while continuously learning and adapting to new technologies.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "Docker",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "pratikraj220011@gmail.com",
    tel: "+91 9693894120",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/pratik6266",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/pratik-raj-/",
        icon: Icons.linkedin,

        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "#",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      // Youtube: {
      //   name: "Youtube",
      //   url: "#",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
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
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
  ],
  education: [
    {
      school: "Institute of Engineerign & Management",
      href: "#",
      degree: "B.Tech",
      logoUrl: "/buildspace.jpg",
      start: "2022",
      end: "2026",
    },
    {
      school: "ABR Foundation School",
      href: "#",
      degree: "12 standard",
      logoUrl: "/waterloo.png",
      start: "2019",
      end: "2021",
    },
    {
      school: "St Paul's Senior Secondary School",
      href: "#",
      degree: "10 standard",
      logoUrl: "/laurier.png",
      start: "2017",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Rakshak",
      href: "#",
      dates: "Jun 2024 - Dec 2024",
      active: false,
      description:
        "A Spring Boot and HTML/CSS/JS-based system for managing criminal records, featuring role-based access, secure authentication, and powerful search/analytics tools to enhance law enforcement efficiency while ensuring data confidentiality.",
      technologies: [
        "HTML", 
        "CSS", 
        "JavaScript",
        "Spring Boot",
        "MySQL",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/pratik6266",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
