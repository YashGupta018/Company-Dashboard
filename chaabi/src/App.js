import React from 'react';
import './App.css';
import logoImage from './assets/logo.svg'; // Replace 'logo.svg' with the actual path to your logo image

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
        {/* Sidebar content */}
      </div>
      <div className="MainPage">
        {/* Main page content */}
      </div>
    </div>
  );
}

export default App;
