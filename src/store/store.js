import { applyMiddleware, compose, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import allReducers from "../reducers";
import rootSaga  from "../saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware]

const store = configureStore({
    reducer : allReducers,
    middleware : (getDefaultMiddleware)=>getDefaultMiddleware().concat(middleware)
});

sagaMiddleware.run(rootSaga);

export default store