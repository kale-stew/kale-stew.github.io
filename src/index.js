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
        <div className="gifWrapper">
        <img
          src="https://media.giphy.com/media/B8ody8egx8JkA/giphy.gif"
          alt="Gob from Arrested Development throwing dead doves at the board of directors"
          height="200"
          />
          </div>
        <p>Almost done...</p>
      </div>
      <Footer />
    </>
  </React.StrictMode>,
  document.getElementById('root'),
)
