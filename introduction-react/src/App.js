
import React from 'react';
import './App.css';
import { TodoCounter } from './TodoCounter';


function App() {
  const todos = [
    {text : 'Cortar cebolla', completed:false},
    {text : 'Tomar el curso de intro a React', completed:false},
    {text : 'Llorar con la llorona', completed:false}
  ];
  return (
    <React.Fragment>
      <TodoCounter/>
      

      {/* <TodoSearch/> */}
      <input placeholder='Cebolla'/>
      {/* <TodoList> */}
        {/* {todos.map(todo =>(
          {/* <TodoItem/> }
        ))}*/
      /* </TodoList> */}
      {/* <CreateTodoButton/> */}
      <button>+</button>
      
    </React.Fragment>
  );
}

export default App;
