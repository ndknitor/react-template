import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { NavLink, useLocation, useParams } from 'react-router-dom'

function Render() {
    const { id } = useParams();
    const location = useLocation();
    const [res, setRes] = useState('');
    useEffect(() => {
        setRes(id!);
    }, [id]);
    return (
        <>
            <Helmet>
                <title>About</title>
                <meta name='description' content='this is about page' />
            </Helmet>
            <div>
                <h1>{res}</h1>
                <NavLink to={'/'}>Index</NavLink>
                <br />
                <NavLink to={location.pathname + 1}>test navigation</NavLink>
            </div>
        </>
    )
}

export default Render