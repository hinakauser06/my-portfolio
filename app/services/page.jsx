// "use cleint";
// import { BsArrowDownRight } from "react-icons/bs";
// import Link from "next/link";
// import { motion } from "framer-motion";
"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";



const services = [
  {
    num: '01',
    title: 'Web Development',
    description: 'dfghjkl sdfghjk svbn dfghj sdfghj ertyui sdfghjk sdfghjk ',
    href: ""
  },
  {
    num: '02',
    title: 'Full Stack Developer',
    description: 'dfghjkl sdfghjk svbn dfghj sdfghj ertyui sdfghjk sdfghjk ',
    href: ""
  },
  {
    num: '03',
    title: 'Web Design',
    description: 'dfghjkl sdfghjk svbn dfghj sdfghj ertyui sdfghjk sdfghjk ',
    href: ""
  },
  {
    num: '04',
    title: 'LOGO Design',
    description: 'dfghjkl sdfghjk svbn dfghj sdfghj ertyui sdfghjk sdfghjk ',
    href: ""
  }
]

const Services = () => {
  return (     <section className="min-h-[80vh] flex flex-col justify-center py-8 xl:py-6 px-20">
      <div className="container mx-auto">
       <motion.div initial={{ opacity: 0 }} animate={{
          opacity: 1,
          transition: {
            delay: 1, duration: 0.2, ease: "easeIn"
          }
        }} className="grid grid-cols-1 md:grid-cols-2 gap-[35px] ">
          {services.map((service, index) => {
            return <div className="flex-1 flex flex-col justify-center gap-4 group" key={index} >
              {/* top */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl  font-extrabold text-outline text-transparent group-hover:text-outline-hover 
                transition-all duration-500">
                  {service.num}
                </div>
                <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white
                 group-hover:bg-accent transition-all duration-500 flex justify-center items-center
                 hover:-rotate-45
                ">
                  <BsArrowDownRight  className="text-primary text-3xl"/>
                </Link>
              </div>
              {/* title */}
              <h3 className="text-[32px] font-bold leading-none text-white group-hover:text-accent
               transition-all duration-500 pb-10"> {service.title}</h3>
              {/* description */}
              {/* <p className="text-white/80">{service.description}</p> */}
              {/* border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          })}
        </motion.div>


      </div>
    </section>
  )
}

export default Services