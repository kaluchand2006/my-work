import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-light);
`;

const Card = styled(motion.div)`
  background: #232323;
  padding: 3rem 2rem;
  border-radius: 20px;
  box-shadow: 0 4px 32px rgba(0,0,0,0.10);
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 480px;
`;

const ProfileImg = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  border: 4px solid var(--accent);
  box-shadow: 0 2px 12px rgba(0,0,0,0.10);
`;

const Name = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--accent);
  font-family: 'Poppins', system-ui, sans-serif;
`;

const Bio = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  text-align: center;
  margin-bottom: 1.2rem;
  font-family: 'Poppins', system-ui, sans-serif;
`;

const Education = styled.p`
  font-size: 1.05rem;
  color: var(--accent);
  background: rgba(245,176,65,0.08);
  border-left: 4px solid var(--accent);
  padding: 0.8rem 1rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
  font-family: 'Poppins', system-ui, sans-serif;
`;

function About() {
  return (
    <Wrapper>
      <Card
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <ProfileImg src={'/src/assets/IMG_0034.JPG'} alt="Photographer" />
        <Name>Aashish Chand</Name>
        <Bio>
          I am a passionate photographer and videographer dedicated to capturing your most precious moments with creativity and professionalism. My mission is to turn fleeting moments into lasting memories.
        </Bio>
        <Education>
          I am Aashish Chand. Currently, reading Bachelor in Information Technology at Model Institute of Technology, Bagbazzar.
        </Education>
      </Card>
    </Wrapper>
  );
}

export default About; 