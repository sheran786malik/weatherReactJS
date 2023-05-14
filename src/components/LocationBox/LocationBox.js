import React from 'react'

import "./LocationBox.css"

export default function LocationBox(props) {
  return (
    <div className="background">
    
    <h1 style={{textAlign:'center', color:'white', padding:20}}>{props.location} | {props.country}</h1>

    <div style={{  position:'absolute', left:0, right:0, margin:'auto',justifyContent:'center', width:'50%',  border: '5px solid #FFFFFF'}}/>


    <p style={{textAlign:'center', color:'white', padding:20}}>{props.comment}</p>
       
        
    </div>
  )
}
