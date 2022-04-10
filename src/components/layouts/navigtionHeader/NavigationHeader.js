import React, {useState} from "react";

import Container from "../../ui/Container";
import Button from "../../ui/Button";
import logo from "../../../assets/images/logo.svg";

import "../../../index.css";

const NavigationHeader = () => {
const [showLinks, setShowLinks]= useState(false)
  return (
    <nav className="nav">
      <Container className="nav-container">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="toggle-btn" onClick={()=> setShowLinks((prev)=> !prev)}>
            <div className={` ${showLinks? 'menu-icons cross': 'menu-icons'}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
        <div className={showLinks? 'show-links': 'hide-links'}>
          <ul className="links">
            <li>
              <a href="/home">home</a>
            </li>
            <li>
              <a href="/about">about</a>
            </li>
            <li>
              <a href="/contact">contact</a>
            </li>
            <li>
              <a href="/blog">blog</a>
            </li>
            <li>
              <a href="/careers">careers</a>
            </li>
          </ul>
        </div>
        <div className="btn-container">
          <Button>Request Invite</Button>
        </div>
      </Container>
    </nav>
  );
};

export default NavigationHeader;
