import {Box, Text,Button} from 'rebass';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {editEmployeeStart} from '../action/Actions';
import { useNavigate, useParams } from 'react-router-dom';
import {css} from '@emotion/css';



const initialState={
    firstName: " ",
    lastName:" ",
    phone: " ",
    email:" ",
    department: " ",
  };

const EditEmployee = () => {
  const [changedValue, setChangedValue]=useState(initialState);
  const {Employees} = useSelector(state => state.data);
  const {firstName, lastName, phone, email, department}=changedValue;
  const navigate = useNavigate()
  const dispatch=useDispatch();
  const {id}=useParams();

  

  useEffect(()=>{
    if(id){
        const currentEmployee=Employees.find((employee)=>employee.id===Number(id));
        setChangedValue({...currentEmployee});
    }

    // eslint-disable-next-line
  }, [id])

  const editData = (e) => {
    e.preventDefault();
    dispatch(editEmployeeStart({id,changedValue}));
    setTimeout(()=>navigate("/"), 500);
  }

  const changeData = (e) => {
    let {name, value}=e.target;
    setChangedValue({...changedValue, [name]:value});
    };
  

  return (
    <div>
      <Text textAlign='center' fontSize={5} fontFamily='arial' color='#ADD8E6' mt={3}> Edit Employee
      </Text>
      <Box 
      mt={50}
      mx='auto'
      backgroundColor='#99BDD9'
      p={[20, 0, 10, 20]}
      css={{
        maxWidth:'300px'
      }}>
        <form>
    <label className={css `text-align:'center', color:white`}>First name</label>
    <br/>
    <input  className={css ` height:25px; width: 250px; color:black;  border: 1px solid #f1f1f1;`}
        type='text'
        name='firstName'
        value={firstName }
    onChange={changeData}
    />
    <br/>
    <label>Last name</label>
      <br/>
      <input className={css `height:25px; width: 250px;  border: 1px solid #f1f1f1;`}
       
        type='text'
        name='lastName'
       value={lastName}
       onChange={changeData}
      />
      <br/>
      
      <label>Phone number</label>
      <br/>
      <input className={css `height:25px; width: 250px; border: 1px solid #f1f1f1;`}
       type='tel'
       name='phone'
       value={phone}
       onChange={changeData}      
       />
      <br/>
      
      <label> Email</label>
      <br/>
      <input className={css `height:25px; width: 250px; border: 1px solid #f1f1f1;`}
       type='email'
       name='email'
       value={email}
       onChange={changeData}
      />
      <br/>
      
    
      <label>Department</label>
      <br/>
      <input className={css `height:25px; width: 250px;  border: 1px solid #f1f1f1; `} 
       type='text'
       name='department'
       value={department}
       onChange={changeData}
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
              ml={45}
              sx={{
                ':hover': {
                  backgroundColor: '#99BDD9',
                  cursor: 'pointer',
                }
              }} onClick={editData}>
                Save Changes</Button>


        </div>
   
      </form>
      </Box>
    </div>
  )
}

export default EditEmployee