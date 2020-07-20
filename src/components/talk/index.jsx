import React from 'react'
import { formatDate } from '../../utils/filters'

import './index.scss'

export const TalkCard = ({ talk }) => (
  <div className="talk">
    <h2>{talk.title}</h2>
    <div className="talk-description">{talk.description}</div>
    <div className="talk-event">
      <span>{talk.eventName} － </span>
      <span>{formatDate(talk.eventDate)}</span>
    </div>
    {talk.hostedSlidesUrl && (
      <a
        href={talk.hostedSlidesUrl}
        title={`Link to live hosted slides for ${talk.title}`}
      >
        <span role="img" aria-label="Click to visit the slides">
          💻 → Check out the slides
        </span>
      </a>
    )}
    {talk.recordedPresentationUrl && (
      <a
        href={talk.recordedPresentationUrl}
        title={`Link to a recording of ${talk.title}`}
      >
        <span role="img" aria-label="Click to watch the recorded presentation">
          📹 → Watch a recording of the presentation
        </span>
      </a>
    )}
  </div>
)
