'use client';

import { useState } from 'react';
import { FiSend, FiLoader } from 'react-icons/fi';
import ReactMarkdown from 'react-markdown';

interface Message {
  role: 'user' | 'model';  // Changed 'assistant' to 'model'
  content: string;
}

interface ArticleDiscussionProps {
  summary: string | null;
}

export default function ArticleDiscussion({ summary }: ArticleDiscussionProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !summary) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/discuss', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: input,
          summary,
          history: messages,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }

      setMessages(prev => [...prev, { 
        role: 'model',  // Changed from 'assistant' to 'model'
        content: data.response 
      }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        role: 'model',  // Changed from 'assistant' to 'model'
        content: 'Sorry, I encountered an error. Please try again.' 
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">Discuss with AI</h2>
      
      {/* Messages */}
      <div className="h-96 overflow-y-auto space-y-4 mb-4 p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg ${
              message.role === 'user'
                ? 'bg-blue-100 ml-8'
                : 'bg-gray-100 mr-8'
            }`}
          >
            <ReactMarkdown className="prose max-w-none">
              {message.content}
            </ReactMarkdown>
          </div>
        ))}
        {loading && (
          <div className="flex justify-center">
            <FiLoader className="animate-spin h-6 w-6 text-blue-500" />
          </div>
        )}
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about the summary..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={!summary || loading}
        />
        <button
          type="submit"
          aria-label="Send message"
          disabled={!summary || loading || !input.trim()}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FiSend className="h-5 w-5" />
        </button>
      </form>
    </div>
  );
}