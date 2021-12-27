import React from 'react'

export const Card = ({ data }) => (
  <a href={data.href} alt={`Visit Kylie's project: ${data.title}.`}>
    <div className="card">
      <h3 className="cardTitle">{data.title}</h3>
      <p className="cardSubtitle">{data.description}</p>
      <br />
      <a
        className="projectLink"
        href={data.href}
        alt={`Visit Kylie's project: ${data.title}.`}
      >
        Visit this project ↗
      </a>
    </div>
  </a>
)
