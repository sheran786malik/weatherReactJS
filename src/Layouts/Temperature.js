import React from 'react'

export default function Temperature(props) {
  return (
    <div style={{display: 'flex', flexDirection: 'column', maxWidth: 800, width: '100%'}}>
        {props.children}
    </div>
  )
}
