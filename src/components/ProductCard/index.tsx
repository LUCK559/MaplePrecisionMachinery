import { Link } from 'react-router-dom';
import './ProductCard.css';

interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  categoryPath: string;
  onClick?: () => void;
}

const ProductCard = ({ image, title, categoryPath, onClick }: ProductCardProps) => {
  return (
    <Link
      to={categoryPath}
      className="product-card"
      onClick={onClick}
    >
      <div className="product-card-image-wrapper">
        <img
          src={image}
          alt={title}
          className="product-card-image"
          loading="lazy"
        />
        <div className="product-card-overlay">
          <span className="product-card-view-text">View Products</span>
        </div>
      </div>
      <div className="product-card-content">
        <h3 className="product-card-title">{title}</h3>
      </div>
    </Link>
  );
};

export default ProductCard;
