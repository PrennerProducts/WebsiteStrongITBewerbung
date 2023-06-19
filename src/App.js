import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';

import MyNavbar from './components/Navbar';
import Home from './components/pages/Home';
import UeberMich from './components/pages/UeberMich';
// import Gallerie from './components/pages/Gallerie.js';
// import Contact from './components/pages/Contact.js';
// import Footer from './components/pages/Footer.js';
// import Impressum from './components/pages/impressum.js';
// import ErrorPage from './error-page.js';
import HeroSection from './components/HeroSection';
import { Navbar } from 'react-bootstrap';

import './index.css';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import Downlaods from './components/pages/Downloads';

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        {loading ? (
          <div
            className="spinner"
            style={{
              background:
                'linear-gradient(90deg, rgba(238, 9, 229, 1) 0%, rgba(139, 9, 238, 1) 48%, rgba(6, 181, 242, 0.9332107843137255) 92%)',
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ClimbingBoxLoader
              color={'#ffffff'}
              loading={loading}
              size={30}
              css={{ display: 'block', margin: '0 auto' }}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          <div className="app-route">
            {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}

            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="uebermich" element={<UeberMich />} />
                <Route path="downloads" element={<Downlaods />} />
                {/* <Route path="contact" element={<Contact />} />
              <Route path="impressum" element={<Impressum />} /> */}

                {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
                <Route path="*" element={<NoMatch />} />
              </Route>
            </Routes>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <MyNavbar />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
