'use client'
import { useState, useRef, useEffect } from "react";
import { Mic, Send, Trash2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateMessageId = () => crypto.randomUUID();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    setError(null);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!input.trim()) return;
    
    setIsLoading(true);
    setError(null);

    const newUserMessage: Message = {
      id: generateMessageId(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInput("");

    try {
      const response = await axios.post<{ output: string }>(
        "https://backend-levelsupermind.vercel.app/trigger-flow",
        { inputValue: input.trim() },
        { timeout: 50000 }
      );

      const assistantMessage: Message = {
        id: generateMessageId(),
        role: "assistant",
        content: response.data.output,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage = error instanceof Error 
        ? error.message 
        : "An unexpected error occurred";
      
      setError(errorMessage);
      console.error("Error sending message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    if (messages.length === 0) return;
    if (window.confirm("Are you sure you want to clear the chat history?")) {
      setMessages([]);
      setError(null);
    }
  };

  return (
    <div className="flex flex-col h-[100vh]">
      <div className="flex-none">
        <Card className="rounded-none border-x-0 border-t-0">
          <CardHeader className="py-2">
            <CardTitle className="flex items-center justify-between text-lg">
              AI Assistant
              {messages.length > 0 && (
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={clearChat}
                  className="text-gray-500"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Clear Chat
                </Button>
              )}
            </CardTitle>
          </CardHeader>
        </Card>
      </div>

      <div 
        ref={chatContainerRef}
        className="flex-grow overflow-y-auto flex flex-col-reverse"
      >
        <div className="flex flex-col justify-start">
          <div ref={messagesEndRef} />
          {messages.map((message) => (
            <div
              key={message.id}
              className={`px-4 py-2 ${
                message.role === "user" ? "text-right" : "text-left"
              }`}
            >
              <div
                className={`inline-block p-3 rounded-lg max-w-[80%] ${
                  message.role === "user"
                    ? "bg-blue-500 text-white rounded-tr-none"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-tl-none"
                }`}
              >
                {message.role === "assistant" ? (
                  <ReactMarkdown className="prose dark:prose-invert max-w-none">
                    {message.content}
                  </ReactMarkdown>
                ) : (
                  <div className="whitespace-pre-wrap">{message.content}</div>
                )}
                <div className="text-xs opacity-50 mt-1">
                  {message.timestamp.toLocaleTimeString()}
                </div>
              </div>
            </div>
          ))}
          
          {error && (
            <div className="m-4 text-red-500 text-center p-2 rounded bg-red-100 dark:bg-red-900/20">
              {error}
            </div>
          )}
        </div>
      </div>

      <div className="flex-none">
        <Card className="rounded-none border-x-0 border-b-0">
          <CardFooter className="p-4">
            <form onSubmit={handleSubmit} className="flex w-full space-x-2">
              <Input
                value={input}
                onChange={handleInputChange}
                placeholder="Type your message here..."
                disabled={isLoading}
                className="flex-grow"
                maxLength={1000}
              />
              <Button 
                type="submit" 
                size="icon"
                disabled={isLoading || !input.trim()}
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </form>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}