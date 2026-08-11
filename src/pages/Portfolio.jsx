// src/pages/Portfolio.jsx
import React, { useEffect, useRef, useState } from 'react'
import styled, { keyframes, createGlobalStyle, css } from 'styled-components'
import PortfolioNav from '../Components/portfolio/PortfolioNav'
import {
  personalInfo,
  aboutText,
  skills,
  experience,
  projects,
  education,
  certifications,
} from '../data/portfolioData'

// ─── Portfolio Global Style (adapts body to theme) ─────────────────────────
const PortfolioGlobal = createGlobalStyle`
  body {
    overflow: auto !important;
    background: ${({ $theme }) => ($theme === 'light' ? '#f8fafc' : '#0c0e1a')} !important;
    color: ${({ $theme }) => ($theme === 'light' ? '#1e293b' : '#e2e8f0')} !important;
    transition: background-color 0.4s ease, color 0.4s ease;
  }
`

// ─── Keyframe Animations ───────────────────────────────────────────────────
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
`
const glow = keyframes`
  0%   { box-shadow: 0 0 0 0 rgba(99,102,241,0.5); }
  70%  { box-shadow: 0 0 0 20px rgba(99,102,241,0); }
  100% { box-shadow: 0 0 0 0 rgba(99,102,241,0); }
`
const float = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50%       { transform: translateY(-12px) rotate(1deg); }
`
const shimmer = keyframes`
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
`
const blink = keyframes`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
`
const pulseGlow = keyframes`
  0%, 100% { transform: scale(1) translate(0, 0); opacity: 0.4; }
  50% { transform: scale(1.18) translate(25px, -18px); opacity: 0.65; }
`

// ─── Mouse Tracking Spotlight & Lightning Glow ─────────────────────────────
const MouseSpotlight = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 2;
  background: radial-gradient(
    650px circle at var(--mouse-x, 50vw) var(--mouse-y, 50vh),
    ${({ $theme }) =>
      $theme === 'light'
        ? 'rgba(99, 102, 241, 0.22), rgba(168, 85, 247, 0.08) 40%, transparent 80%'
        : 'rgba(99, 102, 241, 0.18), rgba(139, 92, 246, 0.06) 40%, transparent 80%'}
  );
  transition: opacity 0.3s ease;

  @media (pointer: coarse), (hover: none) {
    display: none !important;
  }
`

const LightningFollower = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 36px;
  height: 36px;
  margin-top: -18px;
  margin-left: -18px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate3d(var(--mouse-x, -100px), var(--mouse-y, -100px), 0);
  background: ${({ $theme }) =>
    $theme === 'light'
      ? 'radial-gradient(circle, rgba(79, 70, 229, 0.95) 0%, rgba(124, 58, 237, 0.7) 50%, transparent 100%)'
      : 'radial-gradient(circle, rgba(129, 140, 248, 0.9) 0%, rgba(99, 102, 241, 0.5) 50%, transparent 100%)'};
  box-shadow: ${({ $theme }) =>
    $theme === 'light'
      ? '0 0 24px 8px rgba(79, 70, 229, 0.65), 0 0 50px 16px rgba(124, 58, 237, 0.45)'
      : '0 0 26px 8px rgba(129, 140, 248, 0.7), 0 0 50px 14px rgba(99, 102, 241, 0.5)'};
  mix-blend-mode: ${({ $theme }) => ($theme === 'light' ? 'normal' : 'screen')};
  transition: transform 0.04s ease-out;

  @media (pointer: coarse), (hover: none) {
    display: none !important;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12px;
    height: 12px;
    margin-top: -6px;
    margin-left: -6px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: ${({ $theme }) =>
      $theme === 'light'
        ? '0 0 12px #4f46e5, 0 0 20px #7c3aed'
        : '0 0 12px #ffffff, 0 0 20px #818cf8'};
  }
`

// ─── Ambient Floating Background Orbs ───────────────────────────────────────
const Orb1 = styled.div`
  position: fixed;
  top: -10%;
  left: -5%;
  width: 550px;
  height: 550px;
  border-radius: 50%;
  background: ${({ $theme }) =>
    $theme === 'light'
      ? 'radial-gradient(circle, rgba(99, 102, 241, 0.18) 0%, rgba(168, 85, 247, 0.05) 70%, transparent 100%)'
      : 'radial-gradient(circle, rgba(99, 102, 241, 0.22) 0%, rgba(139, 92, 246, 0.08) 70%, transparent 100%)'};
  filter: blur(90px);
  pointer-events: none;
  z-index: 0;
  animation: ${pulseGlow} 12s ease-in-out infinite alternate;
`

const Orb2 = styled.div`
  position: fixed;
  top: 45%;
  right: -8%;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: ${({ $theme }) =>
    $theme === 'light'
      ? 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(14, 165, 233, 0.05) 70%, transparent 100%)'
      : 'radial-gradient(circle, rgba(79, 70, 229, 0.2) 0%, rgba(236, 72, 153, 0.08) 70%, transparent 100%)'};
  filter: blur(100px);
  pointer-events: none;
  z-index: 0;
  animation: ${pulseGlow} 16s ease-in-out infinite alternate-reverse;
`

