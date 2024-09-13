import { useState } from 'react';
import '../styles/Equipe.modules.css';
import Murillo from '../img/banner-murillo.png';
import Vitor from '../img/banner-vitor.png';
import Samuel from '../img/banner-samuel.png';

const images = [Murillo, Vitor, Samuel];

const Equipe: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <button onClick={handlePrev}>Anterior</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <button onClick={handleNext}>Próximo</button>
    </div>
  );
};

export default Equipe;
