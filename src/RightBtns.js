import React from 'react';

export default function RightBtns(props) {
    return <div className='right-btns'>
        <div className="line">
            <span>{props.btnName} 1</span>
            <btn className="btn-white">
                <span>{props.btn}</span>
            </btn>
        </div>
        <div className="line">
            <span>{props.btnName} 2</span>
            <btn className="btn-white"><span>{props.btn}</span></btn>
        </div>
    </div>;
}
