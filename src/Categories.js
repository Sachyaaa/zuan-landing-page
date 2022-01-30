import React from 'react';
import Category from './Category';
import Dental1 from './images/dental1.svg';
import Dental2 from './images/dental2.svg';
import Dental3 from './images/dental3.svg';

export default function Categories() {
  return <div className='categories'>
      <h2>Browse by Categories</h2>
        <div className="scroll">
            <Category category = 'Oral Implantology' cource= '8' img = {Dental2} new= '2'/>
            <Category category = 'Aesthetics' cource= '12' img = {Dental3} />
            <Category category = 'Endodontics' cource= '8' img = {Dental2} />
            <Category category = 'Oral Implantology' cource= '8' img = {Dental2} new= '2'/>
            <Category category = 'Aesthetics' cource= '12' img = {Dental3} />
            <Category category = 'Endodontics' cource= '8' img = {Dental2} />
        </div>
  </div>;
}
