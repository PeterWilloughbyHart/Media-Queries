import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dropDownStatus: 'shut'
    }
  }

  dropDown() {
    if (this.state.dropDownStatus === 'shut') {
      this.setState({dropDownStatus: 'open'})
    }
    else { 
      this.setState({dropDownStatus: 'shut'})
    }
  }

  render() {

    return (
      <div className="App">
        <nav className="nav">
          <h1 onClick={e => this.dropDown()}>Start Bootstrap</h1>
          <ul className="nav-links">
            <li><a href={"#serviceLink"}>Services</a></li>
            <li><a href={"#portfolioLink"}>Portfolio</a></li>
            <li><a href={"#aboutLink"}>About</a></li>
            <li><a href={"#teamLink"}>Team</a></li>
            <li><a href={"#contactLink"}>Contact</a></li>
          </ul>
          <img onClick={e => this.dropDown()} className="burgerIcon" height="100px" width="100px" src="https://img.icons8.com/cotton/2x/hamburger.png"/>
        </nav>
        <nav className={`dropdown-${this.state.dropDownStatus}`}>
        <ul className="dropdown-nav">
            <li>Services</li>
            <li>Portfolio</li>
            <li>About</li>
            <li>Team</li>
            <li>Contact</li>
          </ul>
        </nav>
          <section className="headerImage-box">
          <h1>IT'S NICE TO MEET YOU</h1>
          <button><strong>Tell Me More...</strong></button>
          </section>
          <header id='serviceLink' className="services-text">
            <h1>Services</h1>
            <h5><i>Here we share with you our offered services</i></h5>
          </header>
          <section className="service-boxes">
            <div><img src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/cart-256.png"/><h2>E-Commerce</h2><h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam </h4></div>
            <div><img src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/cart-256.png"/><h2>Responsive Design</h2><h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam </h4></div>
            <div><img src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/cart-256.png"/><h2>Web Security</h2><h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam </h4></div>
          </section>
          <section id="portfolioLink" class="portfolio-box">
          <h1>Portfolio</h1>
          <h4>Here is our portfolio! Enjoy</h4>
          <section className="portfolio-gallery">
          <img src="https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/01-thumbnail.jpg"/>
          <img src="https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/02-thumbnail.jpg"/>
          <img src="https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/03-thumbnail.jpg"/>
          </section>
          <section className="portfolio-gallery">
          <img src="https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/04-thumbnail.jpg"/>
          <img src="https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/06-thumbnail.jpg"/>
          <img src="https://blackrockdigital.github.io/startbootstrap-agency/img/portfolio/05-thumbnail.jpg"/>
          </section>
          </section>
          <section id="aboutLink" className="about">

          </section>
          <section id="teamLink" className="team">

          </section>
          <section id="contactLink" className="contact">
            <div>
              <input></input>
              <input></input>
              <input></input>
            </div>
            <div>
              <textarea></textarea>
            </div>
          </section>
      </div>
    );
  }
}

export default App;
