import React from 'react'
// import { Link } from 'gatsby'
import logo from './img/logo.svg'
// import twitter from './img/social-twitter.svg';
import ig from './img/social-instagram.svg';
import fbook from './img/social-facebook.svg';



class Navbar extends React.Component {

  static defaultProps = {
    big: true
  };

  state = { big: true };

  render() {
    const { big } = this.state;
    return (
      <div className={`header ${big ? 'header--big' : ''}`}>
        <div className="line">
          <div className="stripes"></div>
          <div className="floral"></div>
        </div>
        {big &&
          <div className="big-logo d-flex justify-content-center align-items-center">
            <a href='/'>
              <img title="chibs" alt="chibs logo" className="logo" src={logo} alt="Chibs" />
            </a>
          </div>
        }
        <nav className="container">
          <div className="row">
            {!big &&
              <div className="col-2 d-flex align-items-center">
                <a href="/">
                  <img className="logo" src={logo} alt="Chibs" />
                </a>
              </div>
            }
            <div className={'d-flex align-items-center ' + (big ? 'col-10' : 'col-8')}>
              <a className="navbar-item" href="#hours" onClick={() => this.props.onLinkClick('hours')}>
                Hours & Location
              </a>
              <span className="dot">•</span>
              <a className="navbar-item" href="#menu" onClick={() => this.props.onLinkClick('menu')}>
                Menu
              </a>
              <span className="dot">•</span>
              <a className="navbar-item" href="#contact" onClick={() => this.props.onLinkClick('contact')}>
                Info
              </a>
            </div>
            <div className="col-2 d-flex align-items-center justify-content-end">
              <a className="navbar-item" href="https://www.instagram.com/chibs.ph">
                <img alt="instagram" className="social" src={ig} alt="instagram" />
              </a>
              <a className="navbar-item" href="https://www.facebook.com/chibs.ph">
                <img alt="facebook" className="social" src={fbook} alt="facbook" />
              </a>
              {/* <a className="navbar-item" href="https://twitter.com/chibs_ph">
                <img className="social" src={twitter} alt="twitter" />
              </a> */}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar
