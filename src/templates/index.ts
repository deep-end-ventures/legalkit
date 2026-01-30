import { QuestionnaireData, GeneratedDocument } from '@/lib/types';
import { generatePrivacyPolicy } from './privacy-policy';
import { generateTermsOfService } from './terms-of-service';
import { generateCookiePolicy } from './cookie-policy';

export function generateDocuments(data: QuestionnaireData): GeneratedDocument[] {
  const documents: GeneratedDocument[] = [];
  const now = new Date().toISOString();

  if (data.documents.includes('privacy_policy')) {
    const markdown = generatePrivacyPolicy(data);
    documents.push({
      id: `pp-${Date.now()}`,
      type: 'privacy_policy',
      title: `Privacy Policy — ${data.companyName}`,
      content: markdown,
      markdownContent: markdown,
      htmlContent: markdownToHtml(markdown, data.companyName),
      createdAt: now,
      companyName: data.companyName,
    });
  }

  if (data.documents.includes('terms_of_service')) {
    const markdown = generateTermsOfService(data);
    documents.push({
      id: `tos-${Date.now()}`,
      type: 'terms_of_service',
      title: `Terms of Service — ${data.companyName}`,
      content: markdown,
      markdownContent: markdown,
      htmlContent: markdownToHtml(markdown, data.companyName),
      createdAt: now,
      companyName: data.companyName,
    });
  }

  if (data.documents.includes('cookie_policy')) {
    const markdown = generateCookiePolicy(data);
    documents.push({
      id: `cp-${Date.now()}`,
      type: 'cookie_policy',
      title: `Cookie Policy — ${data.companyName}`,
      content: markdown,
      markdownContent: markdown,
      htmlContent: markdownToHtml(markdown, data.companyName),
      createdAt: now,
      companyName: data.companyName,
    });
  }

  return documents;
}

function markdownToHtml(markdown: string, companyName: string): string {
  const html = markdown
    // Headers
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^# (.*$)/gm, '<h1>$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    // Unordered lists
    .replace(/^- (.*$)/gm, '<li>$1</li>')
    // Tables (basic)
    .replace(/\|([^\n]+)\|/g, (match) => {
      if (match.includes('---')) return '';
      const cells = match.split('|').filter(c => c.trim());
      return '<tr>' + cells.map(c => `<td>${c.trim()}</td>`).join('') + '</tr>';
    })
    // Horizontal rules
    .replace(/^---$/gm, '<hr>')
    // Paragraphs (wrap lines that aren't already HTML)
    .replace(/^(?!<[hluot]|<li|<hr|<tr)(.*\S.*)$/gm, '<p>$1</p>')
    // Wrap consecutive <li> in <ul>
    .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
    // Wrap consecutive <tr> in <table>
    .replace(/(<tr>.*<\/tr>\n?)+/g, '<table border="1" cellpadding="8" cellspacing="0">$&</table>');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${companyName} - Legal Document</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      max-width: 800px;
      margin: 0 auto;
      padding: 40px 20px;
      line-height: 1.6;
      color: #333;
    }
    h1 { font-size: 28px; border-bottom: 2px solid #333; padding-bottom: 10px; }
    h2 { font-size: 22px; margin-top: 30px; color: #222; }
    h3 { font-size: 18px; margin-top: 20px; color: #444; }
    ul { padding-left: 20px; }
    li { margin-bottom: 5px; }
    table { width: 100%; border-collapse: collapse; margin: 15px 0; }
    td { padding: 8px; border: 1px solid #ddd; }
    tr:first-child td { font-weight: bold; background: #f5f5f5; }
    hr { border: none; border-top: 1px solid #ddd; margin: 30px 0; }
    .disclaimer {
      background: #fff3cd;
      border: 1px solid #ffc107;
      border-radius: 8px;
      padding: 15px;
      margin: 20px 0;
      font-size: 14px;
      color: #856404;
    }
    a { color: #2563eb; }
  </style>
</head>
<body>
${html}
</body>
</html>`;
}
