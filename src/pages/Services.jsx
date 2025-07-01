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

function Services() {
  return (
    <Wrapper>
      <Title>Our Services</Title>
      <Text>
        We offer a range of photography and videography services tailored to your needs. (Details coming soon)
      </Text>
    </Wrapper>
  );
}

export default Services; 