// ─── Root Container ───────────────────────────────────────────────────────────
const Page = styled.div`
  background: ${({ $theme }) => ($theme === 'light' ? '#f8fafc' : '#0c0e1a')};
  color: ${({ $theme }) => ($theme === 'light' ? '#1e293b' : '#e2e8f0')};
  font-family: 'Inter', -apple-system, sans-serif;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
  transition: background-color 0.4s ease, color 0.4s ease;
`

// ─── Shared Layout Components ─────────────────────────────────────────────────
const Section = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 110px 32px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) { padding: 80px 20px; }
  @media (max-width: 480px) { padding: 60px 16px; }
`

const SectionLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 56px;
`

const SectionNum = styled.span`
  font-size: 0.9rem;
  font-weight: 700;
  color: ${({ $theme }) => ($theme === 'light' ? '#4f46e5' : '#818cf8')};
  font-family: 'Courier New', monospace;
  letter-spacing: 1px;
`

const SectionTitle = styled.h2`
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 800;
  color: ${({ $theme }) => ($theme === 'light' ? '#0f172a' : '#e2e8f0')};
  margin: 0;
  letter-spacing: -0.03em;
`

const SectionLine = styled.div`
  flex: 1;
  height: 1px;
  background: ${({ $theme }) =>
    $theme === 'light'
      ? 'linear-gradient(90deg, rgba(99, 102, 241, 0.4) 0%, transparent 100%)'
      : 'linear-gradient(90deg, rgba(129, 140, 248, 0.3) 0%, transparent 100%)'};
`

// ─── Hero Section ─────────────────────────────────────────────────────────────
const HeroSection = styled(Section)`
  display: flex;
  align-items: center;
  min-height: 100vh;
  padding-top: 80px;
  padding-bottom: 40px;
  gap: 60px;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    min-height: unset;
    text-align: center;
    gap: 40px;
    padding-top: 100px;
  }
`

const HeroContent = styled.div`
  flex: 1;
  animation: ${fadeUp} 0.7s ease-out both;
`

const HeroEyebrow = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ $theme }) => ($theme === 'light' ? '#4f46e5' : '#818cf8')};
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 16px;
  font-family: 'Courier New', monospace;
`

const HeroName = styled.h1`
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 900;
  letter-spacing: -0.05em;
  line-height: 1.05;
  margin-bottom: 12px;
  color: ${({ $theme }) => ($theme === 'light' ? '#0f172a' : '#f1f5f9')};
`

const HeroRole = styled.div`
  font-size: clamp(1.4rem, 3vw, 2.2rem);
  font-weight: 700;
  color: ${({ $theme }) => ($theme === 'light' ? '#64748b' : '#64748b')};
  margin-bottom: 28px;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 900px) { justify-content: center; }
`

const TypedText = styled.span`
  background: ${({ $theme }) =>
    $theme === 'light'
      ? 'linear-gradient(135deg, #4f46e5, #9333ea, #2563eb)'
      : 'linear-gradient(135deg, #818cf8, #a78bfa, #818cf8)'};
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${shimmer} 3s linear infinite;
`

const Cursor = styled.span`
  display: inline-block;
  width: 3px;
  height: 1.2em;
  background: ${({ $theme }) => ($theme === 'light' ? '#4f46e5' : '#818cf8')};
  border-radius: 2px;
  vertical-align: text-bottom;
  animation: ${blink} 1s step-end infinite;
`

const HeroTagline = styled.p`
  font-size: 1.1rem;
  line-height: 1.75;
  color: ${({ $theme }) => ($theme === 'light' ? '#475569' : '#94a3b8')};
  max-width: 560px;
  margin-bottom: 40px;

  @media (max-width: 900px) { margin-left: auto; margin-right: auto; }
`

const HeroBtns = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;

  @media (max-width: 900px) { justify-content: center; }
`

const BtnPrimary = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: linear-gradient(135deg, #6366f1, #818cf8);
  color: #fff;
  font-weight: 700;
  font-size: 0.95rem;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 4px 20px rgba(99,102,241,0.4);
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(60deg, transparent, rgba(255,255,255,0.25), transparent);
    transform: rotate(30deg) translateY(-100%);
    transition: transform 0.6s ease;
  }

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 8px 30px rgba(99,102,241,0.55);

    &::after {
      transform: rotate(30deg) translateY(100%);
    }
  }
`

const BtnOutline = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 28px;
  background: transparent;
  color: ${({ $theme }) => ($theme === 'light' ? '#4f46e5' : '#818cf8')};
  font-weight: 700;
  font-size: 0.95rem;
  border-radius: 12px;
  border: 2px solid ${({ $theme }) => ($theme === 'light' ? 'rgba(99,102,241,0.5)' : 'rgba(129,140,248,0.5)')};
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: ${({ $theme }) => ($theme === 'light' ? '#4f46e5' : '#818cf8')};
    background: ${({ $theme }) => ($theme === 'light' ? 'rgba(99,102,241,0.08)' : 'rgba(129,140,248,0.08)')};
    transform: translateY(-3px);
    box-shadow: 0 4px 16px ${({ $theme }) => ($theme === 'light' ? 'rgba(99,102,241,0.15)' : 'rgba(129,140,248,0.2)')};
  }
`

