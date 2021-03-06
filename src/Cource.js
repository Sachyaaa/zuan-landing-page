import React from 'react';
import Date from './images/date.svg'
import Star from './images/star.svg';
import Bookmark from './images/bookmark.svg';

export default function Cource(props) {


    return <div className='cource'>
    
        <div className="cource-upper" style={{
            backgroundImage: `url(${props.img})`
        }}>
            <span className='span'>
            <img style={{display: props.bookmark}} className='bookmark' src={Bookmark} alt="" />
                <img src={Date} alt="" />
                <span >{props.date} | {props.from}-{props.to}</span>
            </span>
        </div>
        <div className="cource-lower">
            <div>
            <h3>{props.name}</h3>
            <small>Oral Surgery</small>
            </div>
            <div className="progress">
                <span>Course Completion </span>
                <div className="progress-bar">
                    <span className="material" style={{
                        width: props.completed
                    }}></span>
                </div>
            </div> 
            {props.rating &&<div className="rating">
                <div>You Rated:</div>
                <div>
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                </div>
            </div>}
        </div>
        
    </div >;
    }
