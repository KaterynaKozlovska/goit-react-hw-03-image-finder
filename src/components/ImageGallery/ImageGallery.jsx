import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = () => {
  return (
    <ul className={css.ImageGallery}>
      <ImageGalleryItem />
    </ul>
  );
};

export default ImageGallery;
