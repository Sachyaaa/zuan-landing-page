import React from 'react';

export default function service(props) {
  return <div className='service'>
      <div className="logo">
          <img src={props.img} alt="" /><br />
          <span>{props.name}</span>
      </div>
      <div className="pr">
          <span>{props.pr1}</span>
          <span>{props.pr2}</span>
          <span>{props.pr3}</span>
      </div>
  </div>;
}
