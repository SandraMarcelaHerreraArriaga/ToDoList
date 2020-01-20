import axios from 'axios'
import  {ADD_TODO_REQUEST,ADD_TODO_SUCCESS, DELETE_TODO, GET_TODOS_REQUEST, GET_TODOS_SUCCESS} from '../actionTypes'


const API_URL = 'http://neri.ngrok.io/todos'
export default {
    addTodo,
    deleteTodo,
    getTodos
}

function getTodos(content){
    
    return dispatch => {
        dispatch({
            type: GET_TODOS_REQUEST
        })
       
        axios.get(API_URL).then(todos => {
            dispatch({
                type: GET_TODOS_SUCCESS,
                payload: todos.data
            })
        })
        
    }
}


function addTodo(content){
    
    return dispatch => {
        dispatch({
            type: ADD_TODO_REQUEST
        })
       
        axios.post(API_URL,{content}).then(response => {
            dispatch({
                type: ADD_TODO_SUCCESS,
                payload: response.data
            })
        })
    }
}


function deleteTodo(idx){
    return {
        type: DELETE_TODO,
        payload: idx
    }
}