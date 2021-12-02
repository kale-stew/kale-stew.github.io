import React from 'react'
import ReactDOM from 'react-dom'
import { Footer } from './components/Footer'
import { SiteTitle } from './constants'

import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <div>
      <header>{SiteTitle}</header>
      <body><p>Howdy</p></body>
      <Footer />
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
)
