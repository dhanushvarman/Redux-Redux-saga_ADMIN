const obj = {
    allUser: [],
    searchResult:[],
    viewUser: {},
    editUser: {},
    error: ""
}

export default function userReducer(state = obj, action) {
    switch (action.type) {

        // Search user
        case "SEARCH":
            return {
                ...state,
                searchResult: state.searchResult.length == 0 ? state.allUser : state.allUser.filter((value) => value.name.includes(action.payload))
            }

        //Setting user data in edit form
        case "EDIT":
            return {
                ...state,
                editUser: action.payload
            }

        //Fetching all users
        case "USERS_LOAD_SUCCESS":
            return {
                ...state,
                allUser: action.payload,
                searchResult : action.payload
            }
        case "USERS_LOAD_FAIL":
            return {
                ...state,
                error: action.payload
            }

        //Fetching single user
        case "SINGLE_USER_LOAD_SUCCESS":
            return {
                ...state,
                viewUser: action.payload
            }
        case "SINGLE_USER_LOAD_FAIL":
            return {
                ...state,
                error: action.payload
            }

        //Creating new user
        case "CREATE_SINGLE_USER_LOAD_SUCCESS":
            return {
                ...state,
                allUser: [action.payload, ...state.allUser]
            }
        case "CREATE_SINGLE_USER_LOAD_FAIL":
            return {
                ...state,
                error: action.payload
            }

        //Editing the selected user
        case "EDIT_SINGLE_USER_LOAD_SUCCESS":
            const { index, data } = action.payload;
            const userEdited = [...state.allUser];
            userEdited.splice(index, 1, data);
            return {
                ...state,
                allUser: userEdited
            }
        case "EDIT_SINGLE_USER_LOAD_FAIL":
            return {
                ...state,
                error: action.payload
            }
        
        //Delete selected user
        case "DELETE_SINGLE_USER_LOAD_SUCCESS":
            const userDeleted = [...state.allUser];
            userDeleted.splice(action.payload, 1);
            return {
                ...state,
                allUser: userDeleted
            }
        case "DELETE_SINGLE_USER_LOAD_FAIL":
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }
}