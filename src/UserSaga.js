import { put, takeEvery, takeLatest, all, call, delay, fork, take } from 'redux-saga/effects';
import { loadEmployeeSuccess, loadEmployeeError } from './action/Actions';
import{loadEmployeeApi} from './Api';
import * as types from './action/ActionTypes';

export function* onLoadEmployeesStartAsync(){
    try{
        const response=yield call(loadEmployeeApi);
    if(response.status===200)
    yield delay(500);
    yield put(loadEmployeeSuccess(response.data))
    }
    catch(error){
        yield put(loadEmployeeError(error.response.data))
    }
}
export function* onLoadEmployees(){
    yield takeEvery(types.LOAD_EMPLOYEES_START, onLoadEmployeesStartAsync)
}

const UserSaga=[
    fork(onLoadEmployees)
];

export default function*rootSaga(){
    yield all([...UserSaga]);

}