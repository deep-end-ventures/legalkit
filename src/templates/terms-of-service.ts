import { QuestionnaireData } from '@/lib/types';
import { DISCLAIMERS } from '@/lib/disclaimers';

export function generateTermsOfService(data: QuestionnaireData): string {
  const date = data.effectiveDate || new Date().toISOString().split('T')[0];

  let terms = `${DISCLAIMERS.documentHeader}

# Terms of Service

**${data.companyName}**

**Effective Date:** ${date}
**Last Updated:** ${new Date().toISOString().split('T')[0]}

---

## 1. Agreement to Terms

By accessing or using the services provided by ${data.companyName} ("Company," "we," "our," or "us")${data.companyWebsite ? `, including our website at ${data.companyWebsite}` : ''}, you ("User," "you," or "your") agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you must not access or use our services.

We reserve the right to update or modify these Terms at any time. Your continued use of our services after any such changes constitutes your acceptance of the new Terms.

## 2. Description of Services

${data.companyName} provides ${getServiceDescription(data.companyType)} services. These Terms govern your use of all services, features, and content offered by ${data.companyName}.

## 3. Eligibility

You must be at least 18 years old (or the age of majority in your jurisdiction) to use our services. By using our services, you represent and warrant that you meet this eligibility requirement.

`;

  if (data.hasUserAccounts) {
    terms += `## 4. User Accounts

### 4.1 Account Creation
To access certain features, you may need to create an account. You agree to:
- Provide accurate, current, and complete information
- Maintain and update your information
- Keep your password secure and confidential
- Accept responsibility for all activities under your account
- Notify us immediately of any unauthorized access

### 4.2 Account Termination
We reserve the right to suspend or terminate your account at any time, with or without cause, and with or without notice. You may also delete your account at any time by contacting us.

`;
  }

  if (data.hasUserContent) {
    terms += `## ${data.hasUserAccounts ? '5' : '4'}. User Content

### User-Generated Content
You may submit, post, or display content through our services ("User Content"). By submitting User Content, you:

- Retain ownership of your User Content
- Grant us a non-exclusive, worldwide, royalty-free license to use, display, reproduce, and distribute your User Content in connection with operating our services
- Represent that you have the right to submit such content
- Agree not to submit content that is illegal, harmful, threatening, abusive, defamatory, or otherwise objectionable

### Content Moderation
We reserve the right to remove or disable access to any User Content that violates these Terms or is otherwise objectionable, at our sole discretion.

`;
  }

  if (data.acceptsPayments) {
    terms += `## Payment Terms

### Pricing and Billing
${data.hasSubscription ? `Our services are offered on a subscription basis. By subscribing, you agree to pay the applicable fees as described at the time of purchase. Subscription fees are billed in advance on a recurring basis.

### Cancellation and Refunds
You may cancel your subscription at any time. Cancellation will take effect at the end of the current billing period. We do not provide refunds for partial billing periods unless required by law.

### Price Changes
We reserve the right to change our prices at any time. We will provide reasonable notice before any price changes take effect.` : `By making a purchase through our services, you agree to pay all applicable fees and charges. All payments are processed through our third-party payment processor. Refunds are handled in accordance with our refund policy.`}

`;
  }

  terms += `## Intellectual Property

### Our Content
All content, features, and functionality of our services — including but not limited to text, graphics, logos, icons, images, audio, software, and design — are owned by ${data.companyName} or our licensors and are protected by copyright, trademark, and other intellectual property laws.

### Limited License
We grant you a limited, non-exclusive, non-transferable, revocable license to access and use our services for your personal or internal business purposes.

### Restrictions
You agree not to:
- Copy, modify, or distribute our content without permission
- Reverse engineer or attempt to extract source code
- Use our services for any illegal or unauthorized purpose
- Interfere with or disrupt the integrity of our services
- Attempt to gain unauthorized access to our systems
- Use automated systems (bots, scrapers) without permission

## Limitation of Liability

TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ${data.companyName.toUpperCase()} AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF OUR SERVICES.

OUR TOTAL LIABILITY FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR OUR SERVICES SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER.

## Disclaimer of Warranties

OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.

WE DO NOT WARRANT THAT OUR SERVICES WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE, OR THAT ANY DEFECTS WILL BE CORRECTED.

## Indemnification

You agree to indemnify, defend, and hold harmless ${data.companyName} and its officers, directors, employees, agents, and affiliates from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising out of or relating to:
- Your use of our services
- Your violation of these Terms
- Your violation of any rights of a third party
- Any User Content you submit

## Governing Law

${getGoverningLaw(data.jurisdiction)}

## Dispute Resolution

Any disputes arising out of or relating to these Terms or our services shall first be attempted to be resolved through good-faith negotiation. If negotiation fails, disputes shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, unless you opt out within 30 days of accepting these Terms.

## Severability

If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.

## Entire Agreement

These Terms, together with our Privacy Policy${data.usesCookies ? ' and Cookie Policy' : ''}, constitute the entire agreement between you and ${data.companyName} regarding your use of our services.

## Contact Us

If you have any questions about these Terms of Service, please contact us:

- **Email:** ${data.companyEmail}
${data.companyAddress ? `- **Address:** ${data.companyAddress}` : ''}
${data.companyWebsite ? `- **Website:** ${data.companyWebsite}` : ''}

---

${DISCLAIMERS.documentFooter}`;

  return terms;
}

function getServiceDescription(companyType: string): string {
  switch (companyType) {
    case 'saas': return 'software-as-a-service (SaaS) and web application';
    case 'ecommerce': return 'e-commerce and online retail';
    case 'mobile_app': return 'mobile application';
    case 'website': return 'website and online content';
    case 'marketplace': return 'marketplace and platform';
    default: return 'online';
  }
}

function getGoverningLaw(jurisdiction: string): string {
  if (jurisdiction.includes('European')) {
    return 'These Terms shall be governed by and construed in accordance with the laws of the European Union and the applicable member state, without regard to conflict of law principles.';
  }
  if (jurisdiction.includes('California')) {
    return 'These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.';
  }
  if (jurisdiction.includes('United Kingdom')) {
    return 'These Terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions.';
  }
  if (jurisdiction.includes('Canada')) {
    return 'These Terms shall be governed by and construed in accordance with the laws of Canada and the applicable province, without regard to its conflict of law provisions.';
  }
  return 'These Terms shall be governed by and construed in accordance with the laws of the United States and the applicable state, without regard to its conflict of law provisions.';
}
