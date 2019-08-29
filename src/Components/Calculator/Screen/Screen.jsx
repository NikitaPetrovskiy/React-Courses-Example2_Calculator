import React from 'react';

export const Screen = (props) => {
    return (
        <div className={props.kind}>
            {props.currentValue}
        </div>
    )
}