import React from 'react'

import './index.scss'

export const ProjectCard = ({ item }) => (
  <div className="project">
    <h3 className="project-title">{item.title}</h3>
    <div className="project-subtitle">{item.subtitle}</div>
    <a className="project-link" href={item.link}>
      Go to ↗
    </a>
  </div>
)
