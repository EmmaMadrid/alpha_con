import React, { useState, useEffect } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, signOut } from './firebaseConfig/firebase';

export const Navbar = () => {
  const [user] = useAuthState(auth);
  const [isOpen, setIsOpen] = useState(false);

  const handleSignOut = () => {
    signOut(auth).catch(error => {
      console.error('Error signing out: ', error);
    });
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="src/assets/images/alpha-logo.png" alt="Logo" />
      </div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/passes" onClick={closeMenu}>Buy Passes</Link>
        <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
        <Link to="/mypasses" onClick={closeMenu}>My Passes</Link>
        {user ? (
          <div className={`navbar-user ${isOpen ? '' : 'desktop'}`}>
            <span className="navbar-username">Hola!, {user.displayName || user.email}</span>
            <button className="navbar-signout" onClick={handleSignOut}>Sign Out</button>
          </div>
        ) : (
          <>
            <Link to="/login" className="navbar-signin" onClick={closeMenu}>Sign In</Link>
            <Link to="/register" className="navbar-signup" onClick={closeMenu}>Sign Up</Link>
          </>
        )}
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
