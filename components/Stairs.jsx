import { animate, motion } from "framer-motion"

// variants
const stairAnimation = {
    initial:{
        top: "0%"
    },
    animate: {
        top : "100%"
    },
    exit : {
        top : ["100%", "0%"]
    }
}
// calculate the reversed index  for staggered delay
const reversedIndex = (index) => {
 const totalSteps = 6 //no of steps
 return totalSteps - index - 1 
} 
const Stairs = () => {
  return (
    <>
    {/* render 6 motion divs, each representing a step of stairs
     each div will have same animation defined by the stairsAnimation object.
     The delay for each div is calculated sinamically/dynamically based on it's reversed index, 
     creating a staggered effect with decrasing delay for each subsequent step.  
    */}
    {[...Array(6)].map((_, index)=>{

        return   <motion.div key={index}  variants={stairAnimation} initial="initial" 
        animate="animate" exit="exit" transition={{
            duration: 0.2,
        ease: "easeInOut",
        delay : reversedIndex(index) * 0.1
      }}
      className="h-full w-full bg-white relative"/>
    })
    }
    </>
  )
}

export default Stairs