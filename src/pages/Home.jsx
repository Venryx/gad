import * as React from 'react'
import { Link } from 'react-router-dom'

import { TitleBlock } from '../components/TitleBlock'
import { Topic } from '../components/Topic'
import '../styles/Home.scss'

export const Home = (props) => {
  return (
    <div className="page home">
      <TitleBlock title="Welcome!" subtitle="please explore and search" />
      <Topic title="Climate Change" exploreScore={38} subdebates={170} />
      <Link className="page-cta">Get into the debate ></Link>
    </div>
  )
}
