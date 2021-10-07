import "./employee-details.css";

const EmployeeDetails = (props) => {

    const {name, salary, bonus, raise, onDelete, onToggleProp} = props;

    let classNames = "list-group-item d-flex justify-content-between";
    if (bonus) {
        classNames += " bonus";
    }
    if (raise) {
        classNames += " raise";
    }

    return (
        <li className={classNames}>
            <span 
                className="list-group-item-label"
                data-toggle="raise"
                onClick={onToggleProp}>
                    {name}
            </span>
            <input 
                type="text" 
                className="list-group-item-input" 
                defaultValue={salary + "$"}
            />
            <div className="d-flex justify-content-center align-items-center">
                <button
                    type="button"
                    className="btn-cookie btn-sm"
                    data-toggle="bonus"
                    onClick={onToggleProp}>
                        <i className="fa-solid fa-cookie"></i>
                </button>
                <button
                    type="button"
                    className="btn-trash btn-sm"
                    onClick={onDelete}>
                        <i className="fa-solid fa-trash"></i>
                </button>
                <i className="fa-solid fa-star"></i>
            </div>
        </li>
    );
}

export default EmployeeDetails;