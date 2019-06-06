import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { login } from '../actions';
import {Link} from 'react-router-dom'

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
            this.props.history.push('/');
        })
    };

    registerHandler = () => {
        this.props.history.push('/register')
    }

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.changeHandler}
                    />

                    <input
                        type='password'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.changeHandler}
                    />
                    <Link to = '/mainpage'>
                    <button>
                        {this.props.isLoggedIn ? (
                            <Loader type='ThreeDots' color='mediumpurple' height='10' width='20' />
                        ) : (
                                'Log In'
                            )}
                    </button>
                    </Link>
                </form>
                <button onClick={this.registerHandler}>Register</button>
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