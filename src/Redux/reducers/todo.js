import { ADD_TODO, DELETE_TODO } from "../actionTypes"

const todos =  (state = [], action) => {
    switch(action.type){
        case ADD_TODO:
            return [...state,action.payload]
        case DELETE_TODO:
            state.splice(action.payload,1)
            return [...state] //todos.splice(idx,1)
        default:
            return state
    }

}

export default todos