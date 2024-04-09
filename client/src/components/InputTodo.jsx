import React from 'react'
import { useState } from 'react';

const InputTodo = () => {
    const [description, setDescription] = useState("");
    const submitForm=async e=>{
e.preventDefault();
try {
    const body={description};
    const response= await fetch("http://localhost:5000/todos",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(body)
    });
   window.location="/";
} catch (error) {
    console.log(error.message);
}
    }
  return (
    <>
     <h1 className='text-center mt-5'>Pern Todo List</h1>
     <form className='d-flex justify-content-center mt-5  ' onSubmit={submitForm}>
        <input type='text' className='form_control me-1' value={description} onChange={e=>setDescription(e.target.value)}/>
        <button className='btn btn-success' type='submit'>Add</button>
     </form>
    </>
  )
}

export default InputTodo;
