
import React, {useState} from 'react';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';


const todosByDefault = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: true },
  { text: 'LALALALAA', completed: false },
];


function App() {
  const [todos, setTodos]=useState(todosByDefault);
  const [searchValue,setSearchValue]=useState('');
  const completedTodos = todos.filter(item => !!item.completed).length;
  const totalTodos = todos.length;
  let searchTodos = [];
  if(!searchValue>=1){
    searchTodos= todos;
  }else{
    searchTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText);
    })
  }
  const completeTodo = (text) =>{
    const findIndex = todos.findIndex( item => item.text === text);
    const newTodos = [...todos];
    newTodos[findIndex].completed = true;
    setTodos(newTodos);
  };
  const deleteTodo = (text) =>{
    const findIndex = todos.findIndex( item => item.text === text);
    const newTodos = [...todos];
    newTodos.splice(findIndex,1);
    setTodos(newTodos);
  };

  return (
    <React.Fragment>
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />
    

      <TodoSearch
        searchValue={searchValue}
        setserchValue={setSearchValue}
      />
      <TodoList> 
         {searchTodos.map(todo =>(
           <TodoItem 
           key={todo.text} 
           text={todo.text}
            completed={todo.completed}
            onCompleted={() =>completeTodo(todo.text)}
            onDeleted={() => deleteTodo(todo.text)}
           /> 
        ))}
      </TodoList> 
       <CreateTodoButton/> 
      
      
    </React.Fragment>
  );
}

export default App;
