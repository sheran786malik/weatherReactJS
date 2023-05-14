import React from 'react'

export default function WeatherInfoBox(props) {
  return (
    <div style={{
        display:'flex', 
        backgroundColor:props.color=='black'?'':'white',
        flexDirection:'row', 
        justifyContent:'space-between',
        width:600, }}> 
    <h1 style={{color:props.color=='black'?'white':'black', fontSize:15, padding:10}}>{props.measurement} </h1>
    <h1 style={{color:props.color=='black'?'white':'black', fontSize:15, padding:10}}>{props.value}</h1>
    </div>
  )
}
