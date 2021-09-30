import React from 'react';
import './App.css';
import {list} from './Tasks';
import Table from './Table.js';


class App extends React.Component{

    constructor(props){
      super(props);
      this.state = {
        list : list,
        value : '',
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
      
    }

    handleChange(event){
      this.setState({value : event.target.value})
    }

    handleClick(){
      const curr = {
        title : this.state.value,
        status : "pending"
      }
      this.setState({list : [...this.state.list , curr]});
      this.setState({value : ''});
      
      
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
              <input type="text" className="ten columns"
                 onChange = {this.handleChange}
                 ref = {this.myRef}
                 value = {this.state.value}
              ></input>
              <button type="submit" className = "button-primary two columns" onClick={this.handleClick}>Add</button>
            </div>
        </div>
        <Table list = {this.state.list}/>
      </div>
      );
    }
}

export default App;
