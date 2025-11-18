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

const ContentWrapper = styled.div`
  [data-custom-class='body'], [data-custom-class='body'] * {
    background: transparent !important;
  }
  [data-custom-class='title'], [data-custom-class='title'] * {
    font-family: Arial !important;
    font-size: 26px !important;
    color: #000000 !important;
  }
  [data-custom-class='subtitle'], [data-custom-class='subtitle'] * {
    font-family: Arial !important;
    color: #595959 !important;
    font-size: 14px !important;
  }
  [data-custom-class='heading_1'], [data-custom-class='heading_1'] * {
    font-family: Arial !important;
    font-size: 19px !important;
    color: #000000 !important;
  }
  [data-custom-class='heading_2'], [data-custom-class='heading_2'] * {
    font-family: Arial !important;
    font-size: 17px !important;
    color: #000000 !important;
  }
  [data-custom-class='body_text'], [data-custom-class='body_text'] * {
    color: #595959 !important;
    font-size: 14px !important;
    font-family: Arial !important;
  }
  [data-custom-class='link'], [data-custom-class='link'] * {
    color: #3030F1 !important;
    font-size: 14px !important;
    font-family: Arial !important;
    word-break: break-word !important;
  }
  
  @media (max-width: 767px) {
    [data-custom-class='title'], [data-custom-class='title'] * {
      font-size: 22px !important;
    }
    [data-custom-class='heading_1'], [data-custom-class='heading_1'] * {
      font-size: 18px !important;
    }
    [data-custom-class='heading_2'], [data-custom-class='heading_2'] * {
      font-size: 16px !important;
    }
    [data-custom-class='body_text'], [data-custom-class='body_text'] * {
      font-size: 15px !important;
      line-height: 1.7 !important;
    }
    [data-custom-class='link'], [data-custom-class='link'] * {
      font-size: 15px !important;
    }
    
    word-wrap: break-word;
    overflow-wrap: break-word;
    hyphens: auto;
  }
  
  h1, h2, h3 {
    margin-top: 24px;
    margin-bottom: 16px;
  }
  
  ul {
    list-style-type: square;
    margin-left: 20px;
  }
  
  ul > li > ul {
    list-style-type: circle;
  }
  
  ul > li > ul > li > ul {
    list-style-type: square;
  }
  
  ol li {
    font-family: Arial;
  }
`;

