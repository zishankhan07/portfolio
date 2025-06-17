import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const HeroSection = () => {
  const [nameText, setNameText] = useState("");
  const [isNameTyping, setIsNameTyping] = useState(true);
  const [showNameCursor, setShowNameCursor] = useState(true);
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullName = "Zishan Ali Khan";
  const fullText = "BCA Graduate & Aspiring Software Developer";

  // Name typing animation
  useEffect(() => {
    if (isNameTyping) {
      if (nameText.length < fullName.length) {
        const timeout = setTimeout(() => {
          setNameText(fullName.slice(0, nameText.length + 1));
        }, 150);
        return () => clearTimeout(timeout);
      } else {
        setIsNameTyping(false);
        const timeout = setTimeout(() => {
          setIsNameTyping(true);
          setNameText("");
        }, 4000);
        return () => clearTimeout(timeout);
      }
    }
  }, [nameText, isNameTyping]);

  // Cursor blinking for name
  useEffect(() => {
    const interval = setInterval(() => {
      setShowNameCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Tagline typing animation
  useEffect(() => {
    if (isTyping) {
      if (text.length < fullText.length) {
        const timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
        const timeout = setTimeout(() => {
          setIsTyping(true);
          setText("");
        }, 3000);
        return () => clearTimeout(timeout);
      }
    }
  }, [text, isTyping]);

  return (
    <section className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center px-4 md:px-8 overflow-hidden">
      {/* Particle background effect */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-500/20"
            style={{
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * -100 - 50],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 flex justify-between items-center p-6 z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-white"
        >
          ZK
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex space-x-6"
        >
          <a
            href="#"
            className="text-gray-300 hover:text-purple-400 transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-300 hover:text-purple-400 transition-colors"
          >
            About
          </a>
          <a
            href="#experience"
            className="text-gray-300 hover:text-purple-400 transition-colors"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="text-gray-300 hover:text-purple-400 transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-300 hover:text-purple-400 transition-colors"
          >
            Contact
          </a>
        </motion.div>
      </nav>
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 z-10">
        {/* Text content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              {nameText}
              <span
                className={`${showNameCursor && isNameTyping ? "opacity-100" : "opacity-0"} transition-opacity ml-1`}
              >
                |
              </span>
            </span>
            <br />
          </h1>

          <motion.div
            className="h-8 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <h2 className="text-xl md:text-2xl text-purple-300 font-light hover:text-purple-200 transition-colors duration-300">
              {text}
              <span
                className={`${isTyping ? "opacity-100" : "opacity-0"} transition-opacity`}
              >
                |
              </span>
            </h2>
          </motion.div>

          <p className="text-gray-300 max-w-lg mb-6">
            I am a hardworking and detail-oriented BCA graduate with a strong
            foundation in computer applications and basic programming skills. I
            enjoy learning new technologies and solving problems smartly and
            efficiently.
          </p>

          {/* Contact Information */}
          <div className="space-y-3 mb-8">
            <div className="flex items-center text-gray-300">
              <Mail className="h-4 w-4 mr-3 text-purple-400" />
              <span>zishanalikhan87@gmail.com</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Phone className="h-4 w-4 mr-3 text-purple-400" />
              <span>+91 8888688171</span>
            </div>
            <div className="flex items-center text-gray-300">
              <MapPin className="h-4 w-4 mr-3 text-purple-400" />
              <span>Nanded, Maharashtra, India</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/20 group">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <div className="flex space-x-4 items-center">
              <a
                href="https://github.com/zishankhan07"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] transition-all duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/zishan-khan01/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:zishanalikhan87@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Avatar/3D element */}
        <motion.div
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative group">
            {/* Animated rotating ring */}
            <div
              className="absolute -inset-6 rounded-full border-2 border-purple-500/20 animate-spin"
              style={{ animationDuration: "8s" }}
            />

            {/* Glowing background effect */}
            <motion.div
              className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-30 blur-xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Hover glow effect */}
            <div className="absolute -inset-2 rounded-full bg-purple-400/0 group-hover:bg-purple-400/20 transition-all duration-500 blur-md" />

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Avatar className="h-64 w-64 border-4 border-purple-500/30 shadow-xl shadow-purple-500/20 group-hover:border-purple-400/50 transition-all duration-300">
                <AvatarImage
                  src="https://imagizer.imageshack.com/img922/5499/wBdgZo.jpg"
                  alt="Zishan Ali Khan"
                />
                <AvatarFallback className="bg-purple-900 text-4xl text-white">
                  AK
                </AvatarFallback>
              </Avatar>
            </motion.div>
          </div>
        </motion.div>
      </div>
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex justify-center pt-2">
          <motion.div
            className="w-1 h-2 bg-purple-400 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
