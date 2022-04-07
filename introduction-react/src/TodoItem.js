import React from 'react';
import './TodoItem.css';

function TodoItem({completed,text,onCompleted,onDeleted}) {
  
  return (
    <li className="TodoItem">
      <span 
        className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
        onClick={onCompleted}
      >
      √ 
      </span>
      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
        {text}
      </p>
      <span 
        className="Icon Icon-delete"
        onClick={onDeleted}
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };