import React from 'react';
import PropTypes from 'prop-types';
import css from '../ImageGallery/ImageGallery.module.css';

const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  onOpenModal,
}) => {
  const handleClick = () => {
    onOpenModal(largeImageURL, tags);
  };

  return (
    <li className={css.item}>
      <img
        src={webformatURL}
        alt={tags}
        data-source={largeImageURL}
        className={css.image}
        onClick={handleClick}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
