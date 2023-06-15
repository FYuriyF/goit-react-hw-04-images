import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery = ({
  images,
  handleModalImage,
  handleModalAlt,
  showModal,
}) => {
  const handleOpenModal = (largeImageURL, tags) => {
    handleModalImage(largeImageURL);
    handleModalAlt(tags);
    showModal();
  };

  return (
    <section>
      <h2 className="visually-hidden">Галерея изображений</h2>
      <ul className={css.list}>
        {images.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
            onOpenModal={handleOpenModal}
          />
        ))}
      </ul>
    </section>
  );
};

export default ImageGallery;
