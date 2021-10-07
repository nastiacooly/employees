import { Component } from 'react';
import './employee-add-form.css';

class EmployeeAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            errorMessage: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {onAdd} = this.props;
        const {name, salary} = this.state;

        /* Form validation */
        if (name.length < 3) {
            this.setState({
                errorMessage: 'Name should be at least 3 characters long'
            });
            return;
        } 
        if (name.match(/\d/)) {
            this.setState({
                errorMessage: 'Name cannot contain numbers'
            });
            return;
        } 
        if (salary < 0) {
            this.setState({
                errorMessage: 'Salary should be a positive number'
            });
            return;
        } 

        /* Form submission with valid information */
        onAdd(name, salary);
        /* Clearing form and state after submit */
        this.setState({
            name: '',
            salary: '',
            errorMessage: ''
        });
    }

    render() {
        const {name, salary, errorMessage} = this.state;
        
        return (
            <div className="employee-add-form">
                <h3>Adding New Employee</h3>
                <form 
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                        <input 
                            type="text"
                            name="name"
                            value={name}
                            className="form-control new-post-label"
                            placeholder="Name"
                            onChange={this.onValueChange}
                        />
                        <input 
                            type="number"
                            name="salary"
                            value={salary}
                            className="form-control new-post-label"
                            placeholder="Month salary in $US"
                            onChange={this.onValueChange} 
                        />
                        <button 
                            type="submit"
                            className="btn btn-outline-light">
                                Add
                        </button>
                </form>
                <div
                    className="message">
                        {errorMessage}
                </div>
            </div>
        )
    }
}

export default EmployeeAddForm;