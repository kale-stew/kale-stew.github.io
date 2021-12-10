import React from 'react'
import ReactDOM from 'react-dom'
import { Card } from './components/Card'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import Projects from './projects'

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
          </div>
        </div>
        <p className="projectsDescription">
          Here are some of the things I've been working on:
        </p>
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
