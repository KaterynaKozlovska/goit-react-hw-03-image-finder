import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = () => {
  return (
    <li className={css.ImageGalleryItem}>
      <img className={css.ImageGalleryItem__image} src="" alt="" />
    </li>
  );
};

export default ImageGalleryItem;
