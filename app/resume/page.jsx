"use client"
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs, } from "react-icons/si"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ScrollArea, } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"
// about data
const about = {
  title: "About me",
  description: "My details are as below-",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Hina Kauser"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 123 456 789"
    },
    {
      fieldName: "Experience",
      fieldValue: "Fresher"
    },
    {
      fieldName: "Skype",
      fieldValue: "Hina01"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian"
    },
    {
      fieldName: "Email",
      fieldValue: "hinakauserengg@gmail.com"
    },
    {
      fieldName: "Freelancing",
      fieldValue: "Available"
    },
    {
      fieldName: "Language",
      fieldValue: "English, Hindi, Urdu"
    },

  ]
}
// experience data
const experience = {
  icon: "",
  title: "My Experience",
  description: "Please find below details for my work experience-  ",
  items: [
    {
      company: "MindStrom",
      position: "Full Stack Developer",
      duration: "2024 Internship"
    },
    {
      company: "CodSoft",
      position: "Full Stack Developer",
      duration: "2024 Summer Internship"
    },
    {
      company: "Mphasis",
      position: "Senior Knowledge Specialist",
      duration: "2019-2024"
    },
    {
      company: "Capita",
      position: "Senior Executive",
      duration: "2016-2019"
    },
    {
      company: "BPMG Inter College",
      position: "Senior Teacher",
      duration: "2015-2016"
    },

  ]
}
// education data
const education = {
  icon: "",
  title: "My Education",
  description: "Please find below details for my education-",
  items: [
    {
      institution: "udamy",
      degree: "Java Core and Advance certificate",
      duration: "2020 "
    },
    {
      institution: "MindScript",
      degree: "Selenium Automation Testing",
      duration: "2018 Summer Training"
    },
    {
      institution: "Gautam Buddha Technical University",
      degree: "Bachler Of Technology",
      duration: "2011-2015"
    },
    {
      institution: "Mohd Hasan Inter College",
      degree: "Inter Mediate",
      duration: "2009-2011"
    },
    {
      institution: "GGIC High School",
      degree: "High School",
      duration: "2008-2009"
    },

  ]
}
// skills data
const skills = {
  title: "My Skills",
  description: "I'm using below technology for my project- ",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",

    },
    {
      icon: <FaCss3 />,
      name: "css 3",

    },
    {
      icon: <FaJs />,
      name: "javascript",

    },
    {
      icon: <FaReact />,
      name: "react.js",

    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",

    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",

    },
    {
      icon: <FaNodeJs />,
      name: "node.js",

    },
    {
      icon: <FaFigma />,
      name: "figma",

    },
  ]
}


const Resume = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{
      opacity: 1,
      transition: {
        delay: 1, duration: .2, ease: "easeIn"
      }
    }} className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px] ">
          <TabsList className="flex flex-col w-full mx-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 px-5 rounded-xl flex flex-col
                    justify-center items-center lg:items-start gap-1">
                        <span className="text-accent"> {item.duration}</span>
                        <h3 className="text-lg max-w-[380px] min-h-[40px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60  w-[200px]">{item.company}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 px-2 rounded-xl flex flex-col
                    justify-center items-center lg:items-start gap-1">
                        <span className="text-accent"> {item.duration}</span>
                        <h3 className="text-lg max-w-[380px] min-h-[40px]  lg:text-left ">{item.degree}</h3>
                        <div className="flex xl:justify-start gap-3">
                          {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent  mt-3"></span>
                            <p className="text-white/60  w-[200px]  ">{item.institution}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <div className="flex flex-col gap-[30px] ">
                  <h3 className="text-4xl font-bold ">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[20px] gap-4 ">
                  {skills.skillList.map((skill, index) => {
                    return <li key={index}>
                      {/* {skill.name} */}
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl
                          flex justify-center items-center group ">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">
                              {skill.name}
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold ">
                  {about.title}
                </h3>
                <p className="text-white/60 max-w-[600px] mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]
                mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return <li key={index} className="flex  justify-center
                     xl:justify-start gap-4">
                      <span className="text-white/60" >
                        {item.fieldName}
                      </span >
                      <span className="text-md ">
                        {item.fieldValue}
                      </span>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>

    </motion.div >
  )
}

export default Resume