import React from 'react';
import Star from './images/star.svg';

export default function Testimonial(props) {
    return <div className='testimonial'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia placeat ut expedita commodi debitis volue Lorem, ipsum.  Lorem, ipsum dolor.</p>
        <div>
            <div className='course-name'>Course name</div>
            <div>
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
            </div>
        </div>
        <div className='flex'>
            <div className='circle'></div>
            <div>{props.name}</div>
        </div>
    </div>;
}
