import { Component } from 'react';
import './employee-add-form.css';

class EmployeeAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
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
        onAdd(name, salary);
        /* To clear form after submit */
        this.setState({
            name: '',
            salary: ''
        });
    }

    render() {
        const {name, salary} = this.state;
        
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
            </div>
        )
    }
}

export default EmployeeAddForm;