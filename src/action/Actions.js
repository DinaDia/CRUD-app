import * as types from './ActionTypes';
export const loadEmployeeStart=()=>({
    type:types.LOAD_EMPLOYEES_START,
});

export const loadEmployeeSuccess=(employees)=>({
    type:types.LOAD_EMPLOYEES_SUCCESS,
    payload:employees
});

export const loadEmployeeError=(error)=>({
    type:types.LOAD_EMPLOYEES_ERROR,
    payload:error,
});