import { useState } from 'react';
import css from './ChatWidget.module.scss';
import { useSendMessageMutation } from '~entities/assistant/api/assistApi';
import { IChatResponse } from '~entities/assistant/model/types';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState<IChatResponse | null>(null); 
  const [sendMessage, { isLoading }] = useSendMessageMutation();

  const toggleChat = () => setIsOpen(!isOpen);

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = async () => {
    if (message.trim() === '') return;
  
    try {
      const res = await sendMessage({ description: message }).unwrap(); 
      console.log('Response:', res);
      setResponse(res); 
    } catch (error) {
      setResponse(null); 
      console.error('Error sending message:', error);
    } finally {
      setMessage('');
    }
  };

  return (
    <div className={css.chatWidget}>
      <button className={css.chatButton} onClick={toggleChat}>
        {isOpen ? 'Close AI Assistant' : 'Chat with AI Assistant'}
      </button>
      {isOpen && (
        <div className={css.chatWindow}>
          <h4 className={css.chatHeader}>AI Assistant</h4>
          <div className={css.chatContent}>
            <p>Hi! How can I assist you today?</p>
            {response ? (
              <div>
                <div>
                  <strong>Links:</strong>
                  {response.links && response.links.length > 0 ? (
                    <ul>
                      {response.links.map((link: string, index: number) => (
                        <li key={index}>
                          <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No links available</p>
                  )}
                </div>
                <div>
                  {response.timestamp}
                </div>
              </div>
            ) : (
              undefined
            )}
          </div>
          <div className={css.chatInputWrapper}>
            <textarea
              placeholder="Type your query..."
              className={css.chatInput}
              value={message}
              onChange={handleMessageChange}  
            />
            <button className={css.sentMessage} onClick={handleSendMessage} disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
