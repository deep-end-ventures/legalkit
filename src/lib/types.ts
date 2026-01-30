export interface QuestionnaireData {
  // Company Info
  companyName: string;
  companyWebsite: string;
  companyEmail: string;
  companyAddress: string;
  companyType: 'saas' | 'ecommerce' | 'mobile_app' | 'website' | 'marketplace' | 'other';
  
  // Data Collection
  dataCollected: string[];
  dataUsage: string[];
  thirdPartySharing: boolean;
  thirdParties: string[];
  
  // Jurisdiction
  jurisdiction: string;
  gdprApplicable: boolean;
  ccpaApplicable: boolean;
  childrenData: boolean;
  
  // Cookies
  usesCookies: boolean;
  cookieTypes: string[];
  
  // Document Selection
  documents: ('privacy_policy' | 'terms_of_service' | 'cookie_policy')[];
  
  // Additional
  hasUserAccounts: boolean;
  acceptsPayments: boolean;
  hasUserContent: boolean;
  hasSubscription: boolean;
  effectiveDate: string;
}

export interface GeneratedDocument {
  id: string;
  type: 'privacy_policy' | 'terms_of_service' | 'cookie_policy';
  title: string;
  content: string;
  markdownContent: string;
  htmlContent: string;
  createdAt: string;
  companyName: string;
}

export const DATA_TYPES = [
  'Name and email address',
  'Phone number',
  'Mailing address',
  'Payment information',
  'IP address',
  'Browser and device information',
  'Usage data and analytics',
  'Location data',
  'Social media profiles',
  'Cookies and tracking data',
  'User-generated content',
  'Employment information',
  'Health information',
  'Biometric data',
] as const;

export const DATA_USAGE = [
  'Provide and maintain services',
  'Process transactions',
  'Send marketing communications',
  'Improve user experience',
  'Analytics and research',
  'Customer support',
  'Legal compliance',
  'Fraud prevention',
  'Personalization',
] as const;

export const THIRD_PARTIES = [
  'Google Analytics',
  'Stripe',
  'PayPal',
  'AWS',
  'Cloudflare',
  'Mailchimp / SendGrid',
  'Facebook / Meta',
  'Intercom',
  'Sentry',
  'Mixpanel',
] as const;

export const COOKIE_TYPES = [
  'Essential / Strictly Necessary',
  'Analytics / Performance',
  'Functional / Preferences',
  'Advertising / Targeting',
  'Social Media',
] as const;

export const JURISDICTIONS = [
  'United States',
  'European Union (GDPR)',
  'United Kingdom',
  'California (CCPA/CPRA)',
  'Canada (PIPEDA)',
  'Australia',
  'Brazil (LGPD)',
  'India',
  'International / Multiple',
] as const;

export const COMPANY_TYPES = [
  { value: 'saas', label: 'SaaS / Web Application' },
  { value: 'ecommerce', label: 'E-Commerce / Online Store' },
  { value: 'mobile_app', label: 'Mobile Application' },
  { value: 'website', label: 'Website / Blog' },
  { value: 'marketplace', label: 'Marketplace / Platform' },
  { value: 'other', label: 'Other' },
] as const;
