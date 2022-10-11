import * as types from '../action/ActionTypes';


const initialState={
     Employees:[], 
     error:null,
     loading:false,
     };
     
     const userReducer= (state=initialState, action)=>{
        switch(action.type){
            
            case types.LOAD_EMPLOYEES_START:
                case types.CREATE_EMPLOYEE_START:
                case types.DELETE_EMPLOYEE_START:
                case types.EDIT_EMPLOYEE_START:

                return {
                    ...state, 
                    loading:true,
                };


                case types.LOAD_EMPLOYEES_SUCCESS:
                    return {
                        ...state,
                        loading:false,
                        Employees:action.payload,
                    };

                    case types.CREATE_EMPLOYEE_SUCCESS:
                    case types.EDIT_EMPLOYEE_SUCCESS:

                        return{
                            ...state,
                            loading:false,
                        };

                        case types.DELETE_EMPLOYEE_SUCCESS:
                            return {
                                ...state,
                                loading:false,
                                employees : state.employees.filter(employee=>employee.id!==action.payload),
                            }


                    case types.LOAD_EMPLOYEES_ERROR:
                        case types.CREATE_EMPLOYEE_ERROR:
                        case types.DELETE_EMPLOYEE_ERROR:
                        case types.EDIT_EMPLOYEE_ERROR:

                        return {
                            ...state,
                            loading:false,
                            error:action.payload,
                        };
            default: 
            return state;
        }
     };

     export default userReducer;