export const fetchData = (users) => {
    return {
        type: "DATA",
        payload : users
    }
}



export const create = (value) => {
    return {
        type: "CREATE",
        payload: value,
    }
}

export const view = (value) => {
    return {
        type: "VIEW",
        payload: value
    }
}

export const edit = (value,index) => {
    return {
        type: "EDIT",
        payload: {
            value,
            index
        }
    }
}

export const editedData = (value,index)=>{
    return {
        type:"EDITED",
        payload:{
            value,
            index
        }
    }
}

export const deleteData = (value) => {
    return {
        type: "DELETE",
        payload: value
    }
}