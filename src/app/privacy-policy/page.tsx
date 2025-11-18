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
  
  table {
    border-collapse: collapse;
    width: 100%;
    margin: 20px 0;
    
    @media (max-width: 767px) {
      display: block;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }
  }
  
  th, td {
    padding: 8px;
    text-align: left;
    vertical-align: top;
    
    @media (max-width: 767px) {
      padding: 6px;
      font-size: 14px;
    }
  }
  
  /* Ensure proper text wrapping on mobile */
  @media (max-width: 767px) {
    word-wrap: break-word;
    overflow-wrap: break-word;
    hyphens: auto;
  }
`;

export default function PrivacyPolicy() {
  return (
    <>
      <Container>
        <ContentWrapper>
          <div data-custom-class="body">
            <div><strong><span style={{fontSize: "26px"}}><span data-custom-class="title"><h1>PRIVACY POLICY</h1></span></span></strong></div>
            <div><span style={{color: "rgb(127, 127, 127)"}}><strong><span style={{fontSize: "15px"}}><span data-custom-class="subtitle">Last updated November 05, 2025</span></span></strong></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">This Privacy Notice for Suhas Suren (doing business as Surge+) ("<strong>we</strong>," "<strong>us</strong>," or "<strong>our</strong>"), describes how and why we might access, collect, store, use, and/or share ("<strong>process</strong>") your personal information when you use our services ("<strong>Services</strong>"), including when you:</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <ul>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">Download and use our mobile application (Surge+), or any other application of ours that links to this Privacy Notice</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}>Use Surge+. The App is a mobile application that provides sports performance analysis using artificial intelligence, including video upload and storage, AI-powered analysis using Google's Gemini models, performance tracking, and subscription access.</span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">Engage with us in other related ways, including any sales, marketing, or events</span></span></li>
            </ul>
            
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text"><strong>Questions or concerns? </strong>Reading this Privacy Notice will help you understand your privacy rights and choices. If you still have any questions or concerns, please contact us at <a target="_blank" data-custom-class="link" href="mailto:support@surgeplus.app">support@surgeplus.app</a>.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div style={{lineHeight: 1.5}}><strong><span style={{fontSize: "15px"}}><span data-custom-class="heading_1"><h2>SUMMARY OF KEY POINTS</h2></span></span></strong></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text"><strong><em>This summary provides key points from our Privacy Notice. You can find out more details by using our </em></strong></span></span><a data-custom-class="link" href="#toc"><span style={{color: "rgb(0, 58, 250)", fontSize: "15px"}}><span data-custom-class="body_text"><strong><em>table of contents</em></strong></span></span></a><span style={{fontSize: "15px"}}><span data-custom-class="body_text"><strong><em> below.</em></strong></span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text"><strong>What personal information do we process?</strong> Learn more about </span></span><a data-custom-class="link" href="#personalinfo"><span style={{color: "rgb(0, 58, 250)", fontSize: "15px"}}><span data-custom-class="body_text">personal information you disclose to us</span></span></a><span data-custom-class="body_text">.</span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text"><strong>Do we process any sensitive personal information?</strong> We may process sensitive personal information when necessary with your consent or as otherwise permitted by applicable law. Learn more about </span></span><a data-custom-class="link" href="#sensitiveinfo"><span style={{color: "rgb(0, 58, 250)", fontSize: "15px"}}><span data-custom-class="body_text">sensitive information we process</span></span></a><span data-custom-class="body_text">.</span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text"><strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text"><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. Learn more about </span></span><a data-custom-class="link" href="#infouse"><span style={{color: "rgb(0, 58, 250)", fontSize: "15px"}}><span data-custom-class="body_text">how we process your information</span></span></a><span data-custom-class="body_text">.</span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text"><strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties. Learn more about </span></span><a data-custom-class="link" href="#whoshare"><span style={{color: "rgb(0, 58, 250)", fontSize: "15px"}}><span data-custom-class="body_text">when and with whom we share your personal information</span></span></a><span style={{fontSize: "15px"}}><span data-custom-class="body_text">.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text"><strong>How do we keep your information safe?</strong> We have adequate organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet can be guaranteed to be 100% secure. Learn more about </span></span><a data-custom-class="link" href="#infosafe"><span style={{color: "rgb(0, 58, 250)", fontSize: "15px"}}><span data-custom-class="body_text">how we keep your information safe</span></span></a><span data-custom-class="body_text">.</span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text"><strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about </span></span><a data-custom-class="link" href="#privacyrights"><span style={{color: "rgb(0, 58, 250)", fontSize: "15px"}}><span data-custom-class="body_text">your privacy rights</span></span></a><span data-custom-class="body_text">.</span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text"><strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by visiting <span style={{color: "rgb(0, 58, 250)"}}><a target="_blank" data-custom-class="link" href="http://www.surgeplus.app/contact">http://www.surgeplus.app/contact</a></span>, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text">Want to learn more about what we do with any information we collect? </span></span><a data-custom-class="link" href="#toc"><span style={{color: "rgb(0, 58, 250)", fontSize: "15px"}}><span data-custom-class="body_text">Review the Privacy Notice in full</span></span></a><span style={{fontSize: "15px"}}><span data-custom-class="body_text">.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div id="toc" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span style={{color: "rgb(0, 0, 0)"}}><strong><span data-custom-class="heading_1"><h2>TABLE OF CONTENTS</h2></span></strong> </span> </span> </div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><a data-custom-class="link" href="#infocollect"><span style={{color: "rgb(0, 58, 250)"}}>1. WHAT INFORMATION DO WE COLLECT?</span></a></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><a data-custom-class="link" href="#infouse"><span style={{color: "rgb(0, 58, 250)"}}>2. HOW DO WE PROCESS YOUR INFORMATION?</span></a></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><a data-custom-class="link" href="#legalbases"><span style={{color: "rgb(0, 58, 250)"}}>3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</span></a></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span style={{color: "rgb(0, 58, 250)"}}><a data-custom-class="link" href="#whoshare">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a></span></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><a data-custom-class="link" href="#cookies"><span style={{color: "rgb(0, 58, 250)"}}>5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</span></a></span></div>
            <div style={{lineHeight: 1.5}}><a data-custom-class="link" href="#ai"><span style={{color: "rgb(0, 58, 250)"}}>6. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</span></a></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><a data-custom-class="link" href="#sociallogins"><span style={{color: "rgb(0, 58, 250)"}}>7. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</span></a></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><a data-custom-class="link" href="#inforetain"><span style={{color: "rgb(0, 58, 250)"}}>8. HOW LONG DO WE KEEP YOUR INFORMATION?</span></a></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><a data-custom-class="link" href="#infosafe"><span style={{color: "rgb(0, 58, 250)"}}>9. HOW DO WE KEEP YOUR INFORMATION SAFE?</span></a></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span style={{color: "rgb(0, 58, 250)"}}><a data-custom-class="link" href="#privacyrights">10. WHAT ARE YOUR PRIVACY RIGHTS?</a></span></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><a data-custom-class="link" href="#DNT"><span style={{color: "rgb(0, 58, 250)"}}>11. CONTROLS FOR DO-NOT-TRACK FEATURES</span></a></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><a data-custom-class="link" href="#uslaws"><span style={{color: "rgb(0, 58, 250)"}}>12. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</span></a></span></div>
            <div style={{lineHeight: 1.5}}><a data-custom-class="link" href="#otherlaws"><span style={{color: "rgb(0, 58, 250)", fontSize: "15px"}}>13. DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?</span></a></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><a data-custom-class="link" href="#policyupdates"><span style={{color: "rgb(0, 58, 250)"}}>14. DO WE MAKE UPDATES TO THIS NOTICE?</span></a></span></div>
            <div style={{lineHeight: 1.5}}><a data-custom-class="link" href="#contact"><span style={{color: "rgb(0, 58, 250)", fontSize: "15px"}}>15. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></a></div>
            <div style={{lineHeight: 1.5}}><a data-custom-class="link" href="#request"><span style={{color: "rgb(0, 58, 250)"}}>16. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</span></a></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div id="infocollect" style={{lineHeight: 1.5}}><span style={{color: "rgb(0, 0, 0)"}}><span style={{fontSize: "15px"}}><span id="control" style={{color: "rgb(0, 0, 0)"}}><strong><span data-custom-class="heading_1"><h2>1. WHAT INFORMATION DO WE COLLECT?</h2></span></strong></span></span></span></div>
            
            <div style={{lineHeight: 1.5}}><span data-custom-class="heading_2" id="personalinfo" style={{color: "rgb(0, 0, 0)"}}><span style={{fontSize: "15px"}}><strong><h3>Personal information you disclose to us</h3></strong></span></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> We collect personal information that you provide to us.</em></span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</span></span></div>
            <ul>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">names</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">email addresses</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">contact or authentication data</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">user-uploaded media (e.g., videos of your athletic performance)</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">athletic profile data (e.g., your chosen sport, performance goals, and practice style)</span></span></li>
            </ul>
            
            <div id="sensitiveinfo" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text"><strong>Sensitive Information.</strong> When necessary, with your consent or as otherwise permitted by applicable law, we process the following categories of sensitive information:</span></span></div>
            <ul>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text">health data</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text">biometric data</span></span></li>
            </ul>
            
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong>Payment Data.</strong> We may collect data necessary to process your payment if you choose to make purchases. All payment data is handled and stored by Apple Inc. You may find their privacy notice at: <span style={{color: "rgb(0, 58, 250)"}}><a target="_blank" data-custom-class="link" href="https://www.apple.com/legal/privacy/">https://www.apple.com/legal/privacy/</a></span></span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">All payments, subscriptions, and financial transactions are processed securely and exclusively by Apple Inc. through their native App Store In-App Purchase system. SURGE+ does not, at any time, collect, receive, process, or store any of your sensitive financial data, such as credit card numbers, debit card numbers, or billing addresses.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong>Social Media Login Data.</strong> We may provide you with the option to register with us using your existing social media account details. If you choose to register in this way, we will collect certain profile information about you from the social media provider, as described in the section called "<a data-custom-class="link" href="#sociallogins"><span style={{color: "rgb(0, 58, 250)"}}>HOW DO WE HANDLE YOUR SOCIAL LOGINS?</span></a>" below.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div style={{lineHeight: 1.5}}><span data-custom-class="body_text"><span style={{fontSize: "15px"}}><strong>Application Data.</strong> If you use our application(s), we also may collect the following information if you choose to provide us with access or permission:</span></span></div>
            <ul>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text"><em>Mobile Device Access.</em> We may request access or permission to certain features from your mobile device, including your mobile device's camera, storage, and other features. If you wish to change our access or permissions, you may do so in your device's settings.</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text"><em>Mobile Device Data.</em> We automatically collect device information, operating system, version information and system configuration information, device and application identification numbers, browser type and version, hardware model Internet service provider and/or mobile carrier, and Internet Protocol (IP) address.</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text"><em>Push Notifications.</em> We may request to send you push notifications regarding your account or certain features of the application(s). If you wish to opt out from receiving these types of communications, you may turn them off in your device's settings.</span></span></li>
            </ul>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text">This information is primarily needed to maintain the security and operation of our application(s), for troubleshooting, and for our internal analytics and reporting purposes.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</span></span></div>
            
            <div style={{lineHeight: 1.5}}><span data-custom-class="heading_2" style={{color: "rgb(0, 0, 0)"}}><span style={{fontSize: "15px"}}><strong><h3>Information automatically collected</h3></strong></span></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</em></span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">Like many businesses, we also collect information through cookies and similar technologies.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">The information we collect includes:</span></span></div>
            <ul>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><em>Log and Usage Data.</em> Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services.</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><em>Device Data.</em> We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services.</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><em>Location Data.</em> We collect location data such as information about your device's location, which can be either precise or imprecise.</span></span></li>
            </ul>
            
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><strong><span data-custom-class="heading_2"><h3>Google API</h3></span></strong><span data-custom-class="body_text">Our use of information received from Google APIs will adhere to </span></span><a data-custom-class="link" href="https://developers.google.com/terms/api-services-user-data-policy" rel="noopener noreferrer" target="_blank"><span style={{color: "rgb(0, 58, 250)", fontSize: "15px"}}><span data-custom-class="body_text">Google API Services User Data Policy</span></span></a><span style={{fontSize: "15px"}}><span data-custom-class="body_text">, including the </span></span><a data-custom-class="link" href="https://developers.google.com/terms/api-services-user-data-policy#limited-use" rel="noopener noreferrer" target="_blank"><span style={{color: "rgb(0, 58, 250)", fontSize: "15px"}}><span data-custom-class="body_text">Limited Use requirements</span></span></a><span style={{fontSize: "15px"}}><span data-custom-class="body_text">.</span><br/></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div id="infouse" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span id="control" style={{color: "rgb(0, 0, 0)"}}><strong><span data-custom-class="heading_1"><h2>2. HOW DO WE PROCESS YOUR INFORMATION?</h2></span></strong></span></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong><em>In Short: </em></strong><em>We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.</em></span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</strong></span></span></div>
            <ul>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong>To facilitate account creation and authentication and otherwise manage user accounts.</strong> We may process your information so you can create and log in to your account, as well as keep your account in working order.</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong>To request feedback.</strong> We may process your information when necessary to request feedback and to contact you about your use of our Services.</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong>To send you marketing and promotional communications.</strong> We may process the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences.</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span data-custom-class="body_text"><span style={{fontSize: "15px"}}><strong>To protect our Services.</strong> We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention.</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span data-custom-class="body_text"><span style={{fontSize: "15px"}}><strong>To identify usage trends.</strong> We may process information about how you use our Services to better understand how they are being used so we can improve them.</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text"><strong>To determine the effectiveness of our marketing and promotional campaigns.</strong> We may process your information to better understand how to provide marketing and promotional campaigns that are most relevant to you.</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span data-custom-class="body_text"><span style={{fontSize: "15px"}}><strong>To save or protect an individual's vital interest.</strong> We may process your information when necessary to save or protect an individual's vital interest, such as to prevent harm.</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span data-custom-class="body_text"><span style={{fontSize: "15px"}}><strong>To improve our AI models and Service.</strong> Analyzing a diverse range of videos helps us train smarter, more effective coaching models, which provides a better and more personalized experience for all users.</span></span></li>
            </ul>
            
            <div id="legalbases" style={{lineHeight: 1.5}}><strong><span style={{fontSize: "15px"}}><span data-custom-class="heading_1"><h2>3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?</h2></span></span></strong></div>
            <div style={{lineHeight: 1.5}}><em><span style={{fontSize: "15px"}}><span data-custom-class="body_text"><strong>In Short: </strong>We only process your personal information when we believe it is necessary and we have a valid legal reason to do so under applicable law.</span></span></em></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text">The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:</span></span></div>
            <ul>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text"><strong>Consent.</strong> We may process your information if you have given us permission to use your personal information for a specific purpose. You can withdraw your consent at any time. Learn more about <a data-custom-class="link" href="#withdrawconsent"><span style={{color: "rgb(0, 58, 250)"}}>withdrawing your consent</span></a>.</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span data-custom-class="body_text"><span style={{fontSize: "15px"}}><strong>Legitimate Interests.</strong> We may process your information when we believe it is reasonably necessary to achieve our legitimate business interests.</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span data-custom-class="body_text"><span style={{fontSize: "15px"}}><strong>Legal Obligations.</strong> We may process your information where we believe it is necessary for compliance with our legal obligations.</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span data-custom-class="body_text"><span style={{fontSize: "15px"}}><strong>Vital Interests.</strong> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party.</span></span></li>
            </ul>
            
            <div style={{lineHeight: 1.5}}><span data-custom-class="body_text"><span style={{fontSize: "15px"}}><strong><u><em>If you are located in Canada, this section applies to you.</em></u></strong></span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            <div style={{lineHeight: 1.5}}><span data-custom-class="body_text"><span style={{fontSize: "15px"}}>We may process your information if you have given us specific permission to use your personal information for a specific purpose, or in situations where your permission can be inferred. You can <a data-custom-class="link" href="#withdrawconsent"><span data-custom-class="body_text"><span style={{color: "rgb(0, 58, 250)"}}>withdraw your consent</span></span></a> at any time.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div id="whoshare" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span id="control" style={{color: "rgb(0, 0, 0)"}}><strong><span data-custom-class="heading_1"><h2>4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2></span></strong></span></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> We may share information in specific situations described in this section and/or with the following third parties.</em></span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text">We may need to share your personal information in the following situations:</span></span></div>
            <ul>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text"><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</span></span></li>
            </ul>
            
            <div id="cookies" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span id="control" style={{color: "rgb(0, 0, 0)"}}><strong><span data-custom-class="heading_1"><h2>5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2></span></strong></span></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> We may use cookies and other tracking technologies to collect and store your information.</em></span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">We may use cookies and similar tracking technologies to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services and your account, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><strong><span data-custom-class="heading_2"><h3>Google Analytics</h3></span></strong> <span data-custom-class="body_text">We may share your information with Google Analytics to track and analyze the use of the Services. To opt out of being tracked by Google Analytics across the Services, visit <span style={{color: "rgb(0, 58, 250)"}}><a data-custom-class="link" href="https://tools.google.com/dlpage/gaoptout" rel="noopener noreferrer" target="_blank">https://tools.google.com/dlpage/gaoptout</a></span>. For more information on the privacy practices of Google, please visit the <span style={{color: "rgb(0, 58, 250)"}}><a data-custom-class="link" href="https://policies.google.com/privacy" rel="noopener noreferrer" target="_blank">Google Privacy & Terms page</a></span>.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div id="ai" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><strong><span data-custom-class="heading_1"><h2>6. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</h2></span></strong><strong><em><span data-custom-class="body_text">In Short:</span></em></strong><em><span data-custom-class="body_text"> We offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies.</span></em></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text">As part of our Services, we offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies (collectively, "AI Products"). These tools are designed to enhance your experience and provide you with innovative solutions.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><strong><span data-custom-class="body_text">Use of AI Technologies</span></strong></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text">We provide the AI Products through third-party service providers ("AI Service Providers"), including Google Cloud AI. Your input, output, and personal information will be shared with and processed by these AI Service Providers to enable your use of our AI Products. You must not use the AI Products in any way that violates the terms or policies of any AI Service Provider.</span></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><br/></span></div>
            
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><strong><span data-custom-class="body_text">Our AI Products</span></strong></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><br/></span></div>
            
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text">Our AI Products are designed for the following functions:</span></span></div>
            <ul>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text">AI insights</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text">AI predictive analytics</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text">AI applications</span></span></li>
            </ul>
            
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><strong><span data-custom-class="body_text">How We Process Your Data Using AI</span></strong></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><br/></span></div>
            
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text">All personal information processed using our AI Products is handled in line with our Privacy Notice and our agreement with third parties. This ensures high security and safeguards your personal information throughout the process.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div id="sociallogins" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span id="control" style={{color: "rgb(0, 0, 0)"}}><strong><span data-custom-class="heading_1"><h2>7. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h2></span></strong></span></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong><em>In Short: </em></strong><em>If you choose to register or log in to our Services using a social media account, we may have access to certain information about you.</em></span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">Our Services offer you the ability to register and log in using your third-party social media account details. Where you choose to do this, we will receive certain profile information about you from your social media provider.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div id="inforetain" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span id="control" style={{color: "rgb(0, 0, 0)"}}><strong><span data-custom-class="heading_1"><h2>8. HOW LONG DO WE KEEP YOUR INFORMATION?</h2></span></strong></span></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong><em>In Short: </em></strong><em>We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.</em></span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice. No purpose in this notice will require us keeping your personal information for longer than three (3) months past the termination of the user's account.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div id="infosafe" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span id="control" style={{color: "rgb(0, 0, 0)"}}><strong><span data-custom-class="heading_1"><h2>9. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2></span></strong></span></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong><em>In Short: </em></strong><em>We aim to protect your personal information through a system of organizational and technical security measures.</em></span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div id="privacyrights" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span id="control" style={{color: "rgb(0, 0, 0)"}}><strong><span data-custom-class="heading_1"><h2>10. WHAT ARE YOUR PRIVACY RIGHTS?</h2></span></strong></span></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> Depending on your state of residence in the US or in some regions, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.</em></span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">In some regions, you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div id="withdrawconsent" style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong><u>Withdrawing your consent:</u></strong> If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us using the contact details provided in the section "<a data-custom-class="link" href="#contact"><span style={{color: "rgb(0, 58, 250)"}}>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></a>" below.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="heading_2"><strong><h3>Account Information</h3></strong></span></span></div>
            <div style={{lineHeight: 1.5}}><span data-custom-class="body_text"><span style={{fontSize: "15px"}}>If you would at any time like to review or change the information in your account or terminate your account, you can:</span></span></div>
            <ul>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span data-custom-class="body_text"><span style={{fontSize: "15px"}}>Log in to your account settings and update your user account.</span></span></li>
            </ul>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text">Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div style={{lineHeight: 1.5}}><span data-custom-class="body_text"><span style={{fontSize: "15px"}}>If you have questions or comments about your privacy rights, you may email us at <a target="_blank" data-custom-class="link" href="mailto:support@surgeplus.app">support@surgeplus.app</a>.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div id="DNT" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span id="control" style={{color: "rgb(0, 0, 0)"}}><strong><span data-custom-class="heading_1"><h2>11. CONTROLS FOR DO-NOT-TRACK FEATURES</h2></span></strong></span></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div id="uslaws" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span id="control" style={{color: "rgb(0, 0, 0)"}}><strong><span data-custom-class="heading_1"><h2>12. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2></span></strong></span></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong><em>In Short: </em></strong><em>If you are a resident of California or other US states, you may have the right to request access to and receive details about the personal information we maintain about you and how we have processed it, correct inaccuracies, get a copy of, or delete your personal information.</em></span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text">Depending upon the state where you live, you may have the following rights:</span></span></div>
            <ul>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><strong>Right to know</strong> whether or not we are processing your personal data</span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><strong>Right to access </strong>your personal data</span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><strong>Right to correct </strong>inaccuracies in your personal data</span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><strong>Right to request</strong> the deletion of your personal data</span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><strong>Right to obtain a copy </strong>of the personal data you previously shared with us</span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><strong>Right to non-discrimination</strong> for exercising your rights</span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><strong>Right to opt out</strong> of the processing of your personal data if it is used for targeted advertising, the sale of personal data, or profiling</span></li>
            </ul>
            
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><strong><span data-custom-class="heading_2"><h3>How to Exercise Your Rights</h3></span></strong><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">To exercise these rights, you can contact us by visiting <span style={{color: "rgb(0, 58, 250)"}}><a target="_blank" data-custom-class="link" href="http://www.surgeplus.app/contact">http://www.surgeplus.app/contact</a></span>, by emailing us at <a target="_blank" data-custom-class="link" href="mailto:support@surgeplus.app">support@surgeplus.app</a>, or by referring to the contact details at the bottom of this document.</span></span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div id="otherlaws" style={{lineHeight: 1.5}}><span id="otherlaws" style={{fontSize: "15px"}}><strong><span data-custom-class="heading_1"><h2>13. DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?</h2></span></strong></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><em><strong><span data-custom-class="body_text">In Short:</span></strong><span data-custom-class="body_text"> You may have additional rights based on the country you reside in.</span></em></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="heading_2"><h3><strong>Australia and New Zealand</strong></h3></span></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text">We collect and process your personal information under the obligations and conditions set by Australia's Privacy Act 1988 and New Zealand's Privacy Act 2020 (Privacy Act).</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><strong><span data-custom-class="heading_2"><h3>Republic of South Africa</h3></span></strong><span data-custom-class="body_text">At any time, you have the right to request access to or correction of your personal information. You can make such a request by contacting us using the contact details provided in the section "<a href="#request"><span style={{color: "rgb(0, 58, 250)"}}>HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</span></a>"</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div id="policyupdates" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span id="control" style={{color: "rgb(0, 0, 0)"}}><strong><span data-custom-class="heading_1"><h2>14. DO WE MAKE UPDATES TO THIS NOTICE?</h2></span></strong></span></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><em><strong>In Short: </strong>Yes, we will update this notice as necessary to stay compliant with relevant laws.</em></span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div id="contact" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span id="control" style={{color: "rgb(0, 0, 0)"}}><strong><span data-custom-class="heading_1"><h2>15. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2></span></strong></span></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">If you have questions or comments about this notice, you may email us at <a target="_blank" data-custom-class="link" href="mailto:support@surgeplus.app">support@surgeplus.app</a> or contact us by post at:</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span style={{color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong>Suhas Suren</strong></span></span></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text"><strong>Bhudigere Cross</strong></span></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><strong><span style={{color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">Bengaluru, Karnataka 560067</span></span></strong></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text">India</span></span></div>
            <div style={{lineHeight: 1.5}}><strong><span style={{fontSize: "15px"}}><span data-custom-class="body_text"><strong>Phone: +91 6360855691</strong></span></span></strong></div>
            <div style={{lineHeight: 1.5}}><strong><span style={{fontSize: "15px"}}><span data-custom-class="body_text"><strong><a target="_blank" data-custom-class="link" href="mailto:support@surgeplus.app">support@surgeplus.app</a></strong></span></span></strong></div>
            <div style={{lineHeight: 1.5}}><br/></div>
            
            <div id="request" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span id="control" style={{color: "rgb(0, 0, 0)"}}><strong><span data-custom-class="heading_1"><h2>16. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2></span></strong></span></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">Based on the applicable laws of your country or state of residence in the US, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. To request to review, update, or delete your personal information, please visit: <span style={{color: "rgb(0, 58, 250)"}}><a target="_blank" data-custom-class="link" href="http://www.surgeplus.app/contact">http://www.surgeplus.app/contact</a></span>.</span></span></div>
          </div>
        </ContentWrapper>
      </Container>
      <Footer />
    </>
  );
}
