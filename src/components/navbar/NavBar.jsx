import { NavLink } from 'react-router-dom';

import './NavBar.css';
import BtnDarkMode from '../btnDarkMode/BtnDarkMode';

const NavBar = () => {

    const activeLink = "nav-list__link--active";
    const normalLink = "nav-list__link";

    return(
        <nav className='nav'>
            <div className="container">
                <div className="nav-row">

                    <NavLink className='logo' to="/"><strong>Nikolay</strong> portfolio</NavLink>

                    <BtnDarkMode/>

                    <ul className='nav-list'>
                        <li className="nav-list__item"><NavLink to='/' className={({isActive}) => isActive ? activeLink : normalLink}>Home</NavLink></li>
                        <li className="nav-list__item"><NavLink to='/projects' className={({isActive}) => isActive ? activeLink : normalLink}>Projects</NavLink></li>
                        <li className="nav-list__item"><NavLink to='contacts' className={({isActive}) => isActive ? activeLink : normalLink}>Contacts</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;