import React from "react";
import styles from './Form.module.css'
import Input from '../Input/Input.js'
import Textarea from "../Textarea/Textarea.js";
import Button from '../Button/Button.js'
import User from '../User/User.js'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputName: '',
            inputLastName: '',
            inputDOB: '',
            inputNum: '',
            inputWeb: '',
            textAbout: '',
            textStack: '',
            textProject: '',
            submit: false
        }
        this.baseState = this.state;
        this.childRef = React.createRef();
        this.returnToForm = this.returnToForm.bind(this);
    }
    

    handleName = (name) => {
        this.setState({inputName: name})
    }

    handleLastName = (lastName) => {
        this.setState({inputLastName: lastName})
    }

    handleDOB = (dob) => {
        this.setState({inputDOB: dob})
    }

    handleNum = (num) => {
        this.setState({inputNum: num})
    }

    handleWeb = (web) => {
        this.setState({inputWeb: web})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({submit: true})
    }

    handleAbout = (about) => {
        this.setState({textAbout: about})
    }

    handleStack = (stack) => {
        this.setState({textStack: stack})
    }

    handleProject = (project) => {
        this.setState({textProject: project})
    }

    resetState = () => {
        this.setState(this.baseState)
    }

    returnToForm = (e) => {
        e.preventDefault()
        this.setState({submit: false})
    }

    render() {
        const inputName = this.state.inputName;
        const inputLastName = this.state.inputLastName;
        const inputDOB = this.state.inputDOB;
        const inputNum = this.state.inputNum;
        const inputWeb = this.state.inputWeb;

        if(!this.state.submit) {
            return (
                <div className={styles.container}>
                    <div>
                        <h1>???????????????? ????????????</h1>
                        <div>
                            <form onSubmit={this.handleSubmit}>
                                <div className={styles.inputsWrapper}>
                                    <div className={styles.mainInfo}>
                                        <Input 
                                            name='??????' 
                                            type='text' 
                                            value={inputName} 
                                            onAddText={this.handleName} 
                                            pattern={'^[A-Z??-??].*'} 
                                            title='?????? ???????????? ???????????????????? ?? ?????????????? ??????????'
                                        />
                                        <Input 
                                            name='??????????????' 
                                            type='text' 
                                            value={inputLastName} 
                                            onAddText={this.handleLastName} 
                                            pattern={'^[A-Z??-??].*'} 
                                            title='?????????????? ???????????? ???????????????????? ?? ?????????????? ??????????'
                                        />
                                        <Input 
                                            name='???????? ????????????????' 
                                            type='date' 
                                            value={inputDOB} 
                                            onAddText={this.handleDOB} 
                                        />
                                        <Input 
                                            name='??????????????' 
                                            type='tel' 
                                            maxLength = {12} 
                                            value={inputNum} 
                                            onAddText={this.handleNum} 
                                            onChange={this.onPhoneChange} 
                                            pattern='\d{1}-\d{4}-\d{2}-\d{2}' 
                                            title='Number in the format: 7-7777-77-77'
                                        />
                                        <Input 
                                            name='????????' 
                                            type='url' 
                                            value={inputWeb} 
                                            onAddText={this.handleWeb} 
                                            pattern='https?://.+' 
                                            title='Include http://'
                                        />
                                    </div>

                                    <div>
                                        <Textarea 
                                            label='?? ????????' 
                                            rows='7' 
                                            onAddTextArea={this.handleAbout} 
                                            maxLength={600} 
                                            value={this.state.textAbout}
                                        />
                                        <Textarea 
                                            label='???????? ????????????????????' 
                                            rows='7'
                                            onAddTextArea={this.handleStack} 
                                            maxLength={600} 
                                            value={this.state.textStack}
                                        />
                                        <Textarea 
                                            label='???????????????? ???????????????????? ??????????????' 
                                            rows='7' 
                                            onAddTextArea={this.handleProject} 
                                            maxLength={600} 
                                            value={this.state.textProject}
                                        />
                                    </div>
                                </div>

                                <div className={styles.buttonsWrapper}>
                                    <Button type='submit' text='??????????????????'/>
                                    <Button type='reset' text='????????????????' onReset={this.resetState} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <>
                    <User user={this.state} />
                    <button onClick={this.returnToForm} type='submit'>??????????????????</button>
                </>
                
            )
        }
    }
}

export default Form;