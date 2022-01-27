import React from 'react';
import background from './images/home.png';
export default function Home() {
  return <div className='home' style={{ backgroundImage: `url(${background})` }}>
      <button className='btn'>Call to Action</button>
  </div>;
}
