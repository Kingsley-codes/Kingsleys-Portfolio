"use client";

import { Button } from "./ui/button";
import { ArrowDown, Mail } from "lucide-react";
import { motion } from "motion/react";
import { CldImage } from "next-cloudinary";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import Link from "next/link";

export function HeroSection() {
  const handleScrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="pt-16 min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background to-accent/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Text Content - Takes 2/3 of the space */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-8"
          >
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi! I&apos;m
            </motion.h2>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Agbam Kingsley
            </motion.h1>

            <motion.h2
              className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Full Stack Web Developer
            </motion.h2>

            <motion.p
              className="text-lg text-muted-foreground max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I&apos;m passionate about creating modern, scalable web
              applications using React, Next.js, Express.js, and MongoDB. I
              bring ideas to life through clean code and intuitive user
              experiences.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                size="lg"
                className="px-8 py-3"
                onClick={() =>
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Work
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3"
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get In Touch
              </Button>
            </motion.div>

            <motion.div
              className="flex space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <Link href="https://github.com/Kingsley-codes" target="_blank">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary"
                >
                  <FiGithub className="h-6 w-6 text-red-500" />
                </Button>
              </Link>

              <Link
                href="https://www.linkedin.com/in/kingsley-agbam"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary"
                >
                  <FiLinkedin className="h-6 w-6 text-red-500" />
                </Button>
              </Link>

              <Link href="mailto:agbamkingsley@gmail.com" target="_blank">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary"
                >
                  <Mail className="h-6 w-6 text-red-500" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Developer Image - Takes 1/3 of the space */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-1 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-96 lg:w-72 lg:h-80 xl:w-80 xl:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <CldImage
                  src="ps2n3rhl8qzsxuvokgzy"
                  alt="Agbam Kingsley - Full Stack Developer"
                  className="w-full h-full object-cover object-top"
                  width={400}
                  height={500}
                  sizes="(max-width: 1024px) 288px, 320px"
                />
              </div>

              {/* Subtle background accent */}
              <div className="absolute -inset-4 bg-primary/5 rounded-2xl -z-10"></div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={handleScrollToAbout}
            className="animate-bounce hover:text-primary"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
