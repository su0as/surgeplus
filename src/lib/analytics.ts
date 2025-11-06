/**
 * Google Analytics 4 Integration
 * Type-safe analytics tracking for SURGE+ website
 */

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || '';

// Initialize Google Analytics
export const initGA = (): void => {
  if (!GA_TRACKING_ID || typeof window === 'undefined') return;
  
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer?.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_TRACKING_ID, {
    anonymize_ip: true,
    send_page_view: false, // We'll send manually
  });
};

// Page view tracking
export const logPageView = (url: string, title?: string): void => {
  if (!GA_TRACKING_ID || typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
    page_title: title,
  });
};

// Generic event tracking
interface EventParams {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export const logEvent = ({ action, category, label, value }: EventParams): void => {
  if (!GA_TRACKING_ID || typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// CTA Click tracking
export const logCTAClick = (location: string, destination: string): void => {
  logEvent({
    action: 'cta_click',
    category: 'engagement',
    label: `${location}_to_${destination}`,
  });
};

// Section view tracking
export const logSectionView = (sectionName: string): void => {
  logEvent({
    action: 'section_view',
    category: 'engagement',
    label: sectionName,
  });
};

// Scroll depth tracking
export const logScrollDepth = (percentage: number): void => {
  logEvent({
    action: 'scroll_depth',
    category: 'engagement',
    label: `${percentage}%`,
    value: percentage,
  });
};

// Download button click tracking
export const logAppDownload = (platform: 'ios' | 'android', location: string): void => {
  logEvent({
    action: 'app_download_click',
    category: 'conversion',
    label: `${platform}_${location}`,
  });
};

// Outbound link tracking
export const logOutboundLink = (url: string, label?: string): void => {
  logEvent({
    action: 'outbound_link',
    category: 'engagement',
    label: label || url,
  });
};
