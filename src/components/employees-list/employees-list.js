import "./employees-list.css";
import EmployeeDetails from '../employee-details/employee-details';

const EmployeesList = () => {
    return (
        <ul className="employees-list">
            <EmployeeDetails />
            <EmployeeDetails />
            <EmployeeDetails />
        </ul>
    );
};

export default EmployeesList;