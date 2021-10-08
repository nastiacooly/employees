import { Component } from 'react';

class EmployeesSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: ''
        }
    }

    trackSearch = (e) => {
        const searchValue = e.target.value.toLowerCase();
        this.setState({searchValue});

        const {onUpdateSearch} = this.props;
        onUpdateSearch(searchValue);
    }

    render() {
        const {searchValue} = this.state;

        return <input 
                type="text" 
                placeholder="Type a name of an employee to search" 
                className="form-control search-input"
                value={searchValue}
                onChange={this.trackSearch}
                />;
    }
}

export default EmployeesSearch;