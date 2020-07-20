import React from 'react'
import { formatDate } from '../../utils/dates'

import './index.scss'

const RecordingLink = ({ url, eventName, talkTitle }) => (
  <a
    href={url}
    title={`Link to a recording of ${talkTitle}`}
    target="_blank"
    noopener
    noreferrer
  >
    <span>📹 {eventName} － </span>
  </a>
)

export const TalkCard = ({ talk }) => (
  <div className="talk">
    <h2>{talk.title}</h2>
    <div className="talk-description">{talk.description}</div>
    <div className="talk-event">
      {talk.events.map(({ eventRecording, eventName, eventDate }) => (
        <>
          {eventRecording ? (
            <RecordingLink
              talkTitle={talk.title}
              eventName={eventName}
              url={eventRecording}
            />
          ) : (
            <span>{eventName} - </span>
          )}
          <span>{formatDate(eventDate)}</span>
          <br />
        </>
      ))}
      {talk.slidesUrl && (
        <>
          <a
            href={talk.slidesUrl}
            title={`Link to the hosted slides for ${talk.title}`}
            target="_blank"
            noopener
            noreferrer
            className="talk-link"
          >
            <span>
              <i>Slides</i>
            </span>
          </a>
        </>
      )}
      {talk.moreInfoUrl && talk.slidesUrl && (
        <span className="talk-link"> · </span>
      )}
      {talk.moreInfoUrl && (
        <>
          <a
            href={talk.moreInfoUrl}
            title={`Link to more info about ${talk.title}`}
            target="_blank"
            noopener
            noreferrer
            className="talk-link"
          >
            <span>
              <i>More Info</i>
            </span>
          </a>
        </>
      )}
    </div>
  </div>
)
