import axios from 'axios';

export const loadEmployeeApi =async()=>
await axios.get("http://localhost:8000/employees");

export const createEmployeeApi =async(employee)=>
await axios.post("http://localhost:8000/employees", employee);


export const deleteEmployeeApi =async(employeeId)=>
await axios.delete(`http://localhost:8000/employees/${employeeId}`);

export const editEmployeeApi =async(employeeId, employeeInfo)=>
await axios.put(`http://localhost:8000/employees/${employeeId}`, employeeInfo);