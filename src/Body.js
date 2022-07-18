import React from 'react';
import './Body.css';
import { useDataLayerValue } from './DataLayer';
import Header from './Header';

function Body({spotify}) {

  const [{discover_weekly}, dispatch] = useDataLayerValue();
  return (
    <div className='body'>
      <Header/>
      <div className='body__info'>
        <img 
        className='body__info__img'
        src={discover_weekly?.images[0].url} 
        alt=''
        />
        <div className='body__infotext'>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className='body__song'>
        a
      </div>
    </div>
  )
}

export default Body