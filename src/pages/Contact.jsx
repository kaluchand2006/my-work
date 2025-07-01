import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(120deg, #232323 60%, #181818 100%);
  padding: 2rem 0;
`;

const Card = styled(motion.div)`
  background: #232323;
  padding: 2.5rem 2rem;
  border-radius: 20px;
  box-shadow: 0 4px 32px rgba(0,0,0,0.10);
  max-width: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  @media (min-width: 700px) {
    flex-direction: row;
    gap: 3rem;
    padding: 2.5rem 3rem;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2rem;
`;

const Right = styled.div`
  flex: 1.2;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.7rem;
  color: var(--accent);
  font-family: 'Poppins', system-ui, sans-serif;
`;

const Divider = styled.hr`
  border: none;
  border-top: 2px solid var(--accent);
  width: 40px;
  margin: 0 0 1.5rem 0;
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  color: var(--accent);
  font-size: 1.08rem;
  font-weight: 500;
  font-family: 'Poppins', system-ui, sans-serif;
`;

const InfoIcon = styled.span`
  font-size: 1.5rem;
  background: rgba(245,176,65,0.12);
  border-radius: 50%;
  padding: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InfoLink = styled.a`
  color: var(--accent);
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
    color: var(--accent-dark);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Input = styled.input`
  padding: 0.8rem 1rem;
  border-radius: 8px;
  border: 1px solid #444;
  font-size: 1rem;
  background: #181818;
  color: var(--text-main);
`;

const Textarea = styled.textarea`
  padding: 0.8rem 1rem;
  border-radius: 8px;
  border: 1px solid #444;
  font-size: 1rem;
  min-height: 100px;
  background: #181818;
  color: var(--text-main);
`;

const Button = styled.button`
  padding: 0.8rem 1rem;
  border-radius: 8px;
  border: none;
  background: var(--accent);
  color: var(--primary);
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: var(--accent-dark);
    color: #fff;
  }
`;

function Contact() {
  return (
    <Wrapper>
      <Card
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Left>
          <div>
            <Title>Contact Us</Title>
            <Divider />
          </div>
          <InfoBlock>
            <InfoRow>
              <InfoIcon>📧</InfoIcon>
              <InfoLink href="mailto:aashishchand1001@gmail.com">aashishchand1001@gmail.com</InfoLink>
            </InfoRow>
            <InfoRow>
              <InfoIcon>📱</InfoIcon>
              <span>+977 9812785134</span>
            </InfoRow>
          </InfoBlock>
        </Left>
        <Right>
          <Form>
            <Input type="text" placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
            <Textarea placeholder="Your Message" required />
            <Button type="submit">Send Message</Button>
          </Form>
        </Right>
      </Card>
    </Wrapper>
  );
}

export default Contact; 