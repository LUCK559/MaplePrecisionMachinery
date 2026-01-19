import { useTranslation } from 'react-i18next';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation(['navigation', 'contact']);

  return (
    <div className="contact-page">
      <div className="container">
        <h1 className="page-title">{t('contact')}</h1>
        <div className="contact-content">
          <section className="contact-section">
            <h3 className="contact-section-title">{t('contact:sections.Telephone Number.title')}</h3>
            <p className="contact-paragraph">{t('contact:sections.Telephone Number.body')}</p>
          </section>
          <section className="contact-section">
            <h3 className="contact-section-title">{t('contact:sections.Email.title')}</h3>
            <p className="contact-paragraph">{t('contact:sections.Email.body')}</p>
            <p className="contact-paragraph">{t('contact:sections.Email.body2')}</p>
          </section>
          <section className="contact-section">
            <h3 className="contact-section-title">{t('contact:sections.Website.title')}</h3>
            <p className="contact-paragraph">{t('contact:sections.Website.body')}</p>
          </section>
          <section className="contact-section">
            <h3 className="contact-section-title">{t('contact:sections.Address.title')}</h3>
            <p className="contact-paragraph">{t('contact:sections.Address.body')}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
