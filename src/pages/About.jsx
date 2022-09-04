import React from 'react'
import {Link} from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import Card from '../components/shared/Card'

function About({ title}) {
  return (
      <div>
    <Card reverse={ false}>
       <h1> About page</h1>
       <p>This App is to get your feedback about our services to you our prestigious costomer and to also improve our services if needed... <br /><br /> <b>Thanks</b></p>
       <h3>Version: 3.2.1</h3>
       <br />
       <br />
       <Link to='/'><FaHome size={20} /> Back to home page</Link>
    </Card>
      </div>
  )
}

export default About