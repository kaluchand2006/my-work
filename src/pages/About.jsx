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

function About() {
  return (
    <Wrapper>
      <Title>About Us</Title>
      <Text>
        We are a team of passionate photographers and videographers dedicated to capturing your most precious moments with creativity and professionalism.
      </Text>
    </Wrapper>
  );
}

export default About; 