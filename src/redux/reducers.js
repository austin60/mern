import { FETCH_BLOGS,DELETE_BLOG ,UPDATE_BLOG, CREATE_BLOG } from "./types";

export const blogReducer=(state={},action)=>{
    switch(action.type){
        case FETCH_BLOGS:
            return{items:action.payload};

        case DELETE_BLOG:
            return{
                ...state,
               items: state.items.filter(item => item.id !== action.payload)};

        case CREATE_BLOG:
            return{...state, items: action.payload}
            
        case UPDATE_BLOG:
            return{
                ...state,
					items: state.items.map(
                        item => item.id === action.payload.id
							? (item = action.payload) : item
										)
            }
        default:
            return state;
    }
}

