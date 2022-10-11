import {useNavigate, useParams} from 'react-router-dom';
import {Text, Box, Button} from 'rebass';
import {useSelector} from 'react-redux';



const EmployeeInfo = () => {
    const {Employees}=useSelector(state=>state.data);
    const {id}=useParams();
    const navigate=useNavigate();
    const currentEmployee=Employees.find((employee)=>employee.id===Number(id));
   
  return (
    <div>
        <Text textAlign='center' fontSize={5} fontFamily='arial' color='#ADD8E6' mt={3}> Employee information</Text>
        <Box 
        mt={50} mx='auto'
        backgroundColor='#99BDD9'
        p={[20, 0, 10, 20]}
        textAlign='center'
        css={{
        maxWidth:'300px'
      }}>
        

        <Text fontWeight='bold'>Id:</Text>
        <Text>{currentEmployee.id}</Text>
        <Text fontWeight='bold'>First name:</Text>
        <Text>{currentEmployee.firstName}</Text>
        <Text fontWeight='bold'>Last name:</Text>
        <Text>{currentEmployee.lastName}</Text>
        <Text fontWeight='bold'>Phone number:</Text>
        <Text>{currentEmployee.phone}</Text>
        <Text fontWeight='bold'>Email address:</Text>
        <Text>{currentEmployee.email}</Text>
        <Text fontWeight='bold'>Department:</Text>
        <Text>{currentEmployee.department}</Text>
      <br/><br/>
        <Button 
            backgroundColor = '#c70000'
            color='white' border='none'
            textAlign='center'
            p={[7, 12, 7, 12]} 
            sx= {{
              ':hover': {
              opacity : 0.4,
              cursor :'pointer'
            }
          }}
            onClick={()=>navigate('/')}
            >Go Back</Button>
        
        </Box>
        
    </div>
  )
}

export default EmployeeInfo