import EmployeeDetails from '../employee-details/employee-details';

import "./employees-list.css";

const EmployeesList = ({data, onDelete, onToggleProp, onChangeSalary}) => {

    const employees = data.map(employee => {
        const {id, ...employeeProps} = employee;

        return (
            <EmployeeDetails 
                key={id}
                id={id} 
                {...employeeProps} 
                /* идентично такому коду: key={id} name={employee.name} salary={employee.salary} и т.д. */
                onDelete={ () => onDelete(id) }
                onToggleProp={ (e) => onToggleProp(id, e.currentTarget.dataset.toggle)}
                onChangeSalary={onChangeSalary}
            />
        );
    });
    
    return (
        <ul className="employees-list">
            {employees}
        </ul>
    );
};

export default EmployeesList;