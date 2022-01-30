import React from 'react';
import Logo from './images/logo.svg';

export default function Membership() {
  return <div className='membership'>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="membership-right">
        <div className="offer">
            <h2><span className="a">40%</span> <span className="b">OFF</span> Limited period offer</h2>
            <p>Upgrade your skills with over 40 courses, case discussions and live surgical videos at no additional cost. </p>
        </div>
        <div className="membership-btn">
            <button><span>Get Membership</span></button>
        </div>
      </div>
  </div>;
}
