'use client';

import React from 'react';
import styled from 'styled-components';
import Button from '@/components/atoms/Button';
import Image from 'next/image';
import { logAppDownload } from '@/lib/analytics';

const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 80px 0;
  background: linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%);
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 60px 0;
    min-height: auto;
  }
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 16px;
  width: 100%;
  
  @media (min-width: 768px) {
    padding: 0 24px;
  }
  
  @media (min-width: 1024px) {
    padding: 0 32px;
  }
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  align-items: center;
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 64px;
  }
`;

const TextContent = styled.div`
  text-align: center;
  
  @media (min-width: 1024px) {
    text-align: left;
  }
`;

const Headline = styled.h1`
  font-size: 48px;
  font-weight: 900;
  line-height: 1.2;
  color: #FFFFFF;
  margin-bottom: 24px;
  letter-spacing: -0.02em;
  
  @media (min-width: 768px) {
    font-size: 56px;
  }
  
  @media (min-width: 1024px) {
    font-size: 64px;
  }
`;

const Highlight = styled.span`
  color: #ADFF2F;
  display: inline-block;
`;

const SubHeadline = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #9CA3AF;
  margin-bottom: 32px;
  line-height: 1.6;
  
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const SocialProof = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 32px;
  flex-wrap: wrap;
  
  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`;

const Stars = styled.div`
  display: flex;
  gap: 2px;
`;

const Star = styled.svg`
  width: 20px;
  height: 20px;
  fill: #FFC107;
`;

const Rating = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #FFFFFF;
`;

const TrustText = styled.span`
  font-size: 16px;
  color: #9CA3AF;
  
  &::before {
    content: '•';
    margin: 0 8px;
  }
`;

const CTAButtons = styled.div`
  display: flex;
  justify-content: center;
  
  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  order: -1;
  
  @media (min-width: 1024px) {
    order: 0;
  }
`;

const PhoneMockup = styled.div`
  position: relative;
  width: 280px;
  height: 570px;
  background: #0A0A0A;
  border-radius: 40px;
  padding: 12px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  
  &::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 25px;
    background: #0A0A0A;
    border-radius: 20px;
    z-index: 10;
  }
  
  @media (min-width: 768px) {
    width: 320px;
    height: 650px;
  }
`;

const PhoneScreen = styled.div`
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  border-radius: 30px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Hero: React.FC = () => {
  const handleAppStoreClick = () => {
    logAppDownload('ios', 'hero');
  };

  return (
    <HeroSection>
      <Container>
        <HeroContent>
          <TextContent>
            <Headline>
              UNLEASH YOUR<br />
              TRUE <Highlight>ATHLETIC</Highlight><br />
              POTENTIAL
            </Headline>
            
            <SubHeadline>
              Stop guessing. Start dominating with AI-powered precision.
            </SubHeadline>
            
            <SocialProof>
              <Stars>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </Star>
                ))}
              </Stars>
              <Rating>4.9</Rating>
              <TrustText>Trusted by 50,000+ athletes</TrustText>
            </SocialProof>
            
            <CTAButtons>
              <Button
                variant="primary"
                size="large"
                href={process.env.NEXT_PUBLIC_APP_STORE_URL || '#'}
                target="_blank"
                onClick={handleAppStoreClick}
                ariaLabel="Download SURGE+ on the App Store"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                </svg>
                Download on App Store
              </Button>
            </CTAButtons>
          </TextContent>
          
          <ImageWrapper>
            <PhoneMockup>
              <PhoneScreen>
                <Image
                  src="/images/surge-icon.png"
                  alt="SURGE+ App Interface"
                  width={200}
                  height={200}
                  priority
                  style={{ objectFit: 'contain' }}
                />
              </PhoneScreen>
            </PhoneMockup>
          </ImageWrapper>
        </HeroContent>
      </Container>
    </HeroSection>
  );
};

export default Hero;
