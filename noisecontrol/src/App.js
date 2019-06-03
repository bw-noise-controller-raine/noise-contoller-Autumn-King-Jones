import React from 'react';
import axios from 'axios'
import './App.css';
import {Route} from 'react-router-dom'

class App extends React.Component {
 constructor(){
   super();
   this.state = {
    classes: [],
    Class:{
      classroom_name:'',
      score:0,
      highest_score:0
    }
   }
 }

componentDidMount() {
  axios
  .get('https://noise-controller.herokuapp.com/api/auth')
  .then(res => this.setState({ classes: res.data}))
  .catch(err => console.log(err))
}


render() {
  return (
    <div className="App">
     <Route path ='/'/>
     <Route exact path ='/'/>
    </div>
  );
}
}


export default App;
