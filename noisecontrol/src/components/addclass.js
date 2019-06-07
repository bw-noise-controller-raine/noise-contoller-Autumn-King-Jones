import axios from 'axios';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import {AuthWithaxios} from '../authwithaxios';

class AddClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: props.classes,
            addClass: {
                name: '',
                classroomName: '',
                score: 0,
                highestScore: 0
            }
        }
    }

    addClass = e => {
        e.preventDefault();
         AuthWithaxios()
            .post('https://noise-controller.herokuapp.com/api/classrooms', {
                name: this.state.name,
                classroom_name: this.state.classroomName,
                score: this.state.score,
                highest_score: this.state.highestScore
            })
            .then(res => {console.log(res,'sup')
                this.setState({
                    classes: res.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    };

    render() {
        return (

            <div className='addClass'>
                <div className='classContainer'>
                    <h2>Add A Class</h2>
                    <div className='formContainer'>
                    <form onSubmit={this.addClass}>
                        <input
                            type='text'
                            onChange={this.changeHandler}
                            placeholder='Name'
                            value={this.state.name}
                            name='name'
                        />
                        <br/>

                        <input
                            type='text'
                            onChange={this.changeHandler}
                            placeholder='ClassRoom Name'
                            value={this.state.classroomName}
                            name='classroomName'
                        />
                        <br/>

                        <input
                            type='text'
                            onChange={this.changeHandler}
                            placeholder='Score'
                            value={this.state.score}
                            name='score'
                        />
                        <br/>

                        <input
                            type='text'
                            onChange={this.changeHandler}
                            placeholder='Highest Score'
                            value={this.state.score}
                            name='highestScore'
                        />
                        <br/>

                        <NavLink to='/classes' ><button type='submit'> Add A Class</button></NavLink>
                    </form>
                </div>
            </div>
        </div >
    )
    }
}

export default AddClass;
