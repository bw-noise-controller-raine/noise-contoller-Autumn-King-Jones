import React from 'react';
import axios from 'axios'
import './App.css';
import {Route} from 'react-router-dom';
import LogIn from './authorization/LogIn';
import Register from './components/register'

class App extends React.Component {


componentDidMount() {
  axios
  .get('https://noise-controller.herokuapp.com/api/auth')
  .then(res => this.setState({ classes: res.data}))
  .catch(err => console.log(err))
}


render() {
  return (
    <div className="App">
     <Route exact path ='/' component = {LogIn} />
     <Route  path ='/register' component = {Register}/>
    </div>
  );
}
}


export default App;
