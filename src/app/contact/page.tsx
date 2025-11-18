'use client';

import styled from 'styled-components';
import Footer from '@/components/sections/Footer';

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 80px 16px;
  
  @media (max-width: 767px) {
    padding: 40px 16px;
  }
  
  @media (min-width: 768px) {
    padding: 120px 24px;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 64px;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 900;
  color: #0A0A0A;
  margin-bottom: 16px;
  
  @media (max-width: 767px) {
    font-size: 32px;
  }
  
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 40px;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #666666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  
  @media (max-width: 767px) {
    font-size: 16px;
    padding: 0 8px;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  margin-bottom: 64px;
  
  @media (max-width: 767px) {
    gap: 20px;
    margin-bottom: 40px;
  }
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ContactCard = styled.div`
  background: #FFFFFF;
  border: 1px solid #E5E7EB;
  border-radius: 16px;
  padding: 32px;
  transition: all 0.3s ease;
  
  @media (max-width: 767px) {
    padding: 24px;
    border-radius: 12px;
  }
  
  &:hover {
    border-color: #ADFF2F;
    transform: translateY(-4px);
  }
`;

const CardIcon = styled.div`
  width: 56px;
  height: 56px;
  background: rgba(173, 255, 47, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  
  svg {
    width: 28px;
    height: 28px;
    color: #ADFF2F;
  }
`;

const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #0A0A0A;
  margin-bottom: 8px;
  
  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

const CardContent = styled.div`
  font-size: 16px;
  color: #666666;
  line-height: 1.6;
  word-wrap: break-word;
  overflow-wrap: break-word;
  
  @media (max-width: 767px) {
    font-size: 15px;
  }
  
  a {
    color: #9BFF00;
    text-decoration: none;
    transition: opacity 0.2s ease;
    word-break: break-all;
    
    &:hover {
      opacity: 0.8;
    }
  }
`;

const InfoSection = styled.div`
  background: #FFFFFF;
  border: 1px solid #E5E7EB;
  border-radius: 16px;
  padding: 48px 32px;
  text-align: center;
  
  @media (max-width: 767px) {
    padding: 32px 24px;
    border-radius: 12px;
  }
`;

const InfoTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #0A0A0A;
  margin-bottom: 24px;
  
  @media (max-width: 767px) {
    font-size: 24px;
    margin-bottom: 16px;
  }
`;

const CompanyInfo = styled.div`
  max-width: 600px;
  margin: 0 auto;
  color: #666666;
  line-height: 1.8;
  font-size: 16px;
  
  @media (max-width: 767px) {
    font-size: 15px;
    line-height: 1.7;
  }
  
  strong {
    color: #0A0A0A;
    display: block;
    margin-top: 16px;
  }
  
  p {
    margin: 8px 0;
  }
`;

export default function ContactPage() {
  return (
    <>
      <Container>
        <Header>
          <Title>Get in Touch</Title>
          <Subtitle>
            Have questions or feedback? We'd love to hear from you. Reach out to our team through any of the channels below.
          </Subtitle>
        </Header>

        <ContactGrid>
          <ContactCard>
            <CardIcon>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </CardIcon>
            <CardTitle>Email Support</CardTitle>
            <CardContent>
              For general inquiries and support:<br/>
              <a href="mailto:support@surgeplus.app">support@surgeplus.app</a>
            </CardContent>
          </ContactCard>

          <ContactCard>
            <CardIcon>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </CardIcon>
            <CardTitle>Phone</CardTitle>
            <CardContent>
              Call us during business hours:<br/>
              <a href="tel:+916360855691">+91 6360855691</a>
            </CardContent>
          </ContactCard>

          <ContactCard>
            <CardIcon>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </CardIcon>
            <CardTitle>Office Address</CardTitle>
            <CardContent>
              Bhudigere Cross<br/>
              Bengaluru, Karnataka 560067<br/>
              India
            </CardContent>
          </ContactCard>

          <ContactCard>
            <CardIcon>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"/>
              </svg>
            </CardIcon>
            <CardTitle>Social Media</CardTitle>
            <CardContent>
              Follow us for updates:<br/>
              <a href="https://twitter.com/surgeplus" target="_blank" rel="noopener noreferrer">Twitter</a> • 
              <a href="https://instagram.com/surgeplus" target="_blank" rel="noopener noreferrer"> Instagram</a> • 
              <a href="https://facebook.com/surgeplus" target="_blank" rel="noopener noreferrer"> Facebook</a>
            </CardContent>
          </ContactCard>
        </ContactGrid>

        <InfoSection>
          <InfoTitle>About SURGE+</InfoTitle>
          <CompanyInfo>
            <p>
              <strong>Suhas Suren</strong>
              doing business as SURGE+
            </p>
            <p>
              We're dedicated to helping athletes improve their performance through AI-powered video analysis. 
              Our platform provides instant biomechanical feedback across multiple sports including Golf, Tennis, 
              Basketball, Pickleball, and Baseball.
            </p>
            <p style={{ marginTop: '24px', fontSize: '14px' }}>
              Business Hours: Monday - Friday, 9:00 AM - 6:00 PM IST<br/>
              Response Time: Within 24-48 hours
            </p>
          </CompanyInfo>
        </InfoSection>
      </Container>
      <Footer />
    </>
  );
}
