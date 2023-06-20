import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ image, toggleModal }) => {
  const { webformatURL, tags, largeImageURL } = image;

  const handleClick = () => {
    toggleModal(largeImageURL);
  };

  return (
    <li className="ImageGalleryItem">
      <img
        className="ImageGalleryItem-image"
        src={webformatURL}
        alt={tags}
        onClick={handleClick}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  toggleModal: PropTypes.func.isRequired,
};
