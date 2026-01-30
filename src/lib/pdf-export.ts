import { GeneratedDocument } from '@/lib/types';
import { DISCLAIMERS } from '@/lib/disclaimers';

/**
 * Generate a styled HTML document suitable for PDF conversion.
 * Includes all disclaimers, professional formatting, and a watermark header.
 */
function buildPdfHtml(doc: GeneratedDocument): string {
  // Convert markdown to clean HTML for the PDF
  const bodyHtml = doc.markdownContent
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^# (.*$)/gm, '<h1>$1</h1>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/^- (.*$)/gm, '<li>$1</li>')
    .replace(/\|([^\n]+)\|/g, (match) => {
      if (match.includes('---')) return '';
      const cells = match.split('|').filter(c => c.trim());
      return '<tr>' + cells.map(c => `<td>${c.trim()}</td>`).join('') + '</tr>';
    })
    .replace(/^---$/gm, '<hr>')
    .replace(/^(?!<[hluot]|<li|<hr|<tr)(.*\S.*)$/gm, '<p>$1</p>')
    .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
    .replace(/(<tr>.*<\/tr>\n?)+/g, '<table border="1" cellpadding="8" cellspacing="0">$&</table>');

  return `
    <div id="legalkit-pdf-content" style="font-family: 'Georgia', 'Times New Roman', serif; color: #1a1a1a; line-height: 1.7; padding: 0;">
      <!-- Watermark Header -->
      <div style="text-align: center; border-bottom: 2px solid #4f46e5; padding-bottom: 16px; margin-bottom: 24px;">
        <div style="font-size: 10px; color: #6b7280; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 8px;">
          ${DISCLAIMERS.pdfWatermark}
        </div>
        <h1 style="font-size: 26px; font-weight: bold; color: #111827; margin: 0; padding: 0; border: none;">
          ${doc.title}
        </h1>
        <div style="font-size: 12px; color: #6b7280; margin-top: 8px;">
          Generated on ${new Date(doc.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      </div>

      <!-- Disclaimer Banner -->
      <div style="background: #fef3c7; border: 1px solid #f59e0b; border-radius: 6px; padding: 14px 16px; margin-bottom: 28px; font-size: 11px; color: #92400e; line-height: 1.5;">
        <strong>⚠️ IMPORTANT DISCLAIMER:</strong> ${DISCLAIMERS.documentHeader.replace('⚠️ IMPORTANT DISCLAIMER: ', '')}
      </div>

      <!-- Document Body -->
      <div style="font-size: 13px;">
        ${bodyHtml}
      </div>

      <!-- Footer Disclaimer -->
      <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #d1d5db; font-size: 10px; color: #6b7280; line-height: 1.5;">
        ${DISCLAIMERS.documentFooter.replace('---', '').trim()}
      </div>
    </div>
  `;
}

/**
 * Download a GeneratedDocument as a PDF using html2pdf.js (client-side).
 */
export async function downloadAsPdf(doc: GeneratedDocument): Promise<void> {
  // Dynamically import html2pdf.js (client-side only)
  const html2pdfModule = await import('html2pdf.js');
  const html2pdf = html2pdfModule.default;

  const htmlContent = buildPdfHtml(doc);

  // Create a temporary container
  const container = document.createElement('div');
  container.innerHTML = htmlContent;
  document.body.appendChild(container);

  const filename = `${doc.type}-${doc.companyName.toLowerCase().replace(/\s+/g, '-')}.pdf`;

  const options = {
    margin: [0.6, 0.7, 0.6, 0.7] as [number, number, number, number],
    filename,
    image: { type: 'jpeg' as const, quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      letterRendering: true,
    },
    jsPDF: {
      unit: 'in',
      format: 'letter',
      orientation: 'portrait' as const,
    },
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
  };

  try {
    await html2pdf().set(options).from(container).save();
  } finally {
    document.body.removeChild(container);
  }
}
