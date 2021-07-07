import React from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
import {getclasses} from '../actions'
import {connect} from 'react-redux'
import Classroom from './class';
import {withRouter} from 'react-router'

class Classes extends React.Component {
   



    componentDidMount() {
    this.props.getclasses()
    console.log(this.props.classes)
    }

    render() {
        return (
            <div className='classesContainer'>
                <NavLink to='/mainpage'><button>Aquarium</button></NavLink>
                <div className='classlist' >
                <ul >
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
            </div>
        )
    }
}
const mapStateToProps = state => {
    return{
     classes: state.classes   
    }
}
export default withRouter (connect(
   mapStateToProps,
   {getclasses} 
)(Classes))