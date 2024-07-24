"use client"

import CountUp from "react-countup"
const stats = [
    {
        num: .1,
        text: "Years of Experience",
    },
    {
        num: 6,
        text: "Project completed",
    },
    {
        num: 8,
        text: "Technology Learning",
    },
    {
        num: 50,
        text: "Code commits",
    },
]
const Stats = () => {
    return ( 
        <section className=" pb-12xl:pt-0 xl:pb-0  ">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                {stats.map((item, index) => {
                    return <div className="flex flex-1 gap-4 items-center justify-center 
                    xl:justify-start"
                        key={index}>
                        <CountUp
                            end={item.num}
                            duration={3}
                            delay={1}
                            className="text-4xl  xl:text-6xl font-extrabold" />
                            <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]" } leading-snug text-white/80`}>{item.text}</p>
                    </div>

                })}
            </div>
        </div>
        </section>
    )
}

export default Stats