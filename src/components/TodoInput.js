import React from 'react';
import './TodoInput.scss';

const TodoInput = (props) =>{

    return(
        <>
             <form onSubmit={(e)=>props.addItem(e)}>
                <div className="todoInput">
                    <input 
                        type="text"
                        value={props.inputVal} 
                        onChange={(e)=>props.onInputChange(e)} 
                        name="todo" 
                        placeholder="Please enter here"
                    />
                    {props.inputVal.length > 2 ?
                        <button type="submit">Add</button>
                    :'' }
                </div>
            </form>

        </>
    )
}

export default TodoInput;
