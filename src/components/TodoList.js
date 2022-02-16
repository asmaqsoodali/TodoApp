import React from 'react';
import './TodoList.scss';

const TodoList = (props) =>{
   
    return(
        <>
             <ul className="todoList">
                {props.items.map(item =>{
                    return(
                        <li key={item.id}>{item.text} <button onClick={() => props.onRemoveItem(item.id)}> &times; </button></li>
                    )
                })}
            </ul>
        </>
    )
}

export default TodoList;
