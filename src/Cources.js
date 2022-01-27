import React from 'react';
import Cource from './Cource';
import CourcesText from './CourcesText';
import RightBtns from './RightBtns';
import Teeth from './images/teeth.svg';

export default function Cources() {
  return <div className='Cource-sec'>
    <div className='cources-top'>
      <CourcesText />
      <RightBtns />
    </div>
    <div className="cources-list">
      <Cource img={Teeth} date='6 Jan 2021' from='08:00pm' to='09:00pm' name='Master Class on Dental Photography' progr='true' bookmark='none' completed='50%'/>
      <Cource img={Teeth} date='6 Jan 2021' from='08:00pm' to='09:00pm' name='Master Class on Dental Photography' progr='false' bookmark='block'/>
      <Cource img={Teeth} date='6 Jan 2021' from='08:00pm' to='09:00pm' name='Master Class on Dental Photography' progr='true' bookmark='block'/>
      <Cource img={Teeth} date='6 Jan 2021' from='08:00pm' to='09:00pm' name='Master Class on Dental Photography' progr='true' bookmark='none'/>
      <Cource img={Teeth} date='6 Jan 2021' from='08:00pm' to='09:00pm' name='Master Class on Dental Photography' bookmark='block'/>
      <Cource img={Teeth} date='6 Jan 2021' from='08:00pm' to='09:00pm' name='Master Class on Dental Photography' progr='true' bookmark='none'/>
      <Cource img={Teeth} date='6 Jan 2021' from='08:00pm' to='09:00pm' name='Master Class on Dental Photography' bookmark='none'/>
      <Cource img={Teeth} date='6 Jan 2021' from='08:00pm' to='09:00pm' name='Master Class on Dental Photography' bookmark='block'/>
    </div>
  </div>;
}
