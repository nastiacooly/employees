import "./general-info.css";

const GeneralInfo = (props) => {
    const {totalEmployees, totalEmployeesToBeRewarded} = props;

    return (
        <div className="general-info">
            <h1>Employees Accounting & Management</h1>
            <h3>Company "X"</h3>
            <div>Total employees: {totalEmployees}</div>
            <div>Employees to be rewarded at the end of Q4: {totalEmployeesToBeRewarded}</div>
        </div>
    );
};

export default GeneralInfo;