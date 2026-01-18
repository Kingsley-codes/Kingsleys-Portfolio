"use client";

import ProjectCard from "./ProjectCard";
import { Project } from "@/types";
import { useRouter } from "next/navigation";

const projects: Project[] = [
  {
    id: 1,
    name: "task-gynie",
    title: "Task Gynie",
    description:
      "A mission-driven service marketplace that connects customers with trusted local professionals for everyday household needs, helping women and families reclaim time, balance responsibilities, and enjoy peace of mind.",
    tags: ["Next.js", "Express.js", "MongoDB", "Paystack API"],
    imageUrl:
      "https://res.cloudinary.com/dbeyl29fl/image/upload/v1768329374/fywjoumyw4yzlpola8l7.png",
    featured: true,
    links: {
      deployment: "https://task-gynie.vercel.app",
    },
  },
  {
    id: 2,
    name: "meride-haven",
    title: "Meride Haven",
    description:
      "A premium transport and hospitality brand delivering private and corporate transportation, professional chauffeur services, secure escort support, and guest coordination with a focus on safety, comfort, and trust.",
    tags: ["Next.js", "Express.js", "MongoDB", "Ercas API"],
    imageUrl:
      "https://res.cloudinary.com/dbeyl29fl/image/upload/v1768329379/itplrm6l3v9gmmrgyddg.png",
    links: {
      deployment: "https://meride-haven.com",
    },
  },
  {
    id: 3,
    name: "idonatio",
    title: "iDonatio",
    description:
      "A cashless donation platform that seamlessly connects donors and donees, enabling fast, secure giving and powerful donation management through an easy-to-use web and mobile experience.",
    tags: ["Express", "Next.js", "MongoDB", "Paystack API"],
    imageUrl:
      "https://res.cloudinary.com/dbeyl29fl/image/upload/v1768329373/bmvzikmsfnurm2d92p20.png",
    links: {
      deployment: "https://www.idonatio.com",
    },
  },
  {
    id: 4,
    name: "forever-ecommerce",
    title: "Forever E-commerce",
    description:
      "High-performance e-commerce engine with Redis caching, full-text search, and a custom-built headless CMS for content management.",
    tags: ["Express", "React", "MongoDB", "Paystack API"],
    imageUrl:
      "https://res.cloudinary.com/dbeyl29fl/image/upload/v1768329372/x0iwhuhqolqwvw8296xw.png",
    links: {
      deployment: "https://forever-ecommerce-ns8g.onrender.com",
    },
  },
  {
    id: 5,
    name: "lamalog",
    title: "LamaLog",
    description:
      "A lightweight blogging and CMS platform that enables users to create, manage, and publish blog posts through a clean, intuitive authoring experience.",
    tags: ["React", "MongoDB", "Express"],
    imageUrl:
      "https://res.cloudinary.com/dbeyl29fl/image/upload/v1768329378/abd1znzcrcmpu4hhfejx.png",
    links: {
      deployment: "https://blog-mtrs.onrender.com",
    },
  },
  {
    id: 6,
    name: "funlearn",
    title: "FunLearn",
    description:
      "An AI-assisted, gamified learning platform that transforms uploaded documents into explanations, practice quizzes, and competitive challenges, with real-time chatrooms for collaborative group study.",
    tags: ["MongoDB", "Next.js", "Express", "Socket.io", "AI"],
    imageUrl:
      "https://res.cloudinary.com/dbeyl29fl/image/upload/v1768581063/gzgkavevsc5ucg7fxsmf.png",
    links: {
      deployment: "https://funlearn-frontend.vercel.app",
    },
  },
  {
    id: 7,
    name: "we-listen",
    title: "We-Listen",
    description:
      "An anonymous mental wellness platform that allows users to securely chat with verified therapists, creating a safe space for honest expression without fear of exposure or judgment.",
    tags: ["MongoDB", "React", "Socket.io", "Express"],
    imageUrl:
      "https://res.cloudinary.com/dbeyl29fl/image/upload/v1768581227/w5szfl5qshhnefsvwnyq.png",
    links: {
      deployment: "https://we-listen.co",
    },
  },
  {
    id: 8,
    name: "help-a-child-africa",
    title: "Help A Child Africa",
    description:
      "An NGO website designed to support humanitarian initiatives by enabling secure donations and raising awareness for projects focused on improving the lives of children across Africa.",
    tags: ["MongoDB", "Express", "Next.js", "Paystack API"],
    imageUrl:
      "https://res.cloudinary.com/dbeyl29fl/image/upload/v1756125957/s1mivkwemckrcextnqan.png",
    links: {
      deployment: "https://help-a-child-africa.onrender.com",
    },
  },
];

export default function ProjectGrid() {
  const router = useRouter();

  const handleCardClick = (projectName: string) => {
    router.push(`/projects/${projectName}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          isFeatured={project.featured}
          onClick={() => handleCardClick(project.name)}
        />
      ))}
    </div>
  );
}
