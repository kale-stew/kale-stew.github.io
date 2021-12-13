import React from 'react'
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'

import SocialLinks from '../data/socials.json'

const color = 'white'
const socials = SocialLinks[0]

export const Footer = () => (
  <footer className="footer">
    <a href={socials.Twitter}>
      <FaTwitter color={color} />
    </a>
    <a href={socials.LinkedIn}>
      <FaLinkedinIn color={color} />
    </a>
    <a href={socials.Instagram}>
      <FaInstagram color={color} />
    </a>
    <a href={socials.Github}>
      <FaGithub color={color} />
    </a>
    <a href={socials.PersonalEmail} network="email">
      <MdOutlineMail color={color} />
    </a>
  </footer>
)
