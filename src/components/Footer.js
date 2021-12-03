import React from 'react'
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'

import { SocialLinks } from '../constants'

const color = 'white'

export const Footer = () => (
  <footer className="footer">
    <a href={SocialLinks.Twitter}>
      <FaTwitter color={color} />
    </a>
    <a href={SocialLinks.LinkedIn}>
      <FaLinkedinIn color={color} />
    </a>
    <a href={SocialLinks.Instagram}>
      <FaInstagram color={color} />
    </a>
    <a href={SocialLinks.Github}>
      <FaGithub color={color} />
    </a>
    <a href={SocialLinks.Email} network="email">
      <MdOutlineMail color={color} />
    </a>
  </footer>
)
