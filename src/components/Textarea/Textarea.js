import React from "react";
import './Textarea.module.css'

class Textarea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {length: 0}

    }
    
    handleChange = (e) => {
        this.props.onAddTextArea (e.target.value.trim())
        this.setState({val: e.target.value})
        this.setState({length: e.target.value.length}) 
    }

    render () {
        const {
            maxLength,
            value
        } = this.props
        return (
            <div>
                <label>{this.props.label}
                    <br />
                    <textarea rows={this.props.rows} maxLength={maxLength} required ref={this.areaRef} onChange={this.handleChange} value={value} placeholder={`Введите ${this.props.label.toLowerCase()}`} />
                    <br />
                    <span> {value.length < 600 ? `${maxLength - value.length} / 600 символов` : 'Превышен лимит символов'}</span>
                </label>
            </div>
        )
    }
}

export default Textarea;
