import React from 'react';

export default function Category(props) {
  return <div className='category'>
      <div className="category-text">
          { props.new &&<div className='new'><span>NEW</span>{props.new} cources</div>}
          <h3>{props.category}</h3>
          <small>{props.cource} Cources</small>
          <button className=" btn"><span>Explore</span> </button>
      </div>
      <div className="category-img">
          <img src={props.img} />
      </div>
  </div>;
}
