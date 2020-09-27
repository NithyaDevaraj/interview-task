import React from 'react'
import Graph from '../../components/graph/graph'
import PieChart from '../../components/pie-chart/piechart'
import Referrer from '../../components/referrer/referrer'
import add from '../../assets/plus.svg'
import productVideo from '../../assets/Video tumbnail.png'
import userPic from '../../assets/Jana Navakova.jpg';
import userPic1 from '../../assets/Drew James.png';
import userPic2 from '../../assets/Bavid kames.png';
import userPic3 from '../../assets/Lavid Emes.png';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';
import facebook from '../../assets/facebook.svg';
import envelope from '../../assets/envelope.svg';
import play from '../../assets/video-player.svg';
import edit from '../../assets/pencil.svg';

import './dashboard.css'

const userList = [
    { username: 'Drew James', place: 'United States', mobile: '871.567.4877', profilePic: userPic1 },
    { username: 'Bavid Kames', place: 'United States', mobile: '871.567.4877', profilePic: userPic2 },
    { username: 'Lavid Emes', place: 'United States', mobile: '871.567.4877', profilePic: userPic3 },
]

function Dashboard() {
    return (
        <div>
            <div className="dashboard-container d-flex-between v-center">
                <span className="heading">Overview</span>
                <button className="btn d-flex-between v-center">
                    <span className="btn-text v-center">Add Funds </span>
                    <img src={add} className="add-icon" alt="" />
                </button>
            </div>
            <div className="d-flex-between d-wrap">
                <div className="statistics">
                    <div className=" graphs d-flex-between d-wrap">
                        <Graph />
                        <PieChart />
                    </div>
                    <Referrer />
                </div>
                <div className="users-product-wrapper">
                    <div className="users">
                        <div className="our-users-header-wrapper d-flex-column d-flex-center">
                            <img src={userPic} alt="" className="profile-pic" />
                            <img src={edit} className="edit-icon" />
                            <div className="user-name">Nick Herasimenka</div>
                            <div className="user-place">United States</div>
                            <div className="social-media-icons d-flex-between">
                                <img src={instagram} className="icon" />
                                <img src={twitter} className="icon" />
                                <img src={facebook} className="icon" />
                                <img src={envelope} className="icon" />
                            </div>
                        </div>
                        <div className="our-users-list">
                            <div className="d-flex-between">
                                <span className="our-users">Our users</span>
                            </div>
                            {userList.map((user) => (
                                <div className="d-flex-between user-list-item">
                                    <img src={user.profilePic} alt="" className="users-list-user-pic" />
                                    <div className="user-details d-flex-column">
                                        <div className="user-name">{user.username}</div>
                                        <div className="user-place d-flex-between">
                                            <span className>{user.place}</span>
                                            <span>{`Mobile : ${user.mobile}`}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="product-video">
                        <div className="product-video-heading">Product Video</div>
                        <img className="product-video-thumbnail" src={productVideo} />
                        <img className="video-play-icon" src={play} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard
