import React from 'react';

export const Button = (props) => {
    const handleClick = () => {props.handleClick(props.name)}
    return (
        <button  id={props.id} onClick={handleClick}>
            {props.name}
        </button>
    )
}