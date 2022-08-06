import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import './Index.module.css';

function Index() {
    return (
        <>
            <Helmet>
                <title>Index</title>
                <meta name='description' content='this is index page'></meta>
            </Helmet>
            <div>
                <h1>Index</h1>
                <NavLink to={'/public/about'}>About</NavLink>
            </div>
        </>
    )
}

export default Index