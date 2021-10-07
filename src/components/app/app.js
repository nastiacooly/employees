import { Component } from 'react';

import GeneralInfo from '../general-info/general-info';
import EmployeesSearch from '../employees-search/employees-search';
import EmployeesFilter from '../employees-filter/employees-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeeAddForm from '../employee-add-form/employee-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /* Simulation of data from server */
      data: [
        {name: 'John Smith', salary: 1500, bonus: false, raise: true, id: 1},
        {name: 'John Doe', salary: 800, bonus: false, raise: false, id: 2},
        {name: 'Ivan Ivanov', salary: 500, bonus: true, raise: false, id: 3}
      ]
    }
    this._nextId = this.state.data.length + 1;
  }

  get accessorNextId() {
    return this._nextId++
  }

  deleteItem = (id) => {
    this.setState( ({data}) => {
      const index = data.findIndex(elem => elem.id === +id);
      /* Creating a copy of {data} because this.state is immutable (we should not change it directly) */
      const newData = Object.assign([], data);
      newData.splice(index, 1);
      return {
        data: newData
        /* 
          Other option (filter method returns new array, not changing {data} directly):
          data: data.filter(elem => elem.id !== +id)
        */
      }
    });
  }

  addItem = (name, salary) => {
    const newItem = {
      name: name,
      salary: salary,
      bonus: false,
      raise: false,
      id: this.accessorNextId
    }

    this.setState( ({data}) => {
      const newData = [...data, newItem];
      return {
        data: newData
      }
    })
  }

  onToggleProp = (id, prop) => {
    /* Toggles certain property of employee object with certain 'id' in this.state.data */
    this.setState( ({data}) => {
      // Error checking
      const keys = Object.keys(data[0]);
      if (!keys.includes(prop)) {
        throw new Error('A boolean property of an employee object should be included as an argument of this function');
      }

      const newData = data.map(employee => {
        if (employee.id === +id) {
          return {...employee, [prop]: !employee[prop]};
        }

        return employee;
      });
      return {
        data: newData
      }
    });

    /* Other option

    this.setState( ({data}) => {
      const index = data.findIndex(elem => elem.id === +id);

      const updatedEmployee = {...data[index]};
      updatedEmployee.raise = !updatedEmployee.raise;

      const newData = [...data.slice(0, index), updatedEmployee, ...data.slice(index + 1)];

      return {
        data: newData
      }
    }); */
  }

  render() {
    const {data} = this.state;
    const totalEmployees = data.length;
    const totalEmployeesToBeRewarded = data.filter(employee => employee.bonus === true).length;

    return (
      <div className="app">
        <GeneralInfo
          totalEmployees={totalEmployees}
          totalEmployeesToBeRewarded={totalEmployeesToBeRewarded}
        />
  
        <div className="wrapper-block">
          <EmployeesSearch />
          <EmployeesFilter />
        </div>
  
        <EmployeesList 
          data={data}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
  
        <div className="wrapper-block">
          <EmployeeAddForm onAdd={this.addItem} />
        </div>
  
      </div>
    );
  }
}

export default App;