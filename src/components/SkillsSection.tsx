"use client";

import { Card, CardContent } from "./ui/card";
import { Progress } from "./ui/progress";
import { motion } from "motion/react";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React", level: 90, color: "bg-blue-500" },
        { name: "Next.js", level: 85, color: "bg-gray-800" },
        { name: "TypeScript", level: 88, color: "bg-blue-600" },
        { name: "JavaScript", level: 92, color: "bg-yellow-500" },
        { name: "HTML5", level: 95, color: "bg-orange-500" },
        { name: "CSS3", level: 90, color: "bg-blue-400" },
        { name: "Tailwind CSS", level: 88, color: "bg-cyan-500" }
      ]
    },
    {
      title: "Backend Technologies",
      skills: [
        { name: "Express.js", level: 85, color: "bg-green-600" },
        { name: "Node.js", level: 87, color: "bg-green-500" },
        { name: "REST APIs", level: 90, color: "bg-purple-500" },
        { name: "GraphQL", level: 75, color: "bg-pink-500" },
        { name: "JWT Authentication", level: 80, color: "bg-indigo-500" }
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MongoDB", level: 88, color: "bg-green-400" },
        { name: "Mongoose", level: 85, color: "bg-red-500" },
        { name: "Git", level: 90, color: "bg-orange-600" },
        { name: "Prisma", level: 75, color: "bg-teal-500" },
        { name: "Postman", level: 85, color: "bg-orange-400" }
      ]
    }
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
            Here are the technologies and tools I work with to bring ideas to life.
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
                        transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <motion.div
                            className="h-2 rounded-full bg-primary"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5 }}
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
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}