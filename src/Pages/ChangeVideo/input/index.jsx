import React, {forwardRef}  from "react";


import "./input.scss";


export const FormInput=forwardRef((props, ref) => {
  return(
    <input className="text-input" 
    inputRef={ref}
  {...props}/>
  ) 
}

)