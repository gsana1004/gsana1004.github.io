// Chatbot.js
import React, { useState } from 'react';
import axios from 'axios';


const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = async () => {
    if (input.trim() === '') return;

    const newMessages = [...messages, { text: input, type: 'user' }];
    setMessages(newMessages);
    setInput('');

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        {
          prompt: input,
          max_tokens: 50 // Adjust as needed
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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'
          }
        }
      );

      const botMessage = response.data.choices[0].text.trim();
      const updatedMessages = [...newMessages, { text: botMessage, type: 'bot' }];
      setMessages(updatedMessages);
    } catch (error) {
      console.error('Error fetching response:', error);
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        Chatbot
      </div>
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.type === 'user' ? 'user' : 'bot'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSubmit}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
