import React, { useState } from 'react'
import './sideNav.css'
import homeIcon from '../../assets/house.svg';
import dashboard from '../../assets/bar-chart.svg';
import inbox from '../../assets/envelope.svg';
import products from '../../assets/barcode.svg';
import { Link } from 'react-router-dom';

function SideNav(props) {
    const sidebar = [
        { title: "Home", path: "/home", icon: homeIcon, notification: false },
        { title: "Dashboard", path: "/dashboard", icon: dashboard, notification: false },
        { title: "Inbox", path: "/inbox", icon: inbox, notification: true },
        { title: "Products", path: "/products", icon: products, notification: false }
    ]
    const pathname = window.location.pathname === '/' ? '/dashboard' : window.location.pathname;
    const [selectedItem, setselectedItem] = useState(pathname);

    return (
        props.openMenu && <div className="sidebar-wrapper">
            <div className="sidebar-header v-center">IMPEKABLE</div>
            <div>
                {sidebar.map((data) =>
                    <Link to={data.path}>
                        <div className={`sidebar-items v-center d-flex-between ${selectedItem === data.path && 'selected-item'}`}  onClick={() => setselectedItem(data.path)}> 
                            <div className="v-center">
                                <img src={data.icon} className="icon" />
                                <span>{data.title}</span>
                            </div>
                            {data.notification && <div className="notification">New</div>}
                        </div>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default SideNav
