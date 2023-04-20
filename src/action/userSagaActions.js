export const fetchAllAction = () => {
    return {
        type: 'USERS_REQUESTED'
    }
}

export const fetchSingleUserAction = (value) => {
    return {
        type: 'SINGLE_USER_REQUESTED',
        payload: value
    }
}

export const createSingleUserAction = (value) => {
    return {
        type: 'CREATE_SINGLE_USER_REQUESTED',
        payload: value
    }
}

export const editSingleUserAction = (value,index) => {
    return {
        type: 'EDIT_SINGLE_USER_REQUESTED',
        payload: {
            value,
            index
        }
    }
}

export const deleteSingleUserAction = (value,index) => {
    return {
        type: 'DELETE_SINGLE_USER_REQUESTED',
        payload: {
            value,
            index
        }
    }
}

export const search = (value) => {
    return {
        type: "SEARCH",
        payload: value,
    }
}

export const setEditUser = (value,index) => {
    return {
        type: "EDIT",
        payload: {
            value,
            index
        }
    }
}
