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



export const createEmployeeStart=(employee)=>({
    type:types.CREATE_EMPLOYEE_START,
    payload:employee,
});

export const createEmployeeSuccess=()=>({
    type:types.CREATE_EMPLOYEE_SUCCESS,
    
});

export const createEmployeeError=(error)=>({
    type:types.CREATE_EMPLOYEE_ERROR,
    payload:error,
});



export const deleteEmployeeStart=(employeeId)=>({
    type:types.DELETE_EMPLOYEE_START,
    payload:employeeId,
});

export const deleteEmployeeSuccess=(employeeId)=>({
    type:types.DELETE_EMPLOYEE_SUCCESS,
    payload:employeeId,
});

export const deleteEmployeeError=(error)=>({
    type:types.DELETE_EMPLOYEE_ERROR,
    payload:error,
});




export const editEmployeeStart=(employeeInfo)=>({
    type:types.EDIT_EMPLOYEE_START,
    payload:employeeInfo,
});

export const editEmployeeSuccess=()=>({
    type:types.EDIT_EMPLOYEE_SUCCESS,
});

export const editEmployeeError=(error)=>({
    type:types.EDIT_EMPLOYEE_ERROR,
    payload:error,
});