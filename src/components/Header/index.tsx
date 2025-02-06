import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { keyframes } from '@emotion/react';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  background: white;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const HeaderContent = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 0.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  flex: 1;
`;

const LogoImage = styled(motion.img)`
  height: 50px;
  width: auto;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  flex: 2;
  justify-content: center;
  align-items: center;
`;

const NavItem = styled(motion.a)`
  color: #666;
  font-weight: 600;
  font-size: 0.95rem;
  
  &:hover {
    color: #1a237e;
  }
`;

const breatheAnimation = keyframes`
  0% {
    box-shadow: 0 0 10px rgba(26, 35, 126, 0.2),
                0 0 20px rgba(26, 35, 126, 0.2),
                0 0 30px rgba(26, 35, 126, 0.2);
  }
  50% {
    box-shadow: 0 0 15px rgba(26, 35, 126, 0.5),
                0 0 25px rgba(26, 35, 126, 0.5),
                0 0 35px rgba(26, 35, 126, 0.5);
  }
  100% {
    box-shadow: 0 0 10px rgba(26, 35, 126, 0.2),
                0 0 20px rgba(26, 35, 126, 0.2),
                0 0 30px rgba(26, 35, 126, 0.2);
  }
`;

const ButtonContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled(motion.button)`
  background: linear-gradient(135deg, #1a237e 0%, #3949ab 100%);
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 25px;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  animation: ${breatheAnimation} 3s infinite ease-in-out;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    transform: translateY(-2px);
    background: linear-gradient(135deg, #3949ab 0%, #1a237e 100%);
    box-shadow: 0 5px 15px rgba(26, 35, 126, 0.4);
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoLink to="/">
          <LogoImage
            src="/logo.png"
            alt="Walltech Family"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </LogoLink>
        <Nav>
          <NavItem
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Home
          </NavItem>
          <NavItem
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Company Directory
          </NavItem>
          <NavItem
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Billboard
          </NavItem>
          <NavItem
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            About
          </NavItem>
        </Nav>
        <ButtonContainer>
          <Button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </Button>
        </ButtonContainer>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header; 