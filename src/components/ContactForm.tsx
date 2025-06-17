import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface ContactFormProps {
  className?: string;
}

const ContactForm = ({ className = "" }: ContactFormProps) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Simulate form submission
    setTimeout(() => {
      // In a real app, you would send the form data to a server here
      console.log("Form submitted:", formState);
      setFormStatus("success");
      setFormState({ name: "", email: "", message: "" });

      // Reset form status after showing success message
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <Card className={`bg-[#0f0a1e] border-purple-900/30 ${className}`}>
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl font-bold text-white text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
            Get In Touch
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formState.name}
                onChange={handleChange}
                required
                className="bg-[#1a1232] border-purple-700/50 focus:border-purple-500 h-12 text-white placeholder:text-purple-300/50 shadow-[0_0_10px_rgba(168,85,247,0.15)] focus:shadow-[0_0_15px_rgba(168,85,247,0.25)] transition-all duration-300"
              />
            </div>
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formState.email}
                onChange={handleChange}
                required
                className="bg-[#1a1232] border-purple-700/50 focus:border-purple-500 h-12 text-white placeholder:text-purple-300/50 shadow-[0_0_10px_rgba(168,85,247,0.15)] focus:shadow-[0_0_15px_rgba(168,85,247,0.25)] transition-all duration-300"
              />
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formState.message}
                onChange={handleChange}
                required
                className="bg-[#1a1232] border-purple-700/50 focus:border-purple-500 min-h-[150px] text-white placeholder:text-purple-300/50 shadow-[0_0_10px_rgba(168,85,247,0.15)] focus:shadow-[0_0_15px_rgba(168,85,247,0.25)] transition-all duration-300"
              />
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full"
          >
            <Button
              type="submit"
              disabled={formStatus === "submitting"}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white py-3 rounded-md font-medium text-lg shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all duration-300"
            >
              {formStatus === "submitting" ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : formStatus === "success" ? (
                "Message Sent!"
              ) : formStatus === "error" ? (
                "Failed to Send"
              ) : (
                "Send Message"
              )}
            </Button>
          </motion.div>

          {formStatus === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-400 text-center font-medium"
            >
              Thank you for your message! I'll get back to you soon.
            </motion.div>
          )}

          {formStatus === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-center font-medium"
            >
              Something went wrong. Please try again later.
            </motion.div>
          )}
        </form>

        <div className="mt-8 pt-6 border-t border-purple-900/30">
          <p className="text-purple-300 text-center mb-4">Or reach out via:</p>
          <div className="flex justify-center space-x-6">
            <motion.a
              href="https://github.com/zishankhan07"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              className="text-purple-300 hover:text-purple-400 transition-colors duration-300"
            >
              <Github
                size={24}
                className="hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]"
              />
              <span className="sr-only">GitHub</span>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/zishan-khan01/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              className="text-purple-300 hover:text-purple-400 transition-colors duration-300"
            >
              <Linkedin
                size={24}
                className="hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]"
              />
              <span className="sr-only">LinkedIn</span>
            </motion.a>
            <motion.a
              href="mailto:zishanalikhan87@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              className="text-purple-300 hover:text-purple-400 transition-colors duration-300"
            >
              <Mail
                size={24}
                className="hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]"
              />
              <span className="sr-only">Gmail</span>
            </motion.a>
          </div>
          <p className="text-purple-300/70 text-center mt-4 text-sm">
            Email:{" "}
            <a
              href="mailto:zishanalikhan87@gmail.com"
              className="hover:text-purple-400 transition-colors duration-300"
            >
              zishanalikhan87@gmail.com
            </a>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
