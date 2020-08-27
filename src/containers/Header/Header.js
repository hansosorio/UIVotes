import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PopeBackground from '../../assets/pope.png';
import './Header.scss';

const Header = () => {
  const [expandedLinks, setExpandedLinks] = useState(false);

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
              <NavLink to="/"><span>Past Trials</span></NavLink>
            </li>
            <li className="navbar-link" onClick={() => setExpandedLinks(false)}>
              <NavLink to="/"><span>How it Works</span></NavLink>
            </li>
            <li className="navbar-link" onClick={() => setExpandedLinks(false)}>
              <NavLink to="/"><span>Log In / Sign Up</span></NavLink>
            </li>
            <li className="navbar-link" onClick={() => setExpandedLinks(false)}>
              <i className="fa fa-search" aria-hidden="true" />
            </li>
          </div>
        </ul>
      </nav>
      <img className="main-background" src={PopeBackground} alt="pope" />
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
