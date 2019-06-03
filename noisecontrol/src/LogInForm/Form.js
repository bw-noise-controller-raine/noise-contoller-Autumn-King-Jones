import React from 'react';
import axios from 'axios'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Classes: props.Classes,
            NewClass: {
            classroom_name: '',
            score: '',
            highest_score:'',
            } 
        };
    }

    addClass = (e) => {
    e.preventDefault();
    axios
    .post('https://noise-controller.herokuapp.com/api/auth/register',{
      classroom_name:'',
      score:'',
      highest_score:''
    })
    .then(res =>{this.setState({
        classes: res.data
    })})
    .catch(err => {
        console.log(err)
    })
}

inputHandler = e => {
    this.setState({ [e.target.classroom_name]: e.target.value })
}


    changeHandler = e => {
        this.setState({
            Class: {
                [e.target.name]: e.target.value
            }
        })
    }

    submitHandler = e => {
        this.props.addClass(e, this.state.class);

        this.setState({
            class: {
                name:'',
                number:''
            }
        })
    }

    render() {
        return (
            <div>
                <form id='form' onSubmit={this.submitHandler}>
                    <input onChange={this.changeHandler} type='text' id = 'name' placeholder='Teachers Name' name='name' value={this.state.class.name}/>
                    <input onChange={this.changeHandler} type='text' id = 'number' placeholder='Number of Students' name='number' value={this.state.class.number}/>
                    <button onChange={this.changeHandler} type='submit'>New Class</button>                
                </form>
            </div>
        )
    }
} 

export default Form;