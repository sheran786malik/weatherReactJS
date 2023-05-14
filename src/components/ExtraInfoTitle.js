import React from 'react'

export default function ExtraInfoTitle(props) {

  
  return (
<h1 style={{color: 'white', fontSize: 15, textAlign: 'center', marginBottom: 5}}> {props.data?.weather[0]?.description} | Timezone: {props.data?.timezone} | {props.data?.name}</h1>
  )
}

// {/* <h1 style={{color: 'white', fontSize: 15, textAlign: 'center', marginBottom: 5}}>${props.data} | ${props.data.weather[0].description} | Today: ${props.data.timezone} | ${props.data.name}</h1> */}