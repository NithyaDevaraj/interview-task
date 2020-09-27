import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import SideNav from './components/sideNav/sideNav';
import TopNav from './components/topNav/topNav';
import Dashboard from './containers/dashboard/dashboard';
import Inbox from './containers/inbox/inbox';
import Home from './containers/home/home';

function App() {
  const [openMenu, setopenMenu] = useState(true);
  const onMenuClick = () => {
    setopenMenu(!openMenu);
  }

  useEffect(() => {
    if (window.innerWidth <= 1024) {
      setopenMenu(false);
    };
  }, [])

  return (
    <Router>
      <div className="App d-flex">
        <SideNav openMenu={openMenu} />
        <div className="content-wrapper" >
          <TopNav onMenuClick={onMenuClick} openMenu={openMenu} />
          <div className="main-container">
            <Switch>
            <Redirect from="/" to="/dashboard" exact />
              <Route exact path="/home" component={Home} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/inbox" component={Inbox} />
              <Route exact path="/products" component={Dashboard} />
            </Switch>
          </div>
        </div>
        {/* <div>
              <button className="btn d-flex-between">
                <span className="btn-text v-center">Add Funds </span>
                <img src={add} className="add-icon" />
              </button>
              <div className="profile-wrapper"></div>
            </div> */}
      </div>
    </Router>
  );
}

export default App;
