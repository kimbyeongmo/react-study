import React from "react";
import './scss/TodoTemplate.scss';
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoMain from "./TodoMain";


const TodoTemplate = ({onAdd}) => {
  return (
    <div className='TodoTemplate'>
      <TodoHeader />
      <TodoMain />
      <TodoInput onAdd={onAdd}/>
    </div>
  );
};

export default TodoTemplate;