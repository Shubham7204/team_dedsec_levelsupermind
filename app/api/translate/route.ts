
import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { text, targetLanguage } = await request.json();

    const genai = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);
    const model = genai.getGenerativeModel({ model: 'gemini-1.5-pro-latest' });

    const prompt = `Translate the following text to ${targetLanguage}. Maintain the formatting and structure of the original text:\n\n${text}`;

    const result = await model.generateContent(prompt);
    const translatedText = result.response.text();

    return NextResponse.json({ translatedText });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Translation failed' },
      { status: 500 }
    );
  }
}