import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../layout'
import { Head } from '../components/head'
import { Intro } from '../components/intro'
import { ProjectCard } from '../components/project'

import projects from '../data/projects'

const HOME_TITLE = 'Home'

export default ({ data, location }) => {
  const { siteMetadata } = data.site

  return (
    <Layout location={location} title={siteMetadata.title}>
      <Head title={HOME_TITLE} keywords={siteMetadata.keywords} />
      <div className="lander">
        <Intro />
        <div className="project-wrapper">
          {projects.map(project => (
            <ProjectCard item={project} key={project.title} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
