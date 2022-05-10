import React, { useState } from "react";
import ListComp from "./ListComp";
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
const TodoList = () =>{
    const [item,setItem] = useState("");
    const [newItem,setNewItem] = useState([]);
    const ItemChange = (event) =>{
        setItem(event.target.value);
    }
    const btnClicked =()=>{
        setNewItem((prev)=>{
            if(item.length>0){
                return [...prev,item]
            }
            else{
                return [...prev]
            }
        });
        setItem("");
    }
    const btndelete=(id)=>{
        setNewItem((prev)=>{
            return prev.filter((arr,index)=>{
                return id!==index;
            });
        });
    }
    const KeyFunc=(e)=>{
        if(e.key=== 'Enter')
        {
            btnClicked();
        }
    }
    return(
        <>
            <div className="main-div">
                <div className="center-div">
                    <h1>Todo List</h1>
                    <input type="text"
                    value={item} 
                    onChange={ItemChange}
                    onKeyDown={KeyFunc}
                    placeholder="Add a Item"/>
                    <Button className="newBtn" onClick={btnClicked}>
                    <AddIcon/>
                    </Button>
                    <div className="scrollbar">
                    {newItem.map((val,index)=>{
                            return <ListComp 
                            key={index} 
                            text={val}
                            id={index}
                            onSelect={btndelete}/>
                    })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default TodoList;