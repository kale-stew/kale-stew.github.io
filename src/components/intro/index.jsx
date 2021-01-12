import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import { getRandomItem } from '../../utils/helpers'

import './index.scss'

export const Intro = () => (
  <StaticQuery
    query={introQuery}
    render={data => {
      const {
        authorLocation,
        authorName,
        employment,
        hobbies,
        resume,
      } = data.site.siteMetadata

      return (
        <div className="intro">
          <Image
            className="intro-image"
            fixed={data.avatar.childImageSharp.fixed}
            alt={authorName}
            style={{
              borderRadius: `100%`,
            }}
          />
          <div>
            <span role="img" aria-label="waving emoji">
              👋
            </span>{' '}
            Hi, I'm <b>{authorName}</b>, a Software Engineer based in{' '}
            {authorLocation}.
          </div>
          <div>
            <span role="img" aria-label="blonde female technologist emoji">
              👩‍💻
            </span>{' '}
            I currently work at as a <b>{employment}</b>
          </div>
          <div>
            (but if you want to work together, I'm{' '}
            <a href={resume}>open to it</a>{' '}
            <span role="img" aria-label="eyes looking left emoji">
              👀
            </span>
            ).
          </div>
          <div>
            <span role="img" aria-label="snow-capped mountain emoji">
              🏔️
            </span>{' '}
            When I'm not working, I like to {getRandomItem(hobbies)}.
          </div>
        </div>
      )
    }}
  />
)

const introQuery = graphql`
  query IntroQuery {
    avatar: file(absolutePath: { regex: "/headshot.png/" }) {
      childImageSharp {
        fixed(width: 220, height: 220) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        authorLocation
        authorName
        employment
        hobbies
        resume
      }
    }
  }
`

export default Intro