const HeroImageWrap = styled.div`
  flex-shrink: 0;
  position: relative;
  animation: ${fadeUp} 0.7s 0.15s ease-out both;

  @media (max-width: 900px) { order: -1; }
`

const ProfileRing = styled.div`
  width: 320px;
  height: 320px;
  border-radius: 50%;
  padding: 5px;
  background: linear-gradient(135deg, #6366f1, #a78bfa, #3b82f6);
  animation: ${float} 5s ease-in-out infinite, ${glow} 3s infinite;

  @media (max-width: 900px) { width: 240px; height: 240px; }
  @media (max-width: 480px) { width: 200px; height: 200px; }
`

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 6px solid ${({ $theme }) => ($theme === 'light' ? '#ffffff' : '#0c0e1a')};
  display: block;
  transition: border-color 0.4s ease;
`

const HeroBadge = styled.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
  background: ${({ $theme }) =>
    $theme === 'light' ? 'rgba(255, 255, 255, 0.95)' : 'rgba(12, 14, 26, 0.92)'};
  border: 1px solid ${({ $theme }) => ($theme === 'light' ? 'rgba(99, 102, 241, 0.25)' : 'rgba(129, 140, 248, 0.2)')};
  backdrop-filter: blur(12px);
  border-radius: 14px;
  padding: 10px 16px;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ $theme }) => ($theme === 'light' ? '#0f172a' : '#e2e8f0')};
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: ${({ $theme }) => ($theme === 'light' ? '0 8px 24px rgba(99, 102, 241, 0.12)' : '0 8px 24px rgba(0, 0, 0, 0.4)')};

  &::before {
    content: '';
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #10b981;
    box-shadow: 0 0 10px #10b981;
    animation: ${glow} 2s infinite;
  }
`

// ─── About Section ────────────────────────────────────────────────────────────
const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 60px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`

const AboutText = styled.div`
  p {
    font-size: 1.05rem;
    line-height: 1.85;
    color: ${({ $theme }) => ($theme === 'light' ? '#475569' : '#94a3b8')};
    margin-bottom: 20px;
    &:last-child { margin-bottom: 0; }
  }
  strong {
    color: ${({ $theme }) => ($theme === 'light' ? '#0f172a' : '#e2e8f0')};
    font-weight: 600;
  }
`

const AboutStats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const StatCard = styled.div`
  background: ${({ $theme }) =>
    $theme === 'light' ? 'rgba(255, 255, 255, 0.85)' : 'rgba(19, 22, 42, 0.7)'};
  border: 1px solid ${({ $theme }) => ($theme === 'light' ? 'rgba(99, 102, 241, 0.18)' : 'rgba(129, 140, 248, 0.1)')};
  backdrop-filter: blur(12px);
  border-radius: 16px;
  padding: 20px 24px;
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: ${({ $theme }) => ($theme === 'light' ? '0 8px 24px rgba(99, 102, 241, 0.06)' : '0 8px 24px rgba(0,0,0,0.2)')};

  &:hover {
    border-color: ${({ $theme }) => ($theme === 'light' ? 'rgba(99, 102, 241, 0.4)' : 'rgba(129, 140, 248, 0.4)')};
    transform: translateX(6px) scale(1.02);
    box-shadow: ${({ $theme }) => ($theme === 'light' ? '0 12px 30px rgba(99, 102, 241, 0.12)' : '0 12px 30px rgba(0,0,0,0.35)')};
  }
`

const StatNum = styled.div`
  font-size: 2.2rem;
  font-weight: 900;
  background: ${({ $theme }) =>
    $theme === 'light'
      ? 'linear-gradient(135deg, #4f46e5, #9333ea)'
      : 'linear-gradient(135deg, #818cf8, #a78bfa)'};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: 4px;
`

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: ${({ $theme }) => ($theme === 'light' ? '#64748b' : '#64748b')};
  font-weight: 500;
`

// ─── Skills Section ───────────────────────────────────────────────────────────
const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
`

const SkillCard = styled.div`
  background: ${({ $theme }) =>
    $theme === 'light' ? 'rgba(255, 255, 255, 0.85)' : 'rgba(19, 22, 42, 0.7)'};
  border: 1px solid ${({ $theme }) => ($theme === 'light' ? 'rgba(99, 102, 241, 0.18)' : 'rgba(129, 140, 248, 0.1)')};
  backdrop-filter: blur(12px);
  border-radius: 18px;
  padding: 28px;
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: ${({ $theme }) => ($theme === 'light' ? '0 10px 30px rgba(99, 102, 241, 0.06)' : '0 10px 30px rgba(0,0,0,0.25)')};

  &:hover {
    transform: translateY(-8px) scale(1.015);
    border-color: ${({ $theme }) => ($theme === 'light' ? 'rgba(99, 102, 241, 0.4)' : 'rgba(129, 140, 248, 0.4)')};
    box-shadow: ${({ $theme }) => ($theme === 'light' ? '0 20px 40px rgba(99, 102, 241, 0.14)' : '0 20px 40px rgba(0,0,0,0.45)')};
  }
`

const SkillCategoryTitle = styled.h3`
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: ${({ $theme }) => ($theme === 'light' ? '#4f46e5' : '#818cf8')};
  margin-bottom: 20px;
  font-family: 'Courier New', monospace;
`

const SkillRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`

const SkillItem = styled.div``

const SkillMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 7px;
  gap: 8px;
`

const SkillName = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ $theme }) => ($theme === 'light' ? '#334155' : '#cbd5e1')};
  display: flex;
  align-items: center;
  gap: 7px;
`

const SkillPct = styled.span`
  font-size: 0.8rem;
  color: ${({ $theme }) => ($theme === 'light' ? '#64748b' : '#64748b')};
  font-family: 'Courier New', monospace;
`

const ProgressTrack = styled.div`
  height: 6px;
  background: ${({ $theme }) => ($theme === 'light' ? 'rgba(226, 232, 240, 0.8)' : 'rgba(30, 35, 64, 1)')};
  border-radius: 99px;
  overflow: hidden;
`

const ProgressFill = styled.div`
  height: 100%;
  border-radius: 99px;
  width: ${({ $pct }) => $pct}%;
  background: ${({ $theme }) =>
    $theme === 'light'
      ? 'linear-gradient(90deg, #4f46e5, #9333ea)'
      : 'linear-gradient(90deg, #6366f1, #a78bfa)'};
  transition: width 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
`

// ─── Experience Section ───────────────────────────────────────────────────────
const Timeline = styled.div`
  position: relative;
  padding-left: 28px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${({ $theme }) =>
      $theme === 'light'
        ? 'linear-gradient(180deg, #4f46e5, rgba(79, 70, 229, 0) 100%)'
        : 'linear-gradient(180deg, #6366f1, rgba(99,102,241,0) 100%)'};
    border-radius: 2px;
  }
`

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 40px;

  &::before {
    content: '';
    position: absolute;
    left: -35px;
    top: 20px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: ${({ $theme }) => ($theme === 'light' ? '#4f46e5' : '#818cf8')};
    border: 3px solid ${({ $theme }) => ($theme === 'light' ? '#f8fafc' : '#0c0e1a')};
    box-shadow: 0 0 0 3px ${({ $theme }) => ($theme === 'light' ? 'rgba(79,70,229,0.25)' : 'rgba(129,140,248,0.25)')};
  }

  &:last-child { margin-bottom: 0; }
`

const ExpCard = styled.div`
  background: ${({ $theme }) =>
    $theme === 'light' ? 'rgba(255, 255, 255, 0.85)' : 'rgba(19, 22, 42, 0.7)'};
  border: 1px solid ${({ $theme }) => ($theme === 'light' ? 'rgba(99, 102, 241, 0.18)' : 'rgba(129, 140, 248, 0.1)')};
  backdrop-filter: blur(12px);
  border-radius: 18px;
  padding: 32px;
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: ${({ $theme }) => ($theme === 'light' ? '0 10px 30px rgba(99, 102, 241, 0.06)' : '0 10px 30px rgba(0,0,0,0.25)')};

  &:hover {
    border-color: ${({ $theme }) => ($theme === 'light' ? 'rgba(99, 102, 241, 0.4)' : 'rgba(129, 140, 248, 0.35)')};
    transform: translateY(-4px);
    box-shadow: ${({ $theme }) => ($theme === 'light' ? '0 16px 36px rgba(99, 102, 241, 0.12)' : '0 16px 36px rgba(0,0,0,0.35)')};
  }
`

const ExpHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 20px;
`

const ExpMeta = styled.div``

const ExpRole = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ $theme }) => ($theme === 'light' ? '#0f172a' : '#e2e8f0')};
  margin-bottom: 4px;
`

const ExpCompany = styled.div`
  font-size: 0.95rem;
  color: ${({ $theme }) => ($theme === 'light' ? '#4f46e5' : '#818cf8')};
  font-weight: 600;
`

const ExpPeriod = styled.div`
  padding: 6px 14px;
  background: ${({ $theme }) => ($theme === 'light' ? 'rgba(99, 102, 241, 0.1)' : 'rgba(129, 140, 248, 0.08)')};
  border: 1px solid ${({ $theme }) => ($theme === 'light' ? 'rgba(99, 102, 241, 0.2)' : 'rgba(129, 140, 248, 0.15)')};
  border-radius: 20px;
  font-size: 0.82rem;
  color: ${({ $theme }) => ($theme === 'light' ? '#475569' : '#94a3b8')};
  font-family: 'Courier New', monospace;
  white-space: nowrap;
`

const ExpDesc = styled.p`
  font-size: 0.95rem;
  line-height: 1.7;
  color: ${({ $theme }) => ($theme === 'light' ? '#475569' : '#94a3b8')};
  margin-bottom: 20px;
`

const AchList = styled.ul`
  list-style: none;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const AchItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.92rem;
  color: ${({ $theme }) => ($theme === 'light' ? '#334155' : '#94a3b8')};
  line-height: 1.6;

  &::before {
    content: '▹';
    color: ${({ $theme }) => ($theme === 'light' ? '#4f46e5' : '#818cf8')};
    flex-shrink: 0;
    margin-top: 1px;
    font-size: 1rem;
  }
