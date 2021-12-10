import React from 'react'

export const Card = ({ data }) => (
  <div className="card">
    <h3 className="cardTitle">
      <a href={data.href} alt={`Visit Kylie's project, ${data.title}.`}>
        {`${data.title} ↗`}
      </a>
    </h3>
    <p className="cardSubtitle">{data.description}</p>
  </div>
)
