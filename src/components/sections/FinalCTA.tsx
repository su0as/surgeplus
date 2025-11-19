'use client';

import React from 'react';
import styled from 'styled-components';

const CTASection = styled.section`
  padding: 128px 24px;
  background: #000000;
  color: #FFFFFF;
  
  @media (max-width: 767px) {
    padding: 80px 16px;
  }
`;

const CTAContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  text-align: center;
`;

const CTAHeading = styled.h2`
  font-size: clamp(48px, 8vw, 112px);
  font-weight: 900;
  margin-bottom: 32px;
  line-height: 1.1;
  font-family: 'Poppins', sans-serif;
  
  @media (max-width: 767px) {
    margin-bottom: 24px;
  }
`;

const CTAHighlight = styled.span`
  color: #9BFF00;
`;

const CTADescription = styled.p`
  font-size: clamp(20px, 3vw, 32px);
  color: #9CA3AF;
  margin-bottom: 48px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Poppins', sans-serif;
  
  @media (max-width: 767px) {
    margin-bottom: 32px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const CTAButton = styled.a<{ $variant?: 'primary' | 'secondary' }>`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 32px;
  background: ${props => props.$variant === 'secondary' ? '#FFFFFF' : '#9BFF00'};
  color: ${props => props.$variant === 'secondary' ? '#000000' : '#000000'};
  font-weight: 700;
  font-size: 18px;
  border-radius: 9999px;
  transition: all 0.2s ease;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
  
  &:hover {
    opacity: 0.9;
    background: ${props => props.$variant === 'secondary' ? '#F5F5F5' : '#9BFF00'};
  }
  
  @media (max-width: 767px) {
    width: 100%;
    justify-content: center;
  }
`;

const SubCaption = styled.p`
  font-size: 14px;
  color: #6B7280;
  margin-top: 12px;
  font-family: 'Poppins', sans-serif;
  
  @media (max-width: 767px) {
    font-size: 13px;
  }
`;

export default function FinalCTA() {
  return (
    <CTASection>
      <CTAContainer>
        <CTAHeading>
          Ready to
          <br />
          <CTAHighlight>Dominate?</CTAHighlight>
        </CTAHeading>
        
        <CTADescription>
          Join thousands of athletes tracking their surge to greatness.
        </CTADescription>

        <ButtonContainer>
          <ButtonWrapper>
            <CTAButton href="https://apps.apple.com/app/surge/id6753973996" target="_blank" rel="noopener noreferrer">
              Download for iOS
              <svg width="20" height="20" fill="#FFFFFF" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
            </CTAButton>
            
            <CTAButton href="https://play.google.com/" target="_blank" rel="noopener noreferrer" $variant="secondary">
              Download for Android
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.523 15.341c-.759 0-1.374.615-1.374 1.374 0 .759.615 1.374 1.374 1.374s1.374-.615 1.374-1.374c0-.759-.615-1.374-1.374-1.374zm-11.046 0c-.759 0-1.374.615-1.374 1.374 0 .759.615 1.374 1.374 1.374s1.374-.615 1.374-1.374c0-.759-.615-1.374-1.374-1.374zM4.868 12.352L1.54 6.476c-.203-.358-.078-.808.28-1.011.356-.204.807-.078 1.011.28l3.354 5.915c1.868-.867 3.978-1.352 6.232-1.352 2.253 0 4.363.485 6.23 1.352l3.355-5.915c.203-.358.654-.484 1.011-.28.357.203.482.653.28 1.011L19.93 12.35c3.739 2.015 6.276 5.587 6.276 9.691H-.522c0-4.104 2.538-7.676 6.277-9.69z"/>
              </svg>
            </CTAButton>
          </ButtonWrapper>
          
          <SubCaption>
            Start your 7-day trial. Cancel anytime.
          </SubCaption>
        </ButtonContainer>
      </CTAContainer>
    </CTASection>
  );
}
