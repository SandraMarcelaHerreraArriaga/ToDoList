import React, { useState, useEffect } from 'react'
import TodoElement from './TodoElement'

function TodoList(){

const initTodos = ['test', 'homework', 'next']

const [todos,setTodos] = useState(initTodos)
const [newTodo, setNewTodo] = useState('')


useEffect(() => {
    console.log("useEffect")
},[todos])

function addToDo(){
    console.log("add Todo")
    //todos.push('x')
    //setTodos([...todos])

    setTodos([...todos,newTodo])
    setNewTodo('')
    console.log(todos)
}

function handleOnChange(e){
    setNewTodo(e.target.value)
}

function deleteTodo(idx){
    todos.splice(idx,1)
    setTodos([...todos])
}

    return <div>
        <h1>Todo List</h1>
        <input type="text" value = {newTodo} onChange={handleOnChange}></input>
        <button onClick={addToDo}>add</button>
        {todos.map((todo,idx) => {
            return <TodoElement content= {todo} idx = {idx} handleDelete = {deleteTodo}></TodoElement>
        })}
        
    </div>
}

export default TodoList