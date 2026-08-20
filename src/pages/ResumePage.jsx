// src/pages/ResumePage.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { personalInfo, aboutText, experience, skills, education, certifications } from '../data/portfolioData';
import PortfolioNav from '../Components/portfolio/PortfolioNav';
import SiteFooter from '../Components/layout/SiteFooter';

const Container = styled.div`
  min-height: 100vh;
  background: ${({ $theme }) => ($theme === 'light' ? '#ffffff' : '#0c0e1a')};
  color: ${({ $theme }) => ($theme === 'light' ? '#0f172a' : '#f8fafc')};
  font-family: 'Inter', sans-serif;
`;

const ContentWrap = styled.main`
  max-width: 960px;
  margin: 0 auto;
  padding: 120px 24px 80px;
`;

const TopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 20px;
  border-bottom: 2px solid ${({ $theme }) => ($theme === 'light' ? '#e2e8f0' : 'rgba(255,255,255,0.08)')};
  padding-bottom: 32px;
  margin-bottom: 40px;
`;

const NameTitle = styled.h1`
  font-size: clamp(2.2rem, 4vw, 3rem);
  font-weight: 900;
  margin-bottom: 8px;
`;

const SubRole = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ $theme }) => ($theme === 'light' ? '#4f46e5' : '#818cf8')};
  margin-bottom: 12px;
`;

const ContactMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  font-size: 0.9rem;
  color: ${({ $theme }) => ($theme === 'light' ? '#475569' : '#94a3b8')};

  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      color: #6366f1;
    }
  }
`;

const PdfBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 12px;
  background: #6366f1;
  color: #ffffff;
  font-weight: 700;
  text-decoration: none;
  font-size: 0.95rem;
  transition: background 0.2s ease;

  &:hover {
    background: #4f46e5;
  }
`;

const SectionHeader = styled.h3`
  font-size: 1.35rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({ $theme }) => ($theme === 'light' ? '#0f172a' : '#ffffff')};
  margin: 40px 0 20px;
  display: flex;
  align-items: center;
  gap: 12px;

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${({ $theme }) => ($theme === 'light' ? '#e2e8f0' : 'rgba(255,255,255,0.08)')};
  }
`;

const SummaryBox = styled.p`
  font-size: 1.02rem;
  line-height: 1.7;
  color: ${({ $theme }) => ($theme === 'light' ? '#334155' : '#cbd5e1')};
  margin-bottom: 24px;
`;

const ExpCard = styled.div`
  margin-bottom: 32px;
`;

const ExpTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 8px;
`;

const ExpRole = styled.h4`
  font-size: 1.15rem;
  font-weight: 800;
  color: ${({ $theme }) => ($theme === 'light' ? '#0f172a' : '#ffffff')};
`;

const ExpCompany = styled.span`
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({ $theme }) => ($theme === 'light' ? '#4f46e5' : '#818cf8')};
`;

const ExpPeriod = styled.span`
  font-size: 0.88rem;
  font-weight: 600;
  color: ${({ $theme }) => ($theme === 'light' ? '#64748b' : '#94a3b8')};
`;

const AchList = styled.ul`
  margin: 12px 0 0 20px;
  color: ${({ $theme }) => ($theme === 'light' ? '#334155' : '#cbd5e1')};
  line-height: 1.6;

  li {
    margin-bottom: 8px;
  }
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
`;

const SkillCat = styled.div`
  background: ${({ $theme }) => ($theme === 'light' ? '#f8fafc' : 'rgba(255,255,255,0.03)')};
  border: 1px solid ${({ $theme }) => ($theme === 'light' ? '#e2e8f0' : 'rgba(255,255,255,0.08)')};
  border-radius: 12px;
  padding: 16px;
`;

const SkillCatTitle = styled.h4`
  font-size: 0.95rem;
  font-weight: 700;
  color: ${({ $theme }) => ($theme === 'light' ? '#4f46e5' : '#818cf8')};
  margin-bottom: 10px;
`;

const SkillItemName = styled.div`
  font-size: 0.88rem;
  margin-bottom: 6px;
  color: ${({ $theme }) => ($theme === 'light' ? '#334155' : '#e2e8f0')};
`;

export default function ResumePage() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.title = 'Interactive Resume / CV | Ihtisham Zameer - .NET Full Stack Developer';
  }, []);

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));

  return (
    <Container $theme={theme}>
      <PortfolioNav theme={theme} toggleTheme={toggleTheme} />

      <ContentWrap id="main-content">
        <TopHeader $theme={theme}>
          <div>
            <NameTitle>{personalInfo.name}</NameTitle>
            <SubRole $theme={theme}>{personalInfo.title}</SubRole>
            <ContactMeta $theme={theme}>
              <span>📍 {personalInfo.location}</span>
              <span>📧 <a href={personalInfo.gmailUrl} target="_blank" rel="noopener noreferrer">{personalInfo.email}</a></span>
              <span>💬 <a href={personalInfo.whatsappUrl} target="_blank" rel="noopener noreferrer">{personalInfo.phone}</a></span>
            </ContactMeta>
          </div>
          <PdfBtn href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" aria-label="Download Official Resume PDF">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume PDF
          </PdfBtn>
        </TopHeader>

        <SectionHeader $theme={theme}>Professional Summary</SectionHeader>
        <SummaryBox $theme={theme}>{aboutText}</SummaryBox>

        <SectionHeader $theme={theme}>Work Experience</SectionHeader>
        {experience.map(exp => (
          <ExpCard key={exp.id}>
            <ExpTitleRow>
              <div>
                <ExpRole $theme={theme}>{exp.role}</ExpRole>
                <ExpCompany $theme={theme}>{exp.company}</ExpCompany>
              </div>
              <ExpPeriod $theme={theme}>{exp.period}</ExpPeriod>
            </ExpTitleRow>
            <AchList $theme={theme}>
              {exp.achievements.map((ach, idx) => (
                <li key={idx}>{ach}</li>
              ))}
            </AchList>
          </ExpCard>
        ))}

        <SectionHeader $theme={theme}>Technical Skills</SectionHeader>
        <SkillGrid>
          {Object.entries(skills).map(([cat, items]) => (
            <SkillCat key={cat} $theme={theme}>
              <SkillCatTitle $theme={theme}>{cat}</SkillCatTitle>
              {items.map(s => (
                <SkillItemName key={s.name} $theme={theme}>
                  • {s.name}
                </SkillItemName>
              ))}
            </SkillCat>
          ))}
        </SkillGrid>

        <SectionHeader $theme={theme}>Education</SectionHeader>
        {education.map(edu => (
          <div key={edu.id} style={{ marginBottom: '20px' }}>
            <ExpRole $theme={theme}>{edu.degree}</ExpRole>
            <ExpCompany $theme={theme}>{edu.institution}</ExpCompany>
            <div style={{ fontSize: '0.88rem', color: theme === 'light' ? '#64748b' : '#94a3b8', marginTop: '4px' }}>
              {edu.period} · {edu.grade}
            </div>
          </div>
        ))}

        <SectionHeader $theme={theme}>Certifications & Awards</SectionHeader>
        {certifications.map(cert => (
          <div key={cert.id} style={{ marginBottom: '16px' }}>
            <strong style={{ color: theme === 'light' ? '#0f172a' : '#ffffff' }}>{cert.icon} {cert.title}</strong> — {cert.issuer} ({cert.year})
          </div>
        ))}
      </ContentWrap>

      <SiteFooter theme={theme} />
    </Container>
  );
}
