import React from 'react'
import Background from '../assets/weatherInfoBackground.png';

export default function ExtraInfoBox(props) {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundImage: `url(${Background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', padding: 20}}>
{props.children}
    </div>
  )
}
