import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import reducer from './Reducers/RootReducer';
import RootSaga from './UserSaga';
import logger from 'redux-logger';
import RootReducer from './Reducers/RootReducer';

const sagaMiddleware = createSagaMiddleware();
const middlewares=[sagaMiddleware];
if(process.env.NODE_ENV==='development'){
    middlewares.push(logger);
}
const store=createStore(RootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(RootSaga)

export default store;
