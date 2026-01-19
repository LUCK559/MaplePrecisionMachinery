import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getImageNameFromPath } from '../../utils/imageLoader';
import './ImageLightbox.css';

interface ImageLightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  categoryName?: string;
}

const ImageLightbox = ({
  images,
  currentIndex,
  onClose,
  onPrevious,
  onNext,
  categoryName,
}: ImageLightboxProps) => {
  const { t } = useTranslation('common');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onPrevious();
      } else if (e.key === 'ArrowRight') {
        onNext();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onPrevious, onNext]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="image-lightbox" onClick={handleBackdropClick}>
      <button className="image-lightbox-close" onClick={onClose} aria-label={t('close')}>
        ✕
      </button>

      {currentIndex > 0 && (
        <button
          className="image-lightbox-nav image-lightbox-prev"
          onClick={onPrevious}
          aria-label={t('previous')}
        >
          ‹
        </button>
      )}

      <div className="image-lightbox-content">
        <img
          src={images[currentIndex]}
          alt={getImageNameFromPath(images[currentIndex])}
          className="image-lightbox-image"
        />
        <div className="image-lightbox-info">
          <div className="image-lightbox-name">
            {getImageNameFromPath(images[currentIndex])}
          </div>
          <span className="image-lightbox-counter">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      </div>

      {currentIndex < images.length - 1 && (
        <button
          className="image-lightbox-nav image-lightbox-next"
          onClick={onNext}
          aria-label={t('next')}
        >
          ›
        </button>
      )}
    </div>
  );
};

export default ImageLightbox;
