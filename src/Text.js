import React from 'react';


export default function Text(props) {
  return <div className='cources-text'>
      <h1>{props.heading}</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae sit iusto recusandae earum qui laboriosam ab nemo similique ipsum dolor sir adipisicing.</p>
      <div className="btn course-btn">Add New</div>
      <div className="btn-white"><span>View All</span></div>
  </div>;
}
