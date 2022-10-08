import {combineReducers} from 'redux';
import userReducer from './Reducer';

const RootReducer = combineReducers({
    data:userReducer
});

export default RootReducer