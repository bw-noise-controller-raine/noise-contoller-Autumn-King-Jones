import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { login } from '../actions';


class LogIn extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    changeHandler = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    };

    login = e => {
        e.preventDefault();
        this.props.login(this.state.credentials).then(() => {
            this.props.history.push('/mainpage');
        })
    };

    registerHandler = () => {
        this.props.history.push('/register')
    }

    render() {
        return (
            <div className='container'>
            <div className='Form' >
                <form onSubmit={this.login}>
                    
                    <input className='formInput'
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.changeHandler}
                        placeholder='UserName'
                    />
                    <br/>

                    <input className='formInput'
                        type='password'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.changeHandler}
                        placeholder='Password'
                    />
                     <br/>
                    <button className='LogButton' type='submit'>
                        {this.props.isLoggedIn ? (
                            <Loader type='ThreeDots' color='mediumpurple' height='10' width='20' />
                        ) : (
                                'Log In'
                            )}
                    </button>
                   
                    <button className='LogButton' onClick={this.registerHandler}>Register</button>
                </form>
               
            </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn
});

export default connect(
    mapStateToProps,
    { login }
)(LogIn)