`

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

const Tag = styled.span`
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.78rem;
  font-weight: 600;
  background: ${({ $theme }) => ($theme === 'light' ? 'rgba(99, 102, 241, 0.1)' : 'rgba(129, 140, 248, 0.1)')};
  color: ${({ $theme }) => ($theme === 'light' ? '#4f46e5' : '#818cf8')};
  border: 1px solid ${({ $theme }) => ($theme === 'light' ? 'rgba(99, 102, 241, 0.2)' : 'rgba(129, 140, 248, 0.15)')};
  font-family: 'Courier New', monospace;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
    background: ${({ $theme }) => ($theme === 'light' ? 'rgba(99, 102, 241, 0.18)' : 'rgba(129, 140, 248, 0.2)')};
  }
`

// ─── Projects Section ─────────────────────────────────────────────────────────
const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 28px;
`

const ProjectCard = styled.div`
  background: ${({ $theme }) =>
    $theme === 'light' ? 'rgba(255, 255, 255, 0.85)' : 'rgba(19, 22, 42, 0.7)'};
  border: 1px solid ${({ $theme }) => ($theme === 'light' ? 'rgba(99, 102, 241, 0.18)' : 'rgba(129, 140, 248, 0.1)')};
  backdrop-filter: blur(12px);
  border-radius: 20px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  height: 100%;
  position: relative;
  overflow: hidden;
  box-shadow: ${({ $theme }) => ($theme === 'light' ? '0 10px 30px rgba(99, 102, 241, 0.06)' : '0 10px 30px rgba(0,0,0,0.25)')};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #6366f1, #a78bfa, #3b82f6);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px) scale(1.015);
    box-shadow: ${({ $theme }) =>
      $theme === 'light'
        ? '0 24px 48px rgba(99, 102, 241, 0.16)'
        : '0 24px 48px rgba(0,0,0,0.5)'};
    border-color: ${({ $theme }) => ($theme === 'light' ? 'rgba(99, 102, 241, 0.4)' : 'rgba(129, 140, 248, 0.35)')};

    &::before {
      opacity: 1;
    }
  }
`

const ProjTopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`

const ProjFolderIcon = styled.div`
  svg {
    width: 38px;
    height: 38px;
    color: ${({ $theme }) => ($theme === 'light' ? '#4f46e5' : '#818cf8')};
    transition: transform 0.3s ease;
  }

  ${ProjectCard}:hover & svg {
    transform: scale(1.1) rotate(-5deg);
  }
`

const ProjLinks = styled.div`
  display: flex;
  gap: 12px;
  a {
    color: ${({ $theme }) => ($theme === 'light' ? '#64748b' : '#64748b')};
    transition: all 0.2s ease;
    &:hover {
      color: ${({ $theme }) => ($theme === 'light' ? '#4f46e5' : '#818cf8')};
      transform: scale(1.15);
    }
    svg { width: 22px; height: 22px; display: block; }
  }
`

const ProjTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 800;
  color: ${({ $theme }) => ($theme === 'light' ? '#0f172a' : '#e2e8f0')};
  margin-bottom: 12px;
`

const ProjStatus = styled.span`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.74rem;
  font-weight: 700;
  margin-bottom: 14px;
  background: rgba(16, 185, 129, 0.12);
  color: #10b981;
  border: 1px solid rgba(16, 185, 129, 0.25);
  font-family: 'Courier New', monospace;
`

const ProjDesc = styled.p`
  font-size: 0.92rem;
  color: ${({ $theme }) => ($theme === 'light' ? '#475569' : '#94a3b8')};
  line-height: 1.7;
  margin-bottom: 18px;
  flex-grow: 1;
`

// ─── Education & Certifications Section ───────────────────────────────────────
const EdCertGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  @media (max-width: 900px) { grid-template-columns: 1fr; }
`

const PanelCard = styled.div`
  background: ${({ $theme }) =>
    $theme === 'light' ? 'rgba(255, 255, 255, 0.85)' : 'rgba(19, 22, 42, 0.7)'};
  border: 1px solid ${({ $theme }) => ($theme === 'light' ? 'rgba(99, 102, 241, 0.18)' : 'rgba(129, 140, 248, 0.1)')};
  backdrop-filter: blur(12px);
  border-radius: 20px;
  padding: 32px;
  box-shadow: ${({ $theme }) => ($theme === 'light' ? '0 10px 30px rgba(99, 102, 241, 0.06)' : '0 10px 30px rgba(0,0,0,0.25)')};
`

const PanelTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: ${({ $theme }) => ($theme === 'light' ? '#4f46e5' : '#818cf8')};
  margin-bottom: 28px;
  font-family: 'Courier New', monospace;
`

const ListEntry = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 18px 0;
  border-bottom: 1px solid ${({ $theme }) => ($theme === 'light' ? 'rgba(99, 102, 241, 0.1)' : 'rgba(129, 140, 248, 0.07)')};
  transition: transform 0.2s ease;

  &:hover {
    transform: translateX(4px);
  }

  &:first-of-type { padding-top: 0; }
  &:last-of-type { border-bottom: none; padding-bottom: 0; }
`

const EntryIcon = styled.div`
  font-size: 1.6rem;
  min-width: 44px;
  height: 44px;
  background: ${({ $theme }) => ($theme === 'light' ? 'rgba(99, 102, 241, 0.1)' : 'rgba(129, 140, 248, 0.08)')};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`

const EntryContent = styled.div``

const EntryTitle = styled.div`
  font-size: 0.95rem;
  font-weight: 700;
  color: ${({ $theme }) => ($theme === 'light' ? '#0f172a' : '#e2e8f0')};
  margin-bottom: 3px;
  line-height: 1.35;
`

const EntrySub = styled.div`
  font-size: 0.84rem;
  color: ${({ $theme }) => ($theme === 'light' ? '#4f46e5' : '#818cf8')};
  margin-bottom: 2px;
  font-weight: 600;
`

const EntryMeta = styled.div`
  font-size: 0.78rem;
  color: ${({ $theme }) => ($theme === 'light' ? '#64748b' : '#64748b')};
  font-family: 'Courier New', monospace;
`

// ─── Contact Section ──────────────────────────────────────────────────────────
const ContactSection = styled.section`
  max-width: 680px;
  margin: 0 auto;
  padding: 80px 32px 110px;
  text-align: center;
  position: relative;
  z-index: 1;

  @media (max-width: 480px) { padding: 60px 16px 80px; }
`

const ContactEyebrow = styled.div`
  font-size: 0.85rem;
  font-weight: 700;
  color: ${({ $theme }) => ($theme === 'light' ? '#4f46e5' : '#818cf8')};
  letter-spacing: 2px;
  text-transform: uppercase;
  font-family: 'Courier New', monospace;
  margin-bottom: 20px;
`

const ContactTitle = styled.h2`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 900;
  color: ${({ $theme }) => ($theme === 'light' ? '#0f172a' : '#f1f5f9')};
  letter-spacing: -0.04em;
  margin-bottom: 20px;
`

const ContactDesc = styled.p`
  font-size: 1.05rem;
  color: ${({ $theme }) => ($theme === 'light' ? '#475569' : '#94a3b8')};
  line-height: 1.75;
  margin-bottom: 40px;
`

const ContactLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 40px;
`

const ContactLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 14px 24px;
  background: ${({ $theme }) =>
    $theme === 'light' ? 'rgba(255, 255, 255, 0.85)' : 'rgba(19, 22, 42, 0.7)'};
  border: 1px solid ${({ $theme }) => ($theme === 'light' ? 'rgba(99, 102, 241, 0.2)' : 'rgba(129, 140, 248, 0.15)')};
  backdrop-filter: blur(12px);
  border-radius: 14px;
  color: ${({ $theme }) => ($theme === 'light' ? '#334155' : '#94a3b8')};
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: ${({ $theme }) => ($theme === 'light' ? '0 4px 16px rgba(99, 102, 241, 0.05)' : '0 4px 16px rgba(0, 0, 0, 0.2)')};

  svg { width: 18px; height: 18px; flex-shrink: 0; }

  &:hover {
    color: ${({ $theme }) => ($theme === 'light' ? '#4f46e5' : '#818cf8')};
    border-color: ${({ $theme }) => ($theme === 'light' ? '#4f46e5' : '#818cf8')};
    background: ${({ $theme }) => ($theme === 'light' ? 'rgba(99, 102, 241, 0.08)' : 'rgba(129, 140, 248, 0.08)')};
    transform: translateY(-3px) scale(1.01);
    box-shadow: ${({ $theme }) => ($theme === 'light' ? '0 8px 24px rgba(99, 102, 241, 0.12)' : '0 8px 24px rgba(0, 0, 0, 0.35)')};
  }
`

// ─── Footer ───────────────────────────────────────────────────────────────────
const Footer = styled.footer`
  text-align: center;
  padding: 28px 32px;
  border-top: 1px solid ${({ $theme }) => ($theme === 'light' ? 'rgba(99, 102, 241, 0.12)' : 'rgba(129, 140, 248, 0.08)')};
  font-size: 0.85rem;
  color: ${({ $theme }) => ($theme === 'light' ? '#64748b' : '#475569')};
  position: relative;
  z-index: 1;
`

// ─── Typed Text Hook ──────────────────────────────────────────────────────────
function useTyped(words, speed = 90, pause = 1800) {
  const [display, setDisplay] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx % words.length]
    const delay = deleting ? speed / 2 : speed

    const t = setTimeout(() => {
      if (!deleting && charIdx < current.length) {
        setDisplay(current.slice(0, charIdx + 1))
        setCharIdx(c => c + 1)
      } else if (!deleting && charIdx === current.length) {
        setTimeout(() => setDeleting(true), pause)
      } else if (deleting && charIdx > 0) {
        setDisplay(current.slice(0, charIdx - 1))
        setCharIdx(c => c - 1)
      } else if (deleting && charIdx === 0) {
        setDeleting(false)
        setWordIdx(w => (w + 1) % words.length)
      }
    }, delay)
    return () => clearTimeout(t)
  }, [words, wordIdx, charIdx, deleting, speed, pause])

  return display
}

// ─── Main Portfolio Component ─────────────────────────────────────────────────
export default function Portfolio() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio_theme') || 'dark'
  })

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`)
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`)
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const toggleTheme = () => {
    setTheme(prev => {
      const next = prev === 'dark' ? 'light' : 'dark'
      localStorage.setItem('portfolio_theme', next)
      return next
    })
  }

  const name = personalInfo?.name ?? 'Ihtisham Zameer'
  const title = personalInfo?.title ?? '.NET Full Stack Developer'
  const tagline = personalInfo?.tagline ?? ''
  const email = personalInfo?.email ?? ''
  const phone = personalInfo?.phone ?? ''
  const linkedin = personalInfo?.linkedin ?? '#'
  const resumeUrl = personalInfo?.resumeUrl ?? '#'
  const profileImage = personalInfo?.profileImage ?? '/profile.png'

  const roles = personalInfo?.roles ?? [title]
  const typed = useTyped(roles)

  const paragraphs = (typeof aboutText === 'string' ? aboutText : '')
    .split('\n\n')
    .filter(Boolean)

  return (
    <Page $theme={theme}>
      <PortfolioGlobal $theme={theme} />
      
      {/* ── Interactive Mouse Spotlight & Lightning Glow Follower ── */}
      <MouseSpotlight $theme={theme} />
      <LightningFollower $theme={theme} />

      {/* ── Ambient Background Floating Orbs ── */}
      <Orb1 $theme={theme} />
      <Orb2 $theme={theme} />

      {/* ── Portfolio Top Navigation ── */}
      <PortfolioNav theme={theme} toggleTheme={toggleTheme} />

      {/* ── Hero ── */}
      <HeroSection id="hero">
        <HeroContent>
          <HeroEyebrow $theme={theme}>Hello, I'm</HeroEyebrow>
          <HeroName $theme={theme}>{name}</HeroName>
          <HeroRole $theme={theme}>
            <TypedText $theme={theme}>{typed}</TypedText>
            <Cursor $theme={theme} />
          </HeroRole>
          <HeroTagline $theme={theme}>{tagline}</HeroTagline>
          <HeroBtns>
            <BtnPrimary
              href="#projects"
              onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /></svg>
              View My Work
            </BtnPrimary>
            <BtnOutline href={resumeUrl} target="_blank" rel="noopener noreferrer" $theme={theme}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
              Resume
            </BtnOutline>
          </HeroBtns>
        </HeroContent>

        <HeroImageWrap>
          <ProfileRing>
            <ProfileImg src={profileImage} alt={name} $theme={theme} />
          </ProfileRing>
          <HeroBadge $theme={theme}>Available for Work</HeroBadge>
        </HeroImageWrap>
      </HeroSection>

      {/* ── About ── */}
      <Section id="about">
        <SectionLabel>
          <SectionNum $theme={theme}>01.</SectionNum>
          <SectionTitle $theme={theme}>About Me</SectionTitle>
          <SectionLine $theme={theme} />
        </SectionLabel>

        <AboutGrid>
          <AboutText $theme={theme}>
            {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </AboutText>
          <AboutStats>
            <StatCard $theme={theme}>
              <StatNum $theme={theme}>2+</StatNum>
              <StatLabel $theme={theme}>Years of Experience</StatLabel>
            </StatCard>
            <StatCard $theme={theme}>
              <StatNum $theme={theme}>25+</StatNum>
              <StatLabel $theme={theme}>REST APIs Built & Maintained</StatLabel>
            </StatCard>
            <StatCard $theme={theme}>
              <StatNum $theme={theme}>60%</StatNum>
              <StatLabel $theme={theme}>Reduction in manual reporting effort</StatLabel>
            </StatCard>
            <StatCard $theme={theme}>
              <StatNum $theme={theme}>150+</StatNum>
              <StatLabel $theme={theme}>Employee records secured</StatLabel>
            </StatCard>
          </AboutStats>
        </AboutGrid>
      </Section>

      {/* ── Skills ── */}
      <Section id="skills">
        <SectionLabel>
          <SectionNum $theme={theme}>02.</SectionNum>
          <SectionTitle $theme={theme}>Technical Skills</SectionTitle>
          <SectionLine $theme={theme} />
        </SectionLabel>
        <SkillsGrid>
          {Object.entries(skills ?? {}).map(([cat, items]) => (
            <SkillCard key={cat} $theme={theme}>
              <SkillCategoryTitle $theme={theme}>{cat}</SkillCategoryTitle>
              <SkillRow>
                {(items ?? []).map(s => (
                  <SkillItem key={s.name}>
                    <SkillMeta>
                      <SkillName $theme={theme}><span>{s.icon}</span>{s.name}</SkillName>
                      <SkillPct $theme={theme}>{s.level}%</SkillPct>
                    </SkillMeta>
                    <ProgressTrack $theme={theme}>
                      <ProgressFill $pct={s.level} $theme={theme} />
                    </ProgressTrack>
                  </SkillItem>
                ))}
              </SkillRow>
            </SkillCard>
          ))}
        </SkillsGrid>
      </Section>

      {/* ── Experience ── */}
      <Section id="experience">
        <SectionLabel>
          <SectionNum $theme={theme}>03.</SectionNum>
          <SectionTitle $theme={theme}>Where I've Worked</SectionTitle>
          <SectionLine $theme={theme} />
        </SectionLabel>
        <Timeline $theme={theme}>
          {(experience ?? []).map(exp => (
            <TimelineItem key={exp.id} $theme={theme}>
              <ExpCard $theme={theme}>
                <ExpHeader>
                  <ExpMeta>
                    <ExpRole $theme={theme}>{exp.role}</ExpRole>
                    <ExpCompany $theme={theme}>{exp.company}</ExpCompany>
                  </ExpMeta>
                  <ExpPeriod $theme={theme}>{exp.period}</ExpPeriod>
                </ExpHeader>
                <ExpDesc $theme={theme}>{exp.description}</ExpDesc>
                <AchList>
                  {(exp.achievements ?? []).map((a, i) => (
                    <AchItem key={i} $theme={theme}>{a}</AchItem>
                  ))}
                </AchList>
                <TagRow>
                  {(exp.tech ?? []).map(t => <Tag key={t} $theme={theme}>{t}</Tag>)}
                </TagRow>
              </ExpCard>
            </TimelineItem>
          ))}
        </Timeline>
      </Section>

      {/* ── Projects ── */}
      <Section id="projects">
        <SectionLabel>
          <SectionNum $theme={theme}>04.</SectionNum>
          <SectionTitle $theme={theme}>Things I've Built</SectionTitle>
          <SectionLine $theme={theme} />
        </SectionLabel>
        <ProjectGrid>
          {(projects ?? []).map(p => (
            <ProjectCard key={p.id} $theme={theme}>
              <ProjTopRow>
                <ProjFolderIcon $theme={theme}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                  </svg>
                </ProjFolderIcon>
                <ProjLinks $theme={theme}>
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </a>
                  )}
                </ProjLinks>
              </ProjTopRow>
              <ProjStatus>{p.status}</ProjStatus>
              <ProjTitle $theme={theme}>{p.title}</ProjTitle>
              <ProjDesc $theme={theme}>{p.description}</ProjDesc>
              <AchList>
                {(p.highlights ?? []).map((h, i) => (
                  <AchItem key={i} $theme={theme}>{h}</AchItem>
                ))}
              </AchList>
              <TagRow style={{ marginTop: 'auto' }}>
                {(p.tech ?? []).map(t => <Tag key={t} $theme={theme}>{t}</Tag>)}
              </TagRow>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </Section>

      {/* ── Education & Certifications ── */}
      <Section id="education">
        <SectionLabel>
          <SectionNum $theme={theme}>05.</SectionNum>
          <SectionTitle $theme={theme}>Education & Certifications</SectionTitle>
          <SectionLine $theme={theme} />
        </SectionLabel>
        <EdCertGrid>
          <PanelCard $theme={theme}>
            <PanelTitle $theme={theme}>Education</PanelTitle>
            {(education ?? []).map(edu => (
              <ListEntry key={edu.id} $theme={theme}>
                <EntryIcon $theme={theme}>🎓</EntryIcon>
                <EntryContent>
                  <EntryTitle $theme={theme}>{edu.degree}</EntryTitle>
                  <EntrySub $theme={theme}>{edu.institution}</EntrySub>
                  <EntryMeta $theme={theme}>{edu.period} · {edu.grade}</EntryMeta>
                  {edu.description && (
                    <EntryMeta $theme={theme} style={{ marginTop: 6, lineHeight: 1.5 }}>{edu.description}</EntryMeta>
                  )}
                </EntryContent>
              </ListEntry>
            ))}
          </PanelCard>
          <PanelCard $theme={theme}>
            <PanelTitle $theme={theme}>Certifications & Achievements</PanelTitle>
            {(certifications ?? []).map(cert => (
              <ListEntry key={cert.id} $theme={theme}>
                <EntryIcon $theme={theme}>{cert.icon}</EntryIcon>
                <EntryContent>
                  <EntryTitle $theme={theme}>{cert.title}</EntryTitle>
                  <EntrySub $theme={theme}>{cert.issuer}</EntrySub>
                  <EntryMeta $theme={theme}>{cert.year}</EntryMeta>
                </EntryContent>
              </ListEntry>
            ))}
          </PanelCard>
        </EdCertGrid>
      </Section>

      {/* ── Contact ── */}
      <ContactSection id="contact">
        <ContactEyebrow $theme={theme}>06. What's Next?</ContactEyebrow>
        <ContactTitle $theme={theme}>Get In Touch</ContactTitle>
        <ContactDesc $theme={theme}>
          I'm actively looking for new opportunities as a <strong style={{ color: theme === 'light' ? '#4f46e5' : '#818cf8' }}>.NET Full Stack Developer</strong>. Whether you have a project in mind, a role to fill, or just want to say hello — my inbox is always open.
        </ContactDesc>
        <BtnPrimary
          href={`mailto:${email}`}
          style={{ display: 'inline-flex', margin: '0 auto' }}
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
          Say Hello
        </BtnPrimary>
        <ContactLinks>
          {email && (
            <ContactLink href={`mailto:${email}`} $theme={theme}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              {email}
            </ContactLink>
          )}
          {phone && (
            <ContactLink href={`tel:${phone.replace(/\s+/g, '')}`} $theme={theme}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              {phone}
            </ContactLink>
          )}
          {linkedin && (
            <ContactLink href={linkedin} target="_blank" rel="noopener noreferrer" $theme={theme}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
              linkedin.com/in/ihtishamzameer
            </ContactLink>
          )}
        </ContactLinks>
      </ContactSection>

      <Footer $theme={theme}>
        Designed & built by <span style={{ color: theme === 'light' ? '#4f46e5' : '#818cf8', fontWeight: 600 }}>{name}</span> · {new Date().getFullYear()}
      </Footer>
    </Page>
  )
}

