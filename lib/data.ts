import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import statcodeImg from "@/public/statcode.png";
import usermanagementImg from "@/public/usermanagement.png";
import gitchatImg from "@/public/gitchat.png";
import expensetrackerImg from "@/public/expensetracker.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "B.Tech CSE",
    location: "Bhopal, India",
    description:
      "I graduated with a Bachelor’s degree in Computer Science and Engineering in 2021, achieving a CGPA of 8.1. During my four years of study, I built a strong foundation in computer science concepts, with a particular focus on frontend development, including user interface design, web technologies, and frameworks like React. This academic journey fueled my passion for creating seamless and engaging user experiences.",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2021",
  },
  {
    title: "Software Engineer",
    location: "Bengaluru, India",
    description:
      "I have been working as a Contact Center Developer for the past 2 years, where I optimized AWS services such as Connect, Lex, Lambda, DynamoDB, and CloudWatch to achieve a 30% improvement in system performance. I enhanced a Lex bot by optimizing conversational flows, resulting in a 20% increase in efficiency. Additionally, I played a pivotal role in securing two new clients by showcasing improved product capabilities and delivering exceptional customer solutions. Alongside this, I have been actively upskilling myself as a Frontend Developer to broaden my expertise and contribute to user-centric development.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - present ",
  },
  
] as const;

export const projectsData = [
  {
    title: "Stat Code",
    description:
      "A FullStack app for developers  for writing, sharing, and showcasing multi-language code while tracking most-used tech, total submissions, and coding stats.",
    tags: ["Next.js", "Tailwind","TypeScript","JavaScript", "Convex","Clerk","Vercel","Lemon Squeezy", ],
    imageUrl: statcodeImg,
  },
  {
    title: "Git Chat",
    description:
      "A robust app using React,and Sockets for real-time messaging. Backend with Node.js, Express and Zustand for seamless functionality.",
    tags: ["React", "Tailwind", "MongoDB", "Node.js", "JWT Token", "ShadCN","Socket.IO"],
    imageUrl: gitchatImg,
  },
  {
    title: "User Management System",
    description:
      "A user management system built with Node.js, Express, and MongoDB, featuring CRUD operations, and optimized UI rendering with EJS templates.",
    tags: ["JavaScript", "EJS", "Node"],
    imageUrl: usermanagementImg,
  },
 
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "BootStrap",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node",
  "Git/Github",
  "Tailwind CSS",
  "MaterialUI",
  "MongoDB",
  "JSON Web Token",  
  "Multer",
  "SocketIO",
  "Express",
  "Axios",
  "Framer Motion",
  "Vite",
  "PostMan",
  "Amazon Web Services",
  "Python",
  "C/C++",

] as const;
