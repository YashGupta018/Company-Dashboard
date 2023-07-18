import React from 'react';
import './App.css';
import logoImage from './assets/logo.svg'; // Replace 'logo.svg' with the actual path to your logo image
import trainingIcon from './assets/training.svg';
import usersIcon from './assets/users.svg';
import analyticsIcon from './assets/analytics.svg';
import accountIcon from './assets/account.svg';
import supportIcon from './assets/support.svg';

function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="Logo">
          <img src={logoImage} alt="Logo" className="LogoImage" />
        </div>
        <div className="Separator"></div>
      </div>
      <div className="Sidebar">
        <div className="OverviewContainer">
          <div className="IconContainer">
            <div className="Icon"></div>
          </div>
          <div className="TextContainer">
            <p className="OverviewText">Dashboard</p>
          </div>
        </div>
        <div className="MainMenu">
          <button className="MenuItem">
            <div className="MenuItemIcon">
              <img src={trainingIcon} alt="Training" />
            </div>
            <p className="MenuItemText">Trainings</p>
          </button>
          <button className="MenuItem">
            <div className="MenuItemIcon">
              <img src={usersIcon} alt="Users" />
            </div>
            <p className="MenuItemText">Users</p>
          </button>
          <button className="MenuItem">
            <div className="MenuItemIcon">
              <img src={analyticsIcon} alt="Analytics" />
            </div>
            <p className="MenuItemText">Analytics</p>
          </button>
          <button className="MenuItem">
            <div className="MenuItemIcon">
              <img src={accountIcon} alt="Account" />
            </div>
            <p className="MenuItemText">My Account</p>
          </button>
          <button className="MenuItem">
            <div className="MenuItemIcon">
              <img src={supportIcon} alt="Support" />
            </div>
            <p className="MenuItemText">Support</p>
          </button>
        </div>
      </div>
      <div className="MainPage">
        {/* Main page content */}
      </div>
    </div>
  );
}

export default App;
