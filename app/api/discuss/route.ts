import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);

export async function POST(req: Request) {
  try {
    const { message, summary, history } = await req.json();

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });

    // Format the chat history correctly - change 'assistant' role to 'model'
    const formattedHistory = history.map((msg: any) => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }],
    }));

    // Start the chat with context
    const chat = model.startChat({
      history: formattedHistory,
      generationConfig: {
        maxOutputTokens: 2048,
      },
    });

    // Send the message
    const result = await chat.sendMessage([
      {
        text: `Context: The following is a summary of a video: ${summary}\n\nUser Question: ${message}`
      }
    ]);
    const response = await result.response;
    
    return NextResponse.json({ response: response.text() });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}