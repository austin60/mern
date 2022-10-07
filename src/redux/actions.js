import axios from "axios"
import { FETCH_BLOGS,DELETE_BLOG ,UPDATE_BLOG, CREATE_BLOG } from "./types";



//read
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
//create
export const createNewBlog  = newBlog => async dispatch => {
    const resp = await axios.post('http://localhost:4000/app/post',newBlog);
    dispatch({
        type:CREATE_BLOG ,
        payload: resp.data
    });
}


//update

export const updateBlog = (titleEdit,contentEdit,id) => async dispatch => {
    const resp = await axios.put(`http://localhost:4000/app/admin-blogs/edit/${id}`,{titleEdit:titleEdit,contentEdit:contentEdit});
    dispatch({
        type: UPDATE_BLOG,
        payload: resp.data
    });
}
//delete
export const  deleteBlog = id => async dispatch => {
	await axios.delete(`http://localhost:4000/app/admin-blogs/delete/${id}`);

	dispatch({
		type:DELETE_BLOG,
		payload: id
	});
}



