import React from 'react';
import Service from './Service';
import Education from './images/education.svg';


export default function Services() {
  return <div className='services'>
      <Service img={Education} name='EDUCATION' pr1='24 Categories' pr2='24K Doctors' pr3='240 Tutorials'/>
  </div>;
}
