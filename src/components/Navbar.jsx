import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Button } from './Button';
import { FaBars, FaTimes } from 'react-icons/fa';
import { GiRocketThruster } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import './Navbar.css';

export default function MyNavbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenue = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth >= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const onMouseEnter = () => {
    if (window.innerWidth >= 960) {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth >= 960) {
      setDropdown(false);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenue}>
            <img
              className="logo1"
              src="/images/logo-white.png"
              alt="bug"
              height={65}
            />
            <h1 style={{ marginLeft: '30px' }}> &lt;lukas&gt; </h1>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to={'/'} className="nav-links" onClick={closeMobileMenue}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/uebermich"
                className="nav-links"
                onClick={closeMobileMenue}
              >
                WhoAmI
              </Link>
            </li>
            <li
              className="nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to="/downloads"
                className="nav-links"
                onClick={closeMobileMenue}
              >
                Downloads {dropdown ? <FaTimes /> : <FaBars />}
              </Link>
              {dropdown && (
                <ul>
                  <li>
                    <Link to="/file1">Bewerbung PDF</Link>
                  </li>
                  <li>
                    <Link to="/file2">Lebenslauf PDF</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenue}
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}