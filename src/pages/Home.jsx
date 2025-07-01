import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #555;
`;

function Home() {
  return (
    <Wrapper>
      <Title>Photographer & Videographer Studio</Title>
      <Subtitle>Capturing moments, creating stories.</Subtitle>
    </Wrapper>
  );
}

export default Home; 