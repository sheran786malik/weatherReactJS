import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';

export default function SearchBox(props) {

  const [searchQuery, setSearchQuery] = useState('');

  const handleEnterPress = (event) => {
    if(event.key === 'Enter'){
      props.onEnterPress(event.target.value);
    }
  }


  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 50 }}>
      <div style={{ width: '50%', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)' }}>
          <FaSearch style={{ color: 'white' }} />
        </div>
        <input
          type='text'
          placeholder='Search weather'
          style={{
            backgroundColor: 'black',
            color: 'white',
            border: '1px solid white',
            paddingLeft: '40px',
            paddingRight: '10px',
            height: '50px',
            width: '100%',
            borderRadius: '5px',
          }}
          onKeyDown={handleEnterPress}
        />
      </div>
    </div>
  );
}