import React from 'react';
import Class from './class';

const Classes = props => {
    console.log(props);
    return(
        <ul>
            {props.Classes.map(Class => {
                return <Class key={Class.id} Class={Class} />
            })}
        </ul>
    )
}

export default Classes;