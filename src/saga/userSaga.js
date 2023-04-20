import { getUsers, getSingleUser, createUser, deleteUser, editUser } from "../api/apiCalls";
import { all, put, takeLatest } from 'redux-saga/effects'

export function* fetchAllUsers() {
    try {
        const { data } = yield getUsers();
        yield put({ type: "USERS_LOAD_SUCCESS", payload: data })
    } catch (error) {
        yield put({ type: "USERS_LOAD_FAIL", payload: error.message })
    }
}

export function* fetchSingleUser(action) {
    try {
        const { data } = yield getSingleUser(action.payload);
        yield put({ type: "SINGLE_USER_LOAD_SUCCESS", payload: data })
    } catch (error) {
        yield put({ type: "SINGLE_USER_LOAD_FAIL", payload: error.message })
    }
}

export function* createSingleUser(action) {
    try {
        const { data } = yield createUser(action.payload);
        yield put({ type: "CREATE_SINGLE_USER_LOAD_SUCCESS", payload: data })
    } catch (error) {
        yield put({ type: "CREATE_SINGLE_USER_LOAD_FAIL", payload: error.message })
    }
}

export function* editSingleUser(action) {
    try {
        const { index, value } = action.payload;
        const { data } = yield editUser(value);
        yield put({ type: "EDIT_SINGLE_USER_LOAD_SUCCESS", payload: {data,index} })
    } catch (error) {
        yield put({ type: "EDIT_SINGLE_USER_LOAD_FAIL", payload: error.message })
    }
}

export function* deleteSingleUser(action) {
    try {
        const { index, value } = action.payload;
        const id = yield deleteUser(value);
        yield put({ type: "DELETE_SINGLE_USER_LOAD_SUCCESS", payload: index })
    } catch (error) {
        yield put({ type: "DELETE_SINGLE_USER_LOAD_FAIL", payload: error.message })
    }
}

export function* userSaga() {
    yield all([
        takeLatest('USERS_REQUESTED', fetchAllUsers),
        takeLatest('SINGLE_USER_REQUESTED', fetchSingleUser),
        takeLatest('CREATE_SINGLE_USER_REQUESTED', createSingleUser),
        takeLatest('EDIT_SINGLE_USER_REQUESTED', editSingleUser),
        takeLatest('DELETE_SINGLE_USER_REQUESTED', deleteSingleUser),
    ])
}