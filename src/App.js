import React, { Component } from 'react';
import logo from './logo.svg';
import instagramLogo from './instagram-logo.png';
import twitterLogo from './twitter-logo.png';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            We're cooking up something special
          </h1>
          <div className="social">
            <ul>
              <li>
                <a href="https://www.instagram.com/chibs_ph">
                  <img src={instagramLogo} className="social-logo" alt="logo" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/chibs_ph">
                  <img src={twitterLogo} className="social-logo" alt="logo" />
                </a>
              </li>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
