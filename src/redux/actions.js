import axios from "axios"
import { FETCH_BLOGS } from "./types";


export const fetchBlogs = () => {
    return (dispatch) => {
        return axios.get("http://localhost:4000/app")
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch({
                    type: FETCH_BLOGS,
                    payload: data
                })
            })
            .catch(error => {
                throw (error);
            });
    };
};

