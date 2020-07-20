import React, { useState } from 'react'

import { Layout } from '../layout'
import { Head } from '../components/head'
import { TalkCard } from '../components/talk'

import talks from '../data/talks'
import FILTERS from '../utils/filters'

export default ({ location }) => {
  const [, setFilter] = useState('')
  const [filteredTalks, setTalks] = useState(talks)

  const handleSelect = event => {
    const chosenFilter = FILTERS.find(
      filter => filter.name === event.target.value
    )
    setFilter(chosenFilter)
    chosenFilter ? setTalks(chosenFilter.function(talks)) : setTalks(talks)
  }

  return (
    <Layout location={location} title="Presentations">
      <Head title="Talks" />
      <h3>All of my talks, slides, and abstracts, in one place.</h3>
      <div className="talk-wrapper">
        {filteredTalks.map(t => (
          <TalkCard talk={t} key={t.eventDate} />
        ))}
      </div>
    </Layout>
  )
}
