import EmployeeDetails from '../employee-details/employee-details';

import "./employees-list.css";

const EmployeesList = ({data, onDelete}) => {

    const employees = data.map(employee => {
        const {id, ...employeeProps} = employee;

        return (
            <EmployeeDetails 
                key={id} 
                {...employeeProps} 
                onDelete={ () => onDelete(id) }
                />);
        /* идентично такому коду: key={id} name={employee.name} salary={employee.salary} и т.д. */
    });
    
    return (
        <ul className="employees-list">
            {employees}
        </ul>
    );
};

export default EmployeesList;