import React from 'react';
import './App.css';
import TableRow from './TableRow';

class Table extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      list : this.props.list,
      choice : this.props.choice,
      isChecked : new Array(this.props.list.length).fill(false)
    }
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(position){
      this.props.list[position].pending = !this.props.list[position].pending ;

      const updatedCheckedState = this.state.isChecked;
      updatedCheckedState[position] = !updatedCheckedState[position];
      this.setState({isChecked : updatedCheckedState});
  }

  render(){
    return(
      <tbody style={{textAlign : "center"}}>
        {
          this.props.list.map( (item , index) =>{
            if((this.props.choice === 'active')&&(item.pending)){
            return(<TableRow
              item = {item}
              handleChange = {this.handleOnChange}
              checkedState = {this.state.isChecked}
              index = {index}
            ></TableRow>)}else if(this.props.choice === 'all'){
                return(<TableRow
                  item = {item}
                  handleChange = {this.handleOnChange}
                  checkedState = {this.state.isChecked}
                  index = {index}
                ></TableRow>)
              }else if(this.props.choice === 'completed' && (!item.pending)){
                return(<TableRow
                  item = {item}
                  handleChange = {this.handleOnChange}
                  checkedState = {this.state.isChecked}
                  index = {index}
                ></TableRow>)
              }else{
                return null;
              }
            })
        }
      </tbody>
  );
  }
}

export default Table;
