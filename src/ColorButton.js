import React, { useState } from 'react';

const ColorButton = () => {

    const [state, setState] = useState("btn-primary")

    const clickHandler = () => {
        if(state === "btn-primary") {
            setState("btn-danger")
        } else {
            setState("btn-primary")
        }
    }

    return (
        <button onClick={clickHandler} 
        className={`btn ${state}`}></button>
    )
}

export default ColorButton;