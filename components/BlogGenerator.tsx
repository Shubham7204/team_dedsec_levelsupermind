'use client'
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ReactMarkdown from 'react-markdown';
import { Loader2 } from 'lucide-react';

const languages = [
  { code: 'hi', name: 'Hindi' },
  { code: 'mr', name: 'Marathi' },
  { code: 'gu', name: 'Gujarati' },
  { code: 'ta', name: 'Tamil' },
  { code: 'kn', name: 'Kannada' },
  { code: 'te', name: 'Telugu' },
  { code: 'bn', name: 'Bengali' },
  { code: 'ml', name: 'Malayalam' },
  { code: 'pa', name: 'Punjabi' },
  { code: 'or', name: 'Odia' }
];

export default function BlogGenerator() {
  const [file, setFile] = useState<File | null>(null);
  const [blogContent, setBlogContent] = useState('');
  const [translatedContent, setTranslatedContent] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('hi');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('edit');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const generateBlog = async () => {
    if (!file) {
      setError('Please upload a file first.');
      return;
    }

    setIsLoading(true);
    setError('');

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/generate-blog', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to generate blog');
      }

      const data = await response.json();
      setBlogContent(data.blogContent);
      setActiveTab('edit');
    } catch (err) {
      setError('An error occurred while generating the blog.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const translateBlog = async () => {
    if (!blogContent) {
      setError('Please generate a blog first.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: blogContent,
          targetLanguage: selectedLanguage
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to translate blog');
      }

      const data = await response.json();
      setTranslatedContent(data.translatedText);
    } catch (err) {
      setError('An error occurred while translating the blog.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Upload Content</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            type="file"
            onChange={handleFileChange}
            accept=".txt,.srt"
            className="w-full"
          />
          <Button
            onClick={generateBlog}
            disabled={isLoading}
            className="w-full"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              'Generate Blog'
            )}
          </Button>
        </CardContent>
      </Card>

      {blogContent && (
        <Card>
          <CardHeader>
            <CardTitle>Generated Content</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="edit">Edit</TabsTrigger>
                <TabsTrigger value="preview">Preview</TabsTrigger>
              </TabsList>
              <TabsContent value="edit">
                <Textarea
                  value={blogContent}
                  onChange={(e) => setBlogContent(e.target.value)}
                  rows={10}
                  className="min-h-[200px]"
                />
              </TabsContent>
              <TabsContent value="preview">
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  <ReactMarkdown>{blogContent}</ReactMarkdown>
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex gap-4 items-center">
              <Select
                value={selectedLanguage}
                onValueChange={setSelectedLanguage}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Language" />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((lang) => (
                    <SelectItem key={lang.code} value={lang.code}>
                      {lang.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button
                onClick={translateBlog}
                disabled={isLoading}
                className="flex-1"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Translating...
                  </>
                ) : (
                  'Translate'
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {translatedContent && (
        <Card>
          <CardHeader>
            <CardTitle>Translated Content</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm dark:prose-invert max-w-none">
              <ReactMarkdown>{translatedContent}</ReactMarkdown>
            </div>
          </CardContent>
        </Card>
      )}

      {error && (
        <div className="p-4 bg-red-50 text-red-600 rounded-lg">
          {error}
        </div>
      )}
    </div>
  );
}