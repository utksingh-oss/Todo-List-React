import React , {useState} from 'react';

const Table = ({list}) =>{
    const [isChecked , setIsChecked] = useState(
        new Array(list.length).fill(false)
    );

    const handleOnChange = (position) =>{
        const updatedCheckedState = isChecked.map((item , index)=>
            index === position ? !item : item
        );
        setIsChecked(updatedCheckedState)
    }

    return(
        <tbody style={{textAlign : "center"}}>
          {
            list.map( (item , index) =>{
              return(<tr>
                  <td><input 
                    type="checkbox"
                    value = "status"
                    checked = {isChecked[index]}
                    onChange = {() => handleOnChange(index)}
                  />
                  </td>
                  <td style = {{columnWidth : "700px"}}>{item.title}</td>
              </tr>)
            })
          }
        </tbody>
    );
}

export default Table;
