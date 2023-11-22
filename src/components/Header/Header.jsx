import { NavLink, useLocation } from 'react-router-dom'
import classes from './Header.module.css'
import { useEffect, useState } from 'react'

const Header = () => {
    const [active, setActive] = useState('home')
    const location = useLocation();

    useEffect(() => {
        setActive(location.pathname.includes('/movies') ? 'movies' : 'home')
    }, [location])

    return (
        <header className={classes.header}>
            <div className='container'>
                <nav className={classes.headerNav}>
                    <ul className={classes.headerList}>
                        <li className={classes.headerItem}>
                            <NavLink 
                                className={active === 'home' ? classes.headerLinkActive : classes.headerLink} 
                                to='/'
                                onClick={(() => setActive('home'))}
                            >Home</NavLink>
                        </li>
                        <li className={classes.headerItem}>
                            <NavLink 
                                className={active === 'movies' ? classes.headerLinkActive : classes.headerLink}
                                to='/movies'
                                onClick={(() => setActive('movies'))}
                            >Movies</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;