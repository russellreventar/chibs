import React, { Component } from 'react';
import Navbar from './Navbar';
import Card from './Card';
import Section from './Section';
import motto from './img/motto.svg';
import leavesHalf from './img/leaves-half.png';
import m2 from './img/Menu2.jpg';
import m3 from './img/Menu3.jpg';
import m4 from './img/Menu4.jpg';
import m5 from './img/Menu5.jpg';
import m6 from './img/Menu6.jpg';

class App extends Component {

  constructor() {
    super();
    this.hoursRef = React.createRef();
    this.menuRef = React.createRef();
  };

  onLinkClick = (link) => {
    setTimeout(() =>
      // window.scrollTo(
      //   // top: this[`${link}Ref`].current.getBoundingClientRect().top - 10,
      //   0, this[`${link}Ref`].current.getBoundingClientRect().top
        
      // )

      window.scroll({
        top: this[`${link}Ref`].current.getBoundingClientRect().top - 10,
        behavior: 'smooth'
      })
    ,100);
  }

  render() {
    return (
      <div className="chibs">
        <Navbar onLinkClick={this.onLinkClick}/>
        <div className="hero d-flex align-items-center justify-content-center">
          <img className="motto" src={motto} alt="motto"/>
        </div>
        <Section
          title="Hours & Location"
          description="Come join us at any of our 2 locations!"
          className="hours"
          outRef={this.hoursRef}
        >
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <Card
                  type='calamba'
                  location="SM City Calamba"
                  address="3rd floor"
                  number="(049) - 530 - 3041"
                  hours="8:00am - 10:00pm"
                />
              </div>
              <div className="col-sm-6">
                <Card
                  type='lipa'
                  location="SM City Lipa"
                  address="2nd floor"
                  number="(049) - 530 - 3041"
                  hours="8:00am - 10:00pm"
                />
              </div>
            </div>
          </div>
        </Section>
        <Section
          title="Menu"
          description="A menu with a wide variety of options made with organic ingredients. You’ve got to taste it to believe it."
          className="menu"
          outRef={this.menuRef}
        >
          {/* <div className="leaves">
            <img src={leaves}/>
          </div> */}
          <div className="leaves-half">
            <img src={leavesHalf}/>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img className="menu-page" src={m2}/>
              </div>
              <div className="col-md-6">
                <img className="menu-page" src={m3}/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <img className="menu-page" src={m4}/>
              </div>
              <div className="col-md-6">
                <img className="menu-page" src={m5}/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <img className="menu-page" src={m6}/>
              </div>
            </div>
          </div>
        </Section>
      </div>
    );
  }
}

export default App;
