import {  DELETE_TODO, ADD_TODO_SUCCESS, ADD_TODO_REQUEST, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "../actionTypes"



const initState = {
    loading: false,
    todos: []
}

const todos =  (state = initState, action) => {
    switch(action.type){
        case GET_TODOS_REQUEST:
            return{
                ...state,
                loading: true
            }

        case GET_TODOS_SUCCESS:
            return {
                ...state,
                loading: false,
                todos: action.payload
            }
        case ADD_TODO_REQUEST:
            return{
                ...state,
                loading: true
            }
        case ADD_TODO_SUCCESS:
            return {
                ...state,
                loading: false,
                todos: [...state.todos,action.payload]
            }
        case DELETE_TODO:
            state.splice(action.payload,1)
            return [...state] //todos.splice(idx,1)
        default:
            return state
    }

}

export default todos