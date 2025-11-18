'use client';

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@/components/atoms/Button';
import { logAppDownload } from '@/lib/analytics';

// Player images array
const PLAYER_IMAGES = [
  '/images/Gemini Generated Image (27).png',
  '/images/Gemini Generated Image (28).png',
  '/images/Gemini Generated Image (29).png',
  '/images/Gemini Generated Image (30).png',
  '/images/Gemini Generated Image (31).png',
  '/images/Gemini Generated Image (32).png',
  '/images/Gemini Generated Image (33).png',
  '/images/Gemini_Generated_Image_g14awlg14awlg14a.png',
  '/images/Google Gemini Generated Image (4).png',
  '/images/Google Gemini Generated Image (5).png',
  '/images/Google Gemini Image (2) 1.png'
];

// Position type
type Position = {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  transform?: string;
};

// Position presets around the text perimeter
const POSITION_PRESETS: Position[] = [
  { top: '0%', left: '0%' },      // Top-left
  { top: '0%', right: '0%' },     // Top-right
  { bottom: '0%', left: '0%' },   // Bottom-left
  { bottom: '0%', right: '0%' },  // Bottom-right
];

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  height: auto;
  background: #FFFFFF;
  padding: 32px 16px 40px;
  text-align: center;
  overflow: hidden;
  position: relative;
  
  @media (max-width: 767px) {
    min-height: 100vh;
    padding: 24px 12px 40px;
  }
  
  @media (min-width: 768px) {
    padding: 40px 24px 40px;
  }
  
  @media (min-width: 1024px) {
    padding: 48px 32px 40px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 900px;
  position: relative;
  height: 100%;
`;

const HeadlineContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 900px;
`;

const Headline = styled.h1`
  font-size: clamp(48px, 10vw, 100px);
  font-weight: 900;
  line-height: 1.05;
  color: #0A0A0A;
  margin: 0;
  letter-spacing: -0.03em;
  font-family: 'Poppins', sans-serif;
  white-space: nowrap;
  position: relative;
  z-index: 1;
  
  @media (max-width: 767px) {
    font-size: clamp(32px, 12vw, 48px);
    white-space: normal;
    line-height: 1.1;
    text-align: center;
    max-width: 100%;
    word-wrap: break-word;
  }
`;

const PlayerImage = styled.img<{ $isVisible: boolean }>`
  position: absolute;
  width: clamp(180px, 20vw, 280px);
  height: auto;
  background: transparent;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transition: opacity 0.5s ease-in-out;
  z-index: 2;
  pointer-events: none;
  
  @media (max-width: 767px) {
    width: clamp(120px, 25vw, 160px);
    max-width: 160px;
  }
  
  @media (min-width: 768px) and (max-width: 1023px) {
    width: clamp(150px, 22vw, 220px);
  }
`;

const LowerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  
  @media (max-width: 767px) {
    bottom: 40px;
    gap: 16px;
  }
  
  @media (min-width: 768px) {
    gap: 16px;
    bottom: 40px;
  }
  
  @media (min-width: 1024px) {
    gap: 16px;
    bottom: 48px;
  }
`;

const CTAWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubHeadline = styled.p`
  font-size: clamp(14px, 2vw, 18px);
  color: #666666;
  margin: 0;
  line-height: 1.6;
  max-width: 700px;
  font-family: 'Poppins', sans-serif;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: 767px) {
    font-size: 14px;
    white-space: normal;
    overflow: visible;
    text-overflow: clip;
    max-width: 100%;
    padding: 0 16px;
    text-align: center;
    line-height: 1.5;
  }
  
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 16px;
    white-space: normal;
    overflow: visible;
    padding: 0 24px;
  }
`;


// Helper function to get random image pair with opposite positions
const getRandomImagePair = (excludeImages: string[] = []) => {
  const availableImages = PLAYER_IMAGES.filter(img => !excludeImages.includes(img));
  
  // Shuffle and pick 2
  const shuffled = [...availableImages].sort(() => Math.random() - 0.5);
  const image1 = shuffled[0];
  const image2 = shuffled[1];
  
  // Pick 2 positions that are far apart (opposite corners only)
  const oppositePositionPairs = [
    [0, 3], // Top-left & Bottom-right
    [1, 2], // Top-right & Bottom-left
  ];
  
  const pair = oppositePositionPairs[Math.floor(Math.random() * oppositePositionPairs.length)];
  
  return [
    { image: image1, position: POSITION_PRESETS[pair[0]] },
    { image: image2, position: POSITION_PRESETS[pair[1]] }
  ];
};

const Hero: React.FC = () => {
  const [currentPair, setCurrentPair] = useState<Array<{image: string, position: Position}>>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [previousImages, setPreviousImages] = useState<string[]>([]);

  // Animation cycle effect
  useEffect(() => {
    // Initial pair
    const initialPair = getRandomImagePair();
    setCurrentPair(initialPair);
    setIsVisible(true);
    setPreviousImages(initialPair.map(p => p.image));
    
    const intervalId = setInterval(() => {
      // Fade out (0.5s transition)
      setIsVisible(false);
      
      // Wait 0.5s for fade out to complete, then wait additional 0.5s gap, then select new pair and fade in
      setTimeout(() => {
        setPreviousImages(prev => {
          const newPair = getRandomImagePair(prev);
          setCurrentPair(newPair);
          
          // Small delay to ensure DOM update before fading in
          setTimeout(() => {
            setIsVisible(true);
          }, 50);
          
          return newPair.map(p => p.image);
        });
      }, 1000); // 0.5s fade out + 0.5s gap = 1s
    }, 5000); // 4s display + 1s (fade + gap) = 5s total cycle
    
    return () => clearInterval(intervalId);
  }, []);

  const handleAppStoreClick = () => {
    logAppDownload('ios', 'hero');
  };

  return (
    <HeroSection>
      <ContentWrapper>
        <HeadlineContainer>
          <Headline>BUILT FOR THE 1%</Headline>
          {currentPair.map((item, index) => (
            <PlayerImage
              key={`${item.image}-${index}`}
              src={item.image}
              alt="Player"
              $isVisible={isVisible}
              style={{
                top: item.position.top,
                bottom: item.position.bottom,
                left: item.position.left,
                right: item.position.right,
                transform: item.position.transform
              }}
            />
          ))}
        </HeadlineContainer>
      </ContentWrapper>
      
      <LowerContent>
          <CTAWrapper>
            <Button
              variant="secondary"
              size="large"
              href="https://apps.apple.com/app/surge/id6753973996"
              target="_blank"
              onClick={handleAppStoreClick}
              ariaLabel="Download SURGE+ on the App Store"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#9BFF00">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
              </svg>
              Download on App Store
            </Button>
          </CTAWrapper>
          
          <SubHeadline>
            AI-powered Sports Analysis for Golf, Tennis, Paddleball, Basketball and more
          </SubHeadline>
      </LowerContent>
    </HeroSection>
  );
};

export default Hero;
