"use client";

import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { Code, Database, Globe, Server } from "lucide-react";

export function AboutSection() {
  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Frontend Development",
      description:
        "Expert in React and Next.js for building modern, responsive web applications",
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Backend Development",
      description:
        "Proficient in Express.js for creating robust REST APIs and server-side applications",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Database Management",
      description:
        "Experienced with MongoDB for scalable and flexible data storage solutions",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Full Stack Integration",
      description:
        "Seamlessly connecting frontend and backend for complete web solutions",
    },
  ];

  const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Express.js",
    "Node.js",
    "MongoDB",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "ShadCN",
    "Git",
    "REST APIs",
    "GraphQL",
  ];

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I&apos;m a passionate full stack web developer with expertise in
            modern web technologies. I love turning complex problems into
            simple, beautiful, and intuitive solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-2xl mb-4">My Journey</h3>
                <p className="text-muted-foreground mb-6">
                  With a strong foundation in both frontend and backend
                  development, I specialize in creating end-to-end web
                  solutions. My expertise spans from crafting beautiful user
                  interfaces with React and Next.js to building robust backend
                  systems with Express.js and MongoDB.
                </p>
                <p className="text-muted-foreground mb-6">
                  I&apos;m passionate about writing clean, maintainable code and
                  staying up-to-date with the latest web development trends and
                  best practices. I believe in the power of technology to solve
                  real-world problems and create meaningful user experiences.
                </p>
                <p className="text-muted-foreground mb-6">
                  Over the past few years, I&apos;ve worked on a wide range of
                  projects. Each project has taught me something new, whether
                  it&apos;s improving performance, scaling databases, or
                  refining the user experience. This hands-on experience has
                  shaped my problem-solving approach and strengthened my ability
                  to adapt to different challenges.
                </p>
                <p className="text-muted-foreground mb-6 pb-4">
                  Beyond just building functional applications, I care deeply
                  about design, usability, and scalability. I enjoy bridging the
                  gap between technical precision and creative design, ensuring
                  that every project not only works flawlessly but also feels
                  intuitive and engaging for the end user.
                </p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="text-primary mt-1">{highlight.icon}</div>
                      <div>
                        <h4 className="mb-2">{highlight.title}</h4>
                        <p className="text-muted-foreground">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
