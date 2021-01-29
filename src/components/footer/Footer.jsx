import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div>
          <h3>
            Hello there, My name is Irfan and I'm an aspiring web developer
          </h3>
        </div>
        <h1>&copy; 2021 Khan Irfan</h1>
        <div className="social_links">
          <a href="https://www.linkedin.com/in/irfan-khan-4a40b31b4/">
            <img
              src="https://i.ibb.co/w7wrHq4/linkedin.png"
              alt="linkedin"
            ></img>
          </a>
          <a href="https://github.com/Irfan-akhan">
            <img src="https://i.ibb.co/SKB76WQ/github.png" alt="github"></img>
          </a>
          <a href="">
            <i></i>
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;