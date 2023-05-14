import React from 'react'
import Background from '../../assets/weatherInfoBackground.png';
import WeatherInfoBox from './WeatherInfoBox';
import Main from '../../Layouts/Main';
import Temperature from '../Temperature';
import ExtraInfoBox from '../ExtraInfoBox';
import ExtraInfoTitle from '../ExtraInfoTitle';
import ExtraInfoSubtitle from '../ExtraInfoSubtitle';

export default function InformationBox(props) {

  const { temp, feels_like, temp_min, temp_max, clouds, pressure, humidity} = props.data?.main || {};
  // const {description, main} = props.data.weather[0] || {};
  

  return (
    <Main>
      <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
        <Temperature temperature={temp}/>

          <ExtraInfoBox>
           
            <ExtraInfoTitle data={props.data}/>
            <ExtraInfoSubtitle data={props.data}/>
          </ExtraInfoBox>
  
          <div style={{display: 'flex', flexDirection: 'row', alignSelf:'center', justifyContent: 'space-between', flex: 1, }}>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: 30}}>
              <WeatherInfoBox measurement='temp' value={temp} color='black'/>
              <WeatherInfoBox measurement='temp_min' value={temp_min} color='white'/>
              <WeatherInfoBox measurement='pressure' value={pressure} color='black'/>
              <WeatherInfoBox measurement='sea level' value='294.8' color='white'/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <WeatherInfoBox measurement='feels like' value={feels_like} color='black'/>
              <WeatherInfoBox measurement='temp_max' value={temp_max} color='white'/>
              <WeatherInfoBox measurement='humidity' value={humidity} color='black'/>
              <WeatherInfoBox measurement='grnd level' value='294.8' color='white'/>
            </div>
          </div>
        </div>

      </Main>
  )
}
