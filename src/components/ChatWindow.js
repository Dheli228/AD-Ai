import React, { useState } from 'react';
import axios from 'axios';
import { IoSend } from "react-icons/io5";

const ChatWindow = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { type: 'ai', content: "Hello! I'm Ad-Aid. How can I assist you with college admissions today?" },
  ]);

  // Generate a session ID (or you could retrieve it from a more persistent store)
  const sessionId = 'unique-session-id'; // You can replace this with dynamic session generation if needed

  const sendMessage = async () => {
    if (message.trim()) {
      // Add user message to chat history
      const newMessage = { type: 'user', content: message };
      setChatHistory([...chatHistory, newMessage]);

      try {
        // Make the request to your intermediary backend
        const response = await axios.post('https://intense-mesa-69229-de0e5cd80519.herokuapp.com/api/dialogflow', {
          sessionId,
          message,
        });

        // Extract AI response from backend
        const aiResponse = response.data.fulfillmentText || 'Sorry, I did not understand that.';
        setChatHistory(ch => [...ch, { type: 'ai', content: aiResponse }]);
      } catch (error) {
        console.error('Error communicating with AI', error);
        setChatHistory(ch => [...ch, { type: 'ai', content: 'There was an error connecting to the server. Please try again later.' }]);
      }

      setMessage(''); // Clear the message input
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-2xl p-4 h-full flex flex-col">
      <div className="flex-1 overflow-y-auto mb-11 space-y-4">
        {chatHistory.map((msg, index) => (
          <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs lg:max-w-md xl:max-w-lg px-4 py-2 rounded-lg ${
              msg.type === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-auto">
        <div className="relative">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="w-full p-4 pr-12 rounded-full border-2 border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          />
          <IoSend
            onClick={sendMessage} size={42}
            className="absolute right-2 top-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-2 rounded-full hover:from-purple-600 hover:to-indigo-600 transition-all"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
