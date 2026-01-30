import { QuestionnaireData } from '@/lib/types';
import { DISCLAIMERS } from '@/lib/disclaimers';

export function generatePrivacyPolicy(data: QuestionnaireData): string {
  const date = data.effectiveDate || new Date().toISOString().split('T')[0];
  
  let policy = `${DISCLAIMERS.documentHeader}

# Privacy Policy

**${data.companyName}**

**Effective Date:** ${date}
**Last Updated:** ${new Date().toISOString().split('T')[0]}

---

## 1. Introduction

Welcome to ${data.companyName} ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website${data.companyWebsite ? ` (${data.companyWebsite})` : ''} and use our services.

Please read this Privacy Policy carefully. By accessing or using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this Privacy Policy, please do not access our services.

## 2. Information We Collect

### 2.1 Personal Information You Provide

We may collect personal information that you voluntarily provide to us when you:
- Register for an account
- Make a purchase or transaction
- Contact us for support
- Subscribe to our newsletter
- Participate in surveys or promotions

The types of personal information we collect include:

${data.dataCollected.map(d => `- ${d}`).join('\n')}

`;

  if (data.hasUserAccounts) {
    policy += `### 2.2 Account Information

When you create an account with us, we collect your registration information, including your name, email address, and password. You are responsible for maintaining the confidentiality of your account credentials.

`;
  }

  if (data.acceptsPayments) {
    policy += `### 2.${data.hasUserAccounts ? '3' : '2'} Payment Information

When you make a purchase, we collect payment information necessary to process your transaction. This may include your credit card number, billing address, and other financial data. We use third-party payment processors and do not store your full payment card details on our servers.

`;
  }

  policy += `### Automatically Collected Information

When you access our services, we may automatically collect certain information, including:
- Device information (type, operating system, unique device identifiers)
- Browser information (type, version, language)
- IP address
- Usage data (pages visited, time spent, click patterns)
- Referring URLs

## 3. How We Use Your Information

We use the information we collect for the following purposes:

${data.dataUsage.map(u => `- ${u}`).join('\n')}

## 4. How We Share Your Information

${data.thirdPartySharing ? `We may share your information with the following types of third parties:

${data.thirdParties.map(t => `- **${t}**: To help us provide, maintain, and improve our services`).join('\n')}

We require all third parties to respect the security of your personal data and to treat it in accordance with applicable law.` : `We do not sell, trade, or otherwise transfer your personal information to outside parties except as described in this Privacy Policy. We may share information with service providers who assist us in operating our services, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.`}

## 5. Data Retention

We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.

## 6. Data Security

We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.

`;

  if (data.usesCookies) {
    policy += `## 7. Cookies and Tracking Technologies

We use cookies and similar tracking technologies to track activity on our services and hold certain information. Cookies are files with small amounts of data that are sent to your browser from a website and stored on your device.

Types of cookies we use:
${data.cookieTypes.map(c => `- **${c}**`).join('\n')}

You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our services.

For more details, please see our Cookie Policy.

`;
  }

  // GDPR Section
  if (data.gdprApplicable) {
    policy += `## ${data.usesCookies ? '8' : '7'}. Your Rights Under GDPR

If you are a resident of the European Economic Area (EEA), you have certain data protection rights under the General Data Protection Regulation (GDPR):

- **Right of Access** — You have the right to request copies of your personal data.
- **Right to Rectification** — You have the right to request correction of inaccurate personal data.
- **Right to Erasure** — You have the right to request deletion of your personal data ("right to be forgotten").
- **Right to Restrict Processing** — You have the right to request restriction of processing of your personal data.
- **Right to Data Portability** — You have the right to request transfer of your data to another organization.
- **Right to Object** — You have the right to object to processing of your personal data.
- **Rights Related to Automated Decision-Making** — You have the right not to be subject to decisions based solely on automated processing.

To exercise any of these rights, please contact us at ${data.companyEmail}.

**Legal Basis for Processing:** We process your personal data on the following legal bases:
- Your consent
- Performance of a contract
- Compliance with legal obligations
- Our legitimate interests

`;
  }

  // CCPA Section
  if (data.ccpaApplicable) {
    policy += `## California Privacy Rights (CCPA/CPRA)

If you are a California resident, you have the following rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA):

- **Right to Know** — You have the right to request disclosure of the personal information we collect, use, and share.
- **Right to Delete** — You have the right to request deletion of your personal information.
- **Right to Opt-Out** — You have the right to opt out of the sale or sharing of your personal information.
- **Right to Non-Discrimination** — We will not discriminate against you for exercising your privacy rights.
- **Right to Correct** — You have the right to request correction of inaccurate personal information.

We do not sell personal information as defined by the CCPA.

To exercise your rights, contact us at ${data.companyEmail} or submit a request through our website.

`;
  }

  // Children's Privacy
  if (data.childrenData) {
    policy += `## Children's Privacy

Our services are not directed to children under the age of 13 (or 16 in the EEA). We do not knowingly collect personal information from children. If we become aware that we have collected personal data from a child without parental consent, we will take steps to remove that information from our servers. If you believe we have collected information from a child, please contact us at ${data.companyEmail}.

`;
  }

  policy += `## Contact Us

If you have any questions about this Privacy Policy, please contact us:

- **Email:** ${data.companyEmail}
${data.companyAddress ? `- **Address:** ${data.companyAddress}` : ''}
${data.companyWebsite ? `- **Website:** ${data.companyWebsite}` : ''}

## Changes to This Privacy Policy

We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.

---

${DISCLAIMERS.documentFooter}`;

  return policy;
}
