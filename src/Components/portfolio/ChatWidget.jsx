import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import axios from 'axios';

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(20px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.7); }
  70% { box-shadow: 0 0 0 15px rgba(99, 102, 241, 0); }
  100% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0); }
`;

const WidgetContainer = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 9999;
  font-family: 'Inter', sans-serif;
  
  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
  }
`;

const FloatingButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6366f1, #818cf8);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  animation: ${pulse} 2s infinite;

  &:hover {
    transform: scale(1.08) translateY(-4px);
    box-shadow: 0 8px 25px rgba(99, 102, 241, 0.6);
  }
  
  svg {
    width: 28px;
    height: 28px;
  }
`;

const ChatWindow = styled.div`
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 360px;
  height: 520px;
  max-height: calc(100vh - 120px);
  background: ${({ $theme }) => ($theme === 'light' ? '#ffffff' : '#111827')};
  border: 1px solid ${({ $theme }) => ($theme === 'light' ? 'rgba(99, 102, 241, 0.15)' : 'rgba(129, 140, 248, 0.2)')};
  border-radius: 20px;
  box-shadow: ${({ $theme }) => ($theme === 'light' ? '0 10px 40px rgba(0, 0, 0, 0.1)' : '0 10px 40px rgba(0, 0, 0, 0.5)')};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${slideUp} 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  transform-origin: bottom right;

  @media (max-width: 480px) {
    width: calc(100vw - 40px);
    height: 600px;
    bottom: 70px;
  }
`;

const Header = styled.div`
  padding: 18px 20px;
  background: linear-gradient(135deg, #6366f1, #818cf8);
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;

const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Avatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid white;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 1.05rem;
  letter-spacing: -0.01em;
`;

const Subtitle = styled.div`
  font-size: 0.75rem;
  opacity: 0.9;
  display: flex;
  align-items: center;
  gap: 4px;
  
  &::before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #10b981;
    box-shadow: 0 0 5px #10b981;
  }
`;

const CloseBtn = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;
  
  &:hover {
    background: rgba(255, 255, 255, 0.35);
  }
`;

const MessageList = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  scroll-behavior: smooth;
  background: ${({ $theme }) => ($theme === 'light' ? '#f8fafc' : '#0c0e1a')};
`;

const MessageBubble = styled.div`
  max-width: 85%;
  padding: 12px 16px;
  border-radius: 18px;
  font-size: 0.92rem;
  line-height: 1.5;
  white-space: pre-wrap;
  
  ${({ $isUser, $theme }) => $isUser ? css`
    align-self: flex-end;
    background: #6366f1;
    color: white;
    border-bottom-right-radius: 4px;
  ` : css`
    align-self: flex-start;
    background: ${$theme === 'light' ? '#ffffff' : '#1e293b'};
    color: ${$theme === 'light' ? '#1e293b' : '#f1f5f9'};
    border: 1px solid ${$theme === 'light' ? '#e2e8f0' : '#334155'};
    border-bottom-left-radius: 4px;
  `}
`;

const TypingIndicator = styled.div`
  align-self: flex-start;
  background: ${({ $theme }) => ($theme === 'light' ? '#ffffff' : '#1e293b')};
  border: 1px solid ${({ $theme }) => ($theme === 'light' ? '#e2e8f0' : '#334155')};
  padding: 12px 16px;
  border-radius: 18px;
  border-bottom-left-radius: 4px;
  display: flex;
  gap: 5px;
  
  span {
    width: 6px;
    height: 6px;
    background: #64748b;
    border-radius: 50%;
    animation: bounce 1.4s infinite ease-in-out both;
  }
  
  span:nth-child(1) { animation-delay: -0.32s; }
  span:nth-child(2) { animation-delay: -0.16s; }
  
  @keyframes bounce {
    0%, 80%, 100% { transform: scale(0); }
    40% { transform: scale(1); }
  }
