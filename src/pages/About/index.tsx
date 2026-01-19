import { useTranslation } from 'react-i18next';
import './About.css';

const About = () => {
  const { t } = useTranslation(['navigation', 'about']);

  return (
    <div className="about-page">
      <div className="container">
        <h1 className="page-title">{t('about')}</h1>
        <div className="about-content">
          <div className="about-hero">
            <h2 className="about-company">{t('about:companyName')}</h2>
          </div>

          <section className="about-section">
            <h3 className="about-section-title">{t('about:sections.companyProfile.title')}</h3>
            <p className="about-paragraph">{t('about:sections.companyProfile.body')}</p>
          </section>

          <section className="about-section">
            <h3 className="about-section-title">{t('about:sections.valueCreation.title')}</h3>
            <ol className="about-list">
              {[0, 1, 2].map((idx) => (
                <li key={idx} className="about-list-item">
                  <h4 className="about-list-title">{t(`about:sections.valueCreation.items.${idx}.title`)}</h4>
                  <p className="about-paragraph">{t(`about:sections.valueCreation.items.${idx}.body`)}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="about-section">
            <h3 className="about-section-title">{t('about:sections.ourCommitment.title')}</h3>
            <p className="about-paragraph">{t('about:sections.ourCommitment.body')}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
