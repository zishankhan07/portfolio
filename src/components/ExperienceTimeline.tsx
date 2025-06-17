import React from "react";
import { motion } from "framer-motion";
import { Calendar, Briefcase, MapPin } from "lucide-react";
import { Badge } from "./ui/badge";

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  location: string;
  responsibilities: string[];
}

interface ExperienceTimelineProps {
  experiences?: ExperienceItem[];
}

const ExperienceTimeline = ({
  experiences = defaultExperiences,
}: ExperienceTimelineProps) => {
  return (
    <div className="w-full max-w-5xl mx-auto bg-black/20 p-6 rounded-xl backdrop-blur-sm">
      <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-violet-600 text-transparent bg-clip-text">
        Work Experience
      </h2>

      <div className="relative">
        {/* Vertical timeline line with glow effect */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 to-violet-700 shadow-[0_0_10px_2px_rgba(147,51,234,0.5)] rounded-full" />

        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""} mb-12`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Timeline dot with glow */}
            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-purple-600 shadow-[0_0_15px_3px_rgba(147,51,234,0.6)] z-10" />

            {/* Content card */}
            <div
              className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:mr-auto md:pl-0 md:pr-8" : "md:ml-auto md:pl-8 md:pr-0"} pl-8`}
            >
              <div className="bg-gray-900/80 border border-purple-900/50 rounded-lg p-6 hover:shadow-[0_0_15px_rgba(147,51,234,0.3)] transition-all duration-300 h-full">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {experience.company}
                  </h3>
                  <Badge
                    variant="outline"
                    className="bg-purple-950/50 text-purple-300 border-purple-700/50 self-start"
                  >
                    {experience.position}
                  </Badge>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-4 text-sm text-gray-300">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} className="text-purple-400" />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} className="text-purple-400" />
                    <span>{experience.location}</span>
                  </div>
                </div>

                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + idx * 0.1 }}
                    >
                      {responsibility}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const defaultExperiences: ExperienceItem[] = [
  {
    company: "Code Alpha",
    position: "Frontend Development Intern",
    duration: "June 2025 – July 2025",
    location: "Lucknow, India (Remote)",
    responsibilities: [
      "Developed responsive web pages using HTML, CSS, and JavaScript",
      "Completed a small-scale web project independently",
    ],
  },
  {
    company: "Personal Projects",
    position: "Self-Learning",
    duration: "2023 – Present",
    location: "Remote",
    responsibilities: [
      "Developed multiple personal projects to enhance programming skills",
      "Learned and implemented modern web development technologies",
      "Collaborated with peers on open-source contributions",
    ],
  },
  {
    company: "University Projects",
    position: "BCA Student",
    duration: "2021 – 2024",
    location: "University Campus",
    responsibilities: [
      "Led team projects in database design and implementation",
      "Created web applications as part of coursework",
      "Presented technical solutions to faculty and peers",
    ],
  },
];

export default ExperienceTimeline;
