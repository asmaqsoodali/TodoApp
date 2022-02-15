import React from 'react';
import './TodoInput.scss';

const TodoInput = (props) =>{

    return(
        <>
            <div className="todoInput">
                <input 
                    type="text"
                    value={props.inputVal} 
                    onChange={(e)=>props.onInputChange(e)} 
                    name="todo" 
                    placeholder="Please enter here"
                />
                {props.inputVal.length > 3 ?
                    <button onClick={()=>props.addItem()}>Add</button>
                    :'' }
            </div>

        </>
    )
}

export default TodoInput;
