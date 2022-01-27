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
      <Cource img={Teeth} date='6 Jan 2021' from='08:00pm' to='09:00pm' name='Master Class on Dental Photography' rating='true' bookmark='none' completed='50%'/>
      <Cource img={Teeth} date='6 Jan 2021' from='08:00pm' to='09:00pm' name='Master Class on Dental Photography'  bookmark='block' completed='90%'/>
      <Cource img={Teeth} date='6 Jan 2021' from='08:00pm' to='09:00pm' name='Master Class on Dental Photography' rating='true' bookmark='block'completed='80%'/>
      <Cource img={Teeth} date='6 Jan 2021' from='08:00pm' to='09:00pm' name='Master Class on Dental Photography' rating='true' bookmark='none'completed='10%'/>
      
      <Cource img={Teeth} date='6 Jan 2021' from='08:00pm' to='09:00pm' name='Master Class on Dental Photography'  bookmark='none'completed='100%'/>
      <Cource img={Teeth} date='6 Jan 2021' from='08:00pm' to='09:00pm' name='Master Class on Dental Photography'rating bookmark='none'completed='50%'/>
      <Cource img={Teeth} date='6 Jan 2021' from='08:00pm' to='09:00pm' name='Master Class on Dental Photography' bookmark='block' completed='60%'/>
    </div>
  </div>;
}
