import { put, takeEvery, takeLatest, all, call, delay, fork, take } from 'redux-saga/effects';
import { loadEmployeeSuccess, loadEmployeeError, createEmployeeSuccess, createEmployeeError, deleteEmployeeSuccess, deleteEmployeeError, editEmployeeSuccess, editEmployeeError } from './action/Actions';
import{loadEmployeeApi, createEmployeeApi, deleteEmployeeApi, editEmployeeApi} from './Api';
import * as types from './action/ActionTypes';
 
export function* onLoadEmployeesStartAsync(){
    try{
        const response=yield call(loadEmployeeApi);
    if(response.status===200){
        yield delay(500);
        yield put(loadEmployeeSuccess(response.data));
    }
    }
    catch(error){
        yield put(loadEmployeeError(error.response.data));
    }
}

export function* onCreateEmployeesStartAsync({payload}){
    try{
        const response=yield call(createEmployeeApi, payload);
    if(response.status===200){
        yield put(createEmployeeSuccess(response.data))
    
    }
    
    }
    catch(error){
        yield put(createEmployeeError(error.response.data))
    }
}

export function* onDeleteEmployeeStartAsync(employeeId){
    try{
        const response=yield call(deleteEmployeeApi, employeeId);
    if(response.status===200)
    
        yield delay(500);
        yield put(deleteEmployeeSuccess(employeeId));
    }
    catch(error){
        yield put(deleteEmployeeError(error.response.data));
    }
}


export function* onEditEmployeeStartAsync({payload: {id, changedValue}}){
    try{
        const response=yield call(editEmployeeApi, id, changedValue);
    if(response.status===200){
        yield put(editEmployeeSuccess());

    }
    }
    catch(error){
        yield put(editEmployeeError(error.response.data));
    }
}



export function* onDeleteEmployee(){
    while(true){
        const {payload : employeeId}=yield take(types.DELETE_EMPLOYEE_START);
        yield call(onDeleteEmployeeStartAsync, employeeId)
    } 

}


export function* onLoadEmployees(){
    yield takeEvery(types.LOAD_EMPLOYEES_START, onLoadEmployeesStartAsync);
}

export function* onCreateEmployee(){
    yield takeLatest(types.CREATE_EMPLOYEE_START, onCreateEmployeesStartAsync);
}

export function* onEditEmployee(){
    yield takeLatest(types.EDIT_EMPLOYEE_START, onEditEmployeeStartAsync);
}

const UserSaga=[
    fork(onLoadEmployees), 
    fork(onCreateEmployee), 
    fork(onDeleteEmployee), 
    fork(onEditEmployee),
];

export default function*rootSaga(){
    yield all([...UserSaga]);

}