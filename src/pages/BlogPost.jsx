// src/pages/BlogPost.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
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
  max-width: 800px;
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

const Header = styled.header`
  border-bottom: 1px solid ${({ $theme }) => ($theme === 'light' ? '#e2e8f0' : 'rgba(255,255,255,0.08)')};
  padding-bottom: 32px;
  margin-bottom: 40px;
`;

const CategoryTag = styled.span`
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
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 900;
  line-height: 1.2;
  margin-bottom: 16px;
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 0.88rem;
  color: ${({ $theme }) => ($theme === 'light' ? '#64748b' : '#94a3b8')};
  margin-bottom: 24px;
`;

const AuthorBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background: ${({ $theme }) => ($theme === 'light' ? '#f8fafc' : 'rgba(255,255,255,0.03)')};
  border: 1px solid ${({ $theme }) => ($theme === 'light' ? '#e2e8f0' : 'rgba(255,255,255,0.08)')};
  border-radius: 12px;
  margin-bottom: 32px;
`;

const AuthorImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorName = styled.h4`
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 2px;
  color: ${({ $theme }) => ($theme === 'light' ? '#0f172a' : '#ffffff')};
`;

const AuthorRole = styled.p`
  font-size: 0.82rem;
  color: ${({ $theme }) => ($theme === 'light' ? '#64748b' : '#94a3b8')};
`;

const ArticleBody = styled.div`
  font-size: 1.05rem;
  line-height: 1.8;
  color: ${({ $theme }) => ($theme === 'light' ? '#334155' : '#cbd5e1')};

  h2, h3, h4 {
    color: ${({ $theme }) => ($theme === 'light' ? '#0f172a' : '#ffffff')};
    margin: 36px 0 16px;
    font-weight: 800;
  }

  p {
    margin-bottom: 20px;
  }

  pre {
    background: #090d16;
    color: #e2e8f0;
    padding: 20px;
    border-radius: 12px;
    overflow-x: auto;
    font-family: 'Fira Code', monospace;
    font-size: 0.9rem;
    margin: 24px 0;
    border: 1px solid rgba(255,255,255,0.1);
  }

  code {
    background: ${({ $theme }) => ($theme === 'light' ? '#f1f5f9' : 'rgba(255,255,255,0.1)')};
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.9em;
  }

  ul, ol {
    margin: 0 0 24px 24px;
    li {
      margin-bottom: 8px;
    }
  }
`;

const NotFoundWrap = styled.div`
  padding: 160px 24px 80px;
  text-align: center;
`;

export default function BlogPost() {
  const { slug } = useParams();
  const [theme, setTheme] = useState('dark');

  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Ihtisham Zameer Blog`;
    }
  }, [post]);

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));

  if (!post) {
    return (
      <Container $theme={theme}>
        <PortfolioNav theme={theme} toggleTheme={toggleTheme} />
        <NotFoundWrap>
          <h2>Article Not Found</h2>
          <p style={{ margin: '16px 0 24px' }}>The technical article you requested could not be found.</p>
          <BackLink to="/blog" $theme={theme}>← Back to All Articles</BackLink>
        </NotFoundWrap>
        <SiteFooter theme={theme} />
      </Container>
    );
  }

  // Render markdown-like sections manually for clean visual formatting
  const renderParagraphs = (content) => {
    return content.split('\n\n').map((block, idx) => {
      if (block.startsWith('### ')) {
        return <h3 key={idx}>{block.replace('### ', '')}</h3>;
      }
      if (block.startsWith('```')) {
        const codeText = block.replace(/```[a-z]*/g, '').trim();
        return (
          <pre key={idx}>
            <code>{codeText}</code>
          </pre>
        );
      }
      if (block.startsWith('- ')) {
        const items = block.split('\n- ').map(i => i.replace(/^- /, ''));
        return (
          <ul key={idx}>
            {items.map((it, i) => (
              <li key={i}>{it}</li>
            ))}
          </ul>
        );
      }
      if (block.match(/^\d+\. /)) {
        const items = block.split('\n').map(i => i.replace(/^\d+\. /, ''));
        return (
          <ol key={idx}>
            {items.map((it, i) => (
              <li key={i}>{it}</li>
            ))}
          </ol>
        );
      }
      return <p key={idx}>{block}</p>;
    });
  };

  return (
    <Container $theme={theme}>
      <PortfolioNav theme={theme} toggleTheme={toggleTheme} />

      <ContentWrap id="main-content">
        <BackLink to="/blog" $theme={theme}>← Back to All Articles</BackLink>

        <Header $theme={theme}>
          <CategoryTag>{post.category}</CategoryTag>
          <Title>{post.title}</Title>
          <MetaRow $theme={theme}>
            <span>Published {post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </MetaRow>
          <AuthorBox $theme={theme}>
            <picture>
              <source srcSet="/profile.webp" type="image/webp" />
              <AuthorImg src="/profile.png" alt={post.author.name} />
            </picture>
            <div>
              <AuthorName $theme={theme}>{post.author.name}</AuthorName>
              <AuthorRole $theme={theme}>{post.author.role}</AuthorRole>
            </div>
          </AuthorBox>
          <ShareButtons title={`${post.title} | Ihtisham Zameer`} theme={theme} />
        </Header>

        <ArticleBody $theme={theme}>
          {renderParagraphs(post.content)}
        </ArticleBody>

        <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <ShareButtons title={`${post.title} | Ihtisham Zameer`} theme={theme} />
          <div style={{ marginTop: '20px' }}>
            <BackLink to="/blog" $theme={theme}>← Read More Technical Articles</BackLink>
          </div>
        </div>
      </ContentWrap>

      <SiteFooter theme={theme} />
    </Container>
  );
}
