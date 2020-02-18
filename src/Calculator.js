import React from 'react';
import ReactDOM from 'react-dom';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorButton from './CalculatorButton';

/************************************************
 CALCULATOR: Parent component, renders everything
 ************************************************/

class Calculator extends React.Component {

    constructor() {
        super();
        this.state = {
            input: '',
            output: ''
        }
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(event) {
        const value = event.target.value;       // gets value of button clicked

        switch (value) {
            case 'BACK': {
                this.setState({ input: '' });
                break;
            }
            case 'CLEAR ALL': {
                this.setState({ input: '' , output: '' });
                break;
            }
            case 'Ans': {
                this.setState({ input: this.state.input += this.state.output });
                break;
            }
            case '√': {
                this.setState({ input: this.state.input += 'Math.sqrt(' });
                break;
            }
            case 'x^y': {
                this.setState({ input: this.state.input += 'Math.pow(' });
                break;
            }
            case 'sin': {
                this.setState({ input: this.state.input += 'Math.sin(' });
                break;
            }
            case 'cos': {
                this.setState({ input: this.state.input += 'Math.cos(' });
                break;
            }
            case 'tan': {
                this.setState({ input: this.state.input += 'Math.tan(' });
                break;
            }
            case '=': {
                if (this.state.input !== '') {
                    var answer= '';
                    try { answer = eval(this.state.input); }
                    catch(err) { this.setState({ input: '', output: "ERROR" }); }

                    console.log(answer);

                    if (answer == 'Infinity' || answer == undefined) {
                        this.setState({ input: '', output: "UNDEFINED" });
                    }
                    else if (answer == '') {
                        this.setState({ input: '', output: "INVALID INPUT" });
                    }
                    else {
                        this.setState({ input: '', output: answer });
                    }
                    
                }
                break;
            }
            default: {
                this.setState({ input: this.state.input += value});
                break;
            }
        }
    }


    render() {
        return (
            <div className= "app-wrapper">
                <div className= "title">
                    <h1>Calculator</h1>
                </div>

                <div className = "calculator-wrapper">

                    <div className= "calculator-display">
                        <div className= "output">
                            <CalculatorDisplay  value = {this.state.output} />
                        </div>

                        <div className= "input">
                            <CalculatorDisplay  value = {this.state.input} />
                        </div>
                    </div>

                    <div className= "buttons">
                        <CalculatorButton   label= {'BACK'} 
                                            handleClick = {this.handleClick}
                                            style = {{ width: 180 }} />
                        <CalculatorButton   label= {'CLEAR ALL'} 
                                            handleClick = {this.handleClick} 
                                            style = {{ width: 270 }} />
                        <CalculatorButton   label= {'√'} 
                                            handleClick = {this.handleClick} />
                    </div>

                    <div className= "buttons">
                        <CalculatorButton   label= {'Ans'} 
                                            handleClick = {this.handleClick} />
                        <CalculatorButton   label= {'7'} 
                                            handleClick = {this.handleClick} 
                                            style = {{ backgroundColor: "white" }} />
                        <CalculatorButton   label= {'8'} 
                                            handleClick = {this.handleClick} 
                                            style = {{ backgroundColor: "white" }} />
                        <CalculatorButton   label= {'9'} 
                                            handleClick = {this.handleClick} 
                                            style = {{ backgroundColor: "white" }} />
                        <CalculatorButton   label= {'/'} 
                                            handleClick = {this.handleClick} />
                        <CalculatorButton   label= {'x^y'} 
                                            handleClick = {this.handleClick} />
                    </div>

                    <div className= "buttons">
                        <CalculatorButton   label= {'('} 
                                            handleClick = {this.handleClick} />
                        <CalculatorButton   label= {'4'} 
                                            handleClick = {this.handleClick} 
                                            style = {{ backgroundColor: "white" }} />
                        <CalculatorButton   label= {'5'} 
                                            handleClick = {this.handleClick} 
                                            style = {{ backgroundColor: "white" }} />
                        <CalculatorButton   label= {'6'} 
                                            handleClick = {this.handleClick} 
                                            style = {{ backgroundColor: "white" }} />
                        <CalculatorButton   label= {'*'} 
                                            handleClick = {this.handleClick} />
                        <CalculatorButton   label= {'sin'} 
                                            handleClick = {this.handleClick} />
                    </div>

                    <div className= "buttons">
                        <CalculatorButton   label= {')'} 
                                            handleClick = {this.handleClick} />
                        <CalculatorButton   label= {'1'} 
                                            handleClick = {this.handleClick} 
                                            style = {{ backgroundColor: "white" }} />
                        <CalculatorButton   label= {'2'} 
                                            handleClick = {this.handleClick} 
                                            style = {{ backgroundColor: "white" }} />
                        <CalculatorButton   label= {'3'} 
                                            handleClick = {this.handleClick} 
                                            style = {{ backgroundColor: "white" }} />
                        <CalculatorButton   label= {'-'} 
                                            handleClick = {this.handleClick} />
                        <CalculatorButton   label= {'cos'} 
                                            handleClick = {this.handleClick} />
                    </div>

                    <div className= "buttons">
                        <CalculatorButton   label= {','} 
                                            handleClick = {this.handleClick} />
                        <CalculatorButton   label= {'0'} 
                                            handleClick = {this.handleClick} 
                                            style = {{ backgroundColor: "white" }} />
                        <CalculatorButton   label= {'.'} 
                                            handleClick = {this.handleClick} />
                        <CalculatorButton   label= {'='} 
                                            handleClick = {this.handleClick} 
                                            style = {{ backgroundColor: "lightgreen" }} />
                        <CalculatorButton   label= {'+'} 
                                            handleClick = {this.handleClick} />
                        <CalculatorButton   label= {'tan'} 
                                            handleClick = {this.handleClick} />
                    </div>

                    <p> 
                        * This calculator does not have parentheses autocomplete. <br></br>
                        * For the exponent function (x^y), use the input format (x,y).
                    </p>
                </div> 
            </div>
        );
    }

}


export default Calculator;
