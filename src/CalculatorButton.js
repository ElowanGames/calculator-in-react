import React from 'react';

/***************************************************
 BUTTON: component for interactive calculator button
 ***************************************************/

const CalculatorButton = (props) => {
    return (
        <input  type = "button"
                value = {props.label}
                onClick = {props.handleClick}
                style = {props.style}
        />
    )
}

export default CalculatorButton;