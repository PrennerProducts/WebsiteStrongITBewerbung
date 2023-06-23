import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

export default function MyNavbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown, setDropdown] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenue = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth >= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const changeNavBackground = () => {
    if (window.scrollY > 1000) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
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
    window.addEventListener('resize', showButton);
    window.addEventListener('scroll', changeNavBackground);
    return () => {
      window.removeEventListener('resize', showButton);
      window.removeEventListener('scroll', changeNavBackground);
    };
  }, []);

  return (
    <>
      <nav className={'navbar'}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenue}>
            <img
              className="logo1"
              src="/images/logo-white.png"
              alt="bug"
              height={90}
            />
            <h1 style={{ marginLeft: '30px' }}> &lt;lukasPrenner&gt; </h1>
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
                to="/whoami"
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
                    <Link to="/documents/bewerbung.pdf" target="_blank">
                      Application PDF
                    </Link>
                  </li>
                  <li>
                    <Link to="/documents/lebenslauf.pdf" target="_blank">
                      CV PDF
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="nav-item">
              <a
                href="https://github.com/PrennerProducts"
                className="nav-links"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/github.png"
                  alt="Github Logo"
                  className="github-logo"
                />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
