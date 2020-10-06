import React from 'react';
import {NavLink} from 'react-router-dom';



const Footer =() =>
{
    return (
        <>
     
  <footer className="footer-distributed">

<div className="footer-left">

    <h3>About<span>Growinfinity</span></h3>

    <p className="footer-links">
        <NavLink to="#">Home</NavLink>
        |
        <NavLink to="#">Services</NavLink>
        |
        <NavLink to="#">About</NavLink>
        |
        <NavLink to="#">Contact</NavLink>
    </p>

    <p className="footer-company-name">© GrowInfinity Solution</p>
</div>

<div className="footer-center">
    <div>
        <i className="fa fa-map-marker"></i>
          <p><span>Barat House,Shop no 1,opposite Gulmohar Appartment</span>
          Karvenagar Chowk , Pune- 52</p>
    </div>

    <div>
        <i className="fa fa-phone"></i>
        <p>+91 8411842014</p>
        
    </div>
    <div>
        <i className="fa fa-envelope"></i>
        <p><NavLink to="mailto:support@eduonix.com">pankajgrowinfinity@gmail.com</NavLink></p>
    </div>
</div>
<div className="footer-right">
    <p className="footer-company-about">
        <span>About the company</span>
        We offer training and skill building courses across Technology.</p>
    <div className="footer-icons">
        <NavLink to="#"><i className="fa fa-facebook"></i></NavLink>
        <NavLink to="#"><i className="fa fa-twitter"></i></NavLink>
        <NavLink to="#"><i className="fa fa-instagram"></i></NavLink>
        <NavLink to="#"><i className="fa fa-linkedin"></i></NavLink>
        <NavLink to="#"><i className="fa fa-youtube"></i></NavLink>
    </div>
    
</div>
</footer>

</>
    );
};
export default Footer;