import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
    const {modal,setModal}=useContext(TodoContext);
    const onClickButton = () =>{
        setModal(!modal);
    }
  return (
    <button className="CreateTodoButton" onClick={onClickButton}>
    +
    </button>
  );
}

export { CreateTodoButton };