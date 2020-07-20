import React from 'react'
import { Layout } from '../layout'
import { Head } from '../components/head'
import { Now } from '../components/now'

export default ({ location }) => (
  <Layout location={location} title="What I'm Doing *Now*">
    <Head title="Now" />
    <Now />
    <a href="https://nownownow.com/about">What is this page?</a>
    {/* <br /> */}
    {/* <a>Visit a random now from the past</a> */}
  </Layout>
)
