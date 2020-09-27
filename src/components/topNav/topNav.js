import React from 'react'
import './topNav.css'
import searchIcon from '../../assets/search.svg';
import menuIcon from '../../assets/menu.svg';
import notificationIcon from '../../assets/notification.svg';
import profileImg from '../../assets/Lavid Emes.png';
import downIcon from '../../assets/down-chevron.svg';

function TopNav(props) {
    return (
        <div className="background" style={{backgroundColor: !props.openMenu && "#ffffff" }}>
            <div className="header-wrapper">
                <div className="d-flex" style={{paddingLeft:"20px"}}>
                    <img src={menuIcon} alt="menu-icon" className="menu icon" onClick={props.onMenuClick} />
                    <div className="d-flex search-bar">
                        <img src={searchIcon} alt="srch-icon" className=" search icon" />
                        <input className="search-input" type="text" placeholder="Search transactions, invoices or help" />
                    </div>
                </div>
                <div className="d-flex v-center" style={{paddingRight:"20px"}}>
                    <img src={notificationIcon} className="icon"/>
                    <div className="v-line" style={{marginLeft:"16px"}}></div>
                    <div className="profile-name">John Doe</div>
                    <img src={downIcon} className="icon"/>
                    <img src={profileImg} className="profile"/>
                </div>
            </div>
        </div>
    )
}

export default TopNav
