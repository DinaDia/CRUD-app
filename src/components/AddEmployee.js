import {useState} from 'react';
import { useDispatch} from 'react-redux';
import{ Button, Box, Text} from 'rebass';
import {css} from '@emotion/css';
import {useNavigate} from 'react-router-dom';  
import {createEmployeeStart} from '../action/Actions';


const initialState={
  firstName: " ",
  lastName:" ",
  phone: " ",
  email:" ",
  department: " ",
};
const AddEmployee = () => {

  const [newValues, setNewValues]=useState(initialState);
  const {firstName, lastName , phone, email, department}=newValues;
  const dispatch=useDispatch();
  const navigate=useNavigate();


  const finalSubmit=(e)=>{
    e.preventDefault();
    dispatch(createEmployeeStart(newValues));
    
    setTimeout(()=>navigate("/"),500);  
}

  const changeInput=(e)=>{
    let{name, value}=e.target;
    setNewValues({...newValues, [name]: value});
  };


  
  return (
    <div>
      <Text textAlign='center' fontSize={5} fontFamily='arial' color='#ADD8E6' mt={3}> New Employee
      </Text>
      <Box 
      mt={50}
      mx='auto'
      backgroundColor='#99BDD9'
      p={[20, 0, 10, 20]}
      css={{
        maxWidth:'300px'
      }}
   
      >
        <form onSubmit={finalSubmit}>
      <label className={css `text-align:'center', color:white`}>First name</label>
      <br/>
      <input  className={css ` height:25px; width: 250px; color:black;  border: 1px solid #f1f1f1;`}
       type='text'
       name='firstName'
      value={firstName}
      onChange={changeInput}
      />
      <br/>

      <label>Last name</label>
      <br/>
      <input className={css `height:25px; width: 250px;  border: 1px solid #f1f1f1;`}
       
        type='text'
        name='lastName'
       value={lastName}
       onChange={changeInput}
      />
      <br/>
      
      <label>Phone number</label>
      <br/>
      <input className={css `height:25px; width: 250px; border: 1px solid #f1f1f1;`}
       type='tel'
       name='phone'
       value={phone}
       onChange={changeInput}      
       />
      <br/>
      
      <label> Email</label>
      <br/>
      <input className={css `height:25px; width: 250px; border: 1px solid #f1f1f1;`}
       type='email'
       name='email'
       value={email}
       onChange={changeInput}
      />
      <br/>
      
    
      <label>Department</label>
      <br/>
      <input className={css `height:25px; width: 250px;  border: 1px solid #f1f1f1; `} 
       type='text'
       name='department'
       value={department}
       onChange={changeInput}
      /> 
      <br/> 
      <br/>
      
      <div >
          <Button backgroundColor= '#c70000'
            color='white' 
            border='none'
            textAlign='center'
            padding= '7px 12px 7px 12px'
            sx={{
              ':hover': {
                opacity: '0.2',
                cursor: 'pointer',
              }
            }}
            onClick={()=>navigate('/')}
            >Cancel</Button>



          <Button
              backgroundColor='#9084AE'
              color='white'
              border='none'
              textAlign='center'
              padding= '7px 14px 7px 14px' 
              ml={105}
              sx={{
                ':hover': {
                  backgroundColor: '#99BDD9',
                  cursor: 'pointer',
                }
              }} onClick={finalSubmit}>
                Submit</Button>
        </div>
        </form>
      </Box>

    </div>
     
           ) }
export default AddEmployee