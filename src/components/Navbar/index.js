import React, { useState } from 'react';
import cdwLogo from '../../assets/logos/cdwLogo.png'
import logoImage from '../../assets/logos/codesNgearsText.svg';
import { APP_CONSTANTS } from '../../constants/app.constants';
import "./style.scss"

const Navbar = () => {
  const navbarConstants = APP_CONSTANTS.NAVBAR_COMPONENTS;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const navItems = [
    { label: navbarConstants.home_label, key: navbarConstants.home_key },
    { label: navbarConstants.event_label, key: navbarConstants.event_key },
    { label: navbarConstants.participants_label, key: navbarConstants.participants_key },
    { label: navbarConstants.antcendents_label, key: navbarConstants.antcendents_key },
    { label: navbarConstants.juries_label, key: navbarConstants.juries_key },
    { label: navbarConstants.committees_label, key: navbarConstants.committees_key },
  ];

  const handleClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center bg-black lg:px-12 px-6 py-5 lg:py-6">
      <div className="menu-bar">
        <div className="w-[139px]">
          <img className="logo-cneter object-contain w-full h-full" src={logoImage} alt="Codes and Gears - 2024" />
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar firstBar"></span>
          <span className="bar"></span>
          <span className="bar thirdBar"></span>
        </div>
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="close-icon" onClick={() => setIsMenuOpen(false)}>
            X
          </div>
          <ul className="nav-links">
            {navItems.map((item, index) => (
              <React.Fragment key={item.key}>
                <li
                  className={`nav-item ${
                    activeLink === item.key ? "active" : ""
                  }`}
                  onClick={() => handleClick(item.key)}
                >
                  {item.label}
                  <span className="underline"></span>
                </li>
                {index !== navItems.length - 1 && <li className="divider"></li>}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <img className="w-[45px] lg:w-[60px] object-contain h-full" src={cdwLogo} alt="CDW logo" />
      </div>
    </nav>
  );
};

export default Navbar;