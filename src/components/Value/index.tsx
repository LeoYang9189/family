import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const ValueContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    background: 
      linear-gradient(135deg, 
        rgba(230, 240, 255, 0.4) 0%,
        transparent 50%,
        rgba(240, 235, 255, 0.3) 100%
      );
  }
`;

const TopSection = styled.div`
  width: 100%;
  min-height: 600px;
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const IllustrationContainer = styled.div`
  position: absolute;
  left: 2rem;
  top: 50%;
  transform: translateY(-50%);
  width: 32%;
  height: auto;
  transition: transform 0.3s ease;
`;

const ValueImage = styled(motion.img)`
  width: 100%;
  height: auto;
`;

const TopContent = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 6rem 2rem;
  display: flex;
  justify-content: flex-end;
  position: relative;
  
  &:hover ${IllustrationContainer} {
    transform: translateY(-50%) translateX(10px);
  }
`;

const TextContent = styled.div`
  width: 50%;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  transform: translateY(0);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const TextWrapper = styled.div`
  width: 100%;
`;

const Title = styled(motion.h2)`
  font-size: 2.8rem;
  color: #0A2AB3;
  margin-bottom: 2rem;
  font-weight: 700;
  line-height: 1.2;
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const TopContactButton = styled(motion.button)`
  padding: 0.8rem 2rem;
  border: 1px solid #0A2AB3;
  border-radius: 8px;
  color: #0A2AB3;
  background: transparent;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background: rgba(10, 42, 179, 0.05);
    transform: translateY(-2px);
  }
`;

const BottomSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem 0 4rem;
`;

const CardsContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 33px;
`;

const CardRow = styled.div`
  display: flex;
  gap: 33px;
  justify-content: center;
`;

const Particle = styled(motion.div)`
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.color || 'rgba(37, 99, 235, 0.1)'};
  pointer-events: none;
`;

const FloatingIcon = styled(motion.div)`
  position: absolute;
  width: 24px;
  height: 24px;
  opacity: 0.15;
  pointer-events: none;
  color: ${props => props.color || '#0A2AB3'};
`;

const DataCard = styled(motion.div)`
  background: rgba(255, 255, 255, 1);
  border-radius: 20px;
  padding: 2.8rem;
  box-shadow: 0px 0px 28px -6px rgba(153, 195, 255, 1);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:first-of-type {
    width: 925px;
    height: 432px !important;
  }

  &:last-of-type {
    width: 481px;
    height: 432px !important;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0px 0px 34px -3px rgba(153, 195, 255, 1);
    
    ${Particle}, ${FloatingIcon} {
      animation-play-state: running;
    }
  }
`;

// 添加 CardHeader 的类型定义
interface CardHeaderProps {
  isRightCard?: boolean;
}

const CardHeader = styled.div<CardHeaderProps>`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: ${props => props.isRightCard ? '0' : '1rem'};
`;

const CardIcon = styled.img`
  width: 66px;
  height: 66px;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  color: #0A2AB3;
  font-weight: 600;
`;

const LogoStats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const LogoGroup = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 3rem;
`;

const CompanyLogo = styled.img`
  height: 83px;
  width: auto;
`;

const Divider = styled.div`
  position: absolute;
  width: 1px;
  top: 15%;
  bottom: 15%;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(37, 99, 235, 0.1) 20%,
    rgba(37, 99, 235, 0.1) 80%,
    transparent
  );
`;

const StatsRow = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  padding: 0 1.5rem;

  &::after {
    content: '';
    ${Divider}
    left: -1.5rem;
  }

  &:last-child {
    gap: 2rem;
  }
`;

const StatGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
  text-align: left;
  padding: 0 1rem;

  &:not(:last-child) {
    position: relative;
    
    &::after {
      content: '';
      ${Divider}
      right: -0.6rem;
    }
  }
`;

