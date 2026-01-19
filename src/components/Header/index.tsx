import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher';
import './Header.css';

const Header = () => {
  const { t } = useTranslation('navigation');
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', key: 'home' },
    { path: '/products', key: 'products' },
    { path: '/about', key: 'about' },
    { path: '/contact', key: 'contact' },
  ];

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-link">
          <img 
            src="/Product image/MaplePrecisionMachinery.jpg" 
            alt="Maple Precision Machinery" 
            className="logo"
          />
        </Link>

        <nav className="nav-desktop">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="header-right">
          <LanguageSwitcher />
          <button
            className="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="hamburger-icon">
              {isMobileMenuOpen ? '✕' : '☰'}
            </span>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav className="nav-mobile">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
