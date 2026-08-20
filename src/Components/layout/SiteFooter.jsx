// src/Components/layout/SiteFooter.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { personalInfo } from '../../data/portfolioData';

const FooterContainer = styled.footer`
  background: ${({ $theme }) => ($theme === 'light' ? '#f8fafc' : '#070913')};
  border-top: 1px solid ${({ $theme }) => ($theme === 'light' ? '#e2e8f0' : 'rgba(255,255,255,0.08)')};
  padding: 60px 24px 30px;
  color: ${({ $theme }) => ($theme === 'light' ? '#475569' : '#94a3b8')};
  font-size: 0.9rem;
`;

const FooterGrid = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
`;

const FooterCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterBrand = styled.h3`
  font-size: 1.25rem;
  font-weight: 800;
  color: ${({ $theme }) => ($theme === 'light' ? '#0f172a' : '#f8fafc')};
  margin-bottom: 12px;

  span {
    color: ${({ $theme }) => ($theme === 'light' ? '#4f46e5' : '#818cf8')};
  }
`;

const FooterDesc = styled.p`
  line-height: 1.6;
  margin-bottom: 16px;
  font-size: 0.88rem;
`;

const ColHeading = styled.h4`
  font-size: 0.95rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${({ $theme }) => ($theme === 'light' ? '#1e293b' : '#e2e8f0')};
  margin-bottom: 16px;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FooterLink = styled(Link)`
  color: ${({ $theme }) => ($theme === 'light' ? '#64748b' : '#94a3b8')};
  text-decoration: none;
  transition: color 0.2s ease;
  font-size: 0.88rem;

  &:hover {
    color: ${({ $theme }) => ($theme === 'light' ? '#4f46e5' : '#818cf8')};
  }
`;

const ExtLink = styled.a`
  color: ${({ $theme }) => ($theme === 'light' ? '#64748b' : '#94a3b8')};
  text-decoration: none;
  transition: color 0.2s ease;
  font-size: 0.88rem;

  &:hover {
    color: ${({ $theme }) => ($theme === 'light' ? '#4f46e5' : '#818cf8')};
  }
`;

const BottomRow = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding-top: 24px;
  border-top: 1px solid ${({ $theme }) => ($theme === 'light' ? '#e2e8f0' : 'rgba(255,255,255,0.06)')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  font-size: 0.84rem;
`;

export default function SiteFooter({ theme = 'dark' }) {
  return (
    <FooterContainer $theme={theme}>
      <FooterGrid>
        <FooterCol>
          <FooterBrand $theme={theme}>
            Ihtisham <span>Zameer</span>
          </FooterBrand>
          <FooterDesc $theme={theme}>
            .NET Full Stack Developer specializing in ASP.NET Core, C#, React.js, and SQL Server enterprise applications.
          </FooterDesc>
          <div>
            <ExtLink href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" $theme={theme} style={{ fontWeight: 600 }}>
              📄 Download Resume / CV
            </ExtLink>
          </div>
        </FooterCol>

        <FooterCol>
          <ColHeading $theme={theme}>Navigation</ColHeading>
          <LinkList>
            <li><FooterLink to="/" $theme={theme}>Home</FooterLink></li>
            <li><FooterLink to="/#about" $theme={theme}>About Me</FooterLink></li>
            <li><FooterLink to="/#skills" $theme={theme}>Technical Skills</FooterLink></li>
            <li><FooterLink to="/#experience" $theme={theme}>Experience</FooterLink></li>
            <li><FooterLink to="/projects" $theme={theme}>Case Studies & Projects</FooterLink></li>
            <li><FooterLink to="/blog" $theme={theme}>Technical Blog</FooterLink></li>
            <li><FooterLink to="/resume" $theme={theme}>Interactive Resume</FooterLink></li>
            <li><FooterLink to="/contact" $theme={theme}>Contact Me</FooterLink></li>
          </LinkList>
        </FooterCol>

        <FooterCol>
          <ColHeading $theme={theme}>Featured Projects</ColHeading>
          <LinkList>
            <li><FooterLink to="/projects/smartcorp-hrm" $theme={theme}>SmartCorp HRM Case Study</FooterLink></li>
            <li><FooterLink to="/projects/smartpay" $theme={theme}>SmartPay Payroll Engine</FooterLink></li>
            <li><FooterLink to="/projects/plagiarism-checker" $theme={theme}>Plagiarism Checker System</FooterLink></li>
          </LinkList>
        </FooterCol>

        <FooterCol>
          <ColHeading $theme={theme}>Connect</ColHeading>
          <LinkList>
            <li><ExtLink href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" $theme={theme}>LinkedIn</ExtLink></li>
            <li><ExtLink href={personalInfo.github} target="_blank" rel="noopener noreferrer" $theme={theme}>GitHub</ExtLink></li>
            <li><ExtLink href={personalInfo.gmailUrl} target="_blank" rel="noopener noreferrer" $theme={theme}>Gmail ({personalInfo.email})</ExtLink></li>
            <li><ExtLink href={personalInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" $theme={theme}>WhatsApp ({personalInfo.phone})</ExtLink></li>
          </LinkList>
        </FooterCol>
      </FooterGrid>

      <BottomRow $theme={theme}>
        <div>© {new Date().getFullYear()} Ihtisham Zameer. All rights reserved.</div>
        <div>Built with React.js & ASP.NET Core Architecture · Hosted on Vercel</div>
      </BottomRow>
    </FooterContainer>
  );
}
