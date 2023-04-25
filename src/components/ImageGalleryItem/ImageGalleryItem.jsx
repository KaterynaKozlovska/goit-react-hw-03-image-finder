import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({
  imageUrl,
  imageTag,
  largeimageurl,
  getItemContent,
  id,
}) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItem__image}
        src={imageUrl}
        alt={imageTag}
        largeimageurl={largeimageurl}
        onClick={() => getItemContent(largeimageurl, imageTag)}
        id={id}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageTag: PropTypes.string.isRequired,
  largeimageurl: PropTypes.string,
  id: PropTypes.number.isRequired,
  getItemContent: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
