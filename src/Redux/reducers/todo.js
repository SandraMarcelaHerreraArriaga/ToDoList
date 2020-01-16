import { ADD_TODO } from "../actionTypes"

const todos = state = (state = [], action) => {
    switch(action.type){
        case ADD_TODO:
            break
        default:
            return state
    }

}

export default todos