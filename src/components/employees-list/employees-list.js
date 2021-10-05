import "./employees-list.css";
import EmployeeDetails from '../employee-details/employee-details';

const EmployeesList = ({data}) => {

    const employees = data.map(employee => {
        const {id, ...employeeProps} = employee;

        return <EmployeeDetails key={id} {...employeeProps} />;
        /* идентично такому коду: key={id} name={employee.name} salary={employee.salary} increase={employee.increase} */
    });
    
    return (
        <ul className="employees-list">
            {employees}
        </ul>
    );
};

export default EmployeesList;