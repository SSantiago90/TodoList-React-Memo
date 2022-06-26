import React, { useEffect, useState } from 'react';
import getTodos from '../data/todos';
import TodoList from './TodosList';
import TodoSearch from './TodoSearch';
import generateIdFor from '../utils/idGen';

export default function TodosContainer() {
  console.log('%c Render Container', "color: pink");
  

  let [todosList, setTodosList] = useState([]);
  let [todosSearchResults, setTodosSearchResults] = useState([]);

  function handleDelete(idDelete) {
    setTodosList(todosList.filter((todo) => todo.id !== idDelete));    
  }

  function handleDone(idDone) {
    const newList = [...todosList];
    const doneTodo = newList.find((todo) => todo.id === idDone);
    doneTodo.completed = !doneTodo.completed;
    setTodosList(newList);
  }

  function handleFind(textTodo){
    const results = todosList.filter( item => 
      item.title.includes(textTodo)
    );
    setTodosSearchResults(results)
  }

  useEffect(() => {
    setTimeout( ()=> getTodos(3).then((todosData) => setTodosList(todosData)), 500); 
    console.log("%c---------- Data lista!----------", "color: grey")
  }, []);

  const TodoListView = todosSearchResults.length ? todosSearchResults : todosList
  if (todosList) 
    return (    
      <>  
        <TodoSearch
          handleFind={handleFind}
        />
        <TodoList
          handleDelete={handleDelete}
          handleDone={handleDone}
          todos={TodoListView}
        />
      </>
    )
    else{
      return <h4>Fetching data. . .</h4>
      }      
}
