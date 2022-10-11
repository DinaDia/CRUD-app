import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadEmployeeStart, deleteEmployeeStart } from "../action/Actions";
import {css} from '@emotion/css';
import {Link} from 'react-router-dom';

const EmployeeList = () => {
  
    const dispatch=useDispatch();
    const {Employees}=useSelector(state=>state.data);


    useEffect(()=>{
        dispatch(loadEmployeeStart());
         // eslint-disable-next-line
    }, []);

    const deleteEmployee=(id)=> {
      if(window.confirm("Confirm you want to delete this entry")){
        dispatch(deleteEmployeeStart(id));
        window.location.reload(false);
          
      }
    }
  return (

    <div className={css` margin-top:75px;
    margin-left:75px;`}>
      <table style={{borderCollapse :'collapse'}}>
        <thead >
          <tr>
            <th className={css `text-align:'center';
            background-color: #99BDD9;
            padding:6px;border:2px solid white;`} >ID</th>
            <th  className={css `text-align:'center';
            background-color: #99BDD9;
            padding:6px; border:2px solid white;`} >First Name</th>
            <th className={css `text-align:'center';
            background-color: #99BDD9;
            padding:6px; border:2px solid white;`} >Last Name</th>
            <th className={css `text-align:'center';
            background-color: #99BDD9;
            padding:6px; border:2px solid white;`} >Phone Number</th>
            <th className={css `text-align:'center';
            background-color: #99BDD9;
            padding:6px; border:2px solid white;`} >Email </th>
            <th className={css `text-align:'center';
            background-color: #99BDD9;
            padding:6px; border:2px solid white;`} >Department</th>
            <th className={css `text-align:'center';
            background-color: #99BDD9;
            padding:6px; border:2px solid white;`} ></th>
            <th className={css `text-align:'center';
            background-color: #99BDD9;
            padding:6px; border:2px solid white;`} ></th>
            <th className={css `text-align:'center';
            background-color: #99BDD9;
            padding:6px; border:2px solid white;`} ></th>

          </tr>
      </thead>

      <tbody className={css`margin-left:50px;`}>
      {Employees && 
        Employees.map((employee, id)=>(
          <tr key={id}>
            <td className={css `
            width:75px;
            text-align: center;
            background-color:#f0f7fa;
            border:2px solid white`}>{employee.id}</td>
            <td className={css `
            width:130px;
            background-color:#f0f7fa;
            text-align: center;
            border:2px solid white;`}>{employee.firstName}</td>
            <td className={css `
            width:130px;
            background-color:#f0f7fa;
            text-align: center;
            border:2px solid white;`}>{employee.lastName}</td>
            <td className={css `
            width:200px;
            text-align: center;
            background-color:#f0f7fa;
            border:2px solid white;`}>{employee.phone}</td>
            <td className={css `
            width:250px;
            text-align: center;
            background-color:#f0f7fa;
            border:2px solid white;
            `}>{employee.email}</td>
            <td className={css `
            width:175px;
            background-color:#f0f7fa;
            text-align: center;
            border:2px solid white;`}>{employee.department}</td>
            <td className={css `
            width:75px;
            text-align: center;
            background-color:#f0f7fa;
            border:2px solid white;
            `}>
              <button className={css `
              background-color: #90A1C8;
              color:white;
              border:none;
              text-align:center;
              padding: 7px 14px 7px 14px;
              &:hover {
                opacity: 0.4;
                cursor: pointer;
              }
              `} >
                <Link style={{color:'white', textDecoration:'none',}}
                to={`/EmployeeInfo/${employee.id}`}>View</Link>
                </button>
            </td>            
            <td className={css `
            width:75px;
            text-align: center;
            background-color:#f0f7fa;
            border:2px solid white;
            `}>
              <button className={css `
              background-color: #9084AE;
              color:white;
              border:none;
              text-align:center;
              padding: 7px 14px 7px 14px;
              &:hover {
                opacity: 0.4;
                cursor: pointer;
              }
              `} >
                <Link style={{color:'white', textDecoration:'none',}}
                to={`/EditEmployee/${employee.id}`}>Edit</Link>
                </button>
            </td>
            <td className={css `
            width:75px;
            text-align: center;
            background-color:#f0f7fa;
            border:2px solid white;
            padding:5px;`}>
              <button className={css `
            background-color:  #c70000;
            color:white;
            border:none;
            text-align:center;
            padding: 7px 12px 7px 12px;
            &:hover {
              opacity: 0.4;
              cursor: pointer;
            }
            `} 
            onClick={()=>deleteEmployee(employee.id)}
            >Delete</button>
            </td>
          </tr>
       


      
     
     
        ))}

        </tbody>
        
        </table>
                     
        </div> 
  )
}
export default  EmployeeList;