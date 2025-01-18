import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '');

// Types
interface Message {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

// In-memory message store (replace with a database in production)
const messageStore: Record<string, Message[]> = {};

// Helper function to validate request
function validateRequest(videoId?: string, message?: string, context?: string) {
  const errors: string[] = [];
  
  if (!videoId) errors.push('VideoId is required');
  if (!message) errors.push('Message is required');
  if (!context) errors.push('Context is required');
  
  return errors;
}

// Function to call Gemini API
async function getGeminiResponse(prompt: string, context: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    
    const chat = model.startChat({
      history: [
        {
          role: 'assistant',
          parts: [{ text: `I am a helpful assistant that discusses YouTube video content. Here's the context of the video we're discussing: ${context}` }],
        },
      ],
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.7,
      },
    });

    const result = await chat.sendMessage(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    throw new Error('Failed to get response from Gemini');
  }
}

// GET handler for fetching messages
export async function GET(request: NextRequest) {
  try {
    const videoId = request.nextUrl.searchParams.get('videoId');

    if (!videoId) {
      return NextResponse.json(
        { error: 'VideoId is required' },
        { status: 400 }
      );
    }

    // Return messages for the video, or empty array if none exist
    return NextResponse.json({
      messages: messageStore[videoId] || []
    });

  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.json(
      { error: 'Failed to fetch messages' },
      { status: 500 }
    );
  }
}

// POST handler for sending messages
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { videoId, message, context } = body;

    // Validate request
    const validationErrors = validateRequest(videoId, message, context);
    if (validationErrors.length > 0) {
      return NextResponse.json(
        { error: validationErrors.join(', ') },
        { status: 400 }
      );
    }

    // Initialize message array for video if it doesn't exist
    if (!messageStore[videoId]) {
      messageStore[videoId] = [];
    }

    // Create and store user message
    const userMessage: Message = {
      id: crypto.randomUUID(),
      content: message,
      sender: 'user',
      timestamp: new Date(),
    };
    messageStore[videoId].push(userMessage);

    // Get response from Gemini
    const geminiResponse = await getGeminiResponse(message, context);

    // Create and store assistant message
    const assistantMessage: Message = {
      id: crypto.randomUUID(),
      content: geminiResponse,
      sender: 'assistant',
      timestamp: new Date(),
    };
    messageStore[videoId].push(assistantMessage);

    // Return the assistant's message
    return NextResponse.json({ 
      success: true, 
      message: assistantMessage,
      messages: messageStore[videoId] 
    });

  } catch (error) {
    console.error('Error processing message:', error);
    return NextResponse.json(
      { error: 'Failed to process message' },
      { status: 500 }
    );
  }
}