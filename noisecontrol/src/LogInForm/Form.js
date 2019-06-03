import React from 'react';
import axios from 'axios'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: props.classes,
            NewClass: {
            name: '',
            number: ''
            } 
        }
    }

    changeHandler = e => {
        this.setState({
            class: {
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