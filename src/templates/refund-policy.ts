import { QuestionnaireData } from '@/lib/types';
import { DISCLAIMERS } from '@/lib/disclaimers';

export function generateRefundPolicy(data: QuestionnaireData): string {
  const date = data.effectiveDate || new Date().toISOString().split('T')[0];
  const refundDays = data.refundWindow || 30;
  const method = data.refundMethod || 'original_payment';

  let policy = `${DISCLAIMERS.documentHeader}

# Refund Policy

**${data.companyName}**

**Effective Date:** ${date}
**Last Updated:** ${new Date().toISOString().split('T')[0]}

---

## 1. Overview

At ${data.companyName}, we want you to be completely satisfied with your purchase. This Refund Policy outlines the terms and conditions under which you may request a refund for products or services purchased through our ${data.companyWebsite ? `website (${data.companyWebsite})` : 'platform'}.

Please read this policy carefully before making a purchase. By completing a transaction with us, you acknowledge that you have read, understood, and agree to be bound by this Refund Policy.

## 2. Refund Eligibility

### 2.1 Refund Window

You may request a refund within **${refundDays} days** of your original purchase date, subject to the conditions outlined in this policy.

### 2.2 Conditions for Refund

To be eligible for a refund, the following conditions must be met:

- The refund request must be made within ${refundDays} days of purchase
- You must provide your order number or proof of purchase
- The reason for the refund must fall within our acceptable refund reasons (see Section 3)
`;

  if (data.companyType === 'ecommerce') {
    policy += `- For physical products: items must be returned in their original condition, unused and in original packaging
- For physical products: you are responsible for return shipping costs unless the item was defective or we made an error
- Items marked as "final sale" or "non-refundable" at the time of purchase are not eligible

### 2.3 Non-Refundable Items

The following items cannot be refunded:
- Gift cards and promotional credits
- Items marked as "final sale"
- Personalized or custom-made products
- Items that have been used, worn, or damaged by the customer
- Perishable goods
`;
  }

  if (data.digitalGoods) {
    policy += `
### ${data.companyType === 'ecommerce' ? '2.4' : '2.3'} Digital Products

For digital products, downloads, and electronically delivered content:
- Refunds may be issued within ${Math.min(refundDays, 14)} days of purchase if you have not accessed, downloaded, or used the digital product
- Once a digital product has been accessed or downloaded, refund eligibility may be limited
- If a digital product is defective or not as described, you are entitled to a full refund regardless of access status
`;
  }

  policy += `
## 3. Acceptable Refund Reasons

We accept refund requests for the following reasons:

- Product or service not as described
- Technical issues preventing use of the product or service
- Duplicate charge or billing error
- Service downtime or unavailability beyond reasonable expectations
`;

  if (data.companyType === 'ecommerce') {
    policy += `- Damaged or defective product received
- Wrong item shipped
- Product not received within the estimated delivery window
`;
  }

  if (data.companyType === 'saas' || data.companyType === 'mobile_app') {
    policy += `- Features advertised are not available or functional
- Significant changes to the service that affect your use case
`;
  }

  policy += `
## 4. How to Request a Refund

To request a refund, please follow these steps:

1. **Contact Us:** Send an email to ${data.companyEmail || '[your support email]'} with the subject line "Refund Request"
2. **Include Required Information:**
   - Your full name and email address associated with the purchase
   - Order number or transaction ID
   - Date of purchase
   - Reason for the refund request
   - Any supporting documentation (screenshots, photos, etc.)
3. **Wait for Confirmation:** We will review your request and respond within **5 business days**

## 5. Refund Processing

### 5.1 Review Timeline

All refund requests are reviewed within 5 business days of receipt. We may contact you for additional information if needed.

### 5.2 Refund Method

`;

  if (method === 'original_payment') {
    policy += `Approved refunds will be credited back to your **original payment method**. Please allow:
- **Credit/Debit Card:** 5-10 business days for the refund to appear on your statement
- **PayPal:** 3-5 business days
- **Bank Transfer:** 5-10 business days
- **Other Methods:** Processing times may vary
`;
  } else if (method === 'store_credit') {
    policy += `Approved refunds will be issued as **store credit** that can be used toward future purchases. Store credits:
- Are applied to your account within 1-2 business days
- Do not expire
- Are non-transferable
- Cannot be redeemed for cash
`;
  } else {
    policy += `Approved refunds may be processed as either:

**Original Payment Method:**
- Credit/Debit Card: 5-10 business days
- PayPal: 3-5 business days
- Bank Transfer: 5-10 business days

**Store Credit:**
- Applied within 1-2 business days
- Does not expire
- Can be used toward any future purchase
`;
  }

  policy += `
### 5.3 Partial Refunds

In some cases, we may issue a partial refund. This may occur when:
- A portion of the service was used before the refund request
- Only part of an order is eligible for a refund
- The product was returned in a condition different from how it was received
`;

  if (data.subscriptionRefunds || data.hasSubscription) {
    policy += `
## 6. Subscription Refunds

### 6.1 Monthly Subscriptions

- You may cancel your subscription at any time
- Upon cancellation, you will retain access until the end of your current billing period
- Refunds for the current billing period are available if requested within 48 hours of the charge

### 6.2 Annual Subscriptions

- Annual subscriptions may be refunded in full within the first ${Math.min(refundDays, 30)} days
- After ${Math.min(refundDays, 30)} days, a prorated refund may be issued based on the remaining months
- Prorated refunds are calculated based on the monthly rate, not the discounted annual rate

### 6.3 Free Trials

- If you cancel during a free trial period, you will not be charged
- If you do not cancel before the trial expires, the subscription will automatically renew at the stated price
- Charges incurred after the trial period are subject to this Refund Policy

`;
  }

  const nextSection = (data.subscriptionRefunds || data.hasSubscription) ? 7 : 6;

  policy += `
## ${nextSection}. Chargebacks and Disputes

We encourage you to contact us directly before initiating a chargeback or payment dispute with your bank or payment provider. We are committed to resolving issues quickly and fairly. Filing a chargeback without first contacting us may result in:

- Suspension of your account
- Loss of eligibility for future refunds
- Additional fees being assessed

## ${nextSection + 1}. Exceptions

We reserve the right to:
- Deny refund requests that do not meet the criteria outlined in this policy
- Deny refund requests that we determine to be fraudulent or abusive
- Modify refund terms for specific promotions or sales events
- Make exceptions to this policy on a case-by-case basis at our discretion

## ${nextSection + 2}. Changes to This Policy

We reserve the right to update or modify this Refund Policy at any time. Changes will be effective immediately upon posting the updated policy on our website. The "Last Updated" date at the top of this policy will be revised accordingly.

We encourage you to review this policy periodically. Your continued use of our services after changes are posted constitutes acceptance of the modified policy.

## ${nextSection + 3}. Contact Us

If you have any questions about this Refund Policy or need to request a refund, please contact us:

- **Email:** ${data.companyEmail || '[your support email]'}
${data.companyWebsite ? `- **Website:** ${data.companyWebsite}` : ''}
${data.companyAddress ? `- **Address:** ${data.companyAddress}` : ''}

${DISCLAIMERS.documentFooter}
`;

  return policy;
}
