import React from 'react'
import { formatDate } from '../../utils/filters'

// const CardWrapper = styled('div')`
//   display: flex;
//   flex-direction: column;
//   width: 260px;

//   @media (max-width: 1024px) {
//     margin-bottom: 3rem;
//   }
// `

// const EventInfo = styled('div')`
//   padding: 2rem 0;
// `

// const ImgWrapper = styled('div')``

// const TalkDescription = styled('span')`

// `

// const TalkTitle = styled('span')`
//   width: 300px;
//   align-self: center;
//   font-size: 28px;
//   font-weight: 300;
//   padding-bottom: 0.45rem;
// `

export const TalkCard = ({ talk }) => (
  <div>
    <h2>{talk.title}</h2>
    <div className="tak-description">{talk.description}</div>
    {/* {talk.eventType === 'meetup' ? (
      <MeetupTag>MEETUP</MeetupTag>
    ) : (
      <ConferenceTag>CONFERENCE</ConferenceTag>
    )} */}
    <div>
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
