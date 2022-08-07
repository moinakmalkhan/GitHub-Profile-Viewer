import { GET_API, GET_ERROR } from "../actions/types";

const initialState = {
    error: "Enter Username to get Git Profile",
    git: []
};
export default (state = initialState, { type, payload }) => {
    console.log({ type, payload })
    switch (type) {
        case GET_API:
            return {
                git: payload,
                error: ""
            }
        case GET_ERROR:
            return {
                ...state,
                git: [],
                error: payload
            }
        default:
            return state;
    }
}