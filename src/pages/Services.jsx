import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 80vh;
  padding: 3rem 2vw 2rem 2vw;
  background: #f8f8f8;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Icon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const Desc = styled.p`
  font-size: 1rem;
  color: #555;
`;

function Services() {
  return (
    <Wrapper>
      <Title>Our Services</Title>
      <Grid>
        <Card>
          <Icon>📸</Icon>
          <ServiceTitle>Photography</ServiceTitle>
          <Desc>Professional photoshoots for events, portraits, products, and more.</Desc>
        </Card>
        <Card>
          <Icon>🎥</Icon>
          <ServiceTitle>Videography</ServiceTitle>
          <Desc>High-quality video production for weddings, commercials, and special occasions.</Desc>
        </Card>
        <Card>
          <Icon>🖼️</Icon>
          <ServiceTitle>Editing & Retouching</ServiceTitle>
          <Desc>Expert photo and video editing to make your memories shine.</Desc>
        </Card>
        <Card>
          <Icon>🌐</Icon>
          <ServiceTitle>Online Delivery</ServiceTitle>
          <Desc>Fast, secure digital delivery of your photos and videos.</Desc>
        </Card>
      </Grid>
    </Wrapper>
  );
}

export default Services; 