import axios from 'axios';
import React, { Component } from 'react';

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

    addClass = (e, Class) => {
        e.preventDefault();
        axios
            .post('https://noise-controller.herokuapp.com/api/classrooms', {
                name: this.state.name,
                classroomName: this.state.classroomName,
                score: this.state.score,
                highestScore: this.state.highestScore
            })
            .then(res => {
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
        <div className='addClass'>

            <h2>Add A Class</h2>
            <form onSubmit={this.addClass}>
                <input
                    type='text'
                    onChange={this.changeHandler}
                    placeholder='Name'
                    value={this.state.name}
                    name='name'
                />

                <input
                    type='text'
                    onChange={this.changeHandler}
                    placeholder='ClassRoom Name'
                    value={this.state.classroomName}
                    name='classroomName'
                />

                <input
                    type='text'
                    onChange={this.changeHandler}
                    placeholder='Score'
                    value={this.state.score}
                    name='score'
                />

                <input
                    type='text'
                    onChange={this.changeHandler}
                    placeholder='Highest Score'
                    value={this.state.score}
                    name='highestScore'
                />
                <button type='submit'> Add A Class</button>
            </form>
        </div>
    }
}

export default AddClass;
