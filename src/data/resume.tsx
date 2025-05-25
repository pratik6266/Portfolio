import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { TbBrandLeetcode } from "react-icons/tb";
import { SiGeeksforgeeks } from "react-icons/si";
import { SiCodingninjas } from "react-icons/si";

export const DATA = {
  name: "Pratik Raj",
  initials: "PR",
  url: "https://localhost:3000",
  location: "Kolkata, West Bengal, India",
  locationLink: "https://www.google.com/maps/place/Kolkata,+West+Bengal",
  description:
    "Dedicated, Problem solver, Full Stack developer, LeetCode enthusiast, Optimizer, System architect",
  summary:
    "I am a passionate problem solver and full stack developer with expertise in authentication, security, and scalable systems. I enjoy tackling complex challenges, optimizing performance, and building impactful solutions that enhance efficiency and reliability.",
  avatarUrl: "/me.jpg",
  
  skills: [
    "c++",
    "html5",
    "css3",
    "java",
    "python",
    "mysql",
    "mongodb",
    "mongoose",
    "reactjs",
    "nodejs",
    "nextjs2",
    "js",
    "typescript",
    "tailwindcss",
    "git",
    "github",
    "prisma",
    "postgresql",
    "postman",
    "docker",
    "kubernetes",
    "redis",
    "vscode",
    "shadcnui",
    "zod"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
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
      Resume: {
        name: "Resume",
        url: process.env.RESUME_LINK || "https://drive.google.com/drive/folders/1d-WYJyG5T14a4IXxis98tpRsPgoTYn5E",
        icon: Icons.googleDrive,

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
        url: "https://mail.google.com/mail/u/0/#inbox?compose=CllgCKCJDkWSbTtpRQNhQfbTzrwtTXMkpGqMPGFXLkxvBgsLVkzwKQGzJhrbSmnnpHQDvfVBvQq",
        icon: Icons.email,

        navbar: true,
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
      href: "https://iem.edu.in/",
      degree: "B.Tech - IT CGPA: 9.41",
      logoUrl: "/buildspace.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "ABR Foundation School",
      href: "https://www.abrfoundationschool.org/",
      degree: "12th - CBSE Scored: 73.6%",
      logoUrl: "/waterloo.jpeg",
      start: "2019",
      end: "2021",
    },
    {
      school: "St Paul's Senior Secondary School",
      href: "https://www.stpaulsschool.co.in/",
      degree: "10th - CBSE Scored: 83.6%",
      logoUrl: "/laurier.jpeg",
      start: "2017",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Scatch",
      href: "#",
      dates: "Aug 2023 - Jan 2024",
      active: false,
      description:
        "A user-friendly eCommerce website for selling bags, featuring secure authentication, product listings, cart management, and seamless checkout, ensuring a smooth shopping experience with a responsive design and efficient backend operations.",
      technologies: [
        "Mongo DB",
        "Express JS",
        "React JS", 
        "Node JS", 
        "TailWind CSS",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/pratik6266/Scatch",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/scatch.png",
      video:
        "",
    },
    {
      title: "Checkmate",
      href: "#",
      dates: "Mar 2024 - May 2024",
      active: false,
      description:
        "A real-time multiplayer chess web app with interactive UI, board rotation, and full rules enforcement using chess.js and Socket.io, offering smooth, responsive gameplay across devices with stylish game-over detection.",
      technologies: [
        "Socket.IO",
        "Express JS",
        "EJS", 
        "Node JS", 
        "TailWind CSS",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/pratik6266/Chess",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/chess.png",
      video:
        "",
    },
    {
      title: "Blogify",
      href: "https://blogify-pratik-raj.vercel.app/",
      dates: "Jun 2024 - Aug 2024",
      active: true,
      description:
        "Blogigy is a feature-rich, user-centric blogging platform designed to make content creation and discovery seamless, intuitive, and powerful. It blends simplicity with performance to deliver a smooth experience for both writers and readers.",
      technologies: [
        "Next JS",
        "Node JS",
        "React JS", 
        "Sanity",
        "ShadCdn", 
        "TailWind CSS",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/pratik6266/Blogify",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/blogify.png",
      video:
        "",
    },
    {
      title: "Rakshak",
      href: "#",
      dates: "Sep 2024 - Jan 2025",
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
          href: "https://github.com/pratik6266/Rakshak",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/rakshak.jpg",
      video:
        "",
    },
    {
      title: "SoloRoom",
      href: "https://solo-room.vercel.app/",
      dates: "Jan 2025 - Mar 2025",
      active: true,
      description:
        "Soloroom is a private, secure one-on-one chat platform built with Next.js, Socket.io, and Redis, enabling real-time messaging with fast delivery, session management, and a clean, distraction-free interface.",
      technologies: [
        "Next JS",
        "Node JS",
        "React JS", 
        "Express JS",
        "Prisma",
        "PostgreSQL",
        "Socket.io",
        "Redis"
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/pratik6266/SoloRoom",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/soloroom.png",
      video:
        "",
    },
    {
      title: "Cloak Feedback",
      href: "https://cloak-feedback-five.vercel.app/",
      dates: "Apr 2025 - May 2025",
      active: true,
      description:
        "Cloak Feedback is a simple and secure web app built with Next.js that allows users to submit anonymous feedback. Whether it's for peer reviews, team retrospectives, or general suggestions, Cloak ensures complete privacy, making it easy to gather honest and constructive input without revealing identities.",
      technologies: [
        "Next JS",
        "Node JS",
        "React JS", 
        "Prisma",
        "PostgreSQL",
        "Tailwindcss",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/pratik6266/Cloak-Feedback",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/cloak-feedback.png",
      video:
        "",
    },
  ],

  profiles: [
    {
      title: "LeetCode",
      href: "https://leetcode.com/u/pratik5722/",
      icon: <TbBrandLeetcode className="text-xl" />,
      iconClassName: "text-yellow-500",
      active: false,
      description: [
        "Solved 800+ problems",
        "Top Interview 150, Top SQL 50 Badge.",
        "Contest rating: 1583",
        "Global rank: Under 40K"
      ],
      technologies: [
        "C++", 
        "Pandas", 
        "TypeScript",
        "Oracle",
      ],
      image: "/me.jpg",
    },
    {
      title: "Geeks For Geeks",
      href: "https://www.geeksforgeeks.org/user/pratik_alex/",
      icon: <SiGeeksforgeeks className="text-xl" />,
      iconClassName: "text-green-500",

      active: false,
      description: [
        "Solved 600+ problems",
        "Achieved 4-star rating",
        "Contest rating: 1870",
        "Institutional ranking: 27"
      ],
      technologies: [
        "C++", 
        "Java", 
        "Python",
        "C",
      ],
      image: "/me.jpg",
    },
    {
      title: "Coding Ninjas",
      href: "https://www.naukri.com/code360/profile/Pratikalex",
      icon: <SiCodingninjas className="text-xl" />,
      iconClassName: "text-blue-500",

      active: false,
      description: [
        "Completed 25 certification courses",
        "Solved 1K+ problems on Coding Ninjas",
        "Contest rating: 1671",
        "League: Ninja Dominator"
      ],
      technologies: [
        "HTML", 
        "CSS", 
        "JavaScript",
        "MySQL",
      ],
      image: "/me.jpg",
    },
    // {
    //   title: "Take U Forword",
    //   href: "https://takeuforward.org/profile/pratik5722",
    //   icon: <TbBrandLeetcode className="text-xl" />,
    //   iconClassName: "group-hover:text-red-500",

    //   active: false,
    //   description: [
    //     "AV",
    //     "AV",
    //     "AV",
    //     "BC"
    //   ],
    //   technologies: [
    //     "C++", 
    //     "Java", 
    //     "Python",
    //     "C",
    //   ],
    //   image: "/me.jpg",
    // }
  ],

  // hackathons: [
  //   {
  //     title: "Hack Western 5",
  //     dates: "November 23rd - 25th, 2018",
  //     location: "London, Ontario",
  //     description:
  //       "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  // ],
};
