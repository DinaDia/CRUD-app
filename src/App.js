import {BrowserRouter , Routes , Route} from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import Header from'./components/Header';
import EmployeeInfo from './components/EmployeeInfo';


function App() {
  return (
    <BrowserRouter >
    <div>
      <Header/>
      <Routes >
        <Route exact path="/" element={<EmployeeList/>}/>
        <Route exact path="/AddEmployee" element={<AddEmployee/>}/>
        <Route exact path="/EditEmployee/:id" element={<EditEmployee/>}/>
        <Route exact path="/EmployeeInfo/:id" element={<EmployeeInfo/>}/>


      
      </Routes >
    

    </div>
          </BrowserRouter >
  );
}

export default App;
