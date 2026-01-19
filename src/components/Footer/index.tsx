import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation('navigation');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Maple Precision Machinery Ltd</h3>
            <p className="footer-description">
              Professional cross-border machinery parts supplier
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <nav className="footer-nav">
              <Link to="/" className="footer-link">{t('home')}</Link>
              <Link to="/products" className="footer-link">{t('products')}</Link>
              <Link to="/about" className="footer-link">{t('about')}</Link>
              <Link to="/contact" className="footer-link">{t('contact')}</Link>
            </nav>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <p className="footer-text">Email: ddp.163@163.com    &    peter@precisioncastings.ca</p>
            <p className="footer-text">Phone: (604)999-7249</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Maple Precision Machinery Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
