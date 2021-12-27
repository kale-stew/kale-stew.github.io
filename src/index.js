import React from 'react'
import ReactDOM from 'react-dom'
import { Card } from './components/Card'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import Projects from './data/projects.json'

import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <>
      <Header />
      <div className="content">
        <div className="aboutWrapper">
          <img
            src="/img/headshot.jpg"
            alt="A photo of Kylie Stewart."
            className="headshot"
          />
          <div className="introText">
            <h1>Hi! 👋 I'm Kylie</h1>
            <h3>web developer & mountaineer</h3>
            <h3>based in Colorado</h3>
          </div>
        </div>
        <h2 className="featuredProjectsTitle">Featured Projects:</h2>
        <div className="projectsWrapper">
          {Projects.map((item) => (
            <Card data={item} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  </React.StrictMode>,
  document.getElementById('root'),
)