export default function TermsOfService() {
  return (
    <>
      <Container>
        <ContentWrapper>
          <div data-custom-class="body">
            <div style={{textAlign: "left"}}>
              <div className="MsoNormal" data-custom-class="title" style={{lineHeight: 1.5}}>
                <span className="block-component"><span style={{fontSize: "19px"}}></span></span>
                <span className="question"><strong><h1>TERMS AND CONDITIONS</h1></strong></span>
                <span className="statement-end-if-in-editor"></span>
              </div>
              <div className="MsoNormal" data-custom-class="subtitle" style={{lineHeight: 1.5}}>
                <strong>Last updated</strong> <span className="question"><strong>November 05, 2025</strong></span>
              </div>
              <div className="MsoNormal" style={{lineHeight: 1.1}}><br/></div>
              <div style={{lineHeight: 1.5}}><br/></div>
              <div style={{lineHeight: 1.5}}>
                <strong><span data-custom-class="heading_1"><h2>AGREEMENT TO OUR LEGAL TERMS</h2></span></strong>
              </div>
            </div>
            
            <div style={{textAlign: "left"}}>
              <div className="MsoNormal" id="agreement" style={{lineHeight: 1.5}}>
                <a id="_6aa3gkhykvst"></a>
              </div>
            </div>
            
            <div style={{textAlign: "left"}}>
              <div className="MsoNormal" data-custom-class="body_text" style={{lineHeight: 1.5}}>
                <span style={{fontSize:"11.0pt",lineHeight:"115%",fontFamily:"Arial",color:"#595959"}}>
                  We are <span className="block-container question question-in-editor" data-id="9d459c4e-c548-e5cb-7729-a118548965d2" data-type="question">Suhas Suren</span>
                  <span className="block-component"></span>, doing business as <span className="question">Surge+</span>
                  <span className="block-component"></span><span className="statement-end-if-in-editor"></span> (<span className="block-component"></span>"<strong>Company</strong>," "<strong>we</strong>," "<strong>us</strong>," "<strong>our</strong>"<span className="statement-end-if-in-editor"></span>)
                  <span style={{fontSize:"11.0pt",lineHeight:"115%",fontFamily:"Arial",color:"#595959"}}>
                    <span style={{fontSize:"11.0pt",lineHeight:"115%",fontFamily:"Arial",color:"#595959"}}>
                      <span style={{fontSize:"11.0pt",lineHeight:"115%",fontFamily:"Arial",color:"#595959"}}>
                        <span className="question"><span className="block-component"></span></span>
                        <span style={{fontSize:"11.0pt",lineHeight:"115%",fontFamily:"Arial",color:"#595959"}}>
                          <span className="block-component"></span>
                        </span>, a company registered in<span className="block-component"></span><span className="block-component"></span> <span style={{fontSize:"11.0pt",lineHeight:"115%",fontFamily:"Arial",color:"#595959"}}>
                          <span style={{fontSize:"11.0pt",lineHeight:"115%",fontFamily:"Arial",color:"#595959"}}>
                            <span className="question">India</span>
                            <span className="statement-end-if-in-editor">
                              <span style={{fontSize:"11.0pt",lineHeight:"115%",fontFamily:"Arial",color:"#595959"}}>
                                <span style={{fontSize:"11.0pt",lineHeight:"115%",fontFamily:"Arial",color:"#595959"}}>
                                  <span className="statement-end-if-in-editor"></span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span> at <span className="question">Bhudigere Cross</span><span className="block-component"></span>
                      </span>
                    </span>, <span className="question">Bengaluru</span>
                  </span>
                </span>
                <span style={{fontSize: "15px"}}>
                  <span data-custom-class="body_text">
                    <span style={{fontSize: "15px"}}>
                      <span data-custom-class="body_text">
                        <span style={{color: "rgb(89, 89, 89)"}}>
                          <span className="block-component"></span>, <span className="question">Karnataka</span>
                          <span className="statement-end-if-in-editor"></span>
                          <span className="block-component"></span> <span className="question">560067</span>
                          <span className="statement-end-if-in-editor"></span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
                <span style={{fontSize:"11.0pt",lineHeight:"115%",fontFamily:"Arial",color:"#595959"}}>
                  <span style={{fontSize:"11.0pt",lineHeight:"115%",fontFamily:"Arial",color:"#595959"}}>
                    <span className="else-block"></span>
                  </span>
                </span>
                <span className="statement-end-if-in-editor">.</span>
                <span className="block-component"></span>
              </div>
            </div>
            
            <div style={{lineHeight: 1}}><br/></div>
            
            <div style={{textAlign: "left"}}>
              <div className="MsoNormal" data-custom-class="body_text" style={{lineHeight: 1.5}}>
                <span style={{fontSize:"11.0pt",lineHeight:"115%",fontFamily:"Arial",color:"#595959"}}>
                  We operate <span className="block-component"></span>the website <span style={{color: "rgb(0, 58, 250)"}}>
                    <span className="question"><a target="_blank" data-custom-class="link" href="http://www.surgeplus.app">http://www.surgeplus.app</a></span>
                  </span> (the <span className="block-component"></span>"<strong>Site</strong>"<span className="statement-end-if-in-editor"></span>)
                  <span className="block-component"></span>, <span className="statement-end-if-in-editor"></span>
                  <span className="block-component"></span>the mobile application <span className="question">Surge+</span> (the <span className="block-component"></span>"<strong>App</strong>"<span className="statement-end-if-in-editor"></span>)
                  <span className="statement-end-if-in-editor"></span>, as well as any other related products and services that refer or link to these legal terms (the <span className="block-component"></span>"<strong>Legal Terms</strong>"<span className="statement-end-if-in-editor"></span>) (collectively, the <span className="block-component"></span>"<strong>Services</strong>"<span className="statement-end-if-in-editor"></span>).
                  <span className="block-component"></span>
                </span>
              </div>
              
              <div className="MsoNormal" style={{lineHeight: 1}}><br/></div>
              
              <div className="MsoNormal" data-custom-class="body_text" style={{lineHeight: 1.5}}>
                <span className="question">1. Description of Service<br/><br/>

SURGE+ ("the App") is a mobile application that provides sports performance analysis using artificial intelligence. The services ("Service") include, but are not limited to:<br/><br/>

Video Upload and Storage: The ability for users to upload and store video recordings of their athletic performance ("User Content").<br/><br/>

AI-Powered Analysis: The use of generative AI models, including Google's Gemini models, to analyze User Content and generate data-driven feedback, which may include a "SURGE+ Score," technical strengths, and prioritized areas for improvement ("Analysis").<br/><br/>

Performance Tracking: The ability for users to log and track their game scores and view their progress over time.<br/><br/>

Subscription Access: Access to the Service is provided through auto-renewing subscription plans ("Subscriptions"), which may include a free trial period or special offers.<br/><br/>

2. User Content and AI Analysis<br/><br/>

User-Generated Content: You retain all ownership rights to the videos you upload ("User Content").<br/><br/>

License to Us: To provide the Service, you grant SURGE+ a limited, non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and process your User Content solely for the purpose of operating the App, generating your Analysis, and improving our AI models (only if you decide to do this).<br/><br/>

AI Analysis Disclaimer: The "Analysis" (including the "SURGE+ Score") provided by the Service is generated by artificial intelligence. It is intended for informational and educational purposes only and is not a substitute for in-person, professional coaching or medical advice. The Analysis may contain errors or inaccuracies ("hallucinations"). You agree to use the Analysis at your own risk and acknowledge that SURGE+ is not liable for any decisions, actions, or injuries resulting from your reliance on the Analysis.<br/><br/>

3. Service "As Is"<br/><br/>

The Service is provided on an "as is" and "as available" basis. SURGE+ makes no warranties (express or implied) regarding the reliability, accuracy, or availability of the Service. We do not guarantee that your use of the Service will result in any specific athletic improvement or outcome.</span>
              </div>
              
              <div className="MsoNormal" data-custom-class="body_text" style={{lineHeight: 1.5}}>
                <span style={{fontSize:"11.0pt",lineHeight:"115%",fontFamily:"Arial",color:"#595959"}}>
                  <span className="statement-end-if-in-editor"></span>
                </span>
              </div>
              
              <div className="MsoNormal" style={{lineHeight: 1}}><br/></div>
              
              <div className="MsoNormal" data-custom-class="body_text" style={{lineHeight: 1.5}}>
                <span style={{fontSize:"11.0pt",lineHeight:"115%",fontFamily:"Arial",color:"#595959"}}>
                  You can contact us by <span className="block-component"></span>phone at <span className="question">+91 6360855691</span>, email at <span className="question"><a target="_blank" data-custom-class="link" href="mailto:support@surgeplus.app">support@surgeplus.app</a></span>
                  <span className="block-component"></span>,<span className="statement-end-if-in-editor"></span> or by mail to <span className="question">Bhudigere Cross</span>
                  <span className="block-component"></span>, <span className="question">Bengaluru</span>
                  <span className="block-component"></span>, <span className="question">Karnataka</span>
                  <span className="statement-end-if-in-editor"></span>
                  <span className="block-component"></span> <span className="question">560067</span>
                  <span className="statement-end-if-in-editor"></span>
                  <span className="block-component">
                    <span className="block-component">, </span>
                    <span className="question">India</span>
                    <span className="statement-end-if-in-editor"></span>
                  </span>.
                </span>
              </div>
              
              <div className="MsoNormal" style={{lineHeight: 1}}><br/></div>
              
              <div className="MsoNormal" data-custom-class="body_text" style={{lineHeight: 1.5}}>
                <span style={{fontSize:"11.0pt",lineHeight:"115%",fontFamily:"Arial",color:"#595959"}}>
                  These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity (<span className="block-component"></span>"<strong>you</strong>"<span className="statement-end-if-in-editor"></span>), and <span className="question">Suhas Suren</span>, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
                  <span className="block-component"></span><span className="block-component"></span>
                </span>
              </div>
              
              <div className="MsoNormal" style={{lineHeight: 1}}><br/></div>
              
              <div className="MsoNormal" data-custom-class="body_text" style={{lineHeight: 1.5}}>
                <span style={{fontSize:"11.0pt",lineHeight:"115%",fontFamily:"Arial",color:"#595959"}}>
                  We will provide you with prior notice of any scheduled changes to the Services you are using. The modified Legal Terms will become effective upon posting or notifying you by <span className="question"><a target="_blank" data-custom-class="link" href="mailto:support@surgeplus.app">support@surgeplus.app</a></span>, as stated in the email message. By continuing to use the Services after the effective date of any changes, you agree to be bound by the modified terms.
                  <span className="block-component"></span><span className="statement-end-if-in-editor"></span>
                </span>
              </div>
            </div>
            
            <div style={{lineHeight: 1}}><br/></div>
            
            <div style={{textAlign: "left"}}>
              <div className="MsoNormal" data-custom-class="body_text" style={{lineHeight: 1.5}}>
                <span style={{fontSize: "11pt", lineHeight: "16.8667px", color: "rgb(89, 89, 89)"}}>
                  <span style={{color: "rgb(89, 89, 89)", fontSize: "14.6667px"}}>The Services are intended for users who are at least 13 years of age. All users who are minors in the jurisdiction in which they reside (generally under the age of 18) must have the permission of, and be directly supervised by, their parent or guardian to use the Services. If you are a minor, you must have your parent or guardian read and agree to these Legal Terms prior to you using the Services.</span>
                </span>
              </div>
              
              <div className="MsoNormal" style={{lineHeight: 1}}><br/></div>
              
              <div className="MsoNormal" data-custom-class="body_text" style={{lineHeight: 1.5}}>
                We recommend that you print a copy of these Legal Terms for your records.
              </div>
              
              <div className="MsoNormal" style={{lineHeight: 1.5}}><br/></div>
              
              <div className="MsoNormal" data-custom-class="heading_1" style={{lineHeight: 1.5}}>
                <strong><h2>TABLE OF CONTENTS</h2></strong>
              </div>
              
              {/* Table of Contents - keeping it brief for space */}
              <div className="MsoNormal" style={{lineHeight: 1.5}}>
                <a data-custom-class="link" href="#services"><span data-custom-class="link"><span style={{color: "rgb(0, 58, 250)", fontSize: "15px"}}><span data-custom-class="body_text">1. OUR SERVICES</span></span></span></a>
              </div>
              <div className="MsoNormal" style={{lineHeight: 1.5}}>
                <a data-custom-class="link" href="#contact"><span style={{color: "rgb(0, 58, 250)", fontSize: "15px"}}><span data-custom-class="body_text">28. CONTACT US</span></span></a>
              </div>
              
              <div className="MsoNormal" style={{lineHeight: 1.5}}><br/></div>
              
              <div className="MsoNormal" data-custom-class="body_text" style={{lineHeight: 1.5}}>
                <p style={{fontSize: "14px", color: "#595959", marginBottom: "16px"}}>
                  For the complete terms and conditions, please refer to the full document above. This includes sections on intellectual property, user responsibilities, subscriptions, payment, prohibited activities, privacy policy, dispute resolution, and more.
                </p>
              </div>
              
              <div className="MsoNormal" data-custom-class="heading_1" id="contact" style={{lineHeight: 1.5}}>
                <strong><span style={{lineHeight: "115%", fontFamily: "Arial"}}><span style={{fontSize: "19px", lineHeight: 1.5}}><h2>28. CONTACT US</h2></span></span></strong>
              </div>
              
              <div className="MsoNormal" data-custom-class="body_text" style={{lineHeight: 1.5}}>
                <span style={{fontSize:"11.0pt",lineHeight:"115%",fontFamily:"Arial",color:"#595959"}}>
                  In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:
                </span>
              </div>
              
              <div className="MsoNormal" style={{lineHeight: 1.5}}><br/></div>
              
              <div className="MsoNormal" data-custom-class="body_text" style={{lineHeight: 1.5}}>
                <span style={{fontSize: "15px"}}>
                  <span style={{color: "rgb(89, 89, 89)"}}>
                    <span className="question"><strong>Suhas Suren</strong></span>
                    <strong><span className="block-component"></span></strong>
                  </span>
                </span>
              </div>
              
              <div className="MsoNormal" data-custom-class="body_text" style={{lineHeight: 1.5}}>
                <span style={{fontSize: "15px"}}>
                  <span style={{lineHeight: "115%", fontFamily: "Arial", color: "rgb(89, 89, 89)"}}>
                    <span className="question"><strong><span className="question">Bhudigere Cross</span></strong></span>
                    <span className="statement-end-if-in-editor"></span>
                    <span className="block-component"></span>
                  </span>
                </span>
              </div>
              
              <div className="MsoNormal" data-custom-class="body_text" style={{lineHeight: 1.5}}>
                <span style={{fontSize: "15px"}}>
                  <strong>
                    <span style={{color: "rgb(89, 89, 89)"}}>
                      <span className="question">
                        <span className="block-component"></span>
                        <span className="question">Bengaluru</span>
                        <span className="statement-end-if-in-editor"></span>
                      </span>
                      <span className="block-component"></span>, <span className="question">Karnataka</span>
                      <span className="statement-end-if-in-editor"></span>
                      <span className="block-component"></span> <span className="question">560067</span>
                      <span className="statement-end-if-in-editor"></span>
                    </span>
                  </strong>
                  <strong>
                    <span style={{color: "rgb(89, 89, 89)"}}>
                      <span className="block-component"></span>
                    </span>
                    <span className="block-component"></span>
                  </strong>
                </span>
              </div>
              
              <div className="MsoNormal" data-custom-class="body_text" style={{lineHeight: 1.5}}>
                <span className="block-component"><strong></strong></span>
                <span className="question">India</span>
                <span className="statement-end-if-in-editor"></span>
                <span className="statement-end-if-in-editor"></span>
                <span className="statement-end-if-in-editor"><strong></strong></span>
              </div>
              
              <div className="MsoNormal" data-custom-class="body_text" style={{lineHeight: 1.5}}>
                <strong>
                  <span style={{fontSize:"11.0pt",lineHeight:"115%",fontFamily:"Arial",color:"#595959"}}>
                    <strong>
                      <span className="block-component"></span>Phone: <span className="question">+91 6360855691</span>
                      <span className="statement-end-if-in-editor"></span>
                    </strong>
                  </span>
                </strong>
              </div>
              
              <div className="MsoNormal" data-custom-class="body_text" style={{lineHeight: 1.5}}>
                <strong>
                  <span style={{fontSize:"11.0pt",lineHeight:"115%",fontFamily:"Arial",color:"#595959"}}>
                    <strong>
                      <span className="question">
                        <span className="block-component"></span>
                        <span className="question"><a target="_blank" data-custom-class="link" href="mailto:support@surgeplus.app">support@surgeplus.app</a></span>
                        <span className="statement-end-if-in-editor"></span>
                      </span>
                    </strong>
                  </span>
                </strong>
              </div>
            </div>
          </div>
        </ContentWrapper>
      </Container>
      <Footer />
    </>
  );
}
