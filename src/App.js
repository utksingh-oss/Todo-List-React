import React from 'react';
import './App.css';
import {all , active , completed} from './Tasks';
import Table from './Table.js';


class App extends React.Component{

    constructor(props){
      super(props);
      this.state = {
        list : active ,
        all,
        active , 
        completed ,
      }
    }
  
    render(){
      return (
        <div className="App" style={{width : "1000px" , margin : "10px auto" ,textAlign : "center"}}>
          <h1>#todo</h1>
          <div className="navigation">
            <button >All</button>
            <button onClick={()=>console.log("Hello There!!")}>Active</button>
            <button href="#">Completed</button>
            <hr></hr>
          </div>
          <div class="container">
            <div class="row"> 
              <input type="text" className="ten columns"></input>
              <button type="submit" className = "button-primary two columns">Add</button>
            </div>
        </div>
        <Table list = {this.state.list}/>
      </div>
      );
    }
}

export default App;
