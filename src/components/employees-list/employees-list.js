import "./employees-list.css";
import EmployeeDetails from '../employee-details/employee-details';

const EmployeesList = ({data}) => {

    const employees = data.map(employee => {
        return <EmployeeDetails {...employee} />;
        /* идентично такому коду: name={employee.name} salary={employee.salary} */
    });
    
    return (
        <ul className="employees-list">
            {employees}
        </ul>
    );
};

export default EmployeesList;