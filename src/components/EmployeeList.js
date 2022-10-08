import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadEmployeeStart } from "../action/Actions";
import {css} from '@emotion/css';



const EmployeeList = () => {
    const dispatch=useDispatch();
    const {Employees}=useSelector(state=>state.data);

    useEffect(()=>{
        dispatch(loadEmployeeStart());
         // eslint-disable-next-line
    }, []);

    const deleteEmployee=(id)=> {

    }
  return (

    <div>

<div className={css`
        margin-top:75px;
        margin-left:120px;
         `}>

          <div className={css `
            background-color: #99BDD9;
            color:black; 
            float: left;
            font-weight:bold;
            border: 1px solid #ADD8E6;
            text-align:center;
            width: 25px;
            padding: 7px 15px 7px 15px;
            `}>ID</div>

            <div className={css `
            background-color: #99BDD9;
            color:black; 
            float: left;
            font-weight:bold;
            border: 1px solid #ADD8E6;
            text-align:center;
            width: 100px;
            padding: 7px 15px 7px 15px;
            `}>First Name</div>
            
          <div className={css `
            background-color: #99BDD9;
            color:black; 
            float: left;
            font-weight:bold;
            border: 1px solid #ADD8E6;
            text-align:center;
            width: 100px;
            padding: 7px 15px 7px 15px;
            `}>Last Name</div>


            <div className={css `
            background-color: #99BDD9;
            color:black; 
            float: left;
            font-weight:bold;
            border: 1px solid #ADD8E6;
            text-align:center;
            width: 135px;
            padding: 7px 15px 7px 15px;
            `}>Phone Number</div>

          <div className={css `
            background-color: #99BDD9;
            color:black; 
            font-weight:bold;
            float: left;
            font-weight:bold;
            border: 1px solid #ADD8E6;
            text-align:center;
            width: 135px;
            padding: 7px 15px 7px 15px;
            `}>Email </div>


          <div className={css `
            background-color: #99BDD9;
            color:black; 
            float: left;
            font-weight:bold;
            border: 1px solid #ADD8E6;
            text-align:center;
            width: 50px;
            padding: 7px 15px 7px 15px;
            `}>Gender</div>

          <div className={css `
            background-color: #99BDD9;
            color:black; 
            float: left; 
            font-weight:bold;
            border: 1px solid #ADD8E6;
            text-align:center;
            width: 135px;
            padding: 7px 15px 7px 15px;
            `}>Department</div>

            <div className={css `
            background-color: #99BDD9;
            color:black; 
            float: left; 
            width: 135px; 
            height: 4px;
            border: 1px solid #ADD8E6;
            padding: 20px 0px 11px 0px;
            `}> </div>

            <div className={css `
            background-color: #99BDD9;
            border: 1px solid #ADD8E6; 
            width: 135px; 
            height: 4px;
            float: left; 
            padding: 20px 0px 12px 0px;
            `}></div>
      </div>


      {Employees && 
        Employees.map((employee, index)=>(
            
        <div  className={css`
        margin-top:75px;
        margin-left:120px;
        border: 1px solid #ADD8E6;
        `}>
          {index+1}

        <div className={css `
            background-color: #99BDD9;
            color:black; 
            float: left;
            font-weight:bold;
            text-align:center;
            width: 25px;
            padding: 7px 15px 7px 15px;
            `} >{employee.id}</div>

        <div className={css `
            background-color: #99BDD9;
            color:black; 
            float: left;
            font-weight:bold;
            text-align:center;
            width: 100px;
            padding: 7px 15px 7px 15px;
            `}>{employee.firstName}</div>

        <div className={css `
            background-color: #99BDD9;
            color:black; 
            float: left;
            font-weight:bold;
            text-align:center;
            width: 100px;
            padding: 7px 15px 7px 15px;
            `}>{employee.lastName}</div>

        <div  className={css `
            background-color: #99BDD9;
            color:black; 
            float: left;
            font-weight:bold;
            text-align:center;
            width: 135px;
            padding: 7px 15px 7px 15px;
            `}>{employee.phone}</div>

        <div className={css `
            background-color: #99BDD9;
            color:black; 
            font-weight:bold;
            float: left;
            font-weight:bold;
            text-align:center;
            width: 135px;
            padding: 7px 15px 7px 15px;
            `}>{employee.email}</div>

        <div className={css `
            background-color: #99BDD9;
            color:black; 
            float: left; 
            font-weight:bold;
            text-align:center;
            width: 135px;
            padding: 7px 15px 7px 15px;
            `}>{employee.department}</div>
            
            
            <div className={css `
            background-color: #99BDD9;
            color:black; 
            float: left; 
            width: 135px; 
            height: 4px;
            padding: 20px 0px 11px 0px;
            `}>
              <button>Edit</button>
               </div>
            
        
        <div className={css `
            background-color: #99BDD9;
            width: 135px; 
            height: 4px;
            float: left; 
            padding: 20px 0px 12px 0px;
            `}>
              <button onClick={()=>deleteEmployee(employee.id)}>Delete</button>
            </div>
         
    </div>
        ))}


       
    </div> 
  )
}
export default  EmployeeList;