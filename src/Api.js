import axios from 'axios';

export const loadEmployeeApi =async()=>
await axios.get("http://localhost:8000/employee");