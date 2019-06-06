import axios from 'axios';
import {AuthWithaxios} from '../authwithaxios';

export const LOGIN = 'LOGIN'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'

export const login = creds => dispatch => {
    dispatch({ type: LOGIN });
    return AuthWithaxios()
        .post('https://noise-controller.herokuapp.com/api/auth/login', creds)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            dispatch({ type: SUCCESS, payload: res.data })
        })
}

export const FETCHING_CLASSES = 'FETCHING_CLASSES';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';

export const getclasses = () => dispatch => {
    dispatch({ type: FETCHING_CLASSES });
    axios
        .get('https://noise-controller.herokuapp.com/api/auth')
        .then(res => {
            dispatch({ type: FETCHING_SUCCESS, payload: res.data })
        })
        .catch(error => {
            console.log(error)
        })
}

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const ERROR = 'ERROR';
export const LOADING = 'LOADING';

export const register = newUser => dispatch => {
    dispatch({ type: LOADING});
    return AuthWithaxios()
    .post('https://noise-controller.herokuapp.com/api/auth/register', newUser)
    .then(res => dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
    }))
    .catch(error => dispatch({
        type:ERROR,
        paylaod:error
    }))
}