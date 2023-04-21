import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import rootSaga  from "../saga/rootSaga";
import allReducers from "../reducers/rootReducer";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware]

const store = configureStore({
    reducer : allReducers,
    middleware : (getDefaultMiddleware)=>getDefaultMiddleware().concat(middleware)
});

sagaMiddleware.run(rootSaga);

export default store