// src/pages/ProjectDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { projects } from '../data/portfolioData';
import PortfolioNav from '../Components/portfolio/PortfolioNav';
import SiteFooter from '../Components/layout/SiteFooter';
import ShareButtons from '../Components/common/ShareButtons';

const Container = styled.div`
  min-height: 100vh;
  background: ${({ $theme }) => ($theme === 'light' ? '#ffffff' : '#0c0e1a')};
  color: ${({ $theme }) => ($theme === 'light' ? '#0f172a' : '#f8fafc')};
  font-family: 'Inter', sans-serif;
`;

const ContentWrap = styled.main`
  max-width: 900px;
  margin: 0 auto;
  padding: 120px 24px 80px;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.88rem;
  font-weight: 600;
  color: ${({ $theme }) => ($theme === 'light' ? '#4f46e5' : '#818cf8')};
  text-decoration: none;
  margin-bottom: 24px;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = styled.div`
  border-bottom: 1px solid ${({ $theme }) => ($theme === 'light' ? '#e2e8f0' : 'rgba(255,255,255,0.08)')};
  padding-bottom: 32px;
  margin-bottom: 40px;
`;

const StatusTag = styled.span`
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 4px 12px;
  border-radius: 20px;
  background: rgba(99, 102, 241, 0.15);
  color: #818cf8;
  display: inline-block;
  margin-bottom: 16px;
`;

const Title = styled.h1`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  line-height: 1.15;
  margin-bottom: 12px;
`;

const Subtitle = styled.p`
  font-size: 1.15rem;
  color: ${({ $theme }) => ($theme === 'light' ? '#475569' : '#94a3b8')};
  line-height: 1.6;
  margin-bottom: 20px;
`;

const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 800;
  margin: 36px 0 16px;
  color: ${({ $theme }) => ($theme === 'light' ? '#0f172a' : '#ffffff')};
  display: flex;
  align-items: center;
  gap: 10px;

  &::before {
    content: '';
    display: inline-block;
    width: 4px;
    height: 20px;
    background: #6366f1;
    border-radius: 2px;
  }
`;

const Paragraph = styled.p`
  font-size: 1.02rem;
  line-height: 1.75;
  color: ${({ $theme }) => ($theme === 'light' ? '#334155' : '#cbd5e1')};
  margin-bottom: 20px;
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
  margin-bottom: 30px;
`;

const TechItem = styled.div`
  background: ${({ $theme }) => ($theme === 'light' ? '#f8fafc' : 'rgba(255,255,255,0.03)')};
  border: 1px solid ${({ $theme }) => ($theme === 'light' ? '#e2e8f0' : 'rgba(255,255,255,0.08)')};
  padding: 16px;
  border-radius: 12px;
`;

const TechName = styled.h4`
  font-size: 0.95rem;
  font-weight: 700;
  color: ${({ $theme }) => ($theme === 'light' ? '#4f46e5' : '#818cf8')};
  margin-bottom: 6px;
`;

const TechUsage = styled.p`
  font-size: 0.84rem;
  color: ${({ $theme }) => ($theme === 'light' ? '#64748b' : '#94a3b8')};
  line-height: 1.5;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 24px;
`;

const ListItem = styled.li`
  position: relative;
  padding-left: 28px;
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ $theme }) => ($theme === 'light' ? '#334155' : '#cbd5e1')};
  margin-bottom: 12px;

  &::before {
    content: '⚡';
    position: absolute;
    left: 0;
    top: 2px;
  }
`;

const OutcomeBox = styled.div`
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 16px;
  padding: 24px;
  margin-top: 32px;
`;

const NotFoundWrap = styled.div`
  padding: 160px 24px 80px;
  text-align: center;
`;

export default function ProjectDetail() {
  const { slug } = useParams();
  const [theme, setTheme] = useState('dark');

  const project = projects.find(p => p.slug === slug);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} — Case Study | Ihtisham Zameer`;
    }
  }, [project]);

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));

  if (!project) {
    return (
      <Container $theme={theme}>
        <PortfolioNav theme={theme} toggleTheme={toggleTheme} />
        <NotFoundWrap>
          <h2>Project Case Study Not Found</h2>
          <p style={{ margin: '16px 0 24px' }}>The requested case study could not be located.</p>
          <BackLink to="/projects" $theme={theme}>← Back to All Projects</BackLink>
        </NotFoundWrap>
        <SiteFooter theme={theme} />
      </Container>
    );
  }

  const { caseStudy } = project;

  return (
    <Container $theme={theme}>
      <PortfolioNav theme={theme} toggleTheme={toggleTheme} />

      <ContentWrap id="main-content">
        <BackLink to="/projects" $theme={theme}>← Back to All Projects</BackLink>

        <Header $theme={theme}>
          <StatusTag>{project.status}</StatusTag>
          <Title>{project.title}</Title>
          <Subtitle $theme={theme}>{project.subtitle || project.description}</Subtitle>
          <MetaRow>
            <ShareButtons title={`${project.title} Case Study | Ihtisham Zameer`} theme={theme} />
          </MetaRow>
        </Header>

        {caseStudy && (
          <>
            <SectionTitle $theme={theme}>Problem Statement</SectionTitle>
            <Paragraph $theme={theme}>{caseStudy.problem}</Paragraph>

            <SectionTitle $theme={theme}>My Role & Responsibilities</SectionTitle>
            <Paragraph $theme={theme}>
              <strong>Role:</strong> {caseStudy.role}
            </Paragraph>

            <SectionTitle $theme={theme}>Architecture & Tech Stack</SectionTitle>
            <TechGrid>
              {caseStudy.techStackDetails.map((tech, idx) => (
                <TechItem key={idx} $theme={theme}>
                  <TechName $theme={theme}>{tech.name}</TechName>
                  <TechUsage $theme={theme}>{tech.usage}</TechUsage>
                </TechItem>
              ))}
            </TechGrid>

            <SectionTitle $theme={theme}>Key Technical Challenges</SectionTitle>
            <List>
              {caseStudy.keyChallenges.map((challenge, idx) => (
                <ListItem key={idx} $theme={theme}>{challenge}</ListItem>
              ))}
            </List>

            <SectionTitle $theme={theme}>Business Outcome & Impact</SectionTitle>
            <OutcomeBox>
              <Paragraph $theme={theme} style={{ marginBottom: 0, fontWeight: 500 }}>
                {caseStudy.outcome}
              </Paragraph>
            </OutcomeBox>
          </>
        )}

        <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <BackLink to="/projects" $theme={theme}>← Explore More Case Studies</BackLink>
        </div>
      </ContentWrap>

      <SiteFooter theme={theme} />
    </Container>
  );
}
