import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { productCategories } from '../../data/products';
import ProductCard from '../../components/ProductCard';
import './Products.css';

const Products = () => {
  const { t, i18n } = useTranslation(['products', 'navigation']);
  const currentLang = i18n.language;
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const getCategoryName = (category: typeof productCategories[0]) => {
    return currentLang === 'fr' ? category.nameFr : category.nameEn;
  };

  const filteredCategories = selectedCategory
    ? productCategories.filter(cat => cat.id === selectedCategory)
    : productCategories;

  return (
    <div className="products-page">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/" className="breadcrumb-link">{t('navigation:home')}</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">{t('navigation:products')}</span>
        </nav>

        {/* Page Header */}
        <div className="page-header">
          <h1 className="page-title">{t('navigation:products')}</h1>
          <p className="page-description">
            {currentLang === 'fr'
              ? 'Découvrez notre large gamme de pièces mécaniques de haute qualité'
              : 'Explore our wide range of high-quality mechanical parts'}
          </p>
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          <button
            className={`filter-button ${selectedCategory === null ? 'active' : ''}`}
            onClick={() => setSelectedCategory(null)}
          >
            {t('allProducts')}
          </button>
          {productCategories.map((category) => (
            <button
              key={category.id}
              className={`filter-button ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {getCategoryName(category)}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {filteredCategories.map((category) => {
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
    </div>
  );
};

export default Products;
