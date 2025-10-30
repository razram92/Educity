import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, X, MessageSquare } from 'lucide-react';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hello! I\'m your AI Study Assistant. I can help you with information about courses, programs, admissions, and career guidance. How can I assist you today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateAIResponse = async (userMessage) => {
  try {
    const response = await fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userMessage }),
    });

    const data = await response.json();
    return data.reply;
  } catch (err) {
    console.error(err);
    return "Sorry, I couldn't process your request. Please try again.";
  }
};


  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = {
      role: 'user',
      content: input
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const aiResponse = await generateAIResponse(input);
      
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: aiResponse
      }]);
    } catch (error) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'I apologize, but I encountered an error. Please try again.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const styles = {
    container: {
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      zIndex: 1000
    },
    chatButton: {
      background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '9999px',
      padding: '16px',
      boxShadow: '0 10px 25px rgba(37, 99, 235, 0.3)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontWeight: '500',
      fontSize: '16px',
      transition: 'all 0.3s ease'
    },
    chatWindow: {
      background: 'white',
      borderRadius: '16px',
      width: '384px',
      height: '600px',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
      border: '1px solid #e5e7eb',
      overflow: 'hidden'
    },
    header: {
      background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
      color: 'white',
      padding: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    headerContent: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    iconWrapper: {
      background: 'rgba(255, 255, 255, 0.2)',
      padding: '8px',
      borderRadius: '9999px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
      fontWeight: 'bold',
      fontSize: '18px',
      margin: 0
    },
    subtitle: {
      fontSize: '12px',
      color: '#bfdbfe',
      margin: 0
    },
    closeButton: {
      background: 'transparent',
      border: 'none',
      color: 'white',
      cursor: 'pointer',
      padding: '8px',
      borderRadius: '9999px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    messagesContainer: {
      flex: 1,
      overflowY: 'auto',
      padding: '16px',
      background: '#f9fafb',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    },
    messageWrapper: (isUser) => ({
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
      flexDirection: isUser ? 'row-reverse' : 'row'
    }),
    messageIcon: (isUser) => ({
      padding: '8px',
      borderRadius: '9999px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      background: isUser ? '#2563eb' : 'white',
      color: isUser ? 'white' : '#2563eb'
    }),
    messageBubble: (isUser) => ({
      maxWidth: '75%',
      padding: '12px',
      borderRadius: '16px',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
      background: isUser ? '#2563eb' : 'white',
      color: isUser ? 'white' : '#1f2937',
      borderTopRightRadius: isUser ? '4px' : '16px',
      borderTopLeftRadius: isUser ? '16px' : '4px'
    }),
    messageText: {
      fontSize: '14px',
      lineHeight: '1.6',
      margin: 0
    },
    typingIndicator: {
      display: 'flex',
      gap: '4px'
    },
    typingDot: (delay) => ({
      width: '8px',
      height: '8px',
      background: '#9ca3af',
      borderRadius: '50%',
      animation: `typing-bounce 1.4s infinite ease-in-out ${delay}s`
    }),
    inputContainer: {
      padding: '16px',
      borderTop: '1px solid #e5e7eb',
      background: 'white'
    },
    inputWrapper: {
      display: 'flex',
      gap: '8px'
    },
    input: {
      flex: 1,
      padding: '10px 16px',
      border: '1px solid #d1d5db',
      borderRadius: '9999px',
      fontSize: '14px',
      outline: 'none'
    },
    sendButton: (disabled) => ({
      background: disabled ? '#d1d5db' : '#2563eb',
      color: 'white',
      border: 'none',
      borderRadius: '9999px',
      padding: '8px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }),
    footerText: {
      fontSize: '12px',
      color: '#6b7280',
      textAlign: 'center',
      marginTop: '8px',
      marginBottom: 0
    }
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes typing-bounce {
            0%, 60%, 100% { transform: translateY(0); }
            30% { transform: translateY(-10px); }
          }
        `}
      </style>

      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={styles.chatButton}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.background = 'linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.background = 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)';
          }}
        >
          <MessageSquare size={24} />
          <span>Ask AI</span>
        </button>
      )}

      {isOpen && (
        <div style={styles.chatWindow}>
          <div style={styles.header}>
            <div style={styles.headerContent}>
              <div style={styles.iconWrapper}>
                <Bot size={24} />
              </div>
              <div>
                <h3 style={styles.title}>AI Study Assistant</h3>
                <p style={styles.subtitle}>Always here to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={styles.closeButton}
              onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
              onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
            >
              <X size={20} />
            </button>
          </div>

          <div style={styles.messagesContainer}>
            {messages.map((message, index) => (
              <div key={index} style={styles.messageWrapper(message.role === 'user')}>
                <div style={styles.messageIcon(message.role === 'user')}>
                  {message.role === 'user' ? <User size={20} /> : <Bot size={20} />}
                </div>
                <div style={styles.messageBubble(message.role === 'user')}>
                  <p style={styles.messageText}>{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div style={styles.messageWrapper(false)}>
                <div style={styles.messageIcon(false)}>
                  <Bot size={20} />
                </div>
                <div style={styles.messageBubble(false)}>
                  <div style={styles.typingIndicator}>
                    <div style={styles.typingDot(0)}></div>
                    <div style={styles.typingDot(0.2)}></div>
                    <div style={styles.typingDot(0.4)}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div style={styles.inputContainer}>
            <div style={styles.inputWrapper}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                style={styles.input}
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                style={styles.sendButton(!input.trim() || isLoading)}
                onMouseOver={(e) => {
                  if (!(!input.trim() || isLoading)) {
                    e.currentTarget.style.background = '#1d4ed8';
                  }
                }}
                onMouseOut={(e) => {
                  if (!(!input.trim() || isLoading)) {
                    e.currentTarget.style.background = '#2563eb';
                  }
                }}
              >
                <Send size={20} />
              </button>
            </div>
            <p style={styles.footerText}>
              Powered by AI • Educity
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatbot;