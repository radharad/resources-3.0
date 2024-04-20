import { useState } from "react";
import Modal from "./Modal";
import "./styles.css";

const images = [
  {
    image_url:
      "images/certificate.jpg",
    caption: "Image 1"
  },
  {
    image_url:
      "images/certificate.jpg",
    caption: "Image 2"
  },
  {
    image_url:
      "images/certificate.jpg",
    caption: "Image 3"
  },
 
];

export default function Apps() {
  const [active, setActive] = useState(0);
  const [show, setShow] = useState(false);

  const handleClick = (i) => {
    setActive(i);
    setShow(true);
  };

  const onModalClose = () => {
    setShow(false);
  };

  const handleNext = () => {
    if (active < images.length - 1) {
      setActive(active + 1);
    }
  };

  const handlePrev = () => {
    if (active > 0) {
      setActive(active - 1);
    }
  };

  return (
    <div className="App">
      <div className="image-listing">
        {images.map((e, i) => (
          <div
            key={e.caption}
            className={i === active ? "active" : ""}
            onClick={() => handleClick(i)}
          >
            <img alt={e.caption} src={e.image_url} />
          </div>
        ))}
      </div>
      <Modal title="Lightbox" show={show} onClose={onModalClose}>
        <ImageSlider active={active} onNext={handleNext} onPrev={handlePrev} />
      </Modal>
    </div>
  );
}

const ImageSlider = ({ active, onNext, onPrev }) => {
  return (
    <div className="image-slider-wrapper">
      <div className="image-slides">
        {images.map((e, i) => (
          <Slides {...e} key={e.caption} active={i === active} />
        ))}
      </div>
      <div className="image-slider-navigation text-white">
        <span className="image-navigation next" onClick={onNext}>
          &gt;
        </span>
        <span className="image-navigation prev" onClick={onPrev}>
          &lt;
        </span>
      </div>
    </div>
  );
};

const Slides = ({ image_url, caption, active }) => {
  return (
    <div className={`image-slide`}>
      <img src={image_url} alt={caption} className={active ? "active" : ""} />
    </div>
  );
};
