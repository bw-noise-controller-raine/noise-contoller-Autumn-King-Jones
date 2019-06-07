import React from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
import {getclasses} from '../actions'
import {connect} from 'react-redux'
import Classroom from './class';

class Classes extends React.Component {
   



    componentDidMount() {
    this.props.getclasses()
    }

    render() {
        return (
            <div>
                <NavLink to='/mainpage'><button>Aquarium</button></NavLink>

                <ul>
                    {
                        this.props.classes.map(Classroom => {
                            console.log(Classroom, 'hello')
                            return(
                                <li key={Classroom.id}>
                                    {Classroom.classroom_name}
                                </li>
                            
                            )
                    })
                    }
                </ul >
            </div>
        )
    }
}
const mapStateToProps = state => {
    return{
     classes: state.classes   
    }
}
export default connect(
   mapStateToProps,
   {getclasses} 
)(Classes)