const StatValue = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: #2563EB;
  background: linear-gradient(135deg, #2563EB, #3B82F6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const CargowareValue = styled(StatValue)`
  background: linear-gradient(135deg, #00E4FF, #00B8D4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 22px;
  line-height: 1.2;
`;

const ETowerValue = styled(StatValue)`
  background: linear-gradient(135deg, #4169E1, #1E40AF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 22px;
  line-height: 1.2;
`;

const StatLabel = styled.div`
  font-size: 12px;
  color: #666;
  line-height: 1.3;
  font-weight: 500;
  max-width: 95%;
`;

const EcosystemImage = styled.div`
  width: 74%;
  margin: 1rem auto 0;
  
  img {
    width: 100%;
    height: auto;
  }
`;

// 创建彩色 SVG 图标组件
const BoxIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 8l-9-4-9 4v8l9 4 9-4V8z" stroke="#4169E1" />
    <path d="M3 8l9 4 9-4" stroke="#00B8D4" />
    <path d="M12 12v8" stroke="#4169E1" />
  </svg>
);

const TruckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 6h13v10H3V6z" stroke="#00B8D4" />
    <path d="M16 8h3l3 3v5h-6V8z" stroke="#4169E1" />
    <circle cx="7" cy="16" r="2" stroke="#00E4FF" />
    <circle cx="19" cy="16" r="2" stroke="#00E4FF" />
  </svg>
);

const PlaneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 3l9 9-9 9-9-9 9-9z" stroke="#4169E1" />
    <path d="M12 8v8M8 12h8" stroke="#00B8D4" />
  </svg>
);

const ShipIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 17h18v2H3v-2z" stroke="#00E4FF" />
    <path d="M20.83 12L19 6H5l-1.83 6h17.66z" stroke="#4169E1" />
    <path d="M12 6V3M8 6V4M16 6V4" stroke="#00B8D4" />
  </svg>
);

// 添加新的 SVG 图标组件
const ContainerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 8h16v12H4V8z" stroke="#4169E1" />
    <path d="M4 12h16M4 16h16" stroke="#00B8D4" />
    <path d="M8 8V4m8 4V4" stroke="#00E4FF" />
  </svg>
);

const CloudIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" stroke="#4169E1" />
    <path d="M13 14l-3 3m0 0l-3-3m3 3V8" stroke="#00B8D4" />
  </svg>
);

const ServerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 6h16M4 12h16M4 18h16" stroke="#4169E1" />
    <rect x="4" y="4" width="16" height="16" rx="2" stroke="#00B8D4" />
    <circle cx="8" cy="6" r="1" stroke="#00E4FF" />
    <circle cx="8" cy="12" r="1" stroke="#00E4FF" />
    <circle cx="8" cy="18" r="1" stroke="#00E4FF" />
  </svg>
);

const NetworkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3" stroke="#4169E1" />
    <path d="M12 3a9 9 0 0 1 9 9m-9-9a9 9 0 0 0-9 9m9-9v2m9 7a9 9 0 0 1-9 9m9-9h-2m-7 9a9 9 0 0 1-9-9m9 9v-2m-9-7h2" stroke="#00B8D4" />
  </svg>
);

// 修复 motion.img 的 viewport 属性类型
<motion.img 
  src="/v3.png" 
  alt="Warehouse operator"
  initial={{ opacity: 0, scale: 0.8, x: -50 }}
  whileInView={{ 
    opacity: 1, 
    scale: 1, 
    x: 0,
  }}
  transition={{ 
    duration: 1,
    ease: "easeOut"
  }}
  viewport={{ once: true }}
  whileHover={{
    scale: 1.05,
    transition: { duration: 0.3 }
  }}
/>

// 修复 ParticleEffect 的类型
type CardType = 'cargo' | 'ecosystem' | 'digital';

interface ParticleEffectProps {
  cardType: CardType;
}

const ParticleEffect: React.FC<ParticleEffectProps> = ({ cardType }) => {
  const particles = Array(12).fill(null);
  const icons = cardType === 'cargo' ? [
    { Icon: BoxIcon, delay: 0 },
    { Icon: TruckIcon, delay: 0.5 },
    { Icon: PlaneIcon, delay: 1 },
    { Icon: ShipIcon, delay: 1.5 }
  ] : [
    { Icon: ContainerIcon, delay: 0 },
    { Icon: CloudIcon, delay: 0.5 },
    { Icon: ServerIcon, delay: 1 },
    { Icon: NetworkIcon, delay: 1.5 }
  ];
  
  if (cardType === 'ecosystem') return null; // 只在左右两边卡片显示动画
  
  return (
    <>
      {particles.map((_, index) => (
        <Particle
          key={`particle-${index}`}
          color={cardType === 'cargo' ? 'rgba(0, 228, 255, 0.1)' : 'rgba(37, 99, 235, 0.1)'}
          initial={{ opacity: 0.5 }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0.5, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
          }}
        />
      ))}
      {icons.map(({ Icon, delay }, index) => (
        <FloatingIcon
          key={`icon-${index}`}
          initial={{ opacity: 0.3 }}
          animate={{
            y: [0, -15, 0],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: delay,
          }}
          style={{
            left: `${20 + index * 20}%`,
            top: `${Math.random() * 60 + 20}%`,
          }}
        >
          <Icon />
        </FloatingIcon>
      ))}
    </>
  );
};

const PerformanceCard = styled(DataCard)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 481px !important;
  height: 432px !important;
`;

const PerformanceChart = styled.div`
  width: 100%;
  height: 360px;
  margin-top: -1rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const CapabilityCard = styled(DataCard)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 925px !important;
  height: 432px !important;
`;

const CapabilityLogos = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 0;
`;

const LogoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  max-width: 30%;
`;

const LogoImage = styled.img`
  height: 90px;
  width: auto;
  margin-bottom: 0.5rem;
`;

// 为 AWS logo 创建特定的样式
const AwsLogo = styled(LogoImage)`
  width: 135px;
  height: 91px;
  object-fit: contain;
`;

const LogoTitle = styled.div`
  font-size: 13px;
  color: #666;
  font-weight: 500;
  margin-bottom: 0.3rem;
`;

const LogoDescription = styled.div`
  font-size: 12px;
  color: #666;
  line-height: 1.4;
  font-weight: 600;
`;

const AwsDescription = styled(LogoDescription)`
  &:first-of-type {
    font-weight: 600;
  }
  
  &:nth-of-type(2) {
    font-weight: 600;
  }
  
  &:nth-of-type(3) {
    font-weight: 400;
  }
  
  &:last-of-type {
    font-weight: 600;
  }
`;

const ValueProposition = styled.section`
  width: 100%;
  padding: 4rem 0;
  background: #FAFBFF;
  display: flex;
  justify-content: center;
`;

const PropositionContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const PropositionContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 3rem;
`;

const PropositionTitle = styled(motion.h2)`
  font-size: 2.8rem;
  color: #0A2AB3;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const IllustrationSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    width: 48%;
    height: auto;
    transform-origin: center center;
  }
`;

const ContentSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const PropositionHeading = styled.h3`
  font-size: 2rem;
  color: #0A2AB3;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

// 先定义基础组件
const FeatureIcon = styled.img`
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease;
`;

const FeatureText = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  transition: color 0.3s ease;
`;

const HighlightText = styled.span`
  color: #0A2AB3;
  font-weight: 600;
  transition: all 0.3s ease;
`;

// 然后定义依赖这些基础组件的组件
const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
  cursor: default;

  &:hover {
    transform: translateX(8px);
    
    ${FeatureIcon} {
      transform: scale(1.1);
    }
    
    ${FeatureText} {
      color: #4B5563;
    }
    
    ${HighlightText} {
      background: linear-gradient(135deg, #0A2AB3, #4169E1);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

const FreightForwarders = styled(ValueProposition)`
  padding-top: 0;
`;

const FreightContent = styled(PropositionContent)`
  flex-direction: row-reverse;
`;

const FreightIllustration = styled(IllustrationSection)`
  img {
    width: 66%;
    height: auto;
  }
`;

const WarehouseSection = styled(ValueProposition)`
  padding-top: 0;
`;

const LastMileSection = styled(ValueProposition)`
  padding-top: 0;
`;

const LastMileIllustration = styled(IllustrationSection)`
  img {
    width: 48%;
    height: auto;
  }
`;

const FAQSection = styled(ValueProposition)`
  padding-top: 0;
`;

const FAQContainer = styled(PropositionContainer)`
  gap: 2rem;
`;

const FAQTitle = styled.h2`
  font-size: 2.8rem;
  color: #0A2AB3;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const FAQItem = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 0px 20px -4px rgba(153, 195, 255, 0.5);
`;

const FAQHeader = styled.div<{ isActive: boolean }>`
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: white;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(37, 99, 235, 0.02);
  }
`;

const FAQQuestion = styled.h3`
  font-size: 1.1rem;
  color: #0A2AB3;
  font-weight: 600;
`;

const FAQArrow = styled(motion.div)<{ isActive: boolean }>`
  width: 24px;
  height: 24px;
  color: #0A2AB3;
  transform: rotate(${props => props.isActive ? '180deg' : '0deg'});
`;

const FAQContent = styled(motion.div)`
  padding: 0 2rem;
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
`;

// FAQ 数据
const faqData = [
  {
    question: "Do I need to pay a member fee to join Walltech Family?",
    answer: "We do't charge any if you are currently the clients of Cargoware or eTower. You are free to use all the WTF platform served tools."
  },
  {
    question: "Do I need to pay a member fee to join Walltech Family?",
    answer: "Answer 2..."
  },
  {
    question: "Do I need to pay a member fee to join Walltech Family?",
    answer: "Answer 3..."
  },
  {
    question: "Do I need to pay a member fee to join Walltech Family?",
    answer: "Answer 4..."
  },
  {
    question: "Do I need to pay a member fee to join Walltech Family?",
    answer: "Answer 5..."
  }
];

// FAQ 组件
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <FAQSection>
      <FAQContainer>
        <FAQTitle>Frequently Asked Question</FAQTitle>
        <FAQList>
          {faqData.map((item, index) => (
            <FAQItem key={index}>
              <FAQHeader 
                isActive={activeIndex === index}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <FAQQuestion>{item.question}</FAQQuestion>
                <FAQArrow 
                  isActive={activeIndex === index}
                  initial={false}
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </FAQArrow>
              </FAQHeader>
              <AnimatePresence>
                {activeIndex === index && (
                  <FAQContent
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p style={{ padding: "1rem 0" }}>{item.answer}</p>
                  </FAQContent>
                )}
              </AnimatePresence>
            </FAQItem>
          ))}
        </FAQList>
      </FAQContainer>
    </FAQSection>
  );
};

const ContactSection = styled(ValueProposition)`
  padding-top: 0;
  background: linear-gradient(to bottom, #FAFBFF, #F5F8FF);
`;

const ContactContainer = styled(PropositionContainer)`
  align-items: center;
  text-align: center;
  max-width: 1440px;
  padding: 0 2rem;
  gap: 1.5rem;
  position: relative;
`;

const ContactTitle = styled.h2`
  font-size: 2.8rem;
  color: #0A2AB3;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const ContactDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
`;

const InputGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;
  flex: 1;
`;

const InputWrapper = styled.div<{ hasError?: boolean }>`
  position: relative;
  width: 100%;
  min-width: 200px;

  input {
    width: 100%;
    padding: 0.875rem 1.25rem;
    border: 1px solid ${props => props.hasError ? '#FF4D4F' : 'rgba(37, 99, 235, 0.1)'};
    border-radius: 12px;
    font-size: 0.875rem;
    color: #333;
    background: white;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: #0A2AB3;
      box-shadow: 0 0 0 2px rgba(10, 42, 179, 0.1);
    }

    &::placeholder {
      color: #999;
    }
  }
`;

const ErrorMessage = styled.div`
  position: absolute;
  left: 0;
  bottom: -1.5rem;
  font-size: 0.875rem;
  color: #FF4D4F;
`;

const RequiredMark = styled.span<{ type?: 'star' | 'asterisk' }>`
  position: absolute;
  color: ${props => props.type === 'star' ? '#FFB800' : '#FF4D4F'};
  font-size: ${props => props.type === 'star' ? '1rem' : '0.875rem'};
  line-height: 1;
  ${props => props.type === 'star' 
    ? 'top: -3rem; right: 25%; transform: translateX(50%);'
    : 'left: -1rem; top: 50%; transform: translateY(-50%);'
  }
`;

const ContactButton = styled(motion.button)`
  padding: 12px 24px;
  background: linear-gradient(90deg, #0A2AB3, #2563EB);
  border-radius: 100px;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  box-shadow: 0 0 20px rgba(10, 42, 179, 0.25);
  animation: buttonPulse 2s ease-in-out infinite;

  @keyframes buttonPulse {
    0% {
      box-shadow: 0 0 20px rgba(10, 42, 179, 0.25);
      background: linear-gradient(90deg, #0A2AB3, #2563EB);
    }
    50% {
      box-shadow: 0 0 30px rgba(10, 42, 179, 0.4);
      background: linear-gradient(90deg, #2563EB, #0A2AB3);
    }
    100% {
      box-shadow: 0 0 20px rgba(10, 42, 179, 0.25);
      background: linear-gradient(90deg, #0A2AB3, #2563EB);
    }
  }

  &::before {
    content: '';
    position: absolute;
    width: 150%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.25),
      transparent
    );
    top: 0;
    left: -150%;
    transform: skewX(-45deg);
    transition: 0.5s;
  }

  &:hover {
    transform: translateY(-2px);
    
    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: scale(0.98);
  }
`;

// 修改验证模式,避免循环依赖
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
    
  phone: Yup.string()
    .matches(/^[0-9+\-\s]*$/, 'Invalid phone number format')
    .test('phoneOrEmail', 'Phone or Email is required', function(value) {
      return !!(value || this.parent.email);
    }),
    
  email: Yup.string()
    .email('Invalid email format')
    .test('phoneOrEmail', 'Phone or Email is required', function(value) {
      return !!(value || this.parent.phone);
    })
});

