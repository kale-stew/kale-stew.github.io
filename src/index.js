import React from 'react'
import ReactDOM from 'react-dom'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

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
        <p>Here are some of my projects:</p>
        <ul>
          {/* {projects.map(proj) => (<a href={proj.href} alt={proj.alt}><li>{proj.name}</li></a>)} */}
          <a
            href="https://www.kylieis.online/now"
            alt="Visit a page that summarizes recent happenings, like what I'm currently reading or listening to."
          >
            <li>What I'm Doing Now</li>
          </a>

          <a href="https://kylieis.online/talks" alt="">
            <li>Tech Talks</li>
          </a>

          <a href="https://kylies.photos" alt="">
            <li>kylies.photos</li>
          </a>
        </ul>
      </div>
      <Footer />
    </>
  </React.StrictMode>,
  document.getElementById('root'),
)
