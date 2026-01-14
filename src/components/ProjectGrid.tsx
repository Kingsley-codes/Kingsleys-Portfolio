import ProjectCard from "./ProjectCard";
import { Project } from "@/types";

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Nexus",
    description:
      "A high-performance storefront with real-time inventory synchronization, global payment orchestration, and an optimized server-side rendering pipeline.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB28voWvs5o8KF_iibUtiWvtCdcc2xKsASJ0-LbAgMCmPKMAHebycXFfxU8T0psKZkyXkzsO7pfFyAlsC5OF-VikLUQuiKIrmY_v8HtDalOHlHh0d-kp78_YqOKXJozExkqHe9H5x6vPnjf_flmpNxoWXZ9bM1Wsf8OLJwDDArtcA0PrCCrRbz2B7p-6jOvkb9WoCrCWcSm9I5Ug2OKlc-DOPv8AAEwxx1_lOm7JfWOQn2ljrk2m1ytdMtyJ_TAiEabNLimInajrg",
    featured: true,
    links: {
      deployment: "#",
      source: "#",
    },
    type: "fullstack",
  },
  {
    id: 2,
    title: "Analytics Core UI",
    description:
      "Visualizing complex data streams with custom D3 hooks and responsive Tailwind layouts.",
    tags: ["React", "D3.js"],
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCDZB61DgC_dwRFcjbG4IAHS8JPc8KXpn1Rwk8ZFJ-pnJW8HAIPzMh4JKguRSAA7WoowJcQcVwZn5XYyZLxasu9wMZF-i7FnibDEaDXLjKb0nkIbNFMnj6iU2Do845YYBEn4jwVwXOl1ukYnZs18GQMzfJUc8wNdiObc-ph1WTZfs0gr96QbcPApwu1z9BM2wdfXyCE2JU9KQRj5QzcYigSptduGVDTQhF48VSmwnYillhLAY7kkC5ynedA3PGGKjNGL1ENLUQ2WQ",
    links: {
      explore: "#",
    },
    type: "frontend",
  },
  {
    id: 3,
    title: "Microservice Gateway",
    description:
      "Centralized authentication and rate-limiting gateway built for distributed architectures.",
    tags: ["Node.js", "Redis"],
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCUkTlLB-sgIxlPGiraCnjnyYVuwJhSG8KQsqxty4LFsjEEA_37ty-oncOCu9V5gWVkzbOp9lgEmCLKkKrbc_ujpgGnRN61ABjOm3lFI5eFF8LEXF2t6vRv5ShvDuYyfOUK6Xhhr0aO4adrbX2v_aXbvOIVwP7lnggx6YW6qzTBgHCnRAVif4oX7r4ivCzF5_O4yDuBBGGTnFh-unEcUFSBhmkNIwqM-NHhQbc7JywxSHm8lkkxuDUQYjjFpnT4Ht-Tch79c0HKxA",
    links: {
      documentation: "#",
    },
    type: "backend",
  },
  {
    id: 4,
    title: "Protocol_X Chat",
    description:
      "Encrypted real-time communication platform utilizing WebSockets and modern encryption protocols.",
    tags: ["Socket.io", "TypeScript"],
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBJgJ8Se00o5f6fV_raLDiZYX9Z7ypFcSKtoaC8LxZLHNIU-Zjgt0hAmA4PT2vE8jpWGiQSSlxRNjvcdMkrjAD8dNs1fbU2iFCRpVVLUpMEvVnbV8MdovZ04sen98h8bxpESw8oWKDNmIW2-OP1V2OrkMokfW2Qv8akCVnDRzbsaIH6pt8uBmlhl4ypEBgCO7aFUQadbltP3TDznR8AilvKA9Y6eXvyaI5mp84uTdUZ57zf-mg7N0E_GeSKsmDzLOuYtJqoGE2eBQ",
    links: {},
    type: "fullstack",
  },
  {
    id: 5,
    title: "Vault CMS",
    description:
      "A headless content management system designed for speed and developer experience.",
    tags: ["MongoDB", "Express"],
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAIKnP0-iZXqYKNRnMS94UMMx6LyHAdlLGPFieM7jRtCz269w8E7JdGtoE4xVR4ohV1WlPwaVq7p9JPXQ3nkRnOP27aAKw7iBuEhzUMSRzkbyqmnRtcYZcBJ__bsDn3-Bpiw2iGL3gOy1G_OcYYKyw76hS_NmRS6RMsdo4MYxD8H5grOaldg-mnlbgW0y1YXcrxb0RU-y4hI7XzvypASW--Cnm88b1CFDTuD5hvL7V1L5uHyItYYoPT4zuxEfD5fnRYbtWsdNSOXA",
    links: {},
    type: "backend",
  },
];

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          isFeatured={project.featured}
        />
      ))}
    </div>
  );
}
