import * as types from '../action/ActionTypes';


const initialState={
     Employees:[], 
     error:null,
     loading:false,
     }
     
     const userReducer= (state=initialState, action)=>{
        switch(action.type){
            
            case types.LOAD_EMPLOYEES_START:
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
                    case types.LOAD_EMPLOYEES_ERROR:
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