import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { formatDate } from '../../utils/dates'

const NOW_KEYS = {
  location: 'Location',
  travel: 'Upcoming Travel',
  reading: 'Reading',
  celebrating: 'Celebrating (or About to Celebrate)',
  watching: 'Watching',
  listeningTo: 'Listening To',
  learning: 'Learning (or Trying to Learn)',
  workingOn: 'Working On',
}

export const Now = () => (
  <StaticQuery
    query={nowQuery}
    render={data => {
      const { now } = data

      return (
        <>
          <h2>{formatDate(now.date)}</h2>
          <ul className="now-wrapper">
            {Object.entries(now).map(([key, value]) => {
              if (!NOW_KEYS[key] || !value) {
                return
              }

              return (
                <li>
                  <b>{NOW_KEYS[key]}:</b> {value}
                </li>
              )
            })}
          </ul>
        </>
      )
    }}
  />
)

const nowQuery = graphql`
  query NowQuery {
    now {
      id
      date
      location
      travel
      reading
      celebrating
      watching
      listeningTo
      learning
      workingOn
    }
  }
`
