import { QuestionnaireData } from '@/lib/types';
import { DISCLAIMERS } from '@/lib/disclaimers';

export function generateCookiePolicy(data: QuestionnaireData): string {
  const date = data.effectiveDate || new Date().toISOString().split('T')[0];

  const policy = `${DISCLAIMERS.documentHeader}

# Cookie Policy

**${data.companyName}**

**Effective Date:** ${date}
**Last Updated:** ${new Date().toISOString().split('T')[0]}

---

## 1. What Are Cookies?

Cookies are small text files that are placed on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and give website operators useful information.

## 2. How We Use Cookies

${data.companyName} uses cookies and similar technologies on our website${data.companyWebsite ? ` (${data.companyWebsite})` : ''} for the following purposes:

- **Essential Operations:** To make our website function properly
- **Authentication:** To recognize you when you return to our website
- **Security:** To support security features and detect abuse
- **Preferences:** To remember your settings and preferences
- **Analytics:** To understand how visitors use our website
${data.cookieTypes.includes('Advertising / Targeting') ? '- **Advertising:** To deliver relevant advertisements and measure their effectiveness' : ''}
${data.cookieTypes.includes('Social Media') ? '- **Social Media:** To enable social media features and integration' : ''}

## 3. Types of Cookies We Use

### 3.1 Essential / Strictly Necessary Cookies
${data.cookieTypes.includes('Essential / Strictly Necessary') ? `These cookies are necessary for the website to function and cannot be switched off. They are usually set in response to actions you take, such as setting privacy preferences, logging in, or filling in forms. Without these cookies, certain services cannot be provided.

| Cookie | Purpose | Duration |
|--------|---------|----------|
| session_id | Session management | Session |
| csrf_token | Security (CSRF protection) | Session |
| cookie_consent | Remember consent preferences | 1 year |` : 'We do not currently use essential cookies beyond what is necessary for basic website functionality.'}

### 3.2 Analytics / Performance Cookies
${data.cookieTypes.includes('Analytics / Performance') ? `These cookies allow us to count visits and traffic sources so we can measure and improve site performance. They help us know which pages are the most and least popular and see how visitors move around the site.

| Cookie | Purpose | Duration |
|--------|---------|----------|
| _ga | Google Analytics - User identification | 2 years |
| _ga_* | Google Analytics - Session state | 2 years |
| _gid | Google Analytics - Session identification | 24 hours |` : 'We do not currently use analytics or performance cookies.'}

### 3.3 Functional / Preference Cookies
${data.cookieTypes.includes('Functional / Preferences') ? `These cookies enable enhanced functionality and personalization, such as remembering your language preference or region. They may be set by us or by third-party providers whose services we have added to our pages.

| Cookie | Purpose | Duration |
|--------|---------|----------|
| locale | Language preference | 1 year |
| theme | Display preferences | 1 year |` : 'We do not currently use functional or preference cookies.'}

### 3.4 Advertising / Targeting Cookies
${data.cookieTypes.includes('Advertising / Targeting') ? `These cookies may be set through our site by our advertising partners. They may be used to build a profile of your interests and show you relevant advertisements on other sites. They do not directly store personal information but are based on uniquely identifying your browser and internet device.` : 'We do not currently use advertising or targeting cookies.'}

### 3.5 Social Media Cookies
${data.cookieTypes.includes('Social Media') ? `These cookies are set by social media services that we have added to the site to enable you to share our content with your networks. They are capable of tracking your browser across other sites and building a profile of your interests.` : 'We do not currently use social media cookies.'}

## 4. Third-Party Cookies

${data.thirdPartySharing && data.thirdParties.length > 0 ? `Some cookies are placed by third-party services that appear on our pages. We use the following third-party services that may set cookies:

${data.thirdParties.map(t => `- **${t}**`).join('\n')}

We do not control these third-party cookies. Please refer to the respective third-party privacy policies for more information.` : 'We may use third-party services that set their own cookies. We do not control these cookies, and their use is governed by the third party\'s own privacy policy.'}

## 5. Managing Cookies

### Browser Controls
Most web browsers allow you to control cookies through their settings. You can:
- **View cookies:** See what cookies are stored on your device
- **Delete cookies:** Remove some or all cookies
- **Block cookies:** Prevent websites from setting cookies
- **Allow cookies:** Accept cookies from specific websites

### Browser-Specific Instructions
- **Chrome:** Settings → Privacy and Security → Cookies
- **Firefox:** Settings → Privacy & Security → Cookies and Site Data
- **Safari:** Preferences → Privacy → Cookies and Website Data
- **Edge:** Settings → Privacy, Search, and Services → Cookies

### Opt-Out Links
${data.cookieTypes.includes('Analytics / Performance') ? '- **Google Analytics:** [https://tools.google.com/dlpage/gaoptout](https://tools.google.com/dlpage/gaoptout)' : ''}
- **General Opt-Out (NAI):** [https://optout.networkadvertising.org](https://optout.networkadvertising.org)
- **General Opt-Out (DAA):** [https://optout.aboutads.info](https://optout.aboutads.info)

**Note:** Blocking certain cookies may impact the functionality of our website.

## 6. Do Not Track

Some browsers have a "Do Not Track" (DNT) feature that signals to websites that you do not want to be tracked. Our website ${data.cookieTypes.includes('Analytics / Performance') ? 'currently does not respond to DNT signals, but we honor your cookie preferences as described above.' : 'respects DNT signals where possible.'}

${data.gdprApplicable ? `## 7. GDPR and Cookie Consent

Under the General Data Protection Regulation (GDPR) and the ePrivacy Directive, we are required to obtain your consent before setting non-essential cookies. When you first visit our website, you will be presented with a cookie consent banner that allows you to:

- Accept all cookies
- Reject non-essential cookies
- Customize your cookie preferences

You can change your preferences at any time by accessing our cookie settings.

` : ''}

## Contact Us

If you have any questions about our use of cookies, please contact us:

- **Email:** ${data.companyEmail}
${data.companyAddress ? `- **Address:** ${data.companyAddress}` : ''}
${data.companyWebsite ? `- **Website:** ${data.companyWebsite}` : ''}

## Changes to This Cookie Policy

We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last Updated" date.

---

${DISCLAIMERS.documentFooter}`;

  return policy;
}
