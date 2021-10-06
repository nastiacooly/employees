import { Component } from 'react';
import "./employee-details.css";

class EmployeeDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            raise: this.props.raise,
            liked: this.props.liked
        }
    }

    giveRaise = () => {
        this.setState( ({raise}) => ({
            raise: !raise
        }));
    }

    like = () => {
        this.setState( ({liked}) => ({
            liked: !liked
        }));
    }

    render() {
        const {name, salary} = this.props;
        const {raise, liked} = this.state;

        let classNames = "list-group-item d-flex justify-content-between";
        if (raise) {
            classNames += " increase";
        }
        if (liked) {
            classNames += " like";
        }
    
        return (
            <li className={classNames}>
                <span 
                    className="list-group-item-label"
                    onClick={this.like}>
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
                        onClick={this.giveRaise}>
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
    }
}

export default EmployeeDetails;