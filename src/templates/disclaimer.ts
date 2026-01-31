import { QuestionnaireData } from '@/lib/types';
import { DISCLAIMERS } from '@/lib/disclaimers';

export function generateDisclaimer(data: QuestionnaireData): string {
  const date = data.effectiveDate || new Date().toISOString().split('T')[0];
  const types = data.disclaimerTypes || ['general', 'no_guarantees'];

  let doc = `${DISCLAIMERS.documentHeader}

# Disclaimer

**${data.companyName}**

**Effective Date:** ${date}
**Last Updated:** ${new Date().toISOString().split('T')[0]}

---

## 1. General Disclaimer

The information provided by ${data.companyName} ("we," "us," or "our") on ${data.companyWebsite ? `our website (${data.companyWebsite})` : 'our website'} and through our services is for **general informational purposes only**. All information is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information.

**Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of our website or services or reliance on any information provided.** Your use of our website and services and your reliance on any information is solely at your own risk.

`;

  if (types.includes('professional_advice')) {
    doc += `## 2. No Professional Advice

The content on our website and through our services is not intended to be a substitute for professional advice. Always seek the advice of a qualified professional with any questions you may have regarding:

`;
    if (data.companyType === 'saas' || data.companyType === 'website') {
      doc += `- Business decisions and strategy
- Legal compliance and regulations
- Technical architecture and security
- Financial planning and investments

`;
    }
    doc += `We do not provide professional consulting, legal, financial, medical, or other specialized advice through our services. Any reliance you place on information from our website is strictly at your own risk.

`;
  }

  if (types.includes('no_guarantees')) {
    const sectionNum = types.includes('professional_advice') ? 3 : 2;
    doc += `## ${sectionNum}. No Guarantees

While we strive to provide accurate and up-to-date information, we make **no warranties or guarantees** about:

- The completeness, reliability, or accuracy of this information
- The results that may be obtained from using our services
- The availability of our website or services at any given time
- The absence of errors, defects, or viruses

We do not guarantee that:
- Our services will meet your specific requirements
- Our services will be uninterrupted, timely, secure, or error-free
- The results obtained from using our services will be accurate or reliable
- Any errors in our services will be corrected

`;
  }

  if (types.includes('external_links')) {
    const sectionNum = 2 + (types.includes('professional_advice') ? 1 : 0) + (types.includes('no_guarantees') ? 1 : 0);
    doc += `## ${sectionNum}. External Links Disclaimer

Our website may contain links to external websites that are not provided or maintained by or affiliated with ${data.companyName}. Please note that:

- We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites
- We have no control over the content, privacy policies, or practices of any third-party websites
- Inclusion of any links does not necessarily imply a recommendation or endorsement of the views expressed within them
- We are not responsible for any losses or damages arising from the use of linked third-party websites

We encourage you to review the privacy policies and terms of service of any external website you visit.

`;
  }

  if (types.includes('testimonials')) {
    const sectionNum = 2 + (types.includes('professional_advice') ? 1 : 0) + (types.includes('no_guarantees') ? 1 : 0) + (types.includes('external_links') ? 1 : 0);
    doc += `## ${sectionNum}. Testimonials Disclaimer

Our website may contain testimonials from users of our products and/or services. These testimonials reflect the real-life experiences and opinions of such users. However, the experiences are personal to those particular users, and may not necessarily be representative of all users of our products and/or services.

We do not claim, and you should not assume, that all users will have the same experiences. **Individual results may vary.**

The testimonials are displayed verbatim except for correction of grammatical or typing errors. Some testimonials may have been shortened for brevity. The views and opinions contained in the testimonials belong solely to the individual user and do not reflect our views and opinions.

`;
  }

  if (types.includes('errors_omissions')) {
    const sectionNum = 2 + [
      types.includes('professional_advice'),
      types.includes('no_guarantees'),
      types.includes('external_links'),
      types.includes('testimonials'),
    ].filter(Boolean).length;
    doc += `## ${sectionNum}. Errors and Omissions Disclaimer

While we have made every attempt to ensure that the information contained on our website is correct, ${data.companyName} is not responsible for any errors or omissions, or for the results obtained from the use of this information.

All information on our website is provided "as is," with no guarantee of completeness, accuracy, timeliness, or of the results obtained from the use of this information. In no event will ${data.companyName}, its related partnerships or corporations, or the partners, agents, or employees thereof be liable to you or anyone else for any decision made or action taken in reliance on the information on this website.

`;
  }

  if (types.includes('fair_use')) {
    const sectionNum = 2 + [
      types.includes('professional_advice'),
      types.includes('no_guarantees'),
      types.includes('external_links'),
      types.includes('testimonials'),
      types.includes('errors_omissions'),
    ].filter(Boolean).length;
    doc += `## ${sectionNum}. Fair Use Disclaimer

Our website may contain copyrighted material, the use of which has not always been specifically authorized by the copyright owner. We believe this constitutes a "fair use" of any such copyrighted material as provided for in section 107 of the United States Copyright Law.

If you wish to use copyrighted material from our website for purposes of your own that go beyond fair use, you must obtain permission from the copyright owner.

`;
  }

  // Calculate next section number
  const usedSections = [
    types.includes('professional_advice'),
    types.includes('no_guarantees'),
    types.includes('external_links'),
    types.includes('testimonials'),
    types.includes('errors_omissions'),
    types.includes('fair_use'),
  ].filter(Boolean).length;

  const limitSection = 2 + usedSections;

  doc += `## ${limitSection}. Limitation of Liability

To the maximum extent permitted by applicable law, in no event shall ${data.companyName} or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, business interruption, personal injury, or loss of privacy) arising out of or in any way related to the use of or inability to use our website or services, even if ${data.companyName} or any supplier has been advised of the possibility of such damages.

## ${limitSection + 1}. Indemnification

You agree to defend, indemnify, and hold harmless ${data.companyName} and its licensees and licensors, and their employees, contractors, agents, officers, and directors from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt and expenses (including but not limited to attorney's fees) arising from your use of and access to our website and services.

## ${limitSection + 2}. Changes to This Disclaimer

We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon posting. We encourage you to review this disclaimer periodically.

## ${limitSection + 3}. Contact Us

If you have any questions or concerns about this Disclaimer, please contact us:

- **Email:** ${data.companyEmail || '[your contact email]'}
${data.companyWebsite ? `- **Website:** ${data.companyWebsite}` : ''}
${data.companyAddress ? `- **Address:** ${data.companyAddress}` : ''}

${DISCLAIMERS.documentFooter}
`;

  return doc;
}
