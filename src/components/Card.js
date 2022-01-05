import React from 'react'
import { THEME } from '../constants'

export const Card = ({ data }) => (
  <a href={data.href} alt={`Visit Kylie's project: ${data.title}.`}>
    <div className="card">
      {data.img_url && <img className="coverImage" src={data.img_url} />}

      <div className="cardText">
        <h3 className="cardTitle">{data.title}</h3>
        <p className="cardSubtitle">{data.description}</p>
        <br />
        <a
          className="projectLink"
          href={data.href}
          style={{ color: data.accent_color ? data.accent_color : THEME }}
          alt={`Visit Kylie's project: ${data.title}.`}
        >
          Visit this project ↗
        </a>
      </div>
    </div>
  </a>
)
