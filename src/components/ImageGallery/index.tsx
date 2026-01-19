import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ImageLightbox from '../ImageLightbox';
import { getImageNameFromPath } from '../../utils/imageLoader';
import './ImageGallery.css';

interface ImageGalleryProps {
  images: string[];
  categoryName?: string;
}

const ImageGallery = ({ images, categoryName }: ImageGalleryProps) => {
  const { t } = useTranslation('common');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  if (images.length === 0) {
    return (
      <div className="image-gallery-empty">
        <p>{t('noProducts')}</p>
      </div>
    );
  }

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const goToPrevious = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedImageIndex !== null && selectedImageIndex < images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  return (
    <>
      <div className="image-gallery">
        {images.map((image, index) => (
          <div
            key={index}
            className="image-gallery-item"
            onClick={() => openLightbox(index)}
          >
            <img
              src={image}
              alt={getImageNameFromPath(image)}
              title={getImageNameFromPath(image)}
              className="image-gallery-image"
              loading="lazy"
            />
            <div className="image-gallery-overlay">
              <span className="image-gallery-name">{getImageNameFromPath(image)}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedImageIndex !== null && (
        <ImageLightbox
          images={images}
          currentIndex={selectedImageIndex}
          onClose={closeLightbox}
          onPrevious={goToPrevious}
          onNext={goToNext}
          categoryName={categoryName}
        />
      )}
    </>
  );
};

export default ImageGallery;
