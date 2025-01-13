import React, { useState } from 'react'

export default function ColorPicker(props) {
    let [value,setValue]= useState(props.color)

    let style = {
        backgroundColor:value,
        height:'100px',
        marginTop:'10px'};
    
    function eventHandler(e){
        setValue(e.target.value)
    }
  return (
    <div>
        <h3>ColorPicker</h3>
        <span>right hexadecimal or name of color </span>
        <input type='text' value={value} onChange={eventHandler}/>
        <div style={style}></div>
    </div>
  )
}
