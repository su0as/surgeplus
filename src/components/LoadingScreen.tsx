'use client';

import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
`;

const LoadingContainer = styled.div<{ $isHiding: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: ${props => props.$isHiding ? fadeOut : 'none'} 0.5s ease-out forwards;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${pulse} 2s ease-in-out infinite;
  
  img {
    max-width: 300px;
    height: auto;
    
    @media (max-width: 768px) {
      max-width: 200px;
    }
  }
`;

export default function LoadingScreen() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Mark as loaded when DOM is ready
    const handleLoad = () => {
      setIsLoaded(true);
      // Remove from DOM after fade animation completes
      setTimeout(() => setShouldRender(false), 500);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (!shouldRender) return null;

  return (
    <LoadingContainer $isHiding={isLoaded}>
      <LogoWrapper>
        <Image
          src="/images/surgelogo.png"
          alt="SURGE+ Logo"
          width={300}
          height={150}
          priority
        />
      </LogoWrapper>
    </LoadingContainer>
  );
}
