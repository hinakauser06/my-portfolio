"use client"

import { easeInOut, motion } from "framer-motion"
import Image from "next/image"
const Photo = () => {
  return (
// image
<motion.div initial={{opacity:0}} animate={{opacity:1, transition:{delay:1, duration:.4, ease:"easeIn"}}} className="h-full w-full relative ">
        <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{delay:1.8, duration:.4, ease:"easeInOut"}}}>
            <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-difference">
                <Image src="/img/ProfilePhoto.png" priority quality={100} fill alt="" className="object-contain  rounded-b-full" />
            </div>
        </motion.div>
        {/* circle */}
        <motion.svg className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]" fill="transparent"
        viewBox="">
            <motion.circle></motion.circle>
        </motion.svg>
    </motion.div>
  )
}

export default Photo