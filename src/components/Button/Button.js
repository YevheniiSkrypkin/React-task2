import React from "react";
import './Button.module.css'

class Button extends React.Component {

    onReset = () => {
        this.setState(this.baseState)
    }

    render() {
        return(
            <button 
                type={this.props.type}
                onClick={this.props.onReset}>
                {this.props.text}
            </button>
        )
    }
}

export default Button;