"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { CldImage } from "next-cloudinary";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";

export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Forever: An E-Commerce Platform",
      image: "pv3zoet7pkq44fgieqdv",
      description:
        "A full-stack e-commerce solution built with React, Express.js, and MongoDB. Features include user authentication, shopping cart, payment integration, and admin dashboard.",
      technologies: [
        "React",
        "Express.js",
        "MongoDB",
        "Stripe",
        "Tailwind CSS",
      ],
      githubUrl: "https://github.com/Kingsley-codes/forever-ecommerce",
      liveUrl: "https://forever-ecommerce-ns8g.onrender.com",
      featured: true,
    },
    {
      id: 2,
      title: "Drivenest: A car rental and sales website",
      image: "zzgpwd28cjwnhn7taybp",
      description:
        "A full-stack platform for sales and rental of luxury and regular cars. built with Next.js, Express.js, and MongoDB. Features include user authentication, shopping cart, payment integration, and admin dashboard.",
      technologies: [
        "Next.js",
        "Typescript",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Stripe",
      ],
      githubUrl: "https://github.com/Kingsley-codes/drivenest",
      liveUrl: "https://drivenest-se33.onrender.com",
      featured: true,
    },
    {
      id: 3,
      title: "LamaLog: Blog CMS",
      image: "dxrlqtdij7ij4xlq6uc0",
      description:
        "A content management system for bloggers with rich text editing, image uploads, and SEO optimization. Features admin panel and user roles.",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Express.js"],
      githubUrl: "https://github.com/Kingsley-codes/blog",
      liveUrl: "https://blog-mtrs.onrender.com",
      featured: false,
    },
    {
      id: 4,
      title: "NGO Website",
      image: "s1mivkwemckrcextnqan",
      description:
        "An NGO donation website that uses paystack for payment functionality.",
      technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
      githubUrl: "https://github.com/Kingsley-codes/thrive",
      liveUrl: "https://help-a-child-africa.onrender.com",
      featured: false,
    },
    {
      id: 5,
      title: "Social Media API",
      image: "zftpojxppfd4yckve3wd",
      description:
        "RESTful API for a social media platform with user authentication, posts, comments, likes, and follow functionality. Built with Express.js and MongoDB.",
      technologies: ["Express.js", "MongoDB", "JWT", "Multer", "Postman"],
      githubUrl: "https://github.com/Kingsley-codes/ifbsocial",
      liveUrl: "#",
      featured: false,
    },
    {
      id: 6,
      title: "Real Estate Platform",
      description:
        "A property listing platform with advanced search filters, map integration, and property comparison features. Includes agent dashboard and inquiry system.",
      technologies: [
        "React",
        "Next.js",
        "MongoDB",
        "Google Maps API",
        "Cloudinary",
      ],
      image: "hz0psjeydfhivfurmw1z",
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of the projects I&apos;ve worked on, showcasing my
            skills in full-stack development.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl mb-8 text-center"
          >
            Featured Projects
          </motion.h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="aspect-video relative overflow-hidden">
                    <CldImage
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      width={600}
                      height={400}
                      // sizes="(max-width: 1024px) 288px, 320px"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {project.title}
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover:text-primary"
                        >
                          <FiGithub className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover:text-primary"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl mb-8 text-center"
          >
            Other Projects
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow group">
                  <div className="aspect-video relative overflow-hidden">
                    <CldImage
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      width={400}
                      height={250}
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center justify-between">
                      {project.title}
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover:text-primary h-8 w-8"
                        >
                          <FiGithub className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover:text-primary h-8 w-8"
                        >
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies
                        .slice(0, 3)
                        .map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="https://github.com/Kingsley-codes?tab=repositories"
            target="_blank"
          >
            <Button variant="outline" size="lg" className="px-8">
              <FiGithub className="h-4 w-4 mr-2" />
              View More on GitHub
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
