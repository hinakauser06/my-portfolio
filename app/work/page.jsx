"use client"

import { motion } from "framer-motion"
import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"
import Image from "next/image"
import WorkSliderBtns from "@/components/ui/WorkSliderBtns"
import { Video } from "lucide-react"

const projects = [
  {
    num: "01",
    category: "Full Stack Development",
    title: "Hospital Management",
    description: `I mainly focused on to create/register new user as Patient/Doctor/Admin. Patient can create an appointment,
    and it'll go to admin and admin can schedule the appointment to respective doctor. Finally appointment is booked and patient can visit the doctor to whom it is booked. `,
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "Javascript" }, { name: "React.js" }, { name: "Bootstrap" }, { name: "MongoDB" },],
    video: "/img/video/hospitalmanagement-project.webm",
    live: "",
    github: "https://github.com/hinakauser06/hospital-management"
  },
  {
    num: "02",
    category: "Web Development",
    title: "Pixelverse Tech",
    description: "A website that provide software development services ",
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "Javascript" }, { name: "Bootstrap" },],
    video: "/img/video/pixelverse-project.webm",
    live: "",
    github: "https://github.com/hinakauser06/pixelverse"
  },
  {
    num: "03",
    category: "Front-End Development",
    title: "My Portfolio",
    description: "Basic portfolio",
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "Javascript" }],
    video: "/img/video/codsoftl1t2-project.webm",
    live: "",
    github: "https://github.com/hinakauser06/codsoftL1T2"
  },
  {
    num: "04",
    category: "Front-End Development",
    title: "Landing Page",
    description: "A landing page. ",
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "Javascript" }],
    video: "/img/video/codsoftl1t1-project.webm",
    live: "",
    github: "https://github.com/hinakauser06/codsoftL1T1"
  },
  {
    num: "05",
    category: "Web Design",
    title: "Web Page",
    description: "Basic web pages ",
    stack: [{ name: "HTML5" }, { name: "CSS3" },],
    video: "/img/video/webproject1.webm",
    live: "",
    github: "https://github.com/hinakauser06/web-projects"
  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0])
  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex
    // update project state based on current slide index 
    setProject(projects[currentIndex])
  }
  return (
    <motion.section initial={{ opacity: 0 }} animate={{opacity: 1, transition: { delay: 1, duration: 0.2, ease: "easeIn" }}} className="min-h-[80vh]  flex flex-col justify-center py-5 px-0 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[20px]">
          <div className="w-full xl:w-[42%] xl:h-[430px] gap-1 flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[60%]">
              {/* outline num  */}
              <div className="flex flex-row gap-12">
                <div className="text-6xl leading-none font-extrabold text-transparent  text-center text-outline hover:outline-accent ">
                  {project.num}
                </div>
                <div className="flex text-[30px] text-center text-accent   hover:text-[31px]">{project.title}</div>
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white 
              group-hover:text-accent transition-all duration-500 capitalize
              ">{project.category} </h2>
              {/* project description */}
              <p className="text-white/60 justify-around ">{project.description}</p>
              <ul className="flex gap-2 ">
                {project.stack.map((item, index) => {
                  return <li key={index} className="text-md align-baseline  text-accent ">
                    {item.name}
                    {/* to remove last comma */}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4 ">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5
                    flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button  */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5
                    flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[58%] ">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12 " onSlideChange={handleSlideChange}>
              {projects.map((project, index) => {
                return (<SwiperSlide key={index} className=" w-full   text-center">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* image */}
                    <div className="relative w-full h-full bg-inherit  ">
                      <video controls autoPlay muted className="h-full object-cover items-center" preload="metadata">
                        <source src={project.video} type="video/webm" className="" />
                        {/* {"Your browser does not support the video tag."} */}
                      </video>
                    </div>
                  </div>
                </SwiperSlide>
                )
              })}
              {/*slider button */}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)]
              xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex 
              justify-center items-center transition-all" />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>

  )
}

export default Work