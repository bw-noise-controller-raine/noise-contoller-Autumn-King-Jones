import React from 'react';
import axios from 'axios'
import './App.css';

class App extends React.Component {
 constructor(){
   super();
   this.state = {
    classes: [],
    class:{
      name:'',
      number:''
    }
   }
 }


render() {
  return (
    <div className="App">
     <h1>hi</h1> 
    </div>
  );
}
}


export default App;
