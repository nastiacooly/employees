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
        {name: 'John Smith', salary: 1500, raise: false, liked: false, id: 1},
        {name: 'John Doe', salary: 800, raise: false, liked: false, id: 2},
        {name: 'Ivan Ivanov', salary: 500, raise: true, liked: false, id: 3}
      ]
    }
    this.maxId = 4;
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
      raise: false,
      liked: false,
      id: this.maxId++
    }

    this.setState( ({data}) => {
      const newData = [...data, newItem];
      return {
        data: newData
      }
    })
  }

  render() {
    const {data} = this.state;

    return (
      <div className="app">
        <GeneralInfo />
  
        <div className="wrapper-block">
          <EmployeesSearch />
          <EmployeesFilter />
        </div>
  
        <EmployeesList 
          data={data}
          onDelete={this.deleteItem}
        />
  
        <div className="wrapper-block">
          <EmployeeAddForm onAdd={this.addItem} />
        </div>
  
      </div>
    );
  }
}

export default App;