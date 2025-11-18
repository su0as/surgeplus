'use client';

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const FooterSection = styled.footer`
  position: relative;
  bottom: auto;
  left: auto;
  right: auto;
  background: #FFFFFF;
  padding: 24px 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #E5E7EB;
  
  @media (max-width: 767px) {
    padding: 24px 0;
  }
  
  @media (min-width: 768px) {
    padding: 32px 0;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  position: relative;
  
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 12px;
    padding: 0 12px;
  }
  
  @media (min-width: 768px) {
    padding: 0 32px;
  }
`;

const LogoWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 767px) {
    position: static;
    transform: none;
    order: 1;
  }
`;

const FooterLeftLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 8px;
    order: 2;
    width: 100%;
    text-align: center;
  }
  
  @media (min-width: 768px) {
    gap: 24px;
  }
`;

const FooterRightContent = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 767px) {
    order: 3;
    width: 100%;
    justify-content: center;
  }
`;

const Copyright = styled.p`
  font-size: 12px;
  color: #666666;
  margin: 0;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  
  @media (max-width: 767px) {
    font-size: 12px;
    text-align: center;
  }
  
  @media (min-width: 768px) {
    font-size: 14px;
    text-align: right;
  }
`;


const FooterLink = styled(Link)`
  font-size: 12px;
  color: #0A0A0A;
  text-decoration: none;
  transition: color 0.2s ease;
  font-family: 'Poppins', sans-serif;
  padding: 8px 12px;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 767px) {
    font-size: 14px;
    min-width: 120px;
  }
  
  @media (min-width: 768px) {
    font-size: 14px;
    padding: 4px 8px;
  }
  
  &:hover {
    color: #9BFF00;
  }
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterSection>
      <Container>
        <FooterLeftLinks>
          <FooterLink href="/contact">Contact</FooterLink>
          <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
          <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
        </FooterLeftLinks>
        
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
        
        <FooterRightContent>
          <Copyright>
            © {currentYear} SURGE+. All rights reserved.
          </Copyright>
        </FooterRightContent>
      </Container>
    </FooterSection>
  );
};

export default Footer;
