import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title?: string;
  description?: string;
  date?: string;
  imageUrl?: string;
  projectUrl?: string;
}

const ProjectCard = ({
  title = "Resume Builder",
  description = "Dynamic resume builder using HTML, CSS & JS. Real-time creation with intuitive UI and PDF download.",
  date = "Dec 2024",
  imageUrl = "https://www.imghippo.com/i/iCb3872dSk.png",
  projectUrl = "#",
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full"
    >
      <Card className="overflow-hidden border border-purple-900/50 bg-black/60 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] h-full flex flex-col">
        <div className="relative overflow-hidden h-48 rounded-t-lg">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 rounded-t-lg shadow-lg"
          />
          <div className="absolute top-2 right-2 bg-black/70 text-xs text-purple-300 px-2 py-1 rounded-full backdrop-blur-sm">
            {date}
          </div>
        </div>

        <CardHeader className="pb-2">
          <CardTitle className="text-xl text-white font-bold">
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent className="pb-4 flex-grow">
          <CardDescription className="text-gray-300">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
