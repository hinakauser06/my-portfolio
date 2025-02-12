import Link from "next/link"
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter, FaYoutubeSquare } from "react-icons/fa"


const social = [
    { icon: <FaGithub />, path: "" },
    { icon: <FaLinkedinIn />, path: "" },
    { icon: <FaYoutube />, path: "" },
    { icon: <FaTwitter />, path: "" }
]
const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {social.map((item, index) => {
                return <Link key={index} href={item.path} className={iconStyles}>{item.icon} </Link>
            })}
        </div>
    )
}

export default Social