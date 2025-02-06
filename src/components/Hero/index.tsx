import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Select } from 'antd';

const HeroContainer = styled.section`
  display: flex;
  justify-content: center;
  background: #FAFBFF;
  padding-top: 80px;
  min-height: 800px;
`;

const HeroContent = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 3rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Content = styled.div`
  flex: 1;
  max-width: 720px;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  color: #0A2AB3;
  margin-bottom: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 3.5rem;
  font-weight: 500;
  line-height: 1.6;
  max-width: 680px;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SearchBox = styled(motion.div)`
  background: white;
  padding: 0.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04),
              0 0 0 2px rgba(10, 42, 179, 0.03),
              0 0 20px rgba(10, 42, 179, 0.06);
  display: flex;
  gap: 0.5rem;
  width: 720px;
  transition: all 0.3s ease;

  &:focus-within {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04),
                0 0 0 2px rgba(10, 42, 179, 0.06),
                0 0 30px rgba(10, 42, 179, 0.1);
  }
`;

const SelectWrapper = styled.div`
  width: 180px;
  position: relative;
  
  .ant-select {
    width: 100%;
    
    .ant-select-selector {
      height: 48px !important;
      border: none !important;
      box-shadow: none !important;
      padding: 0 16px !important;
      display: flex;
      align-items: center;
      
      .ant-select-selection-item {
        line-height: 1 !important;
        font-weight: 500;
        color: #333;
      }
    }

    .ant-select-arrow {
      position: absolute;
      right: 16px;
      top: 24px;
      transform: none;
      color: #0A2AB3;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
      
      span {
        font-size: 12px;
        line-height: 1;
      }
    }

    .anticon {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      
      svg {
        transition: transform 0.3s ease;
      }
    }

    &.ant-select-open {
      .anticon svg {
        transform: rotate(180deg);
      }
    }
  }
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  padding: 0 1rem;
  font-size: 1rem;
  outline: none;
  color: #333;
  
  &::placeholder {
    color: #999;
  }
`;

const SearchButton = styled(motion.button)`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0A2AB3;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  
  img {
    width: 24px;
    height: 24px;
  }
`;

const HeroImage = styled(motion.img)`
  flex: 1;
  max-width: 420px;
  height: auto;
  margin-left: 2rem;
`;

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const CategoryTitle = styled.div`
  color: #0A2AB3;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  margin: 1rem 0;
  letter-spacing: 0.02em;
`;

const CategoryButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
  padding: 0.5rem;
`;

const CategoryButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.6rem;
  background: linear-gradient(145deg, #ffffff, #f5f7ff);
  border: none;
  border-radius: 16px;
  color: #0A2AB3;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  box-shadow: 
    6px 6px 12px rgba(10, 42, 179, 0.03),
    -6px -6px 12px rgba(255, 255, 255, 0.8),
    inset 0 0 0 1px rgba(10, 42, 179, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    border-radius: inherit;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  img {
    width: 24px;
    height: 24px;
    filter: drop-shadow(0 2px 4px rgba(10, 42, 179, 0.1));
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    background: linear-gradient(145deg, #f5f7ff, #ffffff);
    box-shadow: 
      8px 8px 16px rgba(10, 42, 179, 0.06),
      -8px -8px 16px rgba(255, 255, 255, 0.9),
      inset 0 0 0 1.5px rgba(10, 42, 179, 0.1);
    color: #0A2AB3;
    
    &::before {
      opacity: 1;
    }
    
    img {
      transform: scale(1.1) rotate(-5deg);
    }
  }

  &:active {
    transform: translateY(0);
    background: linear-gradient(145deg, #f0f3ff, #ffffff);
    box-shadow: 
      inset 4px 4px 8px rgba(10, 42, 179, 0.04),
      inset -4px -4px 8px rgba(255, 255, 255, 0.9),
      0 0 0 1.5px rgba(10, 42, 179, 0.1);
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <Content>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Expand your global business
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Adding Value and driving collaboration between our partners across the end-to-end supplychain
          </Subtitle>
          <SearchContainer>
            <SearchBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <SelectWrapper>
                <Select 
                  defaultValue="Company Name" 
                  variant="borderless"
                  suffixIcon={<span style={{ fontSize: '10px' }}>▼</span>}
                />
              </SelectWrapper>
              <SearchInput 
                placeholder="Enter company name to search for a service supplier" 
              />
              <SearchButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src="/herosearch.png" alt="Search" />
              </SearchButton>
            </SearchBox>
            <CategoriesContainer>
              <CategoryTitle>Or browse service catagories</CategoryTitle>
              <CategoryButtons>
                <CategoryButton
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img src="/pacel.png" alt="Pacel" />
                  Pacel
                </CategoryButton>
                <CategoryButton
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img src="/air.png" alt="Air" />
                  Air
                </CategoryButton>
                <CategoryButton
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img src="/sea.png" alt="Sea" />
                  Sea
                </CategoryButton>
                <CategoryButton
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img src="/last-mile-delivery.png" alt="Last-mile delivery" />
                  Last-mile delivery
                </CategoryButton>
              </CategoryButtons>
            </CategoriesContainer>
          </SearchContainer>
        </Content>
        <HeroImage 
          src="/heropic.png" 
          alt="Hero"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero; 