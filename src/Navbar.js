import React from 'react';
import Hamburger from './images/Group.svg';
import Search from './images/Group (1).svg';
import Pic from './images/Ellipse 45.svg';
import Bookmark from './images/Vector.svg';
import Cart from './images/Vector (1).svg';

export default function Navbar() {
    return <div className='navbar'>
        <div className="navbar-left">
            <img src={Hamburger} alt="" />
            <span>zuan</span>
        </div>
        <div className="navbar-right">
            <img src={Search} alt="" />
            <div className="profile">
                <span>Hi, Team Z</span>
                <img src={Pic} alt="" />
            </div>
            <img src={Bookmark} alt="" />
            <img src={Cart} alt="" />
        </div>
    </div>;
}

