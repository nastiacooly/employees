import './employee-add-form.css';

const EmployeeAddForm = () => {
    return (
        <div className="employee-add-form">
            <h3>Adding New Employee</h3>
            <form className="add-form d-flex">
                    <input 
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Name" 
                    />
                    <input 
                        type="number"
                        className="form-control new-post-label"
                        placeholder="Month salary in $US" 
                    />
                    <button 
                        type="submit"
                        className="btn btn-outline-light">
                            Add
                    </button>
            </form>
        </div>
    )
}

export default EmployeeAddForm;