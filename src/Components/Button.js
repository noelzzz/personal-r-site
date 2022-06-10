import React from "react";

function Button({props,className, buttonLabel}) {

    return <button className={className} >{buttonLabel}</button>
}

export default Button;