import { useState, useEffect } from 'react';
import apiService from '../API/pixabayImages-api';
import ImageGallery from './ImageGallery';
import Button from './Button/Button';
import Loader from './Loader';
import Modal from './Modal';
import Searchbar from './Searchbar';
import style from './Searchbar/Searchbar.module.css';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const App = () => {
  const [imageName, setImageName] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [showButton, setShowButton] = useState(false);
  const [status, setStatus] = useState(Status.IDLE);
  const [modalImage, setModalImage] = useState('');
  const [imageAlt, setImageAlt] = useState('');
  const [showModal, setShowModal] = useState(false); // Добавлено объявление переменной showModal

  useEffect(() => {
    const fetchData = async () => {
      if (!imageName) return;

      setStatus(Status.PENDING);

      try {
        const { hits, totalHits } = await apiService(imageName, page);

        if (!hits || !Array.isArray(hits)) {
          setStatus(Status.IDLE);
          return alert('No images found for your query.');
        }

        setImages(prevImages => [...prevImages, ...hits]);
        setShowButton(page * 12 < totalHits);
        if (page * 12 >= totalHits) {
          setShowButton(false);
        }
        setStatus(Status.RESOLVED);
      } catch (error) {
        console.log(error);
        setStatus(Status.REJECTED);
      }
    };

    fetchData();
  }, [imageName, page]);

  const handleFormSubmit = imageName => {
    if (!imageName) {
      return;
    }

    setImageName(imageName);
    setPage(1);
    setImages([]);
    setShowModal(false);
    setStatus(Status.IDLE);
  };

  const loadMoreImages = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleModalImage = event => {
    setModalImage(event);
  };

  const handleModalAlt = event => {
    setImageAlt(event);
  };

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      {status === Status.IDLE && (
        <h2 className={style.EmptySearch}>Search something!</h2>
      )}
      {status === Status.PENDING && <Loader />}
      {images.length > 0 && (
        <ImageGallery
          showModal={toggleModal}
          images={images}
          handleModalImage={handleModalImage}
          handleModalAlt={handleModalAlt}
        />
      )}
      {status === Status.RESOLVED && images.length > 0 && showButton && (
        <Button onLoadMore={loadMoreImages} />
      )}

      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={modalImage} alt={imageAlt} />
        </Modal>
      )}
    </>
  );
};

export default App;
