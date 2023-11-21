import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'

const Header = ({active}) => {

    return (
        <header className={classes.header}>
            <div className='container'>
                <nav className={classes.headerNav}>
                    <ul className={classes.headerList}>
                        <li className={classes.headerItem}>
                            <NavLink 
                                className={active === 'home' ? classes.headerLinkActive : classes.headerLink} 
                                to='/'
                            >Home</NavLink>
                        </li>
                        <li className={classes.headerItem}>
                            <NavLink 
                                className={active === 'movies' ? classes.headerLinkActive : classes.headerLink}
                                to='/movies'
                            >Movies</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;