const Contact = () => {
  return (
    <ContactSection>
      <ContactContainer>
        <ContactTitle>
          <img src="/contact-icon.png" alt="Contact" width="32" height="32" />
          Be intrested in us?
        </ContactTitle>
        <ContactDescription>
          Leave your contact information, and our professional businessrepresentatives will contact you as soon as possible!
        </ContactDescription>
        <Formik
          initialValues={{ name: '', phone: '', email: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
          }}
        >
          {({ errors, touched, isSubmitting, isValid, dirty }) => (
            <Form style={{ width: '100%' }}>
              <FormContainer>
                <RequiredMark type="star">⭐</RequiredMark>
                <InputGroup>
                  <InputWrapper hasError={errors.name && touched.name}>
                    <RequiredMark type="asterisk">*</RequiredMark>
                    <Field
                      name="name"
                      placeholder="Your name"
                      type="text"
                    />
                    {errors.name && touched.name && (
                      <ErrorMessage>{errors.name}</ErrorMessage>
                    )}
                  </InputWrapper>
                  <InputWrapper hasError={errors.phone && touched.phone}>
                    <Field
                      name="phone"
                      placeholder="Your telephone No."
                      type="text"
                    />
                    {errors.phone && touched.phone && (
                      <ErrorMessage>{errors.phone}</ErrorMessage>
                    )}
                  </InputWrapper>
                  <InputWrapper hasError={errors.email && touched.email}>
                    <Field
                      name="email"
                      placeholder="Your E-mail"
                      type="email"
                    />
                    {errors.email && touched.email && (
                      <ErrorMessage>{errors.email}</ErrorMessage>
                    )}
                  </InputWrapper>
                </InputGroup>
                <ContactButton
                  type="submit"
                  disabled={isSubmitting || !isValid || !dirty}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact me
                </ContactButton>
              </FormContainer>
            </Form>
          )}
        </Formik>
      </ContactContainer>
    </ContactSection>
  );
};

