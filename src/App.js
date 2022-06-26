import React, {useState, useEffect} from "react";
import "./styles.css";
import TodosContainer from './components/TodosContainer'
export default function App() {
 
    
  return (
    <div>
      <h1>React Memo</h1>
      <p>Let's play around with Memo</p>
      <TodosContainer/>
    </div>
  );
}
