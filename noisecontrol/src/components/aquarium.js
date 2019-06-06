import React from 'react';
import {NavLink} from 'react-router-dom';

const mainpage = () => {
    return (
    <div>
            <div className='mainPage'>
        <div className='links'>
                <NavLink to ='/addclass'><button>Add A Class</button></NavLink>
                <NavLink to='/classes'><button>My Classes</button></NavLink>
                <NavLink to='/updating'><button>Edit Class</button></NavLink>            
            </div>
    </div>
    </div>
    )
}




export default mainpage