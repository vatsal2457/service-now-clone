import React, { useState } from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <a href="/" className={styles.logo}>
            ServiceNow
          </a>
        </div>

        {/* Main Navigation */}
        <nav className={styles.mainNav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink}>Solutions</a>
            </li>
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink}>Products</a>
            </li>
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink}>Platform</a>
            </li>
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink}>Resources</a>
            </li>
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink}>Company</a>
            </li>
          </ul>
        </nav>

        {/* Right Section */}
        <div className={styles.headerRight}>
          <div className={styles.searchContainer}>
            <button className={styles.searchButton}>
              <span className={styles.searchIcon}>🔍</span>
            </button>
          </div>
          <div className={styles.authButtons}>
            <button className={styles.loginButton}>Login</button>
            <button className={styles.contactButton}>Contact Sales</button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={styles.mobileMenuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}></span>
        </button>
      </div>
    </header>
  );
};

export default Header; 