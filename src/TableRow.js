import React from 'react';


const Table = ({item, handleChange , checkedState , index}) =>{
    return(<tr>
        <td><input 
          type="checkbox"
          value = {item.pending}
          checked = {checkedState[index]}
          onChange = {() => {handleChange(index)}}
        />
        </td>
        <td style = {{columnWidth : "700px" , textDecorationLine : item.pending ? "none" : "line-through"}}>{item.title}</td>
    </tr>);
}

export default Table;