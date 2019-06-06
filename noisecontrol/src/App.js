import React from 'react';
import axios from 'axios'
import './App.css';
import {Route} from 'react-router-dom';
import LogIn from './authorization/LogIn';
import Register from './components/register';
import mainpage from './components/aquarium';
import Header from './components/header';
import UpdateClass from './components/updating';
import AddClass from './components/addclass';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      classes: [],
      activeClass: null
    }

 
 }

  updateClass = updatedClass => {
    axios
        .put(`https://noise-controller.herokuapp.com/api/classrooms/:id`, updatedClass)
        .then(res => {
            this.render.setState({ classes: res.data });
            this.props.history.push('/classes');
        })
        .catch(error => console.log(error))
};

setUpdateForm = Class => {
    this.setState({ activeClass: Class});
    this.props.history.push('/updating')
};

changeHandler = e => {
  this.setState({ [e.target.name]: e.target.value })
};


render() {
  return (
    <div className="App">
     <Header />
     <Route exact path ='/' component = {LogIn} />
     <Route  path ='/register' component = {Register}/>
     <Route path = '/mainpage' component = {mainpage}/>
     <Route path='/updating' render={props => (
       <UpdateClass{...props}
       updateClass={this.updateClass}
       activeClass={this.state.activeClass}
       />
      )}
     />
     <Route path ='/addclass' component = {AddClass} />
    </div>
  );
}
}


export default App;
