import { data } from "../data/Data"

const obj = {
    allUser: [],
    viewUser: {},
    editUser: {},
    error:""
}

export default function getData(state = obj, action) {
    switch (action.type) {
        case "EDITED":
            const userEdited = [...state.allUser];
            userEdited.splice(action.payload.index, 1, action.payload.value);
            return {
                ...state,
                allUser: userEdited
            }
        case "ERROR":
            return {
                ...state,
                error : action.payload
            }
        default:
            return state
    }
}