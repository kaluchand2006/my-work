import styled from 'styled-components';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const allImages = [
  'IMG_0034.JPG', 'IMG_0020.JPG', 'IMG_0016.JPG', 'IMG_0025.JPG', 'IMG_0008.JPG',
  'IMG_0023.JPG', 'IMG_0030.JPG', 'IMG_0036.JPG', 'IMG_0010.JPG', 'IMG_0015.JPG',
  'IMG_0012.JPG', 'IMG_0039.JPG', 'IMG_0033.JPG', 'IMG_0022.JPG', 'IMG_0026.JPG',
  'IMG_0029.JPG', 'IMG_0042.JPG', 'IMG_0014.JPG', 'IMG_0028.JPG', 'IMG_0018.JPG',
  'IMG_0031.JPG', 'IMG_0032.JPG', 'IMG_0037.JPG', 'IMG_0041.JPG', 'IMG_0013.JPG',
  'IMG_0019.JPG', 'IMG_0009.JPG', 'IMG_0024.JPG', 'IMG_0017.JPG', 'IMG_0035.JPG',
  'IMG_0021.JPG', 'IMG_0011.JPG', 'IMG_0027.JPG', 'IMG_0040.JPG'
];

const previewImages = allImages.slice(0, 3);

const Hero = styled.section`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('/src/assets/IMG_0032.JPG') center/cover no-repeat;
  position: relative;
  font-family: 'Poppins', system-ui, sans-serif;
  overflow: hidden;
`;

const ParallaxBg = styled(motion.div)`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: inherit;
  z-index: 0;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, rgba(24,24,24,0.85) 60%, rgba(245,176,65,0.3) 100%);
  z-index: 1;
`;

const Content = styled(motion.div)`
  position: relative;
  z-index: 2;
  color: var(--text-main);
  text-align: center;
  font-family: 'Poppins', system-ui, sans-serif;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing: 2px;
  color: var(--accent);
  font-family: 'Poppins', system-ui, sans-serif;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: var(--text-secondary);
  font-family: 'Poppins', system-ui, sans-serif;
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  padding: 0.75rem 2rem;
  background: var(--accent);
  color: var(--primary);
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 30px;
  text-decoration: none;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
  transition: background 0.2s, color 0.2s;
  font-family: 'Poppins', system-ui, sans-serif;
  &:hover {
    background: var(--accent-dark);
    color: #fff;
  }
`;

const Section = styled.section`
  width: 100%;
  padding: 4rem 0 3rem 0;
  background: ${({ bg }) => bg || 'var(--bg-light)'};
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Poppins', system-ui, sans-serif;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: var(--accent);
  font-weight: 700;
  margin-bottom: 1.5rem;
  font-family: 'Poppins', system-ui, sans-serif;
`;

const AboutText = styled.p`
  max-width: 600px;
  color: var(--text-secondary);
  font-size: 1.1rem;
  text-align: center;
  font-family: 'Poppins', system-ui, sans-serif;
`;

const Gallery = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const GalleryImg = styled(motion.img)`
  width: 180px;
  height: 120px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.10);
  border: 2px solid transparent;
  transition: box-shadow 0.2s, border 0.2s, transform 0.2s;
  font-family: 'Poppins', system-ui, sans-serif;
  cursor: pointer;
  &:hover {
    box-shadow: 0 6px 32px rgba(245,176,65,0.18), 0 2px 12px rgba(0,0,0,0.14);
    border: 2px solid var(--accent);
    transform: scale(1.09) rotate(-2deg);
  }
`;

const ServicesGrid = styled.div`
  display: flex;
  gap: 2.5rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const ServiceCard = styled.div`
  background: #232323;
  border-radius: 14px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.10);
  padding: 1.5rem 1.2rem;
  min-width: 180px;
  text-align: center;
  color: var(--text-main);
  font-family: 'Poppins', system-ui, sans-serif;
  transition: box-shadow 0.2s, border 0.2s, transform 0.2s;
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'default')};
  border: 2px solid transparent;
  &:hover {
    box-shadow: 0 4px 24px rgba(245,176,65,0.18), 0 2px 12px rgba(0,0,0,0.14);
    border: ${({ clickable }) => (clickable ? '2px solid var(--accent)' : '2px solid transparent')};
    transform: ${({ clickable }) => (clickable ? 'scale(1.04)' : 'none')};
  }
`;

const ServiceIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
  color: var(--accent);
  font-family: 'Poppins', system-ui, sans-serif;
`;

const ServiceDesc = styled.p`
  font-size: 0.98rem;
  color: var(--text-secondary);
  font-family: 'Poppins', system-ui, sans-serif;
`;

function Home() {
  const galleryRef = useRef(null);
  const [showAll, setShowAll] = useState(false);
  const handlePhotographyClick = () => {
    setShowAll(true);
    if (galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Parallax effect for hero
  const [parallax, setParallax] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setParallax(window.scrollY * 0.2);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation for gallery images on scroll
  const galleryInViewRef = useRef(null);
  const isInView = useInView(galleryInViewRef, { once: true, margin: '-100px' });
  const controls = useAnimation();
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <div>
      <Hero>
        <ParallaxBg
          style={{ y: parallax, backgroundPosition: `center ${parallax}px` }}
        />
        <Overlay />
        <Content
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Title>Capturing Moments, Creating Stories</Title>
          <Subtitle
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            Professional Photography & Videography Services
          </Subtitle>
          <CTAButton
            href="/portfolio"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
          >
            View Portfolio
          </CTAButton>
        </Content>
      </Hero>
      <Section bg="var(--bg-dark)">
        <SectionTitle>About Me</SectionTitle>
        <AboutText>
          I am a passionate photographer and videographer dedicated to capturing your most precious moments with creativity and professionalism. My mission is to turn fleeting moments into lasting memories.
        </AboutText>
      </Section>
      <Section ref={galleryRef}>
        <SectionTitle>Featured Work</SectionTitle>
        <Gallery ref={galleryInViewRef}>
          {(showAll ? allImages : previewImages).map((img, i) => (
            <GalleryImg
              key={img}
              src={`/src/assets/${img}`}
              alt={`Featured ${i+1}`}
              initial={{ opacity: 0, y: 40 }}
              animate={controls}
              variants={{ visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.09, rotate: -2, boxShadow: '0 6px 32px rgba(245,176,65,0.18), 0 2px 12px rgba(0,0,0,0.14)', borderColor: 'var(--accent)' }}
            />
          ))}
        </Gallery>
      </Section>
      <Section bg="var(--bg-dark)">
        <SectionTitle>Services</SectionTitle>
        <ServicesGrid>
          <ServiceCard clickable onClick={handlePhotographyClick}>
            <ServiceIcon>📸</ServiceIcon>
            <ServiceTitle>Photography</ServiceTitle>
            <ServiceDesc>Professional photoshoots for events, portraits, products, and more.</ServiceDesc>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon>🎥</ServiceIcon>
            <ServiceTitle>Videography</ServiceTitle>
            <ServiceDesc>High-quality video production for weddings, commercials, and special occasions.</ServiceDesc>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon>🖼️</ServiceIcon>
            <ServiceTitle>Editing & Retouching</ServiceTitle>
            <ServiceDesc>Expert photo and video editing to make your memories shine.</ServiceDesc>
          </ServiceCard>
        </ServicesGrid>
      </Section>
    </div>
  );
}

export default Home; 