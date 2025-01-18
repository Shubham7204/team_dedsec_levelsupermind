'use client';

import { useState, useEffect } from 'react';
import { FiYoutube, FiLoader, FiAlertCircle, FiChevronDown, FiCheckCircle } from 'react-icons/fi';
import ReactMarkdown from 'react-markdown';

// Types and Interfaces
type SummaryType = 'general' | 'programming' | 'podcast';
type Language = 'English' | 'Hindi' | 'Marathi' | 'Gujarati' | 'Tamil' | 'Kannada' | 'Telugu' | 'Bengali' | 'Malayalam' | 'Punjabi' | 'Odia';

interface Summary {
  content: string;
  videoId: string;
}

export default function VideoSummarizer() {
  // Video Summary States
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [summaryType, setSummaryType] = useState<SummaryType>('general');
  const [summary, setSummary] = useState<Summary | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('English');
  const [translating, setTranslating] = useState(false);
  const [publishSuccess, setPublishSuccess] = useState(false);

  // Available Languages
  const languages: Language[] = [
    'English', 'Hindi', 'Marathi', 'Gujarati', 'Tamil', 'Kannada', 
    'Telugu', 'Bengali', 'Malayalam', 'Punjabi', 'Odia'
  ];

  // Handle YouTube URL submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    setPublishSuccess(false);

    try {
      const videoId = youtubeUrl.split('v=')[1]?.split('&')[0];
      if (!videoId) {
        throw new Error('Invalid YouTube URL');
      }

      const response = await fetch('/api/summarize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ youtubeUrl, summaryType }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate summary');
      }

      const data = await response.json();
      setSummary({
        content: data.summary,
        videoId,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  // Handle translation
  const handleTranslate = async () => {
    if (!summary) return;
    setTranslating(true);
    setError('');

    try {
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: summary.content,
          targetLanguage: selectedLanguage,
        }),
      });

      if (!response.ok) {
        throw new Error('Translation failed');
      }

      const data = await response.json();
      setSummary({
        ...summary,
        content: data.translatedText,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Translation failed');
    } finally {
      setTranslating(false);
    }
  };

  // Handle publishing
  const handlePublish = async () => {
    if (!summary) return;
    setError('');
    setPublishSuccess(false);

    try {
      const response = await fetch('/api/publish', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: summary.content,
          language: selectedLanguage,
          videoId: summary.videoId,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to publish');
      }

      setPublishSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to publish');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto p-4 space-y-8">
        {/* Header */}
        <div className="text-center py-8">
          <h1 className="text-5xl font-bold text-gray-900 bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Video Summarizer
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Generate summaries from YouTube videos and translate them into multiple languages.
          </p>
        </div>

        {/* Input Form */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* YouTube URL Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiYoutube className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={youtubeUrl}
                onChange={(e) => setYoutubeUrl(e.target.value)}
                placeholder="Paste YouTube video URL here..."
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Summary Type Selection */}
            <div className="relative">
              <select
                value={summaryType}
                onChange={(e) => setSummaryType(e.target.value as SummaryType)}
                className="block w-full py-3 pl-3 pr-10 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
              >
                <option value="general">General Summary</option>
                <option value="programming">Programming Tutorial</option>
                <option value="podcast">Podcast Summary</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <FiChevronDown className="h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || !youtubeUrl}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <FiLoader className="animate-spin -ml-1 mr-3 h-5 w-5" />
                  Generating Summary...
                </span>
              ) : (
                'Generate Summary'
              )}
            </button>
          </form>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg">
            <div className="flex items-center">
              <FiAlertCircle className="h-5 w-5 text-red-400" />
              <p className="ml-3 text-red-700">{error}</p>
            </div>
          </div>
        )}

        {/* Success Message */}
        {publishSuccess && (
          <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg">
            <div className="flex items-center">
              <FiCheckCircle className="h-5 w-5 text-green-400" />
              <p className="ml-3 text-green-700">Successfully published the summary!</p>
            </div>
          </div>
        )}

        {/* Video Player */}
        {summary?.videoId && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${summary.videoId}`}
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}

        {/* Translation Controls */}
        {summary && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value as Language)}
                className="w-full sm:w-auto py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang}>{lang}</option>
                ))}
              </select>
              <button
                onClick={handleTranslate}
                disabled={translating}
                className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-teal-600 text-white py-2 px-4 rounded-lg hover:from-green-700 hover:to-teal-700 disabled:opacity-50 transition-all"
              >
                {translating ? 'Translating...' : 'Translate'}
              </button>
              <button
                onClick={handlePublish}
                className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all"
              >
                Publish
              </button>
            </div>
          </div>
        )}

        {/* Summary Result */}
        {summary && (
          <div className="bg-white rounded-xl shadow-lg">
            <div className="p-6">
              <div className="prose max-w-none">
                <ReactMarkdown>{summary.content}</ReactMarkdown>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}