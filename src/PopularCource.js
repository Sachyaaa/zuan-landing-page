import React from 'react';
import Star from './images/star.svg';
import Left from './images/cource-left.svg';
import Right from './images/cource-right.svg';

export default function PopularCource(props) {
    return <div className='cource'>
        <div className="cource-upper" style={{backgroundColor:"#4F4F4F"}}>
            <span className='span'>
               
                <img src={Date} alt="" />
                <span >{props.date} | {props.from}-{props.to}</span>
            </span>
        </div>
        <div className="cource-lower">
                <h3>{props.name}</h3>
            <div className='ml2'>
                <div>
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                </div>
                <div>
                    <span>EN</span>
                    <span>ES</span>
                    <span>FR</span>
                </div>
            </div>
            <div className='cource-bottom'>
                <small>Oral Surgery</small>
            </div>
            <div className='cource-images'>
                <img src={Left} alt="" />
                {props.img && <img src={Right} alt="" />}
            </div>


        </div>

    </div>;
}