`;

const InputArea = styled.form`
  padding: 16px;
  background: ${({ $theme }) => ($theme === 'light' ? '#ffffff' : '#111827')};
  border-top: 1px solid ${({ $theme }) => ($theme === 'light' ? '#e2e8f0' : '#1e293b')};
  display: flex;
  gap: 10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 12px 16px;
  border-radius: 24px;
  border: 1px solid ${({ $theme }) => ($theme === 'light' ? '#cbd5e1' : '#334155')};
  background: ${({ $theme }) => ($theme === 'light' ? '#f8fafc' : '#0c0e1a')};
  color: ${({ $theme }) => ($theme === 'light' ? '#0f172a' : '#f8fafc')};
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s;
  
  &:focus {
    border-color: #6366f1;
  }
  
  &::placeholder {
    color: ${({ $theme }) => ($theme === 'light' ? '#94a3b8' : '#64748b')};
  }
`;

const SendBtn = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #6366f1;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover:not(:disabled) {
    background: #4f46e5;
    transform: scale(1.05);
  }
  
  &:disabled {
    background: ${({ $theme }) => ($theme === 'light' ? '#cbd5e1' : '#334155')};
    cursor: not-allowed;
  }
`;

export default function ChatWidget({ theme = 'dark' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: "Hi! I'm the AI assistant for Ihtisham. You can ask me anything about his skills, experience, or projects. How can I help you today?"
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMsg = inputValue.trim();
    setInputValue('');
    
    // Add user message
    const newMessages = [...messages, { id: Date.now(), sender: 'user', text: userMsg }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      // For now, this points to a placeholder or the VITE_N8N_WEBHOOK_URL. 
      // If the URL isn't set, it will fallback to a simulated response after 1.5s
      const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL;
      
      if (webhookUrl) {
        const response = await axios.post(webhookUrl, {
          message: userMsg,
          sessionId: 'portfolio-visitor'
        });
        
        setMessages([...newMessages, { 
          id: Date.now(), 
          sender: 'ai', 
          text: response.data.response || response.data.output || response.data.message || "I received your message, but my brain didn't format the response properly!"
        }]);
      } else {
        // Fallback simulation if no webhook URL is configured
        setTimeout(() => {
          setMessages([...newMessages, { 
            id: Date.now(), 
            sender: 'ai', 
            text: "My backend n8n workflow isn't fully connected yet, but Ihtisham is a great .NET Full Stack Developer! Please reach out to him via the Contact page."
          }]);
          setIsLoading(false);
        }, 1500);
        return;
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages([...newMessages, { 
        id: Date.now(), 
        sender: 'ai', 
        text: "Oops, I'm having trouble connecting to my brain right now. Please try again later or contact Ihtisham directly!" 
      }]);
    }
    
    setIsLoading(false);
  };

  return (
    <WidgetContainer>
      {isOpen && (
        <ChatWindow $theme={theme}>
          <Header>
            <HeaderInfo>
              <Avatar>
                <img src="/profile.webp" alt="AI Avatar" />
              </Avatar>
              <div>
                <Title>Ask AI Ihtisham</Title>
                <Subtitle>Online & Ready</Subtitle>
              </div>
            </HeaderInfo>
            <CloseBtn onClick={() => setIsOpen(false)} aria-label="Close Chat">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </CloseBtn>
          </Header>
          
          <MessageList $theme={theme}>
            {messages.map((msg) => (
              <MessageBubble key={msg.id} $isUser={msg.sender === 'user'} $theme={theme}>
                {msg.text}
              </MessageBubble>
            ))}
            {isLoading && (
              <TypingIndicator $theme={theme}>
                <span></span><span></span><span></span>
              </TypingIndicator>
            )}
            <div ref={messagesEndRef} />
          </MessageList>
          
          <InputArea onSubmit={handleSubmit} $theme={theme}>
            <Input 
              type="text" 
              placeholder="Type your question..." 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              $theme={theme}
              disabled={isLoading}
            />
            <SendBtn type="submit" disabled={!inputValue.trim() || isLoading} $theme={theme}>
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </SendBtn>
          </InputArea>
        </ChatWindow>
      )}

      {!isOpen && (
        <FloatingButton onClick={() => setIsOpen(true)} aria-label="Open Chat Support">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </FloatingButton>
      )}
    </WidgetContainer>
  );
}
