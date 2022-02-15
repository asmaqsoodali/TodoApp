import React from 'react';
import './TodoList.scss';

const TodoList = (props) =>{
   
    return(
        <>
            <ul className="todoList">
                {props.items.map((item,index) =>{
                    return(
                        <li key={index}>{item} <button onClick={(e) => props.onRemoveItem(index)}> &times; </button></li>
                    )
                })}
            </ul>
        </>
    )
}

export default TodoList;