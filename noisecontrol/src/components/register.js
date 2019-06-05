import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../actions'

class Register extends Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    changeHandler = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    register = e => {
        e.preventDefault();
        if (!this.state.credentials.username || !this.state.credentials.passwords) {
            alert('Please Enter Correct UserName and Password')
            return null;
        } else {
            this.props.register(this.state.credentials)
                .then(() => this.props.history.push('./login'))
            this.setState({
                username: '',
                password: '',
                ClassName:''
            })
        }
    }


    render() {
        return (
            <div>
                <h1>Register Here</h1>
                <form onSubmit={this.register}>
                    <input
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.changeHandler}
                        placeholder='UserName'
                    />
                    <input
                        type='password'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.changeHandler}
                        placeholder='Password'
                    />
                    <input
                        type='text'
                        name='classname'
                        onChange={this.changeHandler}
                        placeholder='Class Name'
                        />
                    <button>Sign Up</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{ 
        error:state.error,
        addingUser: state.addingUser
    }
}
export default connect(mapStateToProps,
    {register: register})
    (Register);