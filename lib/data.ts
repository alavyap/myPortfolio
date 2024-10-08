import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import gitchatImg from "@/public/gitchat.png";
import pixelpaintImg from "@/public/pixelpaint.png";
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
      "After completing my 4-year B.Tech in 2021, I immediately secured a job at Tech Mahindra as a associate developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2021",
  },
  {
    title: "Software Engineer",
    location: "Bengaluru, India",
    description:
      "I am working as a contact center developer for 3 years. I am also upskilling myself as a  front end developer.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - present ",
  },
  
] as const;

export const projectsData = [
  {
    title: "Git Chat",
    description:
      "A robust app using React,and Sockets for real-time messaging. Backend with Node.js, Express and Zustand for seamless functionality.",
    tags: ["React", "Tailwind", "MongoDB", "Node.js", "JWT Token", "ShadCN","Socket.IO"],
    imageUrl: gitchatImg,
  },
  {
    title: "Expense Tracker",
    description:
      "A full-stack Expense Tracker app using React, Chakra UI, Node.js, and MongoDB for efficient expense management and user-friendly design.",
    tags: ["React","Chakra UI", "MongoDB", "Node.js"],
    imageUrl: expensetrackerImg,
  },
  {
    title: "Pixel Paint",
    description:
      "A drawing app built with HTML, CSS, and JavaScript, featuring a user-friendly interface and the ability to download your creations.",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: pixelpaintImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "BootStrap",
  "JavaScript",
  "TypeScript",
  "React",
  "Next",
  "Node",
  "Git",
  "TailwindCSS",
  "MaterialUI"
  "MongoDB",
  "JSON Web Token",  
  "Multer ",
  "SocketIO",
  "Express",
  "Axios",
  "Python",
  "C/C++",
  "Framer Motion",
  "VS Code",
  "Vite",
  "PostMan",
  "AWS",
] as const;
