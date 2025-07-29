
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedinIn, FaTelegram, FaInstagram, FaFacebook} from "react-icons/fa"
const social = [
  {icon : <FaGithub/>, path: "https://github.com/rennymlndf"},
  {icon : <FaLinkedinIn/>, path: "https://www.linkedin.com/in/renny-melanda-febriyanti/"},
  {icon : <FaFacebook/>, path: "https://web.facebook.com/renny.m.febriyanti.9"},
  {icon : <FaInstagram/>, path: "https://www.instagram.com/rennymlndf/?hl=id"},
]

interface SocialProps {
  containerStyles: string;
  iconStyles: string;
}
const Socials: React.FC <SocialProps> = ({containerStyles,iconStyles}) => {
  return (
    <div className={containerStyles}>
      {social.map((item,index) => {
        return(
          <Link
          key={index}
          href={item.path}
          target="_blank"
          className={iconStyles}
          >
          {item.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Socials