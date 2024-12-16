import PropTypes from "prop-types";
import { Slide } from "react-slideshow-image";
import styles from "./ImageSlider.module.scss";

function ImageSlider({ images }) {
  return (
    <>
      <Slide className={styles.slider}
        autoplay={true}
        duration={3000}
      >
        {images.map((image, index) => (
          <div
            key={image?.id ?? index}
            className={styles.image}
            style={{
              backgroundImage: `url(${image?.url})`,
            }}
          ></div>
        ))}
      </Slide>
    </>
  );
}

ImageSlider.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageSlider;
