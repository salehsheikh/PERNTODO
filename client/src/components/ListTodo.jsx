import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import EditTodo from './EditTodo';

const ListTodo = () => {
    const [todos, setTodos] = useState([]);
    const handleDelete=async(id)=>{
try {
    const deleteTodo=await fetch(`http://localhost:5000/todos/${id}`,
  {
    method:"DELETE"
  });
  setTodos(todos.filter(todo=>todo.todo_id !==id));
} catch (error) {
    console.log(error.message);
}
    }
const getTodos=async()=>{
    try {
        const response=await fetch("http://localhost:5000/todos");
        const jsonData=await response.json();
       setTodos(jsonData);
    } catch (error) {
        console.log(error.message);
    }
}  ;
useEffect(()=>{
    getTodos();
},[]) ; 
  return (
    <>
    {""}
       <table className="table mt-4 text-center">
    <thead>
      <tr>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody >
     {todos.map(todo=>(
        <tr key={todo.todo_id}>
            <td>{todo.description}</td>
            <td><EditTodo todo={todo}/></td>
            <td><button className='btn btn-danger'onClick={()=>handleDelete(todo.todo_id)}>Delete</button></td>
        </tr>
     ))}
    </tbody>
  </table>
    </>
  )
}

export default ListTodo
