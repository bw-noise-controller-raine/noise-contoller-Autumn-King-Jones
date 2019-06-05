import React from 'react';
import axios from 'axios'
import './App.css';
import {Route} from 'react-router-dom';
import LogIn from './authorization/LogIn';
import Register from './components/register';
import mainpage from './components/aquarium';
import Header from './components/header'

class App extends React.Component {




render() {
  return (
    <div className="App">
     <Header />
     <Route exact path ='/' component = {LogIn} />
     <Route  path ='/register' component = {Register}/>
     <Route path = '/aquarium' component = {mainpage}/>
     
    </div>
  );
}
}


export default App;
