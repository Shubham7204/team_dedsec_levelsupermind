'use client';

import { useState } from 'react';
import { FiYoutube, FiLoader, FiAlertCircle, FiChevronDown } from 'react-icons/fi';
import { Video } from '@/components/Video';
import { Summary } from '@/components/Summary';

type SummaryType = 'general' | 'programming' | 'podcast';

interface Summary {
  content: string;
}

export default function SummarizePage() {
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [summaryType, setSummaryType] = useState<SummaryType>('general');
  const [summary, setSummary] = useState<Summary | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [videoId, setVideoId] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const id = youtubeUrl.split('v=')[1]?.split('&')[0];
      if (!id) {
        throw new Error('Invalid YouTube URL');
      }
      setVideoId(id);

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
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Video Summarizer
          </h1>
          <p className="text-xl text-gray-600">
            Transform any YouTube video into comprehensive notes
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-xl p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiYoutube className="h-5 w-5 text-blue-500" />
                  </div>
                  <input
                    type="text"
                    value={youtubeUrl}
                    onChange={(e) => setYoutubeUrl(e.target.value)}
                    placeholder="Paste YouTube video URL here..."
                    className="block w-full pl-10 pr-3 py-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="relative">
                  <label htmlFor="summaryType" className="sr-only">
                    Select summary type
                  </label>
                  <select
                    id="summaryType"
                    value={summaryType}
                    onChange={(e) => setSummaryType(e.target.value as SummaryType)}
                    className="block w-full py-4 pl-4 pr-10 text-base border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                  >
                    <option value="general">General Summary</option>
                    <option value="programming">Programming Tutorial</option>
                    <option value="podcast">Podcast Summary</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                    <FiChevronDown className="h-5 w-5 text-gray-400" />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading || !youtubeUrl}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
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

            {error && (
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg shadow-md">
                <div className="flex items-center">
                  <FiAlertCircle className="h-5 w-5 text-red-400" />
                  <p className="ml-3 text-red-700">{error}</p>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-8">
            {videoId && <Video videoId={videoId} />}
            {summary && <Summary content={summary.content} />}
          </div>
        </div>
      </div>
    </div>
  );
} 