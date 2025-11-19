'use client';

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const FooterSection = styled.footer`
  position: relative;
  background: #FFFFFF;
  min-height: 15vh;
  z-index: 100;
  border-top: 1px solid #E5E7EB;
`;

const BentoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 100%;
  min-height: 15vh;
  
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    min-height: auto;
  }
`;

const BentoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  border-right: 1px solid #E5E7EB;
  
  &:last-child {
    border-right: none;
  }
  
  @media (max-width: 767px) {
    border-right: none;
    border-bottom: 1px solid #E5E7EB;
    padding: 20px;
    
    &:last-child {
      border-bottom: none;
    }
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SportsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const SportsLabel = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #0A0A0A;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  
  @media (max-width: 767px) {
    font-size: 13px;
  }
`;

const SportsIcons = styled.div`
  display: flex;
  gap: 16px;
  font-size: 32px;
  
  @media (max-width: 767px) {
    gap: 12px;
    font-size: 28px;
  }
`;

const LinksSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const LinksLabel = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #0A0A0A;
  margin: 0 0 4px 0;
  font-family: 'Poppins', sans-serif;
  
  @media (max-width: 767px) {
    font-size: 13px;
  }
`;

const LinksList = styled.div`
  display: flex;
  gap: 16px;
  
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 8px;
    align-items: center;
  }
`;

const FooterLink = styled(Link)`
  font-size: 13px;
  color: #6B7280;
  text-decoration: none;
  transition: color 0.2s ease;
  font-family: 'Poppins', sans-serif;
  
  @media (max-width: 767px) {
    font-size: 12px;
  }
  
  &:hover {
    color: #9BFF00;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterSection>
      <BentoGrid>
        <BentoBox>
          <LogoWrapper>
            <Image
              src="/images/surgeforsite.png"
              alt="SURGE+"
              width={150}
              height={40}
              priority
              style={{ objectFit: 'contain' }}
            />
          </LogoWrapper>
        </BentoBox>
        
        <BentoBox>
          <SportsSection>
            <SportsLabel>Supported Sports:</SportsLabel>
            <SportsIcons>
              <span role="img" aria-label="Tennis">🎾</span>
              <span role="img" aria-label="Basketball">🏀</span>
              <span role="img" aria-label="Golf">⛳️</span>
              <span role="img" aria-label="Ping Pong">🏓</span>
            </SportsIcons>
          </SportsSection>
        </BentoBox>
        
        <BentoBox>
          <LinksSection>
            <LinksLabel>Privacy & Terms</LinksLabel>
            <LinksList>
              <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
              <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
            </LinksList>
          </LinksSection>
        </BentoBox>
      </BentoGrid>
    </FooterSection>
  );
};

export default Footer;
