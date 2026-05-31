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
            <div><span style={{color: "rgb(127, 127, 127)"}}><strong><span style={{fontSize: "15px"}}><span data-custom-class="subtitle">Last updated June 01, 2026</span></span></strong></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">This Privacy Notice for Suhas Suren (doing business as Shot AI) (&ldquo;<strong>we</strong>,&rdquo; &ldquo;<strong>us</strong>,&rdquo; or &ldquo;<strong>our</strong>&rdquo;) describes how and why we might access, collect, store, use, and/or share (&ldquo;<strong>process</strong>&rdquo;) your personal information when you use our services (&ldquo;<strong>Services</strong>&rdquo;), including when you:</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <ul>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">Download and use our mobile application (Shot AI), or any other application of ours that links to this Privacy Notice</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">Use Shot AI. The App is a mobile application that provides multi-sport AI swing and form analysis, including video upload, on-device pose detection, AI-powered analysis using Google&apos;s Gemini models, performance tracking, and subscription access.</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">Engage with us in other related ways, including any sales, marketing, or events</span></span></li>
            </ul>

            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text"><strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. If you still have any questions or concerns, please contact us at <a target="_blank" data-custom-class="link" href="mailto:support@surgeplus.app">support@surgeplus.app</a>.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <div style={{lineHeight: 1.5}}><strong><span style={{fontSize: "15px"}}><span data-custom-class="heading_1"><h2>SUMMARY OF KEY POINTS</h2></span></span></strong></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text"><strong>What personal information do we process?</strong> We process personal information you provide to us, including account details and video recordings you upload of your athletic performance.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text"><strong>Do we process any sensitive personal information?</strong> Yes. We process biometric and health-related information (such as body-pose and movement data derived from your videos) when necessary, with your consent or as otherwise permitted by applicable law.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text"><strong>Do your videos leave your device?</strong> Yes. While some pose detection runs on your device, the videos and images you upload are transmitted to our third-party AI provider (Google) for analysis. See &ldquo;DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?&rdquo; below.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text"><strong>Do we collect any information from third parties?</strong> We do not collect personal information about you from third parties, but we do use third-party tools (such as analytics and advertising-attribution SDKs) that collect information automatically.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text"><strong>How do we process your information?</strong> To provide, improve, and administer our Services, to communicate with you, for security and fraud prevention, for advertising attribution and analytics, and to comply with law.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text"><strong>In what situations and with which parties do we share personal information?</strong> We share information with service providers including Google (AI analysis, analytics, crash reporting), Meta/Facebook (advertising attribution), and Apple (payments). See Section 4.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text"><strong>How do we keep your information safe?</strong> We use organizational and technical measures to protect your personal information. However, no electronic transmission or storage can be guaranteed 100% secure.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text"><strong>What are your rights?</strong> Depending on where you are located, you may have rights regarding your personal information.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text"><strong>How do you exercise your rights?</strong> By visiting <a target="_blank" data-custom-class="link" href="http://www.surgeplus.app/contact">http://www.surgeplus.app/contact</a> or by contacting us. We will act on any request in accordance with applicable data protection laws.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <div id="toc" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span style={{color: "rgb(0, 0, 0)"}}><strong><span data-custom-class="heading_1"><h2>TABLE OF CONTENTS</h2></span></strong></span></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><a data-custom-class="link" href="#infocollect"><span style={{color: "rgb(0, 58, 250)"}}>1. WHAT INFORMATION DO WE COLLECT?</span></a></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><a data-custom-class="link" href="#infouse"><span style={{color: "rgb(0, 58, 250)"}}>2. HOW DO WE PROCESS YOUR INFORMATION?</span></a></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><a data-custom-class="link" href="#legalbases"><span style={{color: "rgb(0, 58, 250)"}}>3. WHAT LEGAL BASES DO WE RELY ON?</span></a></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><a data-custom-class="link" href="#whoshare"><span style={{color: "rgb(0, 58, 250)"}}>4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</span></a></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><a data-custom-class="link" href="#cookies"><span style={{color: "rgb(0, 58, 250)"}}>5. DO WE USE COOKIES AND TRACKING TECHNOLOGIES?</span></a></span></div>
            <div style={{lineHeight: 1.5}}><a data-custom-class="link" href="#ai"><span style={{color: "rgb(0, 58, 250)", fontSize: "15px"}}>6. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</span></a></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><a data-custom-class="link" href="#sociallogins"><span style={{color: "rgb(0, 58, 250)"}}>7. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</span></a></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><a data-custom-class="link" href="#inforetain"><span style={{color: "rgb(0, 58, 250)"}}>8. HOW LONG DO WE KEEP YOUR INFORMATION?</span></a></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><a data-custom-class="link" href="#infosafe"><span style={{color: "rgb(0, 58, 250)"}}>9. HOW DO WE KEEP YOUR INFORMATION SAFE?</span></a></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><a data-custom-class="link" href="#privacyrights"><span style={{color: "rgb(0, 58, 250)"}}>10. WHAT ARE YOUR PRIVACY RIGHTS?</span></a></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><a data-custom-class="link" href="#DNT"><span style={{color: "rgb(0, 58, 250)"}}>11. CONTROLS FOR DO-NOT-TRACK FEATURES</span></a></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><a data-custom-class="link" href="#uslaws"><span style={{color: "rgb(0, 58, 250)"}}>12. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</span></a></span></div>
            <div style={{lineHeight: 1.5}}><a data-custom-class="link" href="#otherlaws"><span style={{color: "rgb(0, 58, 250)", fontSize: "15px"}}>13. DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?</span></a></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><a data-custom-class="link" href="#policyupdates"><span style={{color: "rgb(0, 58, 250)"}}>14. DO WE MAKE UPDATES TO THIS NOTICE?</span></a></span></div>
            <div style={{lineHeight: 1.5}}><a data-custom-class="link" href="#contact"><span style={{color: "rgb(0, 58, 250)", fontSize: "15px"}}>15. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></a></div>
            <div style={{lineHeight: 1.5}}><a data-custom-class="link" href="#request"><span style={{color: "rgb(0, 58, 250)"}}>16. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</span></a></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            {/* Section 1 */}
            <div id="infocollect" style={{lineHeight: 1.5}}><span style={{color: "rgb(0, 0, 0)"}}><strong><span data-custom-class="heading_1"><h2>1. WHAT INFORMATION DO WE COLLECT?</h2></span></strong></span></div>

            <div style={{lineHeight: 1.5}}><span data-custom-class="heading_2" id="personalinfo" style={{color: "rgb(0, 0, 0)"}}><span style={{fontSize: "15px"}}><strong><h3>Personal information you disclose to us</h3></strong></span></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> We collect personal information that you provide to us.</em></span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">We collect personal information that you voluntarily provide when you register, express interest in our products, participate in activities on the Services, or contact us. This may include:</span></span></div>
            <ul>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">names</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">email addresses</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">contact or authentication data</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">user-uploaded media (e.g., videos of your athletic performance)</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">athletic profile data (e.g., chosen sport, performance goals, practice style)</span></span></li>
            </ul>

            <div id="sensitiveinfo" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text"><strong>Sensitive Information.</strong> When necessary, with your consent or as otherwise permitted by applicable law, we process the following categories of sensitive information:</span></span></div>
            <ul>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text">biometric data (e.g., body-pose, joint position, and movement data derived from your uploaded videos)</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text">health-related data (e.g., physical performance and technique information)</span></span></li>
            </ul>

            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">Because biometric and health-related data are sensitive, we process them only to provide your swing/form analysis and only with your consent, which you may withdraw at any time as described in Section 10.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong>Payment Data.</strong> We may collect data necessary to process your payment if you make purchases. All payment data is handled and stored by Apple Inc. (<a target="_blank" data-custom-class="link" href="https://www.apple.com/legal/privacy/">https://www.apple.com/legal/privacy/</a>). All subscriptions and financial transactions are processed securely and exclusively by Apple through their App Store In-App Purchase system. Shot AI does not collect, receive, process, or store your financial data such as credit card numbers or billing addresses.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong>Social Media Login Data.</strong> If you choose to register using a social media account, we collect certain profile information from that provider, as described in Section 7.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <div style={{lineHeight: 1.5}}><span data-custom-class="body_text"><span style={{fontSize: "15px"}}><strong>Application Data.</strong> If you use our application(s), we may collect:</span></span></div>
            <ul>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text"><em>Mobile Device Access.</em> We may request access to your device&apos;s camera, photo library/storage, and other features. You can change permissions in your device settings.</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text"><em>Mobile Device Data.</em> We automatically collect device information, operating system and version, device and application identifiers, hardware model, internet service provider and/or mobile carrier, and IP address.</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text"><em>Push Notifications.</em> We may request to send you push notifications. You can opt out in your device settings.</span></span></li>
            </ul>

            <div style={{lineHeight: 1.5}}><span data-custom-class="heading_2" style={{color: "rgb(0, 0, 0)"}}><span style={{fontSize: "15px"}}><strong><h3>Information automatically collected</h3></strong></span></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> Some information — such as your IP address and device characteristics — is collected automatically.</em></span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">We automatically collect device and usage information, such as IP address, device characteristics, operating system, language preferences, referring URLs, device name, country, location, and information about how and when you use our Services. We collect this through our own systems and through third-party SDKs (see Sections 4 and 5), including:</span></span></div>
            <ul>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><em>Log and Usage Data</em> — diagnostic, usage, and performance information.</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><em>Device Data</em> — information about the device you use to access the Services.</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><em>Location Data</em> — precise or imprecise location, depending on your device permissions.</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><em>Advertising and Attribution Data</em> — identifiers used to measure the performance of our marketing (see the Meta/Facebook disclosure in Section 4).</span></span></li>
            </ul>

            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><strong><span data-custom-class="heading_2"><h3>Google API</h3></span></strong><span data-custom-class="body_text">Our use of information received from Google APIs adheres to the </span></span><a data-custom-class="link" href="https://developers.google.com/terms/api-services-user-data-policy" rel="noopener noreferrer" target="_blank"><span style={{color: "rgb(0, 58, 250)", fontSize: "15px"}}><span data-custom-class="body_text">Google API Services User Data Policy</span></span></a><span style={{fontSize: "15px"}}><span data-custom-class="body_text">, including the </span></span><a data-custom-class="link" href="https://developers.google.com/terms/api-services-user-data-policy#limited-use" rel="noopener noreferrer" target="_blank"><span style={{color: "rgb(0, 58, 250)", fontSize: "15px"}}><span data-custom-class="body_text">Limited Use requirements</span></span></a><span style={{fontSize: "15px"}}><span data-custom-class="body_text">.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            {/* Section 2 */}
            <div id="infouse" style={{lineHeight: 1.5}}><strong><span data-custom-class="heading_1"><h2>2. HOW DO WE PROCESS YOUR INFORMATION?</h2></span></strong></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, for advertising and analytics, and to comply with law.</em></span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <ul>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong>To facilitate account creation and authentication and manage user accounts.</strong></span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong>To provide your swing/form analysis,</strong> which requires transmitting your uploaded video to our AI provider (Google) for processing.</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong>To request feedback and to contact you</strong> about your use of our Services.</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong>To send marketing and promotional communications,</strong> in line with your preferences.</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong>To protect our Services,</strong> including fraud monitoring and prevention.</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong>To identify usage trends</strong> and improve our Services.</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong>To measure and improve the effectiveness of our marketing and advertising campaigns,</strong> including through advertising-attribution partners such as Meta/Facebook.</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong>To improve our AI models</strong> — only if you opt in. Analyzing a diverse range of videos helps us train more effective coaching models. You can decline this without losing access to the core analysis feature.</span></span></li>
            </ul>

            {/* Section 3 */}
            <div id="legalbases" style={{lineHeight: 1.5}}><strong><span data-custom-class="heading_1"><h2>3. WHAT LEGAL BASES DO WE RELY ON?</h2></span></strong></div>
            <div style={{lineHeight: 1.5}}><em><span style={{fontSize: "15px"}}><span data-custom-class="body_text"><strong>In Short:</strong> We only process your personal information when we have a valid legal reason to do so under applicable law.</span></span></em></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text">Where GDPR/UK GDPR applies, we rely on:</span></span></div>
            <ul>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text"><strong>Consent</strong> — including your explicit consent to process biometric and health-related data. You can withdraw consent at any time.</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text"><strong>Legitimate Interests</strong> — to operate, secure, and improve our Services and measure our marketing.</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text"><strong>Legal Obligations</strong> — to comply with applicable law.</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text"><strong>Vital Interests</strong> — to protect someone&apos;s vital interests where necessary.</span></span></li>
            </ul>

            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text">If you are located in Canada, we may process your information where you have given permission (express or implied). You can withdraw consent at any time.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            {/* Section 4 */}
            <div id="whoshare" style={{lineHeight: 1.5}}><strong><span data-custom-class="heading_1"><h2>4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2></span></strong></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> We share information with the service providers and in the situations described below.</em></span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text">We share personal information with the following categories of third parties:</span></span></div>
            <ul>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text"><strong>Google (AI analysis, analytics, crash reporting, authentication).</strong> We transmit your uploaded videos and images to Google&apos;s Gemini models to generate your Analysis. We also use Google Firebase for analytics, crash reporting, and authentication. Google&apos;s processing is governed by the <a target="_blank" data-custom-class="link" href="https://policies.google.com/privacy" rel="noopener noreferrer"><span style={{color: "rgb(0, 58, 250)"}}>Google Privacy Policy</span></a> and the <a target="_blank" data-custom-class="link" href="https://developers.google.com/terms/api-services-user-data-policy" rel="noopener noreferrer"><span style={{color: "rgb(0, 58, 250)"}}>Google API Services User Data Policy</span></a>.</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text"><strong>Meta Platforms, Inc. (Facebook).</strong> We use the Meta/Facebook SDK to measure the performance of our advertising and to attribute app installs and events to our marketing campaigns. This may involve sharing device and advertising identifiers with Meta. On iOS, this tracking occurs only where you have granted permission through Apple&apos;s App Tracking Transparency prompt. You can review Meta&apos;s practices in the <a target="_blank" data-custom-class="link" href="https://www.facebook.com/privacy/policy/" rel="noopener noreferrer"><span style={{color: "rgb(0, 58, 250)"}}>Meta Privacy Policy</span></a>.</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text"><strong>Apple Inc. (payments).</strong> All purchases are processed by Apple; we do not receive your financial data.</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text"><strong>Business Transfers.</strong> We may share or transfer your information in connection with any merger, sale of assets, financing, or acquisition of all or part of our business.</span></span></li>
            </ul>

            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text">We do not sell your personal information for money. Certain advertising-attribution activity may be considered a &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; under some US state laws; see Section 12 for your opt-out rights.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            {/* Section 5 */}
            <div id="cookies" style={{lineHeight: 1.5}}><strong><span data-custom-class="heading_1"><h2>5. DO WE USE COOKIES AND TRACKING TECHNOLOGIES?</h2></span></strong></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> We use tracking technologies to collect and store information.</em></span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">We use tracking technologies (including mobile SDKs and device identifiers) to maintain security, prevent crashes, fix bugs, save preferences, support core functions, and measure usage and advertising performance.</span></span></div>
            <ul>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text"><strong>Google Firebase Analytics &amp; Crashlytics</strong> — to understand usage and diagnose crashes.</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text"><strong>Meta/Facebook SDK</strong> — for advertising attribution and measurement, subject to your App Tracking Transparency choice.</span></span></li>
            </ul>

            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text">You can limit tracking through your device&apos;s privacy settings and the App Tracking Transparency prompt.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            {/* Section 6 */}
            <div id="ai" style={{lineHeight: 1.5}}><strong><span data-custom-class="heading_1"><h2>6. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</h2></span></strong></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> Yes. Our Services include features powered by artificial intelligence, and using them involves sending your content to a third-party AI provider.</em></span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text">We provide AI features (&ldquo;AI Products&rdquo;) through third-party AI service providers, including Google (Gemini models via Google Cloud / the Gemini API). To analyze your performance, the videos and images you upload are transmitted to Google for processing. While some pose detection runs locally on your device, the AI analysis itself requires sending your content off-device to Google.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text">Your input (uploaded media and related data) and output (the resulting Analysis) are processed by these AI providers to enable the feature. You must not use the AI Products in any way that violates the providers&apos; terms or policies. All personal information processed through our AI Products is handled in line with this Privacy Notice and our agreements with these providers.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            {/* Section 7 */}
            <div id="sociallogins" style={{lineHeight: 1.5}}><strong><span data-custom-class="heading_1"><h2>7. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h2></span></strong></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> If you log in using a social media account, we may receive certain profile information.</em></span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">If you register or log in using a third-party social media account, we receive certain profile information from that provider (such as name and email). We use it only as described in this Notice.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            {/* Section 8 */}
            <div id="inforetain" style={{lineHeight: 1.5}}><strong><span data-custom-class="heading_1"><h2>8. HOW LONG DO WE KEEP YOUR INFORMATION?</h2></span></strong></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> We keep your information only as long as necessary.</em></span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">We keep your personal information only as long as necessary for the purposes set out in this Notice, unless a longer period is required by law. After you terminate your account, we delete or anonymize your personal information within a reasonable period, except where we must retain certain information to prevent fraud, resolve disputes, enforce our terms, or comply with legal requirements.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            {/* Section 9 */}
            <div id="infosafe" style={{lineHeight: 1.5}}><strong><span data-custom-class="heading_1"><h2>9. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2></span></strong></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> We use organizational and technical security measures.</em></span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">We have implemented appropriate and reasonable technical and organizational security measures designed to protect your personal information. However, no electronic transmission or storage technology can be guaranteed 100% secure.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            {/* Section 10 */}
            <div id="privacyrights" style={{lineHeight: 1.5}}><strong><span data-custom-class="heading_1"><h2>10. WHAT ARE YOUR PRIVACY RIGHTS?</h2></span></strong></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> Depending on your location, you may have rights to access, change, or delete your personal information.</em></span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">Depending on your region, you may have the right to: request access to and a copy of your personal information; request correction or deletion; restrict or object to processing; data portability; and to withdraw consent (including for biometric/health data processing) at any time.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <div id="withdrawconsent" style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong><u>Withdrawing consent.</u></strong> Where we rely on your consent, you can withdraw it at any time by contacting us at <a target="_blank" data-custom-class="link" href="mailto:support@surgeplus.app">support@surgeplus.app</a>. Withdrawal does not affect prior lawful processing.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="heading_2"><strong><h3>Account Information</h3></strong></span></span></div>
            <div style={{lineHeight: 1.5}}><span data-custom-class="body_text"><span style={{fontSize: "15px"}}>To review, change, or terminate your account, you can:</span></span></div>
            <ul>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span data-custom-class="body_text"><span style={{fontSize: "15px"}}>Log in to your account settings and update your account, or delete your account in-app.</span></span></li>
            </ul>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text">Upon request, we will deactivate or delete your account and information from our active databases, subject to the retention exceptions in Section 8.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <div style={{lineHeight: 1.5}}><span data-custom-class="body_text"><span style={{fontSize: "15px"}}>For privacy questions, email <a target="_blank" data-custom-class="link" href="mailto:support@surgeplus.app">support@surgeplus.app</a>.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            {/* Section 11 */}
            <div id="DNT" style={{lineHeight: 1.5}}><strong><span data-custom-class="heading_1"><h2>11. CONTROLS FOR DO-NOT-TRACK FEATURES</h2></span></strong></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">Most browsers and some mobile systems offer a Do-Not-Track (&ldquo;DNT&rdquo;) feature. As no uniform DNT standard has been finalized, we do not currently respond to DNT signals. On iOS, you can control tracking through the App Tracking Transparency prompt and your device settings.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            {/* Section 12 */}
            <div id="uslaws" style={{lineHeight: 1.5}}><strong><span data-custom-class="heading_1"><h2>12. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2></span></strong></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> Residents of certain US states have specific rights.</em></span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text">Depending on your state, you may have the right to: know whether we process your personal data; access it; correct inaccuracies; request deletion; obtain a copy; non-discrimination for exercising your rights; and opt out of processing for targeted advertising, the sale of personal data, or profiling. Because we use advertising-attribution partners (e.g., Meta), you may exercise your opt-out by adjusting your App Tracking Transparency setting and by contacting us.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text">To exercise these rights, visit <a target="_blank" data-custom-class="link" href="http://www.surgeplus.app/contact"><span style={{color: "rgb(0, 58, 250)"}}>http://www.surgeplus.app/contact</span></a>, email <a target="_blank" data-custom-class="link" href="mailto:support@surgeplus.app">support@surgeplus.app</a>, or use the contact details below.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            {/* Section 13 */}
            <div id="otherlaws" style={{lineHeight: 1.5}}><strong><span data-custom-class="heading_1"><h2>13. DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?</h2></span></strong></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="heading_2"><strong><h3>Australia and New Zealand</h3></strong></span></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text">We process your personal information under Australia&apos;s Privacy Act 1988 and New Zealand&apos;s Privacy Act 2020.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><strong><span data-custom-class="heading_2"><h3>Republic of South Africa</h3></span></strong><span data-custom-class="body_text">You may request access to or correction of your personal information by contacting us (see Section 16).</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            {/* Section 14 */}
            <div id="policyupdates" style={{lineHeight: 1.5}}><strong><span data-custom-class="heading_1"><h2>14. DO WE MAKE UPDATES TO THIS NOTICE?</h2></span></strong></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> Yes, as necessary to stay compliant.</em></span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">We may update this Privacy Notice. The updated version will be indicated by a revised date. If we make material changes, we may notify you by prominent posting or direct notification.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            {/* Section 15 */}
            <div id="contact" style={{lineHeight: 1.5}}><strong><span data-custom-class="heading_1"><h2>15. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2></span></strong></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">Email <a target="_blank" data-custom-class="link" href="mailto:support@surgeplus.app">support@surgeplus.app</a> or write to:</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span style={{color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong>Suhas Suren</strong></span></span></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text">Bhudigere Cross</span></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span style={{color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">Bengaluru, Karnataka 560067</span></span></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text">India</span></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text">Phone: +91 6360855691</span></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text"><a target="_blank" data-custom-class="link" href="mailto:support@surgeplus.app">support@surgeplus.app</a></span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            {/* Section 16 */}
            <div id="request" style={{lineHeight: 1.5}}><strong><span data-custom-class="heading_1"><h2>16. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2></span></strong></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">You may have the right to request access to, correction of, or deletion of your personal information. To do so, visit <a target="_blank" data-custom-class="link" href="http://www.surgeplus.app/contact"><span style={{color: "rgb(0, 58, 250)"}}>http://www.surgeplus.app/contact</span></a> or delete your account in-app.</span></span></div>
          </div>
        </ContentWrapper>
      </Container>
      <Footer />
    </>
  );
}
