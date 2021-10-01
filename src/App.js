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
        choice : 'all'
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
        pending : true,
      }
      this.setState({list : [...this.state.list , curr]});
      this.setState({value : ''});
    }
  
    render(){
      return (
        <div className="App" style={{width : "1000px" , margin : "10px auto" ,textAlign : "center"}}>
          <h1>#todo</h1>
          <div className="navigation">
            <button onClick={()=>this.setState({choice : 'all'})}>All</button>
            <button onClick={()=>this.setState({choice : 'active'})}>Active</button>
            <button onClick={()=>this.setState({choice : 'completed'})}>Completed</button>
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
        <Table list = {this.state.list} choice = {this.state.choice}/>
      </div>
      );
    }
}

export default App;
