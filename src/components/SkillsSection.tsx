"use client";

import { Card, CardContent } from "./ui/card";
import { Progress } from "./ui/progress";
import { motion } from "motion/react";
import { RiTailwindCssFill } from "react-icons/ri";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 95 },
        { name: "TypeScript", level: 88 },
        { name: "JavaScript", level: 92 },
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 90 },
        { name: "Tailwind CSS", level: 93 },
      ],
    },
    {
      title: "Backend Technologies",
      skills: [
        { name: "Express.js", level: 95 },
        { name: "Node.js", level: 87 },
        { name: "REST APIs", level: 90 },
        { name: "GraphQL", level: 75 },
        { name: "JWT Authentication", level: 90 },
      ],
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MongoDB", level: 92 },
        { name: "Mongoose", level: 88 },
        { name: "Git", level: 90 },
        { name: "Prisma", level: 75 },
        { name: "Postman", level: 88 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to
            life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-6 text-center">{category.title}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                        }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <motion.div
                            className="h-2 rounded-full bg-primary"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 1,
                              delay:
                                categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                            }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="inline-block p-8 bg-gradient-to-br from-primary/10 to-accent/20">
            <CardContent className="p-0">
              <h3 className="text-2xl mb-4">Core Stack</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                    <span className="text-2xl">⚛️</span>
                  </div>
                  <p>React</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <p>Next.js</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <p>Express.js</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                    <span className="text-2xl">🍃</span>
                  </div>
                  <p>MongoDB</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                    <span className="text-2xl">
                      <RiTailwindCssFill className="text-red-500" />
                    </span>
                  </div>
                  <p>Tailwinc CSS</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
