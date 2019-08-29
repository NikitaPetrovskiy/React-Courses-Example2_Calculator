import React from 'react';
import Styles from './Calculator.module.css';
import {Screen} from "./Screen";
import {Button} from "./Button";

export class Calculator extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            buttons: [
                {id: 'clear', name: 'AC'},
                {id: 'delete', name: 'DEL'},
                {id: 'divide', name: '/'},
                {id: 'seven', name: '7'},
                {id: 'eight', name: '8'},
                {id: 'nine', name: '9'},
                {id: 'multiply', name: '*'},
                {id: 'four', name: '4'},
                {id: 'five', name: '5'},
                {id: 'six', name: '6'},
                {id: 'subtract', name: '-'},
                {id: 'one', name: '1'},
                {id: 'two', name: '2'},
                {id: 'three', name: '3'},
                {id: 'add', name: '+'},
                {id: 'decimal', name: '.'},
                {id: 'zero', name: '0'},
                {id: 'equals', name: '='}
            ],
            currentValue: "0",
            operator: false,
            decimal: false
        }
    }
    handleClick = (btnValue) => {
        let currentValue =  this.state.currentValue
        let operator  =  this.state.operator
        let decimal = this.state.decimal

        switch(true) {
            case
            btnValue === "0" ||
            btnValue === "1" ||
            btnValue === "2" ||
            btnValue === "3" ||
            btnValue === "4" ||
            btnValue === "5" ||
            btnValue === "6" ||
            btnValue === "7" ||
            btnValue === "8" ||
            btnValue === "9" :
                if (this.state.currentValue !== "0") {
                    currentValue += btnValue;
                    operator = false
                } else {
                    currentValue = btnValue
                }
                break;

            case
            btnValue === "/" ||
            btnValue === "*" ||
            btnValue === "-" ||
            btnValue === "+" :
                if (!this.state.operator) {
                    currentValue += btnValue;
                    operator = true
                    decimal = false
                } else {
                    const newValue =  currentValue.slice(0, currentValue.length - 1)
                    currentValue = newValue + btnValue
                }
                break;

            case
            btnValue === "AC":
                currentValue = "0"
                operator = false
                decimal = false
                break;

            case btnValue === "DEL":
                if (this.state.currentValue === "0") {
                    operator = false
                    decimal = false
                    return
                }
                currentValue = currentValue.slice(0, currentValue.length - 1)
                operator = false
                if(this.state.currentValue === "") {
                    currentValue = "0"
                    operator = false
                    decimal = false
                }
                break;

            case btnValue === "=":
                currentValue = Number(eval(currentValue))
                currentValue = currentValue.toString()
                break;

            case btnValue === ".":
                if(!this.state.decimal) {
                    currentValue += btnValue
                    decimal = true
                }

        }
        this.setState({decimal})
        this.setState({operator})
        this.setState({currentValue})
    }

    render() {
        return (
            <div className={Styles.calculator}>
                <Screen kind={Styles.display} currentValue={this.state.currentValue} />
                {this.state.buttons.map(b => {
                    return <Button id={b.id} key={b.id}
                                   name={b.name} handleClick={this.handleClick} />
                })}
            </div>
        )
    }
}