import React from 'react';

const Todo = ({ todo, index, deleteTodo, editTodo }) => {
  return (
    <>
      <div className='list'>
        <h3>{todo}</h3>
        <button className='btn-delete' onClick={() => deleteTodo(index)}>
          x
        </button>
        <button className='btn-edit' onClick={()=> editTodo(index, todo)}>
          ↺
        </button>
      </div>
    </>
  );
};

export default Todo;
