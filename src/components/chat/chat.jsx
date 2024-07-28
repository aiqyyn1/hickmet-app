'use client';
import { useState } from 'react';

export default function Сhat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow rounded-lg max-w-md w-full">
        <div className="p-4">
          <div className="overflow-y-auto h-80">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs p-2 ${
                    message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'
                  } rounded-lg`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(event) => (event.key === 'Enter' ? sendMessage() : null)}
              placeholder="Type your message here..."
              className="w-full p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
