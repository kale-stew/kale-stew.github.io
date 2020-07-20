import React from 'react'
import { Layout } from '../layout'
import { Head } from '../components/head'
import { formatDate, getMostRecentDate } from '../utils/dates'

import posts from '../data/now.js'

const mostRecentDate = getMostRecentDate(posts)
const mostRecentPost = posts[mostRecentDate]

export default ({ location }) => (
  <Layout location={location} title="What I'm Doing *Now*">
    <Head title="Now" />
    <h2>{formatDate(mostRecentDate)}</h2>
    <ul className="now">
      <li>
        <b>Location:</b> {mostRecentPost.location}
      </li>
      <li>
        <b>Travel:</b> {mostRecentPost.travel}
      </li>
      <li>
        <b>Reading:</b> {mostRecentPost.reading}
      </li>
      <li>
        <b>Celebrating:</b> {mostRecentPost.celebrating}
      </li>
      <li>
        <b>Watching:</b> {mostRecentPost.watching}
      </li>
      <li>
        <b>Listening to:</b> {mostRecentPost.listeningTo}
      </li>
      <li>
        <b>Learning:</b> {mostRecentPost.learning}
      </li>
      <li>
        <b>Working On:</b> {mostRecentPost.workingOn}
      </li>
    </ul>
    <br />
    <br />
    <a href="https://nownownow.com/about">What is this page?</a>
  </Layout>
)
