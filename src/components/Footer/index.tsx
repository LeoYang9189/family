import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Select } from 'antd';
const { Option } = Select;

const FooterContainer = styled.footer`
  width: 100%;
  background: #FAFBFF;
  padding: 4rem 0;
`;

const FooterContent = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 4rem;
`;

const FooterLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 2rem;
  
  img {
    width: 42px;
    height: 42px;
  }
  
  span {
    font-size: 1.25rem;
    font-weight: 700;
    color: #0A2AB3;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: #666;
  font-size: 1rem;

  p:first-of-type {
    font-weight: 600;
    color: #333;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  
  &:last-child {
    align-items: flex-start;
    
    // 为最后一列的内容添加特定布局
    > div {
      display: flex;
      flex-direction: column;
      gap: 2rem; // 增加内部元素间距
    }
  }
`;

const ColumnTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: #0A2AB3;
  margin-bottom: 1rem;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const FooterLink = styled.a`
  color: #666;
  text-decoration: none;
  transition: color 0.3s ease;
  font-weight: 500;
  
  &:hover {
    color: #0A2AB3;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  a {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #fff;
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    
    img {
      width: 20px;
      height: 20px;
    }
  }
`;

const Copyright = styled.div`
  max-width: 1440px;
  margin: 3rem auto 0;
  padding: 2rem 2rem 0;
  border-top: 1px solid rgba(37, 99, 235, 0.1);
  text-align: center;
  color: #666;
  font-size: 0.875rem;
`;

const ICPLink = styled.a`
  color: #666;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #0A2AB3;
  }
`;

// 添加社交媒体 SVG 图标组件
const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path 
      d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" 
      stroke="#0A2AB3" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path 
      d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" 
      stroke="#0A2AB3" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <rect x="2" y="9" width="4" height="12" stroke="#0A2AB3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="4" cy="4" r="2" stroke="#0A2AB3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path 
      d="M17 2h-3v7.9c0 1.99-1.64 3.61-3.65 3.61-2.02 0-3.65-1.62-3.65-3.61 0-2 1.63-3.61 3.65-3.61.37 0 .73.05 1.07.15V3.3c-.35-.05-.71-.08-1.07-.08-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8V8.9c1.31.95 2.92 1.51 4.65 1.51V7.3c-2.02 0-3.65-1.61-3.65-3.61V2z" 
      stroke="#0A2AB3" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

// 删除 FooterLogo 组件，改用 CompanyTitle
const CompanyTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #0A2AB3;
  margin-bottom: 2rem;
`;

// 调整语言选择器样式
const LanguageSelect = styled(Select)`
  width: 180px;
  margin-top: 1rem;
  
  .ant-select-selector {
    background: transparent !important;
    border: 1px solid rgba(37, 99, 235, 0.15) !important;
    border-radius: 8px !important;
    color: #666 !important;
    padding: 4px 12px !important;
    height: 36px !important;
    
    &:hover {
      color: #0A2AB3 !important;
      border-color: rgba(37, 99, 235, 0.3) !important;
    }
  }
  
  .ant-select-selection-item {
    font-size: 1rem;
    font-weight: 500;
    padding-right: 24px !important;
    line-height: 28px !important;
  }
  
  .ant-select-arrow {
    color: #666;
    right: 12px;
  }
`;

const Footer = () => {
  const handleLanguageChange = (value: unknown) => {
    console.log('Language changed to:', value);
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CompanyTitle>Walltech Family</CompanyTitle>
            <ContactInfo>
              <p>400-665-9211</p>
              <p>Room 2101, Building 9th, No. 970</p>
              <p>Dalian Road</p>
              <p>Shanghai, P.R.China</p>
            </ContactInfo>
          </motion.div>
        </FooterColumn>

        <FooterColumn>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ColumnTitle>Products</ColumnTitle>
            <FooterLinks>
              <FooterLink href="#">Company Directory</FooterLink>
              <FooterLink href="#">Billboard</FooterLink>
              <FooterLink href="#">IM</FooterLink>
            </FooterLinks>
          </motion.div>
        </FooterColumn>

        <FooterColumn>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ColumnTitle>Company</ColumnTitle>
            <FooterLinks>
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Terms & Conditions</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
            </FooterLinks>
          </motion.div>
        </FooterColumn>

        <FooterColumn>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ColumnTitle>Connect</ColumnTitle>
            <SocialLinks>
              <a href="#" aria-label="Twitter">
                <TwitterIcon />
              </a>
              <a href="#" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
              <a href="#" aria-label="TikTok">
                <TikTokIcon />
              </a>
            </SocialLinks>
            <LanguageSelect 
              defaultValue="en" 
              onChange={handleLanguageChange}
              bordered={false}
            >
              <Option value="en">EN-English</Option>
              <Option value="zh">ZH-简体中文</Option>
            </LanguageSelect>
          </motion.div>
        </FooterColumn>
      </FooterContent>

      <Copyright>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Copyright 2024 © Walltech Family All Rights Reserved{' '}
          <ICPLink 
            href="https://beian.miit.gov.cn" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            沪ICP备 12-54645号
          </ICPLink>
        </motion.div>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer; 