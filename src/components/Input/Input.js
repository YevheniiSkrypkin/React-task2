import React from "react";
import './Input.module.css'


class Input extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.state = {value: ''}
        this.myRef = React.createRef()
    }

    handleChange = (e) => {
        this.props.onAddText (e.target.value.trim())
        this.setState({value: e.target.value.trim()})

    }

    onClick = (e) => {

    }

    render () {
        const inputV = this.props.inputValue
        return (
            <div>
                <label>
                    {this.props.name}
                    <br></br>
                    <input
                        onChange={this.handleChange}
                        value={inputV}
                        type={this.props.type} 
                        placeholder={'Введите '+this.props.name.toLowerCase()}
                        required
                        ref={this.myRef}
                        pattern={this.props.pattern}
                        title={this.props.title}
                        maxLength={this.props.maxLength}
                        >
                    </input>
                    <br />
                </label>
            </div>
        )
    }
}

export default Input;