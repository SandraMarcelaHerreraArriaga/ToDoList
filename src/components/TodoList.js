import React, { useState, useEffect} from 'react'
import TodoElement from './TodoElement'
import { useSelector, useDispatch } from 'react-redux'
import actions from './../Redux/actions'

function TodoList(){
const dispatch = useDispatch()
const loading = useSelector(state => state.todos.loading) //
const todos = useSelector(state => state.todos.todos) //este es de redux


const [newTodo, setNewTodo] = useState('')


useEffect(() => {
    dispatch(actions.todos.getTodos())
},[dispatch])

function addToDo(){
    console.log("add Todo")
    dispatch(actions.todos.addTodo(newTodo))
}

function handleOnChange(e){
    setNewTodo(e.target.value)
}


    return <div>
        <h1>Todo List</h1>
        <input type="text" value = {newTodo} onChange={handleOnChange}></input>
        <button onClick={addToDo}>add</button>
        {loading ? <p>loading...</p> : null}
        {console.log(todos)}
        {todos.map((todo,idx) => {
            return <TodoElement todo = {todo} key = {todo._id}></TodoElement>
        })}
        
    </div>
}

export default TodoList