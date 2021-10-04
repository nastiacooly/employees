import "./employee-details.css";

const EmployeeDetails = ({name, salary, increase}) => {

    const defaultClassNames = "list-group-item d-flex justify-content-between";
    const increaseClassNames = increase ? defaultClassNames + " increase" : null;
    let classNames = increaseClassNames || defaultClassNames;
    
    return (
        <li className={classNames}>
            <span className="list-group-item-label">{name}</span>
            <input 
                type="text" 
                className="list-group-item-input" 
                defaultValue={salary + "$"}
            />
            <div className="d-flex justify-content-center align-items-center">
                <button
                    type="button"
                    className="btn-cookie btn-sm">
                        <i className="fa-solid fa-cookie"></i>
                </button>
                <button
                    type="button"
                    className="btn-trash btn-sm">
                        <i className="fa-solid fa-trash"></i>
                </button>
                <i className="fa-solid fa-star"></i>
            </div>
        </li>
    );
};

export default EmployeeDetails;