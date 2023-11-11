import React, { useState } from "react";

const InputArea=(props)=>
{
    const [Inputtext,SetInputtext]=useState('')
    const handlechange=(event)=>{
        const newValue=event.target.value;
        SetInputtext(newValue);
    }
    return(
        <div className="form">
            <input type="text" onChange={handlechange} value={Inputtext}/>
            <button onClick={()=>{
                props.onAdd(Inputtext)
                SetInputtext('')
            }}><span>Add</span></button>
        </div>
    )
}

export {InputArea};