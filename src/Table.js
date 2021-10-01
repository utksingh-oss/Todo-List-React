import React from 'react';

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
            return(<tr>
                <td><input 
                  type="checkbox"
                  value = {item.pending}
                  checked = {this.state.isChecked[index]}
                  onChange = {() => this.handleOnChange(index)}
                />
                </td>
                <td style = {{columnWidth : "700px"}}>{item.title}</td>
            </tr>)}else if(this.props.choice === 'all'){
                return(<tr>
                  <td><input 
                    type="checkbox"
                    value = {item.pending}
                    checked = {this.state.isChecked[index]}
                    onChange = {() => this.handleOnChange(index)}
                  />
                  </td>
                  <td style = {{columnWidth : "700px"}}>{item.title}</td>
              </tr>)
              }else if(this.props.choice === 'completed' && (!item.pending)){
                return(<tr>
                  <td><input 
                    type="checkbox"
                    value = "status"
                    checked = {this.state.isChecked[index]}
                    onChange = {() => this.handleOnChange(index)}
                  />
                  </td>
                  <td style = {{columnWidth : "700px"}}>{item.title}</td>
              </tr>)
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