// 修改 Logo 墙样式组件
const LogoWallSection = styled(ValueProposition)`
  padding: 6rem 0;
  overflow: hidden;
  background: #FAFBFF;
`;

const LogoWallContainer = styled(PropositionContainer)`
  position: relative;
`;

const LogoWallTitle = styled.h2`
  font-size: 2.8rem;
  color: #0A2AB3;
  font-weight: 700;
  text-align: left;
  margin-bottom: 4rem;
  position: absolute;
  top: 0;
  left: 2rem;
`;

const LogoTrack = styled(motion.div)`
  display: flex;
  gap: 3rem;
  padding: 1rem 0;
  width: fit-content;
`;

const LogoItem = styled.div`
  flex-shrink: 0;
  width: 180px;
  height: 90px;
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const LogoContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  
  .first-track {
    margin-bottom: 1.5rem;
  }
`;

// Logo 墙组件
const LogoWall = () => {
  const logos = Array(15).fill(null);
  
  return (
    <LogoWallSection>
      <LogoWallContainer>
        <LogoWallTitle>They Already joint</LogoWallTitle>
        <LogoContainer style={{ marginTop: '8rem' }}>
          <LogoTrack
            className="first-track"
            initial={{ x: 0 }}
            animate={{ x: '-50%' }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop'
            }}
          >
            {logos.map((_, index) => (
              <LogoItem key={`row1-${index}`}>
                <img src="/logoqq.png" alt={`Partner ${index + 1}`} />
              </LogoItem>
            ))}
            {logos.map((_, index) => (
              <LogoItem key={`row1-copy-${index}`}>
                <img src="/logoqq.png" alt={`Partner ${index + 16}`} />
              </LogoItem>
            ))}
          </LogoTrack>

          <LogoTrack
            initial={{ x: '-50%' }}
            animate={{ x: 0 }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop'
            }}
          >
            {logos.map((_, index) => (
              <LogoItem key={`row2-${index}`}>
                <img src="/logoqq.png" alt={`Partner ${index + 31}`} />
              </LogoItem>
            ))}
            {logos.map((_, index) => (
              <LogoItem key={`row2-copy-${index}`}>
                <img src="/logoqq.png" alt={`Partner ${index + 46}`} />
              </LogoItem>
            ))}
          </LogoTrack>
        </LogoContainer>
      </LogoWallContainer>
    </LogoWallSection>
  );
};

