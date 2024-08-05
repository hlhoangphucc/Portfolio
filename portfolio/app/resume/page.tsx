"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
  title: "About me",
  description:
    "Include popular icons in your React projects easily with react-icons which utilizes ES6 imports that allows you to include only the icons that your project is using.",
  info: [
    {
      fieldname: "Name",
      fieldValue: "Dev Xịn",
    },
    {
      fieldname: "Phone",
      fieldValue: "(+84) 392 234 718",
    },
    {
      fieldname: "Experience",
      fieldValue: "1 Year",
    },
    {
      fieldname: "GitHub",
      fieldValue: "GitName",
    },
    {
      fieldname: "Nationality",
      fieldValue: "VietNam",
    },
    {
      fieldname: "Email",
      fieldValue: "mail@gmail.com",
    },
    {
      fieldname: "Language",
      fieldValue: "English",
    },
  ],
};

const experience = {
  icon: "",
  title: "My experience",
  description: "Include popular icons in your React projects easily",
  item: [
    {
      company: "Facebook",
      position: "Full stack",
      duration: "2002 - present",
    },
    {
      company: "PornHub",
      position: "Full stack",
      duration: "2015 - present",
    },
    {
      company: "Sky",
      position: "Full stack",
      duration: "2021 - present",
    },
    {
      company: "Homepage",
      position: "Full stack",
      duration: "2023 - present",
    },
    {
      company: "Caothang",
      position: "Full stack",
      duration: "2023 - present",
    },
  ],
};

const education = {
  icon: "",
  title: "My education",
  description: "Include popular icons in your React projects easily",
  item: [
    {
      institution: "Facebook",
      degree: "Full stack",
      duration: "2003",
    },
  ],
};

const skills = {
  title: "My skills",
  description: "Include popular icons in your React projects easily",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "HTML5",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaJs />,
      name: "JS",
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJs",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.JS",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwindcss",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[88vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="Experience" className="flex flex-col xl:flex-row">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-[20px]">
            <TabsTrigger value="Experience">Experience</TabsTrigger>
            <TabsTrigger value="Education">Education</TabsTrigger>
            <TabsTrigger value="Skills">Skills</TabsTrigger>
            <TabsTrigger value="About">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70px] w-full">
            <TabsContent value="Experience" className="w-full">
              Experience
            </TabsContent>
            <TabsContent value="Education" className="w-full">
              Education
            </TabsContent>
            <TabsContent value="Skills" className="w-full">
              Skills
            </TabsContent>
            <TabsContent value="About" className="w-full">
              About
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default resume;
