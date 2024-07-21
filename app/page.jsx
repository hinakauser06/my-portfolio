import { FiDownload } from "react-icons/fi"

// components

import Social from "@/components/Social"
import { Button } from "@/components/ui/button"
import Photo from "@/components/Photo"

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">Hobnm,me
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 ">

          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Full Stack Developer</span>
            <h1 className="h1 mb-6"> Hello, I'm <br /> <span className="text-accent"> Hina Kauser</span> </h1>
            <p className="max-w-[500px] mb-9 text-white/80"> I’m looking for a job as a  Front End Developer/Software Developer/Web Developer role.
              I have completed my graduation in B.Tech(CSE). My skills are-MERN, JavaScript, Java,
              HTML, CSS, Bootstrap, GitHub, Git, ReactJS,Tailwind, Next.js, MySql, MongoDB, JQuery;
              and I’m learning more about all this.</p>

            {/* btn and social */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 ">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-6 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="h-9 w-9 border border-accent rounded-full 
                flex justify-center item-center py-2 text-accent text-base hover:bg-accent hover:text-primary 
                hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
          {/* photo */}

          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo /> 
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home