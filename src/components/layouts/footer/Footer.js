import React from "react";

import Container from "../../ui/Container";
import {FaFacebookSquare, FaYoutube, FaTwitter,FaPinterest,FaInstagram} from 'react-icons/fa'
import logo from '../../../assets/images/logo.svg'
import Button from "../../ui/Button";

const Footer = () => {
    return <footer>
        <Container >
         <div className='logo'>
           <img src={logo} alt='logo'/>
             
              <ul className="icons">
                  <li><FaFacebookSquare /></li>
                  <li><FaYoutube /></li>
                  <li><FaTwitter /></li>
                  <li><FaPinterest /></li>
                  <li><FaInstagram /></li>
              </ul>
            
         </div>
  
             <ul className="footer-links">
                 <li>About us</li>
                 <li>Contact</li>
                 <li>Blog</li>
                 <li>Careers</li>
                 <li>Support</li>
                 <li>Privacy Policy</li>
             </ul>
    
         <div className="footers-footer">
             <Button>
                 Request Invite
             </Button>
             <p>
             © Easybank. All Rights Reserved
             </p>
         </div>
        </Container>

    </footer>
}

export default Footer;