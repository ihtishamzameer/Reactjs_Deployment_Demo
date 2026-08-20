// src/pages/ContactPage.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { personalInfo } from '../data/portfolioData';
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

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 48px;
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
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 40px;
`;

const Card = styled.div`
  background: ${({ $theme }) => ($theme === 'light' ? '#f8fafc' : 'rgba(255,255,255,0.03)')};
  border: 1px solid ${({ $theme }) => ($theme === 'light' ? '#e2e8f0' : 'rgba(255,255,255,0.08)')};
  border-radius: 16px;
  padding: 32px;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 800;
  margin-bottom: 16px;
  color: ${({ $theme }) => ($theme === 'light' ? '#0f172a' : '#ffffff')};
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
  font-size: 0.95rem;

  a {
    color: ${({ $theme }) => ($theme === 'light' ? '#4f46e5' : '#818cf8')};
    text-decoration: none;
    font-weight: 600;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const IconCircle = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(99, 102, 241, 0.15);
  color: #818cf8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  font-size: 0.85rem;
  font-weight: 700;
  color: ${({ $theme }) => ($theme === 'light' ? '#334155' : '#e2e8f0')};
`;

const Input = styled.input`
  padding: 12px 16px;
  border-radius: 10px;
  border: 1px solid ${({ $theme }) => ($theme === 'light' ? '#cbd5e1' : 'rgba(255,255,255,0.12)')};
  background: ${({ $theme }) => ($theme === 'light' ? '#ffffff' : 'rgba(255,255,255,0.04)')};
  color: ${({ $theme }) => ($theme === 'light' ? '#0f172a' : '#ffffff')};
  font-size: 0.95rem;
  outline: none;

  &:focus {
    border-color: #6366f1;
  }
`;

const TextArea = styled.textarea`
  padding: 12px 16px;
  border-radius: 10px;
  border: 1px solid ${({ $theme }) => ($theme === 'light' ? '#cbd5e1' : 'rgba(255,255,255,0.12)')};
  background: ${({ $theme }) => ($theme === 'light' ? '#ffffff' : 'rgba(255,255,255,0.04)')};
  color: ${({ $theme }) => ($theme === 'light' ? '#0f172a' : '#ffffff')};
  font-size: 0.95rem;
  outline: none;
  min-height: 120px;
  resize: vertical;

  &:focus {
    border-color: #6366f1;
  }
`;

const SubmitBtn = styled.button`
  padding: 14px 24px;
  border-radius: 10px;
  background: #6366f1;
  color: #ffffff;
  font-weight: 700;
  font-size: 0.95rem;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease;
  margin-top: 8px;

  &:hover {
    background: #4f46e5;
  }
`;

export default function ContactPage() {
  const [theme, setTheme] = useState('dark');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  useEffect(() => {
    document.title = 'Contact Ihtisham Zameer | .NET Full Stack Developer';
  }, []);

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <Container $theme={theme}>
      <PortfolioNav theme={theme} toggleTheme={toggleTheme} />

      <ContentWrap id="main-content">
        <PageHeader>
          <Eyebrow $theme={theme}>Get In Touch</Eyebrow>
          <Title>Let's Work Together</Title>
          <Subtitle $theme={theme}>
            I am actively open for full-time opportunities, backend architecture consulting, and custom software development projects.
          </Subtitle>
          <div style={{ marginTop: '20px' }}>
            <ShareButtons title="Contact Ihtisham Zameer | .NET Full Stack Developer" theme={theme} />
          </div>
        </PageHeader>

        <Grid>
          <Card $theme={theme}>
            <CardTitle $theme={theme}>Direct Contact Info</CardTitle>

            <ContactItem $theme={theme}>
              <IconCircle>📧</IconCircle>
              <div>
                <div style={{ fontSize: '0.82rem', color: theme === 'light' ? '#64748b' : '#94a3b8' }}>Email Address</div>
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </div>
            </ContactItem>

            <ContactItem $theme={theme}>
              <IconCircle>📞</IconCircle>
              <div>
                <div style={{ fontSize: '0.82rem', color: theme === 'light' ? '#64748b' : '#94a3b8' }}>Phone / WhatsApp</div>
                <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}>{personalInfo.phone}</a>
              </div>
            </ContactItem>

            <ContactItem $theme={theme}>
              <IconCircle>📍</IconCircle>
              <div>
                <div style={{ fontSize: '0.82rem', color: theme === 'light' ? '#64748b' : '#94a3b8' }}>Location</div>
                <strong>{personalInfo.location}</strong>
              </div>
            </ContactItem>

            <ContactItem $theme={theme}>
              <IconCircle>💼</IconCircle>
              <div>
                <div style={{ fontSize: '0.82rem', color: theme === 'light' ? '#64748b' : '#94a3b8' }}>LinkedIn</div>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">linkedin.com/in/ihtishamzameer</a>
              </div>
            </ContactItem>
          </Card>

          <Card $theme={theme}>
            <CardTitle $theme={theme}>Send a Message</CardTitle>
            {submitted ? (
              <div style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', padding: '20px', borderRadius: '12px', textAlign: 'center', fontWeight: 600 }}>
                ✓ Thank you! Opening your email client to send your message directly to Ihtisham Zameer.
              </div>
            ) : (
              <Form onSubmit={handleSubmit}>
                <InputGroup>
                  <Label $theme={theme}>Your Name</Label>
                  <Input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    $theme={theme}
                  />
                </InputGroup>

                <InputGroup>
                  <Label $theme={theme}>Email Address</Label>
                  <Input
                    type="email"
                    required
                    placeholder="e.g. john@example.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    $theme={theme}
                  />
                </InputGroup>

                <InputGroup>
                  <Label $theme={theme}>Subject</Label>
                  <Input
                    type="text"
                    required
                    placeholder="e.g. Full Stack Developer Role / Inquiry"
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    $theme={theme}
                  />
                </InputGroup>

                <InputGroup>
                  <Label $theme={theme}>Message</Label>
                  <TextArea
                    required
                    placeholder="Write your message details..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    $theme={theme}
                  />
                </InputGroup>

                <SubmitBtn type="submit">Send Message →</SubmitBtn>
              </Form>
            )}
          </Card>
        </Grid>
      </ContentWrap>

      <SiteFooter theme={theme} />
    </Container>
  );
}
