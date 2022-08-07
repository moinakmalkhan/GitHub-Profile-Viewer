import axios from "axios"
import { GET_API, GET_ERROR } from "./types";

export const allUsers = (user) => async dispatch => {
    axios.get(`https://api.github.com/users/${user}`,
    {
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
        if(response.status == 200) {
            dispatch({
                type: GET_API,
                payload: response.data
            })
        }
    })
    .catch(err => {
        console.log(err.response)
        if(err.response.status == 404) {
            dispatch({
                type: GET_ERROR,
                payload: err.response.data.message
            })
        }

    });
}
