import React from 'react';
import './App.css';

function App() {
  const containerStyle = {
    background: 'linear-gradient(rgba(255, 0, 0, 0.7), rgba(255, 0, 0, 0.7)), url("https://via.placeholder.com/1920x1080/FF0000/00FF00/FFFFFF/000000?text=Merry+Christmas+and+Happy+New+Year+From+Monyoro")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    color: '#FFF',
    fontFamily: 'Comic Sans MS, sans-serif',
  };

  const messageStyle = {
    fontSize: '3em',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    margin: '20px 0',
    textAlign: 'center',
  };

  const redTextStyle = {
    color: '#FF0000',
  };

  const greenTextStyle = {
    color: '#00FF00',
  };

  const blackTextStyle = {
    color: '#000000',
  };

  return (
    <div style={containerStyle}>
      <p style={messageStyle}>
        Wishing you a <span style={{ ...redTextStyle }}>Merry Christmas</span> and a <span style={{ ...greenTextStyle }}>Happy New Year</span> filled with joy, peace, and love. 
        <br />
        May the holiday season bring warmth to your heart and blessings to your home.
        <br />
        <span style={{ ...blackTextStyle }}>From Monyoro!!!</span>
      </p>
    </div>
  );
}

export default App;