const Value = () => {
  return (
    <ValueContainer>
      <TopSection>
        <TopContent>
          <IllustrationContainer>
            <ValueImage
              src="/value.png"
              alt="Value Illustration"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
          </IllustrationContainer>
          <TextContent>
            <TextWrapper>
              <Title
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                We built a 360° Ecosystem for all of our partners
              </Title>
              <Description
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Adding Value and driving collaboration between our partners across the end-to-end supplychain
              </Description>
              <Description
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Adding Value and driving collaboration between our partners across the end-to-end supplychain
              </Description>
            </TextWrapper>
            <TopContactButton
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact us
            </TopContactButton>
          </TextContent>
        </TopContent>
      </TopSection>
      
      <BottomSection>
        <CardsContainer>
          <CardRow>
            <DataCard>
              <ParticleEffect cardType="cargo" />
              <CardHeader>
                <CardIcon src="/ecosystem-icon.png" alt="Ecosystem" />
                <CardTitle>Ecosystem</CardTitle>
              </CardHeader>
              <LogoStats>
                <LogoGroup>
                  <CompanyLogo src="/cargowarelogo.png" alt="Cargoware" />
                  <StatsRow>
                    <StatGroup>
                      <CargowareValue>2000</CargowareValue>
                      <StatLabel>Clients</StatLabel>
                    </StatGroup>
                    <StatGroup>
                      <CargowareValue>5 Million</CargowareValue>
                      <StatLabel>Teu per year</StatLabel>
                    </StatGroup>
                    <StatGroup>
                      <CargowareValue>56</CargowareValue>
                      <StatLabel>Countries</StatLabel>
                    </StatGroup>
                  </StatsRow>
                </LogoGroup>
                <LogoGroup>
                  <CompanyLogo src="/etowerlogo.png" alt="eTower" />
                  <StatsRow>
                    <StatGroup style={{ flex: '1' }}>
                      <ETowerValue>2 Million</ETowerValue>
                      <StatLabel>Daily Parcel Capacity</StatLabel>
                    </StatGroup>
                    <StatGroup style={{ flex: '0.8' }}>
                      <ETowerValue>100%</ETowerValue>
                      <StatLabel>Global network coverage</StatLabel>
                    </StatGroup>
                    <StatGroup style={{ flex: '0.6' }}>
                      <ETowerValue>10000</ETowerValue>
                      <StatLabel>Sellers</StatLabel>
                    </StatGroup>
                    <StatGroup style={{ flex: '1.1' }}>
                      <ETowerValue>&gt; 80</ETowerValue>
                      <StatLabel>Courier, Express, Postal Carriers</StatLabel>
                    </StatGroup>
                  </StatsRow>
                </LogoGroup>
              </LogoStats>
            </DataCard>
            
            <DataCard>
              <ParticleEffect cardType="ecosystem" />
              <CardHeader isRightCard>
                <CardIcon src="/all-in-one-icon.png" alt="All in One" />
                <CardTitle>End-to-End All-in One</CardTitle>
              </CardHeader>
              <EcosystemImage>
                <motion.img 
                  src="/360.png" 
                  alt="360 Ecosystem"
                  viewport={{ once: true }}
                />
              </EcosystemImage>
            </DataCard>
          </CardRow>
          
          <CardRow>
            <PerformanceCard>
              <CardHeader>
                <CardIcon src="/manage-icon.png" alt="Manage" />
                <CardTitle>Manage Fulfillment</CardTitle>
              </CardHeader>
              <PerformanceChart>
                <motion.img 
                  src="/performance-chart.png" 
                  alt="Performance Chart"
                  viewport={{ once: true }}
                />
              </PerformanceChart>
            </PerformanceCard>
            
            <CapabilityCard>
              <ParticleEffect cardType="digital" />
              <CardHeader>
                <CardIcon src="/digital-icon.png" alt="Digital" />
                <CardTitle>Digital Capability</CardTitle>
              </CardHeader>
              <CapabilityLogos>
                <LogoBlock>
                  <LogoImage src="/cifa-logo.png" alt="CIFA" />
                  <LogoTitle>Head of</LogoTitle>
                  <LogoDescription>CIFA Digital Committee</LogoDescription>
                </LogoBlock>
                <LogoBlock>
                  <AwsLogo src="/aws-logo.png" alt="AWS" />
                  <LogoTitle>China's first logistic</LogoTitle>
                  <AwsDescription>AWS Advanced Partner</AwsDescription>
                  <AwsDescription>and</AwsDescription>
                  <AwsDescription>AWS Certified Supply Chain Software</AwsDescription>
                </LogoBlock>
                <LogoBlock>
                  <LogoImage src="/rd-medal.png" alt="R&D Medal" />
                  <LogoTitle>Government awarded</LogoTitle>
                  <LogoDescription>R&D Center of Excellence</LogoDescription>
                </LogoBlock>
              </CapabilityLogos>
            </CapabilityCard>
          </CardRow>
        </CardsContainer>
      </BottomSection>

      <ValueProposition>
        <PropositionContainer>
          <PropositionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Value Proposition
          </PropositionTitle>
          <PropositionContent>
            <IllustrationSection>
              <motion.img 
                src="/v1.png" 
                alt="Local pacel consolidators"
                initial={{ opacity: 0, scale: 0.8, x: -50 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1, 
                  x: 0,
                }}
                transition={{ 
                  duration: 1,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              />
            </IllustrationSection>
            <ContentSection>
              <PropositionHeading>Local pacel consolidators</PropositionHeading>
              <FeatureItem>
                <FeatureIcon src="/i11.png" alt="Access icon" />
                <FeatureText>
                  Access to <HighlightText>2000+ strong</HighlightText> network of air & ocean freight forwarders, booking agents,master loaders.
                </FeatureText>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon src="/i12.png" alt="API icon" />
                <FeatureText>
                  <HighlightText>One API</HighlightText> gives access to 100+ last-mile carriers,customs brokers,over seas warehouse operators.
                </FeatureText>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon src="/i13.png" alt="Business icon" />
                <FeatureText>
                  Turn on <HighlightText>new business opportunities</HighlightText> from Walltech Family overseas partners.Collaborate seamlessly in the <HighlightText>same integrated ecosystem</HighlightText>.
                </FeatureText>
              </FeatureItem>
            </ContentSection>
          </PropositionContent>
        </PropositionContainer>
      </ValueProposition>

      <FreightForwarders>
        <PropositionContainer>
          <PropositionHeading>Freight forwarders and Cargo agent</PropositionHeading>
          <FreightContent>
            <FreightIllustration>
              <motion.img 
                src="/v2.png" 
                alt="Freight forwarders"
                initial={{ opacity: 0, scale: 0.8, x: 50 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1, 
                  x: 0,
                }}
                transition={{ 
                  duration: 1,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              />
            </FreightIllustration>
            <ContentSection>
              <FeatureItem>
                <FeatureIcon src="/i21.png" alt="Revenue icon" />
                <FeatureText>
                  Open the door to <HighlightText>new revenue streams</HighlightText> with best - in class e-commerce resources locally and globally.
                </FeatureText>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon src="/i22.png" alt="Collaborate icon" />
                <FeatureText>
                  <HighlightText>Strategically and seamlessly collaborate</HighlightText> with other Cargoware partners,leveraging each other's strengths.
                </FeatureText>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon src="/i23.png" alt="Rates icon" />
                <FeatureText>
                  <HighlightText>Publish ad hoc and spot rates</HighlightText>. Don't pay dead freight penalties! Let our community support your carrier volume commitments.
                </FeatureText>
              </FeatureItem>
            </ContentSection>
          </FreightContent>
        </PropositionContainer>
      </FreightForwarders>

      <WarehouseSection>
        <PropositionContainer>
          <PropositionHeading>Overseas warehouse opereator</PropositionHeading>
          <PropositionContent>
            <IllustrationSection>
              <motion.img 
                src="/v3.png" 
                alt="Warehouse operator"
                initial={{ opacity: 0, scale: 0.8, x: -50 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1, 
                  x: 0,
                }}
                transition={{ 
                  duration: 1,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              />
            </IllustrationSection>
            <ContentSection>
              <FeatureItem>
                <FeatureIcon src="/i31.png" alt="FBA icon" />
                <FeatureText>
                  <HighlightText>FBA and FBM active freight forwarders and e-commerce consolidators'</HighlightText> increasingly needing OW solutions as TEMU.
                </FeatureText>
              </FeatureItem>
            </ContentSection>
          </PropositionContent>
        </PropositionContainer>
      </WarehouseSection>

      <LastMileSection>
        <PropositionContainer>
          <PropositionHeading>Overseas last-mile post and parcel operators</PropositionHeading>
          <FreightContent>
            <LastMileIllustration>
              <motion.img 
                src="/v4.png" 
                alt="Last mile operators"
                initial={{ opacity: 0, scale: 0.8, x: 50 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1, 
                  x: 0,
                }}
                transition={{ 
                  duration: 1,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              />
            </LastMileIllustration>
            <ContentSection>
              <FeatureItem>
                <FeatureIcon src="/i41.png" alt="Business icon" />
                <FeatureText>
                  <HighlightText>China-strong Business Partnering</HighlightText>: Local API Servers / Local communication Channels and language / Same time zone as customers / Market knowledge
                </FeatureText>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon src="/i42.png" alt="Onboarding icon" />
                <FeatureText>
                  <HighlightText>Turnkey Onboarding</HighlightText>. Ready-to-go intergrations with every major marketplace, ERP and OMS in the China market. Local onboarding support
                </FeatureText>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon src="/i43.png" alt="Global icon" />
                <FeatureText>
                  Go Global-to-Global,<HighlightText>Seamless intergration with 80 other last-mile partners</HighlightText>.
                </FeatureText>
              </FeatureItem>
            </ContentSection>
          </FreightContent>
        </PropositionContainer>
      </LastMileSection>

      <FAQ />
      <Contact />
      <LogoWall />
    </ValueContainer>
  );
};

export default Value; 