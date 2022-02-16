import React,{useState} from 'react';
import './Todo.scss';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const Todo = () => {

    const [inputData,setInputData ] = useState('');
    const [items,setItems] = useState([]);


    const handleInputChange = (e) =>{
        setInputData(e.target.value)
    }

    const addItem = (e) =>{
        e.preventDefault();
        if((!inputData) || (inputData.length < 2)){
            return
        }
        setItems([
            ...items,
            {
                id:Math.floor(Math.random() * 1000),
                text:inputData
            }
        ])
        setInputData('');
    }

    const handleRemoveItem = (delId) => {
        const updatedItems = items.filter((item)=>{
               return(item.id != delId)
        })
        setItems(updatedItems)
    }


    return(
        <>
            <div className="container-todo">
                <h3>Manage your task</h3>
                <TodoInput 
                    inputVal={inputData} 
                    onInputChange={(e)=>handleInputChange(e)}
                    addItem={(e)=>addItem(e)}
                />
                <TodoList
                    items={items}
                    onRemoveItem={(id)=>handleRemoveItem(id)}
                />
             </div>
        </>
    )
}

export default Todo;
