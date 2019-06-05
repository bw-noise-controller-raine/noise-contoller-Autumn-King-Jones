import React from 'react';
import Class from './class';


class Classes extends React.Component {
    constructor() {
        super()
        this.state = {
            classes: [],
        }
    }



    componentDidMount() {
        axios
            .get('https://noise-controller.herokuapp.com/api/classrooms')
            .then(res => this.setState({ classes: res.data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <ul>
                {
                    props.classes.map(Class => {
                        return <Class key={Class.id} Class={Class} />
                    })
                }
            </ul >
        )
    }
}

export default Classes;