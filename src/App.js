import {BrowserRouter , Routes , Route} from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import Header from'./components/Header';


function App() {
  return (
    <BrowserRouter >
    <div>
      <Header/>
      <Routes >
        <Route exact path="/" element={<EmployeeList/>}/>
        <Route exact path="/components/AddEmployee" element={<AddEmployee/>}/>
      </Routes >
    

    </div>
          </BrowserRouter >
  );
}

export default App;
