import { FETCH_BLOGS } from "./types";

export const blogReducer=(state={},action)=>{
    switch(action.type){
        case FETCH_BLOGS:
            return{items:action.payload};
        default:
            return state;
    }
}