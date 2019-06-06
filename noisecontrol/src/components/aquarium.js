import React from 'react';
import {NavLink} from 'react-router-dom';

const mainpage = () => {
    return (
    <div>
        <div className='links'>
                <NavLink to ='/addclass'><button>Add A Class</button></NavLink>
                <NavLink to='/classes'><button>My Classes</button></NavLink>
            </div>
        <h1>
            hello
        </h1>
    </div>
    )
}




export default mainpage