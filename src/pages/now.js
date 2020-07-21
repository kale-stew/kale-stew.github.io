import React, { useState } from 'react'
import { Layout } from '../layout'
import { Head } from '../components/head'
import { Now } from '../components/now'

import { LATEST, RANDOM } from '../constants'

export default ({ location }) => {
  const [postType, setPostType] = useState(LATEST)

  return (
    <Layout location={location} title="What I'm Doing *Now*">
      <Head title="Now" />
      <Now state={postType} />
      <a className="now-link" href="https://nownownow.com/about">
        What is this page?
      </a>
      <br />
      <a className="now-link" onClick={() => setPostType(RANDOM)}>
        Visit a random now from the past
      </a>
    </Layout>
  )
}
