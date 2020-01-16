import React from 'react'

function TodoElement(props){

function handleDeleteClick(){
    props.handleDelete(props.idx)
}
return <p>{props.content} <button onClick={handleDeleteClick}>delete</button></p>
}

export default TodoElement