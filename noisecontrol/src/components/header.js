import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='header'>
                {console.log(localStorage.getItem('token'))}
                <h2>Noise Control</h2>
            </div>

            <div className='links'>
                <NavLink to='/protected'>My Classes</NavLink>
                <NavLink to='/register'>Sign Up</NavLink>
                <NavLink to='/login'>Login</NavLink>
            </div>
        </div>
    )
}

export default Header;