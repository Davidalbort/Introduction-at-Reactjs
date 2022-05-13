import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";

function TodoForm (){
    const {setModal,addTodo}=useContext(TodoContext);
    const [newValueTodo,setNewValueTodo]=useState('');
    const onCancel = () =>{
        setModal(false);
    }
    const onChange = (event) =>{
        setNewValueTodo(event.target.value);
    }
    const onSubmit = (event) =>{
        event.preventDefault();
        addTodo(newValueTodo);
        setModal(false);
    }
    return(
        <form onSubmit={onSubmit}>

            <textarea onChange={onChange} placeholder="Hola!,Escriba un nuevo Todo">

            </textarea>
            <button onClick={onCancel}>
                Cancelar
            </button>
            <button type="submit">
                Añadir
            </button>
        </form>
    )
}

export { TodoForm };