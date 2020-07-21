import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { StaticQuery, graphql } from 'gatsby'
import { formatDate } from '../../utils/dates'
import { getRandomItem } from '../../utils/helpers'

import { LATEST, NOW_KEYS } from '../../constants'

const NowCard = ({ post }) => (
  <>
    <h2>{formatDate(post.date)}</h2>
    <ul className="now-wrapper">
      {Object.entries(post).map(([key, value]) => {
        return !NOW_KEYS[key] || !value ? null : (
          <li key={key}>
            <b>{NOW_KEYS[key]}:</b> {value}
          </li>
        )
      })}
    </ul>
  </>
)

NowCard.propTypes = {
  post: PropTypes.shape({
    celebrating: PropTypes.string,
    date: PropTypes.string,
    learning: PropTypes.string,
    listeningTo: PropTypes.string,
    location: PropTypes.string,
    reading: PropTypes.string,
    travel: PropTypes.string,
    watching: PropTypes.string,
    workingOn: PropTypes.string,
  }),
}

export const Now = ({ state }) => {
  const [type, setType] = useState(state)
  useEffect(() => setType(state), [state])

  return (
    <StaticQuery
      query={nowQuery}
      render={data => {
        const { allNow } = data
        const sortedByMostRecent = allNow.nodes.sort((a, b) => a.date - b.date)
        const mostRecentPost = sortedByMostRecent[0]
        const randomPost = getRandomItem(sortedByMostRecent)

        return type === LATEST ? (
          <NowCard post={mostRecentPost} />
        ) : (
          <NowCard post={randomPost} />
        )
      }}
    />
  )
}

const nowQuery = graphql`
  query NowQuery {
    allNow {
      nodes {
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
  }
`
