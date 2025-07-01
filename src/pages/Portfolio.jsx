import styled from 'styled-components';
import { useState } from 'react';
import { motion } from 'framer-motion';

const images = [
  'IMG_0032.JPG', 'IMG_0031.JPG', 'IMG_0030.JPG', 'IMG_0029.JPG', 'IMG_0028.JPG',
  'IMG_0027.JPG', 'IMG_0026.JPG', 'IMG_0025.JPG', 'IMG_0024.JPG', 'IMG_0023.JPG',
  'IMG_0022.JPG', 'IMG_0021.JPG', 'IMG_0020.JPG', 'IMG_0019.JPG', 'IMG_0018.JPG',
  'IMG_0017.JPG', 'IMG_0016.JPG', 'IMG_0015.JPG', 'IMG_0014.JPG', 'IMG_0013.JPG',
  'IMG_0012.JPG', 'IMG_0011.JPG', 'IMG_0010.JPG', 'IMG_0009.JPG', 'IMG_0008.JPG',
  'IMG_0033.JPG', 'IMG_0034.JPG', 'IMG_0035.JPG', 'IMG_0036.JPG', 'IMG_0037.JPG',
  'IMG_0039.JPG', 'IMG_0040.JPG', 'IMG_0041.JPG', 'IMG_0042.JPG', 'react.svg'
];

const Wrapper = styled.div`
  min-height: 80vh;
  padding: 3rem 2vw 2rem 2vw;
  background: var(--bg-light);
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  color: var(--accent);
`;

const Gallery = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
`;

const ImgCard = styled(motion.div)`
  position: relative;
  overflow: hidden;
  border-radius: 18px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.10);
  cursor: pointer;
  background: #181818;
  transition: box-shadow 0.3s, border 0.3s;
  &:hover {
    box-shadow: 0 4px 32px rgba(245,176,65,0.25), 0 2px 16px rgba(0,0,0,0.18);
    border: 2px solid var(--accent);
  }
`;

const Img = styled(motion.img)`
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
  transition: filter 0.2s;
`;

const HoverOverlay = styled(motion.div)`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(120deg, rgba(24,24,24,0.15) 60%, rgba(245,176,65,0.18) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
  ${ImgCard}:hover & {
    opacity: 1;
  }
`;

const Magnifier = styled.span`
  font-size: 2.2rem;
  color: var(--accent);
  filter: drop-shadow(0 2px 8px #181818);
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(24,24,24,0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalImg = styled.img`
  max-width: 92vw;
  max-height: 82vh;
  border-radius: 18px;
  box-shadow: 0 8px 40px rgba(0,0,0,0.5);
  background: #232323;
`;

function Portfolio() {
  const [modalImg, setModalImg] = useState(null);
  return (
    <Wrapper>
      <Title>Portfolio</Title>
      <Gallery
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {images.map((img, i) => (
          <ImgCard
            key={img}
            whileHover={{ scale: 1.06 }}
            onClick={() => setModalImg(img)}
          >
            <Img
              src={`/src/assets/${img}`}
              alt={`Portfolio ${i+1}`}
              whileHover={{ scale: 1.12 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            />
            <HoverOverlay
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <Magnifier>🔍</Magnifier>
            </HoverOverlay>
          </ImgCard>
        ))}
      </Gallery>
      {modalImg && (
        <ModalOverlay onClick={() => setModalImg(null)}>
          <ModalImg src={`/src/assets/${modalImg}`} alt="Large preview" />
        </ModalOverlay>
      )}
    </Wrapper>
  );
}

export default Portfolio; 