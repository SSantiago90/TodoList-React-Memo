import React, {memo} from 'react';
import Todo from './Todo';

function TodosList( { todos, handleDone, handleDelete } ){
  console.log("%c Render List", "color: yellowgreen");
  return(
    <div>
    {!todos.length && <p>Nothing to do today?</p>}
    {todos.map( elem => 
      <div key={elem.id}>
        <Todo todo={elem} handleDone={handleDone} handleDelete={handleDelete}>{elem.title}</Todo>
      </div>
    )}
  </div>
  )
}

export default TodosList;
