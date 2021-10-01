const EmployeesFilter = () => {
    return (
        <div className="btn-group mt-3">
            <button 
                className="btn btn-light"
                type="button">
                    All Employees
            </button>

            <button 
                className="btn btn-outline-light"
                type="button">
                    Employees to Raise
            </button>

            <button 
                className="btn btn-outline-light"
                type="button">
                    Employees with $1000 (and more) month salary
            </button>
        </div>
    );
};

export default EmployeesFilter;