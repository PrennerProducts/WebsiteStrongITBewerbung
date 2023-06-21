import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import './Navbar.css';

export default function MyNavbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img
              className="logo1"
              src="/images/logo-white.png"
              alt="bug"
              height={90}
            />
            <h1 style={{ marginLeft: '30px' }}> &lt;lukasPrenner&gt; </h1>
          </Link>
          <div className="menu-icon">
            <FaBars />
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to={'/'} className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/whoami" className="nav-links">
                WhoAmI
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/downloads" className="nav-links">
                Downloads
              </Link>
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
