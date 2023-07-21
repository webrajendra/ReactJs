//we are creating generic component to use in whole application - DO NOT REPEAT YOURSELF

import React from "react";


function UserInput (props) {
    return (
        <div>
            <input type={props.type} placeholder={props.placeholder} className={props.inputClass} />
            {props.ErrorMsg && <span> {props.ErrorMsg} </span>}
        </div>
    )
}

export default UserInput;