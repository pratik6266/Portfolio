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
    "Dedicated, problem-solver, backend developer, LeetCode enthusiast, optimizer, system architect",
  summary:
    "I am a passionate problem-solver and backend developer with expertise in authentication, security, and scalable systems. I enjoy tackling complex challenges, optimizing performance, and building impactful solutions that enhance efficiency and reliability.",
  avatarUrl: "/me.jpg",
  
  skills: [
    "C",
    "C++",
    "Java",
    "Python",
    "MySQL",
    "React.js",
    "Node.js",
    "Next.js",
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "TailWind",
    "Postgres",
    "Docker",
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
        url: "https://drive.google.com/drive/folders/1d-WYJyG5T14a4IXxis98tpRsPgoTYn5E",
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
          href: "https://github.com/pratik6266/Rakshak",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
  ],

  profiles: [
    {
      title: "LeetCode",
      href: "https://leetcode.com/u/pratik5722/",
      icon: <TbBrandLeetcode className="text-xl" />,
      iconClassName: "group-hover:text-yellow-500",
      active: false,
      description: [
        "Solved 700+ problems on LeetCode",
        "Earned Top Interview 150, Top 100 Liked badge.",
        "LeetCode contest rating: 1583",
        "Global rank: Under 50K"
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
      iconClassName: "group-hover:text-green-500",

      active: false,
      description: [
        "Solved 540+ problems on GeeksforGeeks",
        "Achieved 4-star rating on GeeksforGeeks",
        "GeeksforGeeks contest rating: 1838",
        "Institutional ranking: 37"
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
      iconClassName: "group-hover:text-red-500",

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
