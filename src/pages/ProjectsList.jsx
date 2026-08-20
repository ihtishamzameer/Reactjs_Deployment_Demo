// src/pages/ProjectsList.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
  max-width: 1140px;
  margin: 0 auto;
  padding: 120px 24px 80px;
`;

const PageHeader = styled.div`
  margin-bottom: 48px;
  text-align: center;
`;

const Eyebrow = styled.div`
  font-size: 0.85rem;
  font-weight: 700;
  color: ${({ $theme }) => ($theme === 'light' ? '#4f46e5' : '#818cf8')};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 12px;
`;

const Title = styled.h1`
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  font-weight: 900;
  margin-bottom: 16px;
  line-height: 1.15;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: ${({ $theme }) => ($theme === 'light' ? '#475569' : '#94a3b8')};
  max-width: 680px;
  margin: 0 auto 24px;
  line-height: 1.6;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 28px;
`;

const Card = styled.div`
  background: ${({ $theme }) => ($theme === 'light' ? '#ffffff' : 'rgba(255, 255, 255, 0.03)')};
  border: 1px solid ${({ $theme }) => ($theme === 'light' ? '#e2e8f0' : 'rgba(255, 255, 255, 0.08)')};
  border-radius: 16px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ $theme }) => ($theme === 'light' ? '#c7d2fe' : '#6366f1')};
    box-shadow: 0 12px 30px rgba(99, 102, 241, 0.15);
  }
`;

const CardStatus = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: ${({ $theme }) => ($theme === 'light' ? '#4f46e5' : '#818cf8')};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 10px;
`;

const CardTitle = styled.h2`
  font-size: 1.35rem;
  font-weight: 800;
  margin-bottom: 12px;
  color: ${({ $theme }) => ($theme === 'light' ? '#0f172a' : '#ffffff')};
`;

const CardDesc = styled.p`
  font-size: 0.92rem;
  color: ${({ $theme }) => ($theme === 'light' ? '#475569' : '#94a3b8')};
  line-height: 1.6;
  margin-bottom: 20px;
  flex-grow: 1;
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
`;

const Tag = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 20px;
  background: ${({ $theme }) => ($theme === 'light' ? '#f1f5f9' : 'rgba(99, 102, 241, 0.12)')};
  color: ${({ $theme }) => ($theme === 'light' ? '#334155' : '#a5b4fc')};
`;

const BtnLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 20px;
  border-radius: 10px;
  background: #6366f1;
  color: #ffffff;
  font-weight: 700;
  font-size: 0.88rem;
  text-decoration: none;
  transition: background 0.2s ease;

  &:hover {
    background: #4f46e5;
  }
`;

export default function ProjectsList() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.title = 'Project Case Studies | Ihtisham Zameer - .NET Full Stack Developer';
  }, []);

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));

  return (
    <Container $theme={theme}>
      <PortfolioNav theme={theme} toggleTheme={toggleTheme} />

      <ContentWrap id="main-content">
        <PageHeader>
          <Eyebrow $theme={theme}>Portfolio Case Studies</Eyebrow>
          <Title>Enterprise Projects & Architecture</Title>
          <Subtitle $theme={theme}>
            In-depth technical case studies of web applications and backend systems architected by Ihtisham Zameer using ASP.NET Core, C#, Clean Architecture, and React.js.
          </Subtitle>
          <ShareButtons title="Enterprise Projects & Architecture | Ihtisham Zameer" theme={theme} />
        </PageHeader>

        <Grid>
          {projects.map(p => (
            <Card key={p.id} $theme={theme}>
              <CardStatus $theme={theme}>{p.status}</CardStatus>
              <CardTitle $theme={theme}>{p.title}</CardTitle>
              <CardDesc $theme={theme}>{p.description}</CardDesc>
              <TagRow>
                {p.tech.map(t => (
                  <Tag key={t} $theme={theme}>{t}</Tag>
                ))}
              </TagRow>
              <BtnLink to={`/projects/${p.slug}`}>
                View Detailed Case Study →
              </BtnLink>
            </Card>
          ))}
        </Grid>
      </ContentWrap>

      <SiteFooter theme={theme} />
    </Container>
  );
}
