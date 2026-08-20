// src/pages/BlogList.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { blogPosts } from '../data/portfolioData';
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
  max-width: 1000px;
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

const SearchInput = styled.input`
  width: 100%;
  max-width: 480px;
  padding: 12px 20px;
  border-radius: 12px;
  border: 1px solid ${({ $theme }) => ($theme === 'light' ? '#cbd5e1' : 'rgba(255, 255, 255, 0.15)')};
  background: ${({ $theme }) => ($theme === 'light' ? '#f8fafc' : 'rgba(255, 255, 255, 0.04)')};
  color: ${({ $theme }) => ($theme === 'light' ? '#0f172a' : '#ffffff')};
  font-size: 0.95rem;
  outline: none;
  margin-bottom: 40px;

  &:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
  }
`;

const BlogListGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const ArticleCard = styled.article`
  background: ${({ $theme }) => ($theme === 'light' ? '#ffffff' : 'rgba(255, 255, 255, 0.03)')};
  border: 1px solid ${({ $theme }) => ($theme === 'light' ? '#e2e8f0' : 'rgba(255, 255, 255, 0.08)')};
  border-radius: 16px;
  padding: 32px;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ $theme }) => ($theme === 'light' ? '#c7d2fe' : '#6366f1')};
    box-shadow: 0 12px 30px rgba(99, 102, 241, 0.12);
  }
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.82rem;
  color: ${({ $theme }) => ($theme === 'light' ? '#64748b' : '#94a3b8')};
  margin-bottom: 12px;
`;

const CategoryBadge = styled.span`
  font-weight: 700;
  color: #818cf8;
  background: rgba(99, 102, 241, 0.12);
  padding: 4px 10px;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const ArticleTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 12px;
  line-height: 1.3;

  a {
    color: ${({ $theme }) => ($theme === 'light' ? '#0f172a' : '#ffffff')};
    text-decoration: none;

    &:hover {
      color: ${({ $theme }) => ($theme === 'light' ? '#4f46e5' : '#818cf8')};
    }
  }
`;

const ArticleExcerpt = styled.p`
  font-size: 0.96rem;
  color: ${({ $theme }) => ($theme === 'light' ? '#475569' : '#94a3b8')};
  line-height: 1.65;
  margin-bottom: 20px;
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
`;

const Tag = styled.span`
  font-size: 0.76rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 20px;
  background: ${({ $theme }) => ($theme === 'light' ? '#f1f5f9' : 'rgba(255, 255, 255, 0.06)')};
  color: ${({ $theme }) => ($theme === 'light' ? '#475569' : '#cbd5e1')};
`;

const ReadMore = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.9rem;
  font-weight: 700;
  color: ${({ $theme }) => ($theme === 'light' ? '#4f46e5' : '#818cf8')};
  text-decoration: none;

  &:hover {
    gap: 10px;
  }
`;

export default function BlogList() {
  const [theme, setTheme] = useState('dark');
  const [query, setQuery] = useState('');

  useEffect(() => {
    document.title = 'Technical Articles & Insights | Ihtisham Zameer';
  }, []);

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));

  const filteredPosts = blogPosts.filter(
    p =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.tags.some(t => t.toLowerCase().includes(query.toLowerCase())) ||
      p.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Container $theme={theme}>
      <PortfolioNav theme={theme} toggleTheme={toggleTheme} />

      <ContentWrap id="main-content">
        <PageHeader>
          <Eyebrow $theme={theme}>Technical Insights & Blog</Eyebrow>
          <Title>Software Engineering Articles</Title>
          <Subtitle $theme={theme}>
            Practical guides and architecture breakdowns on ASP.NET Core, C#, Clean Architecture, React.js, and SQL Server performance tuning by Ihtisham Zameer.
          </Subtitle>
          <SearchInput
            type="text"
            placeholder="Search articles by topic, keyword, or technology..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            $theme={theme}
            aria-label="Search technical articles"
          />
          <div>
            <ShareButtons title="Software Engineering Articles | Ihtisham Zameer" theme={theme} />
          </div>
        </PageHeader>

        <BlogListGrid>
          {filteredPosts.map(post => (
            <ArticleCard key={post.id} $theme={theme}>
              <MetaRow $theme={theme}>
                <CategoryBadge>{post.category}</CategoryBadge>
                <span>•</span>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </MetaRow>
              <ArticleTitle $theme={theme}>
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </ArticleTitle>
              <ArticleExcerpt $theme={theme}>{post.excerpt}</ArticleExcerpt>
              <TagRow>
                {post.tags.map(t => (
                  <Tag key={t} $theme={theme}>#{t}</Tag>
                ))}
              </TagRow>
              <ReadMore to={`/blog/${post.slug}`} $theme={theme}>
                Read Full Article →
              </ReadMore>
            </ArticleCard>
          ))}
        </BlogListGrid>
      </ContentWrap>

      <SiteFooter theme={theme} />
    </Container>
  );
}
