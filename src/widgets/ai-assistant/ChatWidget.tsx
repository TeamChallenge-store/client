import { useState, useRef, useEffect } from 'react';
import css from './ChatWidget.module.scss';
import { useSendMessageMutation } from '~entities/assistant/api/assistApi';
import { Link } from 'react-router-dom';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<
    { text: string; isUser: boolean; timestamp: string; links?: { name: string; url: string }[] }[]
  >([]);
  const [sendMessage, { isLoading }] = useSendMessageMutation();
  const chatWindowRef = useRef<HTMLDivElement>(null);
  const resizeHandleRef = useRef<HTMLDivElement>(null);

  const isAuthenticated = !!sessionStorage.getItem('accessToken');

  const toggleChat = () => setIsOpen(!isOpen);

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  };

  const buildProductUrl = (productId: string) => {
    return `http://localhost:5173/product/${productId}`;
  };

  const handleSendMessage = async () => {
    if (message.trim() === '' || !isAuthenticated) return;

    const userMessage = {
      text: message,
      isUser: true,
      timestamp: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const res = await sendMessage({ description: message }).unwrap();
      console.log('Response:', res);

      const serverLinks =
        res.links && Object.keys(res.links).length > 0
          ? Object.entries(res.links).map(([id, name]) => ({
            name,
            url: buildProductUrl(id),
          }))
          : [];

      const serverMessage = {
        text: serverLinks.length > 0 ? '' : 'No links available',
        isUser: false,
        timestamp: new Date().toISOString(),
        links: serverLinks,
      };

      setMessages((prev) => [...prev, serverMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setMessage('');
    }
  };

  // Resize logic
  useEffect(() => {
    const chatWindow = chatWindowRef.current;
    const resizeHandle = resizeHandleRef.current;

    if (!chatWindow || !resizeHandle) return;

    let isResizing = false;
    let startX: number, startY: number, startWidth: number, startHeight: number;

    const onMouseDown = (e: MouseEvent) => {
      isResizing = true;
      startX = e.clientX;
      startY = e.clientY;
      startWidth = chatWindow.offsetWidth;
      startHeight = chatWindow.offsetHeight;
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isResizing) return;

      const newWidth = Math.min(Math.max(startWidth - (e.clientX - startX), 300), 600);
      const newHeight = Math.min(Math.max(startHeight - (e.clientY - startY), 350), 650);

      chatWindow.style.width = `${newWidth}px`;
      chatWindow.style.height = `${newHeight}px`;
    };

    const onMouseUp = () => {
      isResizing = false;
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    resizeHandle.addEventListener('mousedown', onMouseDown);

    return () => {
      resizeHandle.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <div className={css.chatWidget}>
      <button className={css.chatButton} onClick={toggleChat}>
        {isOpen ? 'Close AI Assistant' : 'Chat with AI Assistant'}
      </button>
      {isOpen && (
        <div className={css.chatWindow} ref={chatWindowRef}>
          <div className={css.resizeHandle} ref={resizeHandleRef}></div>
          <h4 className={css.chatHeader}>AI Assistant</h4>
          <div className={css.chatContent}>
            {isAuthenticated ? (
              <>
                {messages.length === 0 && <p className={css.welcomeMessage}>Hi! How can I assist you today?</p>}
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`${css.message} ${msg.isUser ? css.userMessage : css.serverMessage}`}
                  >
                    <div className={css.messageContent}>
                      {msg.text}
                      {msg.links && msg.links.length > 0 && (
                        <ul className={css.linkList}>
                          {msg.links.map((link, linkIndex) => (
                            <li key={linkIndex} className={css.productItem}>
                              <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={css.productLink}
                              >
                                {link.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className={css.messageTimestamp}>{formatTimestamp(msg.timestamp)}</div>
                  </div>
                ))}
              </>
            ) : (
              <div className={css.unauthenticatedMessage}>
                <p>
                  This chat is available only to authenticated users. Please{' '}
                  <Link to="/sign_up" className={css.signUpLink}>
                    sign up
                  </Link>{' '}
                  to use the AI Assistant.
                </p>
              </div>
            )}
          </div>
          {isAuthenticated && (
            <div className={css.chatInputWrapper}>
              <textarea
                placeholder="Type your query..."
                className={css.chatInput}
                value={message}
                onChange={handleMessageChange}
                disabled={!isAuthenticated}
              />
              <button
                className={css.sentMessage}
                onClick={handleSendMessage}
                disabled={isLoading || !isAuthenticated}
              >
                {isLoading ? 'Sending...' : 'Send'}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatWidget;