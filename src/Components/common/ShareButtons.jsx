// src/Components/common/ShareButtons.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const ShareWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin: 16px 0;
`;

const ShareLabel = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ $theme }) => ($theme === 'light' ? '#64748b' : '#94a3b8')};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-right: 4px;
`;

const ShareBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: 8px;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid ${({ $theme }) => ($theme === 'light' ? '#e2e8f0' : 'rgba(255,255,255,0.12)')};
  background: ${({ $theme }) => ($theme === 'light' ? '#ffffff' : 'rgba(255,255,255,0.04)')};
  color: ${({ $theme }) => ($theme === 'light' ? '#334155' : '#e2e8f0')};

  &:hover {
    transform: translateY(-2px);
    background: ${({ $brand, $theme }) =>
      $brand ? $brand : $theme === 'light' ? '#f1f5f9' : 'rgba(255,255,255,0.1)'};
    color: ${({ $brand }) => ($brand ? '#ffffff' : 'inherit')};
    border-color: ${({ $brand }) => ($brand ? $brand : 'inherit')};
  }
`;

const Toast = styled.span`
  font-size: 0.78rem;
  color: #10b981;
  font-weight: 600;
  margin-left: 6px;
  animation: fadeIn 0.3s ease;
`;

export default function ShareButtons({ title, url, theme = 'dark' }) {
  const [copied, setCopied] = useState(false);
  const shareUrl = url || window.location.href;
  const shareTitle = title || 'Ihtisham Zameer | .NET Full Stack Developer';

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const shareLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const shareTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const shareWhatsApp = () => {
    window.open(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <ShareWrap aria-label="Share options">
      <ShareLabel $theme={theme}>Share:</ShareLabel>
      
      <ShareBtn onClick={handleCopy} $theme={theme} aria-label="Copy Link to Clipboard">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
        {copied ? 'Copied!' : 'Copy Link'}
      </ShareBtn>

      {copied && <Toast>✓ Link copied!</Toast>}

      <ShareBtn onClick={shareLinkedIn} $brand="#0077b5" $theme={theme} aria-label="Share on LinkedIn">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z"/>
        </svg>
        LinkedIn
      </ShareBtn>

      <ShareBtn onClick={shareTwitter} $brand="#1da1f2" $theme={theme} aria-label="Share on X Twitter">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
        X / Twitter
      </ShareBtn>

      <ShareBtn onClick={shareWhatsApp} $brand="#25d366" $theme={theme} aria-label="Share on WhatsApp">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.81 9.81 0 0 0 12.04 2zm5.8 14.12c-.24.68-1.2 1.3-1.66 1.35-.46.06-1.04.22-3.48-.75-2.94-1.18-4.83-4.17-4.97-4.37-.15-.19-1.18-1.57-1.18-2.99 0-1.42.74-2.12 1.01-2.41.27-.29.59-.36.79-.36.2 0 .39.01.56.01.18 0 .42-.07.66.5.24.58.82 2.01.89 2.16.07.15.12.33.02.53-.1.2-.15.33-.3.51-.15.18-.31.39-.44.53-.15.15-.3.31-.13.6.17.29.77 1.27 1.65 2.05 1.13 1 2.08 1.32 2.38 1.47.3.15.47.12.65-.08.18-.2.77-.9.98-1.21.21-.31.42-.26.7-.15.28.11 1.78.84 2.09.99.31.15.52.23.59.36.07.14.07.8-.17 1.48z"/>
        </svg>
        WhatsApp
      </ShareBtn>
    </ShareWrap>
  );
}
