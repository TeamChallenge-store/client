import { useState } from 'react';
import css from './ChatWidget.module.scss';
import { useSendMessageMutation } from '~entities/assistant/api/assistApi';
import { IChatResponse } from '~entities/assistant/model/types';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState<IChatResponse | string>('');
  const [sendMessage, { isLoading }] = useSendMessageMutation();

  const toggleChat = () => setIsOpen(!isOpen);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = async () => {
    if (message.trim() === '') return;

    try {
      const payload = { description: message };
      const res = await sendMessage(payload).unwrap();
      console.log('Response:', res);
      setResponse(res);
    } catch (error) {
      setResponse('Sorry, something went wrong!');
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
            {response && <p className={css.response}>{response}</p>}
          </div>
          <textarea 
            placeholder="Type your query..." 
            className={css.chatInput} 
            value={message} 
            onChange={handleMessageChange} 
          />
          <button onClick={handleSendMessage} disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
