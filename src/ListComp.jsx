import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
const ListComp = (props) =>{
    return (
        <>
        <div className="todo-style">
                <div className="deletebtn">
                    <DeleteIcon onClick={()=>{
                    props.onSelect(props.id);
                    }}/>
                </div>
                <div className="list">
                {props.text}
                </div>                
                <br/>
        </div>
        </>
    );
}
export default ListComp;
