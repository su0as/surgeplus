'use client';

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const FooterSection = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #FFFFFF;
  padding: 24px 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  
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
`;

const FooterLeftLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  
  @media (min-width: 768px) {
    gap: 24px;
  }
`;

const FooterRightContent = styled.div`
  display: flex;
  align-items: center;
`;

const Copyright = styled.p`
  font-size: 12px;
  color: #666666;
  margin: 0;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  
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
  
  @media (min-width: 768px) {
    font-size: 14px;
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
