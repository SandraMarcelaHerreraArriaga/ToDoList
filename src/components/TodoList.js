import React, { useState, useEffect, useDebugValue } from 'react'
import TodoElement from './TodoElement'
import { useSelector, useDispatch } from 'react-redux'
import actions from './../Redux/actions'

function TodoList(){
const dispatch = useDispatch()
const todos = useSelector(state => state.todos) //este es de redux


const [newTodo, setNewTodo] = useState('')


useEffect(() => {
    console.log("useEffect")
},[todos])

function addToDo(){
    console.log("add Todo")
    dispatch(actions.todos.addTodo(newTodo))
    
    //Esto es equivalente a la linea de arriba
    //dispatch({
      //  type: 'ADD_TODO',
        //payload: newTodo
    //})

    //setTodos([...todos,newTodo])
    setNewTodo('')
    console.log(todos)
}

function handleOnChange(e){
    setNewTodo(e.target.value)
}


    return <div>
        <h1>Todo List</h1>
        <input type="text" value = {newTodo} onChange={handleOnChange}></input>
        <button onClick={addToDo}>add</button>
        {todos.map((todo,idx) => {
            return <TodoElement content= {todo} idx = {idx} key={idx}></TodoElement>
        })}
        
    </div>
}

export default TodoList