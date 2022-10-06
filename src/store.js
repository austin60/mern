import { createStore, applyMiddleware , combineReducers} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from '@redux-devtools/extension';
import { blogReducer } from "./redux/reducers";

const initState={};

 const store=createStore(
    combineReducers({
         blogs:blogReducer,
        }),
        initState,
        composeWithDevTools(
            applyMiddleware(thunk)
        )
        )
export default store; 