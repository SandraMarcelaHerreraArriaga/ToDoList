import React from 'react'
import actions from './../Redux/actions'
import { useDispatch } from 'react-redux'



function TodoElement(props){
    const dispatch = useDispatch()

function handleDeleteClick(){

    dispatch(actions.todos.deleteTodo(props.idx))
}
return <p>{props.content} <button onClick={handleDeleteClick}>delete</button></p>
}

export default TodoElement