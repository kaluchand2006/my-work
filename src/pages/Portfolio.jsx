import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: 1.2rem;
  color: #444;
  max-width: 600px;
  text-align: center;
`;

function Portfolio() {
  return (
    <Wrapper>
      <Title>Portfolio</Title>
      <Text>
        Explore our collection of photography and videography projects. (Gallery coming soon)
      </Text>
    </Wrapper>
  );
}

export default Portfolio; 