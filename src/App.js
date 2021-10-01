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
      this.prevent = this.prevent.bind(this);
     
    }

    handleChange(event){
      this.setState({value : event.target.value})
    }
    
    prevent(event){
      event.preventDefault();
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
            <button onClick={()=>this.setState({choice : 'all'})} className={this.state.choice === 'all'?"active" : null}>All</button>
            <button onClick={()=>this.setState({choice : 'active'})} className={this.state.choice === 'active'?"active" : null}>Active</button>
            <button onClick={()=>this.setState({choice : 'completed'})} className={this.state.choice === 'completed'?"active" : null}>Completed</button>
            <hr></hr>
          </div>
          <form class="container" onSubmit = {this.prevent}>
            <div class="row"> 
              <input type="text" className="ten columns"
                 onChange = {this.handleChange}
                 ref = {this.myRef}
                 value = {this.state.value}
              ></input>
              <button type="submit" className = "button-primary two columns" onClick={this.handleClick} onSubmit={this.handleClick}>Add</button>
            </div>
        </form>
        <Table list = {this.state.list} choice = {this.state.choice}/>
      </div>
      );
    }
}

export default App;
