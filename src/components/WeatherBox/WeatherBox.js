import React from 'react'
import Cloud from '../../assets/cloud.png'

export default function WeatherBox(props) {
  return (
    <div>
        
        <p style={{color:'white'}}> {props.day} </p>
        <img src={Cloud} style={{alignSelf:'center'}}/>
        <p style={{color:'white', textAlign:'center'}}>{props.temperature}</p>
    </div>
  )
}
