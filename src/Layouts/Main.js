import React from 'react'

export default function Main(props) {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        {props.children}
    </div>
  )
}

