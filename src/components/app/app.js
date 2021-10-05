import './app.css';
import GeneralInfo from '../general-info/general-info';
import EmployeesSearch from '../employees-search/employees-search';
import EmployeesFilter from '../employees-filter/employees-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeeAddForm from '../employee-add-form/employee-add-form';

function App() {

  /* Simulation of data from server */
  const data = [
    {name: 'John Smith', salary: 1500, increase: false, id: 1},
    {name: 'John Doe', salary: 800, increase: false, id: 2},
    {name: 'Ivan Ivanov', salary: 500, increase: true, id: 3}
  ];

  return (
    <div className="app">
      <GeneralInfo />

      <div className="wrapper-block">
        <EmployeesSearch />
        <EmployeesFilter />
      </div>

      <div className="wrapper-block">
        <EmployeesList data={data} />

      </div>

      <div className="wrapper-block">
        <EmployeeAddForm />

      </div>

    </div>
  );
}

export default App;