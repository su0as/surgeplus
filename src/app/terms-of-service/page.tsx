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
            <div><strong><span style={{fontSize: "26px"}}><span data-custom-class="title"><h1>TERMS AND CONDITIONS</h1></span></span></strong></div>
            <div><span style={{color: "rgb(127, 127, 127)"}}><strong><span style={{fontSize: "15px"}}><span data-custom-class="subtitle">Last updated June 01, 2026</span></span></strong></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <div style={{lineHeight: 1.5}}><strong><span data-custom-class="heading_1"><h2>AGREEMENT TO OUR LEGAL TERMS</h2></span></strong></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">We are <strong>Suhas Suren</strong>, doing business as <strong>Shot AI</strong> (&ldquo;<strong>Company</strong>,&rdquo; &ldquo;<strong>we</strong>,&rdquo; &ldquo;<strong>us</strong>,&rdquo; &ldquo;<strong>our</strong>&rdquo;), based in India at Bhudigere Cross, Bengaluru, Karnataka 560067.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">We operate the website <a target="_blank" data-custom-class="link" href="http://www.surgeplus.app"><span style={{color: "rgb(0, 58, 250)"}}>http://www.surgeplus.app</span></a> (the &ldquo;<strong>Site</strong>&rdquo;), the mobile application <strong>Shot AI</strong> (the &ldquo;<strong>App</strong>&rdquo;), and any related products and services that link to these legal terms (the &ldquo;<strong>Legal Terms</strong>&rdquo;) (collectively, the &ldquo;<strong>Services</strong>&rdquo;).</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <div style={{lineHeight: 1.5}}><strong><span data-custom-class="heading_1"><h2>1. Description of Service</h2></span></strong></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">Shot AI (&ldquo;the App&rdquo;) is a mobile application that provides multi-sport AI swing and form analysis. The Service includes, but is not limited to:</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <ul>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong>Video Upload and Storage:</strong> The ability to upload and store video recordings of your athletic performance (&ldquo;User Content&rdquo;).</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong>AI-Powered Analysis:</strong> The use of on-device pose detection together with generative AI models, including Google&apos;s Gemini models, to analyze User Content and generate data-driven feedback, which may include a &ldquo;Shot AI Score,&rdquo; technical strengths, and prioritized areas for improvement (&ldquo;Analysis&rdquo;). To produce the Analysis, your uploaded videos are transmitted to Google for processing.</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong>Performance Tracking:</strong> The ability to log and track scores and view progress over time.</span></span></li>
              <li data-custom-class="body_text" style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong>Subscription Access:</strong> Access through auto-renewing subscription plans (&ldquo;Subscriptions&rdquo;), which may include a free trial period or special offers.</span></span></li>
            </ul>

            <div style={{lineHeight: 1.5}}><br/></div>
            <div style={{lineHeight: 1.5}}><strong><span data-custom-class="heading_1"><h2>2. User Content and AI Analysis</h2></span></strong></div>

            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong>User-Generated Content.</strong> You retain all ownership rights to the videos you upload (&ldquo;User Content&rdquo;).</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong>License to Us.</strong> To provide the Service, you grant Shot AI a limited, non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and process your User Content solely to operate the App and generate your Analysis. We will use your User Content to improve our AI models only if you separately opt in to that use.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong>Transmission to Third-Party AI Providers.</strong> You acknowledge and agree that, to generate your Analysis, your User Content is transmitted to and processed by third-party AI providers (including Google). Your use of the AI features is also subject to those providers&apos; applicable terms.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong>AI Analysis Disclaimer.</strong> The Analysis (including the &ldquo;Shot AI Score&rdquo;) is generated by artificial intelligence. It is intended for informational and educational purposes only and is not a substitute for in-person professional coaching or medical advice. The Analysis may contain errors or inaccuracies (&ldquo;hallucinations&rdquo;). You agree to use the Analysis at your own risk and acknowledge that Shot AI is not liable for any decisions, actions, or injuries resulting from your reliance on the Analysis.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <div style={{lineHeight: 1.5}}><strong><span data-custom-class="heading_1"><h2>3. Service &ldquo;As Is&rdquo;</h2></span></strong></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">The Service is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. Shot AI makes no warranties (express or implied) regarding the reliability, accuracy, or availability of the Service. We do not guarantee that your use of the Service will result in any specific athletic improvement or outcome.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <div style={{lineHeight: 1.5}}><strong><span data-custom-class="heading_1"><h2>4. Subscriptions, Billing, and Cancellation</h2></span></strong></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">Subscriptions are auto-renewing and billed through your Apple App Store account. Payment is charged at confirmation of purchase or, where a free trial applies, at the end of the trial period unless cancelled at least 24 hours before it ends. Subscriptions renew automatically unless cancelled at least 24 hours before the end of the current period. You can manage or cancel subscriptions in your Apple account settings; deleting the App does not cancel a subscription. Any unused portion of a free trial is forfeited when you purchase a subscription, where applicable.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <div style={{lineHeight: 1.5}}><strong><span data-custom-class="heading_1"><h2>5. Eligibility and Minors</h2></span></strong></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">The Services are intended for users at least 13 years of age. Any user who is a minor in their jurisdiction (generally under 18) must have the permission of, and be supervised by, a parent or guardian. If you are a minor, your parent or guardian must read and agree to these Legal Terms before you use the Services.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <div style={{lineHeight: 1.5}}><strong><span data-custom-class="heading_1"><h2>6. Agreement</h2></span></strong></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">These Legal Terms are a legally binding agreement between you and Suhas Suren concerning your use of the Services. By accessing the Services, you confirm you have read, understood, and agree to be bound by all of these Legal Terms. IF YOU DO NOT AGREE, YOU ARE PROHIBITED FROM USING THE SERVICES AND MUST DISCONTINUE USE.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">We will provide notice of scheduled changes to the Services. Modified Legal Terms become effective upon posting or upon notice sent to you. By continuing to use the Services after the effective date, you agree to the modified terms.</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <div id="contact" style={{lineHeight: 1.5}}><strong><span data-custom-class="heading_1"><h2>7. Contact Us</h2></span></strong></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px", color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">To resolve a complaint or for more information, contact us at:</span></span></div>
            <div style={{lineHeight: 1.5}}><br/></div>

            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span style={{color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text"><strong>Suhas Suren</strong></span></span></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text">Bhudigere Cross</span></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span style={{color: "rgb(89, 89, 89)"}}><span data-custom-class="body_text">Bengaluru, Karnataka 560067</span></span></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text">India</span></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text">Phone: +91 6360855691</span></span></div>
            <div style={{lineHeight: 1.5}}><span style={{fontSize: "15px"}}><span data-custom-class="body_text"><a target="_blank" data-custom-class="link" href="mailto:support@surgeplus.app">support@surgeplus.app</a></span></span></div>
          </div>
        </ContentWrapper>
      </Container>
      <Footer />
    </>
  );
}
