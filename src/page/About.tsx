import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import './About.module.css';
function About() {
  return (
    <>
        <Helmet>
            <title>About</title>
            <meta name='description' content='this is about page'/>
        </Helmet>
        <div>
            <h1>About</h1>
            <NavLink to={'/'}>Index</NavLink>
        </div>
    </>
  )
}

export default About