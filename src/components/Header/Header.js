import React from 'react'

export default function Header(props) {
  return (
        <h1 style={{color:'white', fontWeight:'800',textAlign:'center', padding:30}}>{props.text}</h1>
  )
}
