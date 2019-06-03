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
        this.props.add
    }
} 