'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function BlogGenerator() {
  const [file, setFile] = useState<File | null>(null)
  const [blogContent, setBlogContent] = useState('')
  const [translatedContent, setTranslatedContent] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const generateBlog = async () => {
    if (!file) {
      setError('Please upload a file first.')
      return
    }

    setIsLoading(true)
    setError('')

    const formData = new FormData()
    formData.append('file', file)

    try {
      const response = await fetch('/api/generate-blog', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to generate blog')
      }

      const data = await response.json()
      setBlogContent(data.blogContent)
    } catch (err) {
      if (err instanceof Error) {
        setError(`An error occurred while generating the blog: ${err.message}`)
      } else {
        setError('An unexpected error occurred while generating the blog.')
      }
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const translateBlog = async () => {
    if (!blogContent) {
      setError('Please generate a blog first.')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: blogContent }),
      })

      if (!response.ok) {
        throw new Error('Failed to translate blog')
      }

      const data = await response.json()
      setTranslatedContent(data.translatedText)
    } catch (err) {
      setError('An error occurred while translating the blog.')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <Input type="file" onChange={handleFileChange} accept=".txt,.srt" />
      </div>
      <div>
        <Button onClick={generateBlog} disabled={isLoading}>
          Generate Blog
        </Button>
      </div>
      {blogContent && (
        <div>
          <h2 className="text-2xl font-bold mb-2">Generated Blog</h2>
          <Textarea value={blogContent} readOnly rows={10} />
          <Button onClick={translateBlog} disabled={isLoading} className="mt-2">
            Translate to Hindi
          </Button>
        </div>
      )}
      {translatedContent && (
        <div>
          <h2 className="text-2xl font-bold mb-2">Translated Blog (Hindi)</h2>
          <Textarea value={translatedContent} readOnly rows={10} />
        </div>
      )}
      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  )
}