import React from 'react'

export default function ExtraInfoSubtitle(props) {
  return (
    <h1 style={{color: 'white', fontSize: 15, textAlign: 'center'}}>Clouds:{props.data?.clouds.all}</h1>
  )
}
