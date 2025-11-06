'use client';

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const FooterSection = styled.footer`
  background: #0A0A0A;
  border-top: 1px solid #1A1A1A;
  padding: 48px 0 32px;
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

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  margin-bottom: 32px;
  
  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr 1fr;
    gap: 48px;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 900;
  color: #FFFFFF;
  margin-bottom: 8px;
  
  span {
    color: #ADFF2F;
  }
`;

const Description = styled.p`
  font-size: 14px;
  color: #9CA3AF;
  line-height: 1.6;
  max-width: 300px;
`;

const ColumnTitle = styled.h3`
  font-size: 14px;
  font-weight: 700;
  color: #FFFFFF;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 8px;
`;

const FooterLink = styled(Link)`
  font-size: 14px;
  color: #9CA3AF;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: #ADFF2F;
  }
`;

const ExternalLink = styled.a`
  font-size: 14px;
  color: #9CA3AF;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: #ADFF2F;
  }
`;

const FooterBottom = styled.div`
  padding-top: 32px;
  border-top: 1px solid #1A1A1A;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Copyright = styled.p`
  font-size: 14px;
  color: #6B7280;
  text-align: center;
  
  @media (min-width: 768px) {
    text-align: left;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #1A1A1A;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9CA3AF;
  transition: all 0.2s ease;
  
  &:hover {
    background: #ADFF2F;
    color: #0A0A0A;
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterSection>
      <Container>
        <FooterContent>
          <FooterColumn>
            <Logo>SURGE<span>+</span></Logo>
            <Description>
              AI-powered sports performance analysis. Upload your videos, get instant biomechanical feedback, and track your progress across multiple sports.
            </Description>
          </FooterColumn>
          
          <FooterColumn>
            <ColumnTitle>Product</ColumnTitle>
            <FooterLink href="/#features">Features</FooterLink>
            <FooterLink href="/#pricing">Pricing</FooterLink>
            <ExternalLink 
              href={process.env.NEXT_PUBLIC_APP_STORE_URL || '#'}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download App
            </ExternalLink>
          </FooterColumn>
          
          <FooterColumn>
            <ColumnTitle>Legal</ColumnTitle>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/terms">Terms of Service</FooterLink>
            <ExternalLink href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'support@surge.app'}`}>
              Contact
            </ExternalLink>
          </FooterColumn>
        </FooterContent>
        
        <FooterBottom>
          <Copyright>
            © {currentYear} SURGE+. All rights reserved.
          </Copyright>
          
          <SocialLinks>
            <SocialIcon 
              href="https://twitter.com/surgeplus" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </SocialIcon>
            
            <SocialIcon 
              href="https://instagram.com/surgeplus" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
              </svg>
            </SocialIcon>
            
            <SocialIcon 
              href="https://facebook.com/surgeplus" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </SocialIcon>
          </SocialLinks>
        </FooterBottom>
      </Container>
    </FooterSection>
  );
};

export default Footer;
