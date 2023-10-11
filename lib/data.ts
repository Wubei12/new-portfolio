import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import GPT3Img from "@/public/GPT-3.png";
import ThreadsImg from "@/public/Threads.png";
import ConlanImg from "@/public/ConLan-PLC.png";

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
    title: "Graduated University",
    location: "Addis Ababa, Ethiopia",
    description:
      "I graduated after 5 years of studying Engineering. I immediately found a job as a Sanitary works designer.",
    icon: React.createElement(LuGraduationCap),
    date: "2017",
  },
  {
    title: "Sanitary Engineer",
    location: "Addis Ababa, Ethiopia",
    description:
      "I worked as a site engineer, project manager and eventually as an independent contractor on Mechanical, Electrical, and Plumbing projects in buildings.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2021",
  },
  {
    title: "BIM Technician",
    location: "Remote",
    description:
      "I worked as a BIM modeler, Technician and eventually become project manager at my firm. Working with many software developers on the job, I was introduced to the Web Development world.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Frontend Developer",
    location: "Addis Ababa, Ethiopia",
    description:
      "I'm now a junior developer working as a freelancer. My stack includes React, Next.js, TypeScript, and Tailwind. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "ConLan",
    description:
      "This is my personal pride and joy of a project. a landing page for a construction company. It has features like filtering, sorting and pagination. Another great feature is the animation on scroll, which makes the going through the site feel like a breeze.",
    tags: ["React", "TypeScript", "Next.js", "TailwindCSS", "Redux"],
    imageUrl: ConlanImg,
  },
  {
    title: "GPT-3 ",
    description:
      "I worked on this project just as a practice for the purpose of boosting my skills. I took it as a challenge not to use libraries and to use the net ability of React alone and Plain CSS to create something beautiful. It turned out great.",
    tags: ["React", "Vanilla CSS"],
    imageUrl: GPT3Img,
  },
  {
    title: "Threads App Clone",
    description:
      "Another project of my own where I worked on the cloned version of the new Threads app which is famous nowadays.",
    tags: ["React", "Next.js", "MongoDB", "TailwindCSS"],
    imageUrl: ThreadsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  // "Prisma",
  // "MongoDB",
  // "Redux",
  // "GraphQL",
  // "Apollo",
  // "Express",
  // "PostgreSQL",
  // "Python",
  // "Django",
  "Framer Motion",
] as const;
