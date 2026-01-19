import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { productCategories } from '../../data/products';
import ProductCard from '../../components/ProductCard';
import './Home.css';

const Home = () => {
  const { t, i18n } = useTranslation(['home', 'common']);
  const currentLang = i18n.language;

  const getCategoryName = (category: typeof productCategories[0]) => {
    return currentLang === 'fr' ? category.nameFr : category.nameEn;
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">{t('home:companyName')}</h1>
          <p className="hero-tagline">{t('home:tagline')}</p>
          <p className="hero-description">{t('home:description')}</p>
          <Link to="/products" className="hero-cta">
            {t('home:exploreProducts')}
          </Link>
        </div>
        <div className="hero-image">
          <img
            src="/Product image/MaplePrecisionMachinery.jpg"
            alt="Maple Precision Machinery"
            className="hero-logo"
          />
        </div>
      </section>

      {/* Product Categories Preview */}
      <section className="categories-preview">
        <div className="container">
          <h2 className="section-title">{t('home:exploreProducts')}</h2>
          <div className="categories-grid">
            {productCategories.map((category) => {
              let coverImage = '';

              if (category.imagePath.includes('Cast and forged parts')) {
                coverImage = `${category.imagePath}/Ball valve body.jpg`;
              } else if (category.imagePath.includes('Mechanical equipment and parts BB version data')) {
                coverImage = `${category.imagePath}/Steel casting铸钢件/Cast steel parts for machinery equipment/Cast steel base净重70吨，压力机底座.JPG`;
              } else if (category.imagePath.includes('Ship fittings')) {
                coverImage = `${category.imagePath}/Marine fittings/Aluminum alloy air cap 1.jpg`;
              } else if (category.imagePath.includes('Trailer parts 123')) {
                coverImage = `${category.imagePath}/Trailer parts1.JPG`;
              }

              return (
                <ProductCard
                  key={category.id}
                  id={category.id}
                  image={coverImage}
                  title={getCategoryName(category)}
                  categoryPath={category.path}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="advantages">
        <div className="container">
          <h2 className="section-title">{t('home:ourAdvantages')}</h2>
          <div className="advantages-grid">
            <div className="advantage-card">
              <div className="advantage-icon">🌍</div>
              <h3 className="advantage-title">{t('home:crossBorder')}</h3>
              <p className="advantage-description">
                Extensive experience in international trade and cross-border logistics
              </p>
            </div>
            <div className="advantage-card">
              <div className="advantage-icon">✓</div>
              <h3 className="advantage-title">{t('home:qualityAssurance')}</h3>
              <p className="advantage-description">
                Rigorous quality control processes ensuring premium products
              </p>
            </div>
            <div className="advantage-card">
              <div className="advantage-icon">👥</div>
              <h3 className="advantage-title">{t('home:professionalTeam')}</h3>
              <p className="advantage-description">
                Dedicated professionals committed to customer satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
