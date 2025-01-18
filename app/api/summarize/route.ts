// app/api/summarize/route.ts

import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';
import { YoutubeTranscript } from 'youtube-transcript';
import { GENERAL_SYSTEM_PROMPT } from '@/lib/prompts/general';
import { PROGRAMMING_TUTORIAL_SYSTEM_PROMPT } from '@/lib/prompts/programming';
import { PODCAST_SYSTEM_PROMPT } from '@/lib/prompts/podcast';

const getPromptForType = (type: string) => {
  switch (type) {
    case 'programming':
      return PROGRAMMING_TUTORIAL_SYSTEM_PROMPT;
    case 'podcast':
      return PODCAST_SYSTEM_PROMPT;
    default:
      return GENERAL_SYSTEM_PROMPT;
  }
};

export async function POST(request: Request) {
  try {
    const { youtubeUrl, summaryType } = await request.json();
    const videoId = youtubeUrl.split('=')[1];

    // Get transcript using youtube-transcript
    const transcript_text = await YoutubeTranscript.fetchTranscript(videoId);
    const transcript = transcript_text.map(item => item.text).join(' ');

    // Get appropriate prompt based on type
    const systemPrompt = getPromptForType(summaryType);

    // Initialize Gemini
    const genai = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);
    const model = genai.getGenerativeModel({ model: 'gemini-1.5-pro-latest' });

    // Generate summary
    const result = await model.generateContent(systemPrompt + transcript);
    const summary = result.response.text();

    return NextResponse.json({ summary });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to generate summary' },
      { status: 500 }
    );
  }
}