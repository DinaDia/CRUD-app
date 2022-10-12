
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import Header from'./components/Header';
import EmployeeInfo from './components/EmployeeInfo';
import{ useState, useEffect} from 'react';
import { ClipLoader } from 'react-spinners';

function App() {

  const [loading, setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },500)
  }, [])


  
  return (
    <div >
      {
        
      loading ? <div style={{textAlign:'center'}}>
        <ClipLoader  color='#90A1C8' loading={loading} size={50} />
      </div>
        
      :
      <BrowserRouter >
      <Header/>
      <Routes >
        <Route exact path="/" element={<EmployeeList/>}/>
        <Route exact path="/AddEmployee" element={<AddEmployee/>}/>
        <Route exact path="/EditEmployee/:id" element={<EditEmployee/>}/>
        <Route exact path="/EmployeeInfo/:id" element={<EmployeeInfo/>}/>

      </Routes >
      </BrowserRouter >
      }
    </div>
      );
}

export default App;
