import React from 'react';

/********************************************
 OUTPUT: component for numeric outputs
         e.g. to show buttons pressed,
         to show final output of calculations
 ********************************************/

const CalculatorDisplay = (props) => {
    return (
        <div className= "display">
            <input  type = "text" readOnly
                    value = {props.value} 
                    style = {props.style}
            />
        </div>
    )
}

export default CalculatorDisplay;