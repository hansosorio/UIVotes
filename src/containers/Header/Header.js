import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import desPopeImage from '../../assets/pope.png';
import mobPopeImage from '../../assets/pope-mobile.jpg';
import './Header.scss';

const Header = () => {
  const [expandedLinks, setExpandedLinks] = useState(false);
  const imageUrl = window.innerWidth >= 650 ? desPopeImage : mobPopeImage;

  const toggleLinks = () => () => {
    setExpandedLinks(!expandedLinks);
  };

  return (
    <div>
      <nav className="navbar-wrapper content">
        <ul className="navbar-links">
          <div>
            <li
              className="navbar-link-logo"
              onClick={() => setExpandedLinks(false)}
            >
              <NavLink to="/"><h1>Rule of Thumb.</h1></NavLink>
            </li>
            <li className="navbar-link bars" onClick={toggleLinks()}>
              <i className="fa fa-bars" aria-hidden="true" />
            </li>
          </div>
          <div className={expandedLinks ? '' : 'hidden'}>
            <li className="navbar-link" onClick={() => setExpandedLinks(false)}>
              <NavLink to="/past-trials"><span>Past Trials</span></NavLink>
            </li>
            <li className="navbar-link" onClick={() => setExpandedLinks(false)}>
              <NavLink to="/how-it-works"><span>How it Works</span></NavLink>
            </li>
            <li className="navbar-link" onClick={() => setExpandedLinks(false)}>
              <NavLink to="/login"><span>Log In /</span></NavLink>
              <NavLink to="/sign-up"><span>Sign Up</span></NavLink>
            </li>
            <li className="navbar-link" onClick={() => setExpandedLinks(false)}>
              <i className="fa fa-search" aria-hidden="true" />
            </li>
          </div>
        </ul>
      </nav>
      <img className="main-background" src={imageUrl} alt="pope" />
      <div className="dayscounterbar">
        <div>
          <span>CLOSING IN</span>
        </div>
        <div>
          <span><strong>22</strong> days</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
