import {Button, Flex, Text} from 'rebass';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <Flex height={70} backgroundColor='#90A1C8'>
      <Text float='right' display='inline-block' flex='1 1 auto' pt={2} fontFamily='arial' color='white' fontSize={6} >Employee Information</Text>
     
      <Button display='inline-block' 
      mt={10} height={50} backgroundColor='#9084AE'  
      sx={{':hover': {
      backgroundColor: '#99BDD9',
      cursor: 'pointer',
    }
    
  }}>
    <Link to='/AddEmployee'></Link>
    Add new Employee</Button>

    </Flex>
  )
}

export default Header