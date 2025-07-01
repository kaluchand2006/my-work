import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Contact from './pages/Contact';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  width: 100%;
  background: var(--secondary);
  padding: 1.2rem 0;
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  position: sticky;
  top: 0;
  z-index: 10;
`;

const NavLink = styled(Link)`
  color: var(--text-main);
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 1px;
  transition: color 0.2s;
  &:hover {
    color: var(--accent);
  }
`;

const Footer = styled.footer`
  width: 100%;
  background: var(--secondary);
  color: var(--text-secondary);
  text-align: center;
  padding: 1.2rem 0 1rem 0;
  font-size: 1rem;
  margin-top: 2rem;
  letter-spacing: 1px;
`;

function App() {
  return (
    <Router>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer>
        &copy; {new Date().getFullYear()} Aashish Chand Photography & Videography. All rights reserved.
      </Footer>
    </Router>
  );
}

export default App
