import React from 'react';
import Service from './Service';
import Education from './images/education.svg';
import Mentership from './images/mentership.svg';
import Community from './images/community.svg';
import Docket from './images/docket.svg';
import Shop from './images/shop.svg';
import Upcomming from './images/upcoming.svg';



export default function Services() {
  return <div className='services'>
      <Service img={Education} name='EDUCATION' pr1='24 Categories' pr2='24K Doctors' pr3='240 Tutorials'/>
      <Service img={Mentership} name='MENTORSHIP' pr1='75 Experts' pr2='15K senior Doctors'/>
      <Service img={Shop} name='MY SHOP' pr1='24 Categories' pr2='65 Products' pr3='15 Services'/>
      <Service img={Docket} name='MY DOCKET' pr1='Goals' pr2='Achievements' pr3='Subscriptions'/>
      <Service img={Community} name='COMMUNITY' pr1='12 regional' pr2='6 National' pr3='2 International'/>
      <Service img={Upcomming} name='UPCOMMING EVENTS' pr1='4 Regional' pr2='2 national' pr3='1 International'/>
  </div>;
}
