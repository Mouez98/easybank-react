import React from "react";

import Container from "../../ui/Container";
import Button from "../../ui/Button";
import logo from '../../../assets/images/logo.svg'

const NavigationHeader = () => {
  return (
    <header className="header">
      <Container>
        <nav className="nav">
          <div className="logo-container">
            <img src={logo}  alt="logo" />
              </div>
          <div className="links-container">
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
           <Button>
               Request Invite
           </Button>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default NavigationHeader;
