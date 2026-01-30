import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'LegalKit — AI-Powered Legal Document Generator';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #eef2ff 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ fontSize: 72, marginBottom: 8, display: 'flex' }}>⚖️</div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: '#111827',
            marginBottom: 16,
            display: 'flex',
          }}
        >
          LegalKit
        </div>
        <div
          style={{
            fontSize: 28,
            color: '#4b5563',
            maxWidth: 700,
            textAlign: 'center',
            display: 'flex',
          }}
        >
          AI-Powered Legal Document Generator
        </div>
      </div>
    ),
    { ...size }
  );
}
