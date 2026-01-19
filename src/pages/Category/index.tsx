import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getCategoryById, getSubCategoryById } from '../../data/products';
import { getImagesByCategory } from '../../data/imageMapping';
import ImageGallery from '../../components/ImageGallery';
import './Category.css';

const Category = () => {
  const { categoryId, subCategoryId } = useParams<{
    categoryId: string;
    subCategoryId?: string;
  }>();
  const { t, i18n } = useTranslation(['products', 'navigation']);
  const currentLang = i18n.language;

  const category = categoryId ? getCategoryById(categoryId) : undefined;
  const subCategory = categoryId && subCategoryId
    ? getSubCategoryById(categoryId, subCategoryId)
    : undefined;

  if (!category) {
    return (
      <div className="category-page">
        <div className="container">
          <p>Category not found</p>
        </div>
      </div>
    );
  }

  const displayCategory = subCategory || category;
  const categoryName = currentLang === 'fr'
    ? (subCategory ? subCategory.nameFr : category.nameFr)
    : (subCategory ? subCategory.nameEn : category.nameEn);
  const categoryDescription = currentLang === 'fr'
    ? category.descriptionFr
    : category.descriptionEn;

  // 获取图片列表：如果有子分类ID，获取子分类图片；否则获取主分类图片
  const images = getImagesByCategory(category.id, subCategoryId);

  return (
    <div className="category-page">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/" className="breadcrumb-link">{t('navigation:home')}</Link>
          <span className="breadcrumb-separator">/</span>
          <Link to="/products" className="breadcrumb-link">{t('navigation:products')}</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">{categoryName}</span>
        </nav>

        {/* Category Header */}
        <div className="category-header">
          <h1 className="category-title">{categoryName}</h1>
          {categoryDescription && (
            <p className="category-description">{categoryDescription}</p>
          )}
        </div>

        {/* Subcategories Navigation */}
        {category.subCategories && category.subCategories.length > 0 && !subCategoryId && (
          <div className="subcategories-nav">
            <h2 className="subcategories-title">
              {currentLang === 'fr' ? 'Sous-catégories' : 'Subcategories'}
            </h2>
            <div className="subcategories-grid">
              {category.subCategories.map((sub) => {
                const subImages = getImagesByCategory(category.id, sub.id);
                const coverImage = subImages.length > 0 ? subImages[0] : '';
                return (
                  <Link
                    key={sub.id}
                    to={`${category.path}/${sub.id}`}
                    className="subcategory-card"
                  >
                    {coverImage && (
                      <div className="subcategory-image-wrapper">
                        <img
                          src={coverImage}
                          alt={currentLang === 'fr' ? sub.nameFr : sub.nameEn}
                          className="subcategory-image"
                        />
                      </div>
                    )}
                    <h3 className="subcategory-name">
                      {currentLang === 'fr' ? sub.nameFr : sub.nameEn}
                    </h3>
                    <p className="subcategory-count">
                      {subImages.length} {currentLang === 'fr' ? 'images' : 'images'}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* Back to main category link (when viewing subcategory) */}
        {subCategoryId && (
          <div className="back-to-category">
            <Link to={category.path} className="back-link">
              ← {currentLang === 'fr' ? 'Retour à' : 'Back to'} {currentLang === 'fr' ? category.nameFr : category.nameEn}
            </Link>
          </div>
        )}

        {/* Image Gallery */}
        {images.length > 0 ? (
          <div className="category-gallery">
            <ImageGallery images={images} categoryName={categoryName} />
          </div>
        ) : (
          <div className="no-images">
            <p>{currentLang === 'fr' ? 'Aucune image disponible' : 'No images available'}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
