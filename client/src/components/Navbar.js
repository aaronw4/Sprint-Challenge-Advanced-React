import React from 'react';
import {useDarkMode} from '../hooks/useDarkMode';

const Navbar = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);

    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return (
        <nav className='nav'>
            <h1>Top Searches: Women's World Cup</h1> 
            <div>
            <button
            onClick={toggleMode}
            className={darkMode ? 'toggle toggled' : 'toggle'}
            /> 
            </div>        
        </nav>
    )
}

export default Navbar;