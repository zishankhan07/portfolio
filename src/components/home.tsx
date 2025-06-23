import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import HeroSection from "./HeroSection";
import ProjectCard from "./ProjectCard";
import ExperienceTimeline from "./ExperienceTimeline";
import ContactForm from "./ContactForm";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";

const HomePage = () => {
  // Typing animation for skills
  const [skillText, setSkillText] = useState("");
  const [skillIndex, setSkillIndex] = useState(0);
  const [isSkillTyping, setIsSkillTyping] = useState(true);
  const [showSkillCursor, setShowSkillCursor] = useState(true);

  const skillStrings = [
    "Frontend Development",
    "UI/UX Design",
    "Programming in C/C++, Python",
    "Responsive Web Design",
    "GitHub & Version Control",
  ];

  // Skills typing animation
  useEffect(() => {
    const currentSkill = skillStrings[skillIndex];

    if (isSkillTyping) {
      if (skillText.length < currentSkill.length) {
        const timeout = setTimeout(() => {
          setSkillText(currentSkill.slice(0, skillText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsSkillTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (skillText.length > 0) {
        const timeout = setTimeout(() => {
          setSkillText(skillText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setSkillIndex((prev) => (prev + 1) % skillStrings.length);
        setIsSkillTyping(true);
      }
    }
  }, [skillText, isSkillTyping, skillIndex, skillStrings]);

  // Cursor blinking for skills
  useEffect(() => {
    const interval = setInterval(() => {
      setShowSkillCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Skills data
  const skills = {
    proficient: ["C", "C++", "Python", "SQL", "HTML", "CSS"],
    familiar: ["MS Office", "Visual Studio"],
    tools: ["GitHub", "Netlify", "ChatGPT", "Gemini", "GitHub Copilot"],
    os: ["Windows", "basic Linux"],
    soft: [
      "Effective communication",
      "Self-motivated & hardworking",
      "Calm under pressure",
      "Teamwork & leadership",
      "Public speaking",
    ],
  };

  // Projects data
  const projects = [
    {
      id: 1,
      title: "Resume Builder",
      date: "Dec 2024",
      description:
        "Dynamic resume builder using HTML, CSS & JS with real-time creation, intuitive UI and PDF download functionality.",
      image: "https://imagizer.imageshack.com/img923/2401/Jq5DjI.png",
      link: "https://resume-makers.netlify.app/",
    },
    {
      id: 2,
      title: "City Explorer",
      date: "Mar 2024",
      description:
        "Interactive city discovery web app built using HTML, CSS, and JavaScript that lets users search cities and view key information.",
      image: "https://imagizer.imageshack.com/img923/2161/h0j1i6.jpg",
      link: "https://nanded-explorer.netlify.app/",
    },
  ];

  // Experience data
  const experiences = [
    {
      id: 1,
      role: "Frontend Development Intern",
      company: "Code Alpha",
      location: "Lucknow, India (Remote)",
      period: "June 2025 – July 2025",
      responsibilities: [
        "Developed responsive web pages using HTML, CSS, and JavaScript",
        "Completed a small-scale web project independently",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
              About Me
            </h2>
            <div className="mb-6">
              <p className="text-lg text-gray-300 max-w-3xl mb-4">
                I'm known for being a reliable team player who also takes
                initiative and delivers quality work. I seek opportunities to
                apply my knowledge, grow professionally, and contribute to a
                forward-thinking organization.
              </p>
              <div className="text-xl text-purple-300 font-medium">
                <span>I specialize in </span>
                <span className="text-purple-400">
                  {skillText}
                  <span
                    className={`${showSkillCursor ? "opacity-100" : "opacity-0"} transition-opacity`}
                  >
                    |
                  </span>
                </span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/60 border border-purple-500/20 shadow-lg shadow-purple-500/10 overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-purple-400">
                    Skills & Expertise
                  </h3>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-400 mb-2">
                      Proficient
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.proficient.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-purple-900/40 text-purple-200 text-sm rounded-full border border-purple-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-400 mb-2">
                      Familiar With
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.familiar.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-purple-900/40 text-purple-200 text-sm rounded-full border border-purple-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-400 mb-2">
                      Tools & Tech
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.tools.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-purple-900/40 text-purple-200 text-sm rounded-full border border-purple-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-400 mb-2">
                      Operating Systems
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.os.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-purple-900/40 text-purple-200 text-sm rounded-full border border-purple-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/60 border border-purple-500/20 shadow-lg shadow-purple-500/10 h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-purple-400">
                    Soft Skills
                  </h3>
                  <ul className="space-y-4">
                    {skills.soft.map((skill, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-purple-500"></div>
                        <span className="text-gray-300">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-purple-950/20"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
              Work Experience
            </h2>
          </motion.div>

          <ExperienceTimeline experiences={experiences} />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
              Projects
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl">
              Here are some of the projects I've worked on. Each demonstrates
              different skills and technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: project.id * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard
                  title={project.title}
                  date={project.date}
                  description={project.description}
                  imageUrl={project.image}
                  projectUrl={project.link}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-950/20 to-black"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl">
              Feel free to reach out if you're looking for a developer, have a
              question, or just want to connect.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            <div className="lg:col-span-2">
              <Card className="bg-gray-900/60 border border-purple-500/20 shadow-lg shadow-purple-500/10 h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6 text-purple-400">
                    Connect With Me
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-purple-400 mr-3" />
                      <span className="text-gray-300">
                        zishanalikhan87@gmail.com
                      </span>
                    </div>

                    <Separator className="bg-purple-500/20" />

                    <div className="flex space-x-4">
                      <a
                        href="https://github.com/zishankhan07"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full border-purple-500/50 hover:bg-purple-500/20 hover:text-purple-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300"
                        >
                          <Github className="h-5 w-5" />
                          <span className="sr-only">GitHub</span>
                        </Button>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/zishan-khan01/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full border-purple-500/50 hover:bg-purple-500/20 hover:text-purple-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300"
                        >
                          <Linkedin className="h-5 w-5" />
                          <span className="sr-only">LinkedIn</span>
                        </Button>
                      </a>
                      <a
                        href="mailto:zishanalikhan87@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full border-purple-500/50 hover:bg-purple-500/20 hover:text-purple-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300"
                        >
                          <Mail className="h-5 w-5" />
                          <span className="sr-only">Email</span>
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-black border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Zishan Ali Khan. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="https://github.com/zishankhan07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/zishan-khan01/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:zishanalikhan87@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <div className="fixed bottom-8 right-8">
        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          size="icon"
          className="rounded-full bg-purple-600 hover:bg-purple-700 shadow-lg shadow-purple-500/20"
        >
          <ArrowDown className="h-5 w-5 rotate-180" />
          <span className="sr-only">Scroll to top</span>
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
