import './app.css';
import GeneralInfo from '../general-info/general-info';
import EmployeesSearch from '../employees-search/employees-search';
import EmployeesFilter from '../employees-filter/employees-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeeAddForm from '../employee-add-form/employee-add-form';

function App() {
  return (
    <div className="app">
      <GeneralInfo />

      <div className="wrapper-block">
        <EmployeesSearch />
        <EmployeesFilter />
      </div>

      <div className="wrapper-block">
        <EmployeesList />

      </div>

      <div className="wrapper-block">
        <EmployeeAddForm />

      </div>


    </div>
  );
}

export default App;