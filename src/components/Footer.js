import React from 'react'
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'
import { SocialLinks } from '../constants'

export const Footer = () => (
  <footer className="footer">
    <a className="footer-link" href={SocialLinks.Homepage}>
      <b>KS</b>
    </a>
    <a href={SocialLinks.Twitter}>
      <FaTwitter color />
    </a>
    <a href={SocialLinks.LinkedIn}>
      <FaLinkedinIn color />
    </a>
    <a href={SocialLinks.Instagram}>
      <FaInstagram color />
    </a>
    <a href={SocialLinks.Github}>
      <FaGithub color />
    </a>
    <a href={SocialLinks.Email} network="email">
      <MdOutlineMail color />
    </a>
  </footer>
)
