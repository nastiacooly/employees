import { Component } from 'react';

class EmployeesFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            raise: false,
            salary: false
        };
    }

    onToggleFilter = (prop) => {
        this.setState((state) => ({
            [prop]:  !state[prop]
        }));
        const {onToggleFilter} = this.props;
        onToggleFilter(prop);
    }

    onClearFilters = () => {
        // Clear filters in root app component
        const {onClearFilters} = this.props;
        onClearFilters();
        // Clear filters locally
        this.setState({
            raise: false,
            salary: false
        });
    }

    toggleBtnClasses = (buttonFilter) => {
        const clickedBtnClasses = "btn btn-light";
        const unclickedBtnClasses = "btn btn-outline-light";
        const {raise, salary} = this.state;
        
        switch (buttonFilter) {
            case "no-filter": 
                if (!raise && !salary) {
                    return clickedBtnClasses;
                } else {
                    return unclickedBtnClasses;
                }
            case "raise":
                if (raise) {
                    return clickedBtnClasses;
                } else {
                    return unclickedBtnClasses
                }
            case "salary":
                if (salary) {
                    return clickedBtnClasses;
                } else {
                    return unclickedBtnClasses;
                }
            default: return;
        }
    }

    render() {

        return (
            <div className="btn-group mt-3">
                <button 
                    className={this.toggleBtnClasses("no-filter")}
                    type="button"
                    onClick={this.onClearFilters}>
                        All Employees
                </button>
    
                <button 
                    className={this.toggleBtnClasses("raise")}
                    type="button"
                    data-filter="raise"
                    onClick={(e) => this.onToggleFilter(e.currentTarget.dataset.filter)}>
                        Employees to Raise
                </button>
    
                <button 
                    className={this.toggleBtnClasses("salary")}
                    type="button"
                    data-filter="salary"
                    onClick={(e) => this.onToggleFilter(e.currentTarget.dataset.filter)}>
                        Employees with $1000 (and more) month salary
                </button>
            </div>
        );
    }
};

export default EmployeesFilter;