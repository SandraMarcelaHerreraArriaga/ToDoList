import  {ADD_TODO, DELETE_TODO} from '../actionTypes'


export default {
    addTodo,
    deleteTodo
}

function addTodo(content){
    return {
        type: ADD_TODO,
        payload: content
    }
}

function deleteTodo(idx){
    return {
        type: DELETE_TODO,
        payload: idx
    }
}