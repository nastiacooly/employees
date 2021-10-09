import { Component } from 'react';

import "./employee-details.css";

class EmployeeDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            salary: this.props.salary,
            errorMsg: ''
        }
    }

    onChangeSalary = (e) => {
        // Input validation
        let input = e.target.value;
        if (input.includes('$')) {
            input = input.slice(0, input.indexOf('$'));
        }
        if (isNaN(+input) || +input <= 0) {
            this.setState({
                errorMsg: 'Salary should be a positive number',
                salary: input
            });
            return;
        }
        
        // Saving in local state
        this.setState({
            salary: +input,
            errorMsg: ''
        });

        // Save in 'data' in root app component
        const {id, onChangeSalary} = this.props;
        onChangeSalary(id, input);
    }

    render() {
        const {name, bonus, raise, onDelete, onToggleProp} = this.props;
        const {salary, errorMsg} = this.state;

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
                <div
                    className="d-flex flex-column align-items-center">
                    <input 
                        type="text" 
                        className="list-group-item-input"
                        value={salary + '$'}
                        onChange={this.onChangeSalary}
                    />
                    <span
                        className="list-group-item-input-error mt-1">
                            {errorMsg}
                    </span>
                </div>
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
}

export default EmployeeDetails;