import React from 'react';
import CourcesText from './Text';
import RightBtns from './RightBtns';

export default function Block(props) {
  return <div className='cources-top'>
  <CourcesText heading={props.heading}/>
  <RightBtns btnName={props.btnName} btn={props.btn}/>
</div>;
}
