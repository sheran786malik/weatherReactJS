import React from 'react'

export default function Temperature(props) {
  return (
    <h1 style={{color: 'white', fontSize: 50, textAlign: 'center', alignSelf:'center'}}>{props.temperature}</h1>
  )
}
