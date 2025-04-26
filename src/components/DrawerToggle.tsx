"use client";
import ReactMarkdown from "react-markdown";
import { useState, useRef, useEffect, Suspense } from "react";
import { useRouter } from "next/navigation";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Bot, Send, User } from "lucide-react";
import { cn } from "@/lib/utils";

// Function to generate UUID
function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// Define the message type
interface Message {
  role: "user" | "assistant";
  content: string;
}

// Message Item Component
function MessageItem({ message }: { message: Message }) {
  const isUser = message.role === "user";

  return (
    <div
      className={cn(
        "flex gap-2 mb-4",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "flex items-start gap-2 max-w-[80%]",
          isUser ? "flex-row-reverse" : "flex-row"
        )}
      >
        <div
          className={cn(
            "flex-shrink-0 flex items-center justify-center rounded-full w-8 h-8",
            isUser ? "bg-blue-500" : "bg-gray-500"
          )}
        >
          {isUser ? (
            <User className="size-4 text-white" />
          ) : (
            <Bot className="size-4 text-white" />
          )}
        </div>
        <div
          className={cn(
            "rounded-xl px-3 py-2",
            isUser
              ? "bg-blue-500 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
          )}
        >
          {isUser ? (
            message.content
          ) : (
            <ReactMarkdown
              className="prose prose-sm dark:prose-invert max-w-none"
              components={{
                ul: ({ node, ...props }) => (
                  <ul className="list-disc pl-4 space-y-1" {...props} />
                ),
                ol: ({ node, ...props }) => (
                  <ol className="list-decimal pl-4 space-y-1" {...props} />
                ),
                li: ({ node, ...props }) => <li className="pl-1" {...props} />,
                strong: ({ node, ...props }) => (
                  <strong className="font-bold" {...props} />
                ),
                p: ({ node, ...props }) => (
                  <p className="mb-2 last:mb-0" {...props} />
                ),
              }}
            >
              {message.content}
            </ReactMarkdown>
          )}
        </div>
      </div>
    </div>
  );
}

// Create a fallback for Suspense
function ChatFallback() {
  return (
    <div className="flex-1 overflow-y-auto py-4 px-1 max-h-96 flex items-center justify-center">
      <div className="text-gray-500">Loading chat...</div>
    </div>
  );
}

interface DrawerToggleProps {
  className?: string;
  style?: React.CSSProperties;
  buttonClassName?: string;
  buttonStyle?: React.CSSProperties;
}

// Create a client component for the URL checker
function UrlParamChecker({ onOpen }: { onOpen: () => void }) {
  useEffect(() => {
    // Client-side only code
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const shouldOpen = urlParams.get('openChat') === 'true';
      
      if (shouldOpen) {
        onOpen();
        
        // Remove parameter
        urlParams.delete('openChat');
        const newUrl = window.location.pathname + 
          (urlParams.toString() ? '?' + urlParams.toString() : '') + 
          window.location.hash;
        
        window.history.replaceState({}, '', newUrl);
      }
    }
  }, [onOpen]);
  
  return null;
}

export function DrawerToggle({
  className,
  style,
  buttonClassName,
  buttonStyle,
}: DrawerToggleProps) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: "assistant", 
      content: "Hi there! I'm Rubi, an AI assistant who can answer questions about Aman's professional background, skills, and experience. Feel free to ask me anything about his resume or career journey!" 
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [sessionId] = useState(generateUUID());
  
  const router = useRouter();

  // Auto-scroll to bottom when messages change
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessageToAPI = async (userInput: string) => {
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://n8n.devaman.in/webhook/f2f18361-e02c-4b92-9844-a3be5cb85e1d/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            action: "sendMessage",
            sessionId: sessionId,
            chatInput: userInput,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      return { response: data.output || "No response received." };
    } catch (error) {
      console.error("Error calling chat API:", error);
      return {
        response:
          "Sorry, I'm having trouble connecting to the service. Please try again later.",
      };
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() === "" || isLoading) return;

    // Add user message
    const userMessage = inputValue.trim();
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setInputValue(""); // Clear input field immediately

    // Get response from API
    const apiResponse = await sendMessageToAPI(userMessage);

    // Add assistant response
    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content:
          apiResponse.response || "Sorry, I couldn't process your request.",
      },
    ]);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      {/* Client-side URL param checker component */}
      <UrlParamChecker onOpen={handleOpen} />
      
      <Button
        variant="ghost"
        type="button"
        size="icon"
        className={buttonClassName}
        style={buttonStyle}
        onClick={handleOpen}
      >
        <Bot className="size-5" />
      </Button>

      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent
          className={cn("w-full rounded-t-xl p-6", className)}
          style={style}
        >
          <DrawerHeader>
            <DrawerTitle className="text-center">Rubi AI Assistant</DrawerTitle>
          </DrawerHeader>

          <div className="flex-1 overflow-y-auto py-4 px-1 max-h-96">
            {messages.map((message, index) => (
              <MessageItem key={index} message={message} />
            ))}
            {isLoading && (
              <div className="flex justify-start mb-4">
                <div className="bg-gray-200 dark:bg-gray-700 rounded-xl px-4 py-2 flex items-center">
                  <div className="w-12 text-gray-500 dark:text-gray-400">
                    <div className="flex space-x-1">
                      <div
                        className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <DrawerFooter>
            <div className="flex flex-row items-center gap-2 w-full border border-gray-300 dark:border-gray-700 rounded-xl p-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message here..."
                className="flex-grow basis-9/10 p-2 rounded-md focus:outline-none bg-transparent text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                disabled={isLoading}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !isLoading) {
                    handleSendMessage();
                  }
                }}
              />
              <Button
                variant="ghost"
                className="flex-none basis-1/10 flex items-center justify-center p-2 rounded-full aspect-square"
                onClick={handleSendMessage}
                disabled={isLoading}
              >
                <Send className="w-full h-full max-w-5 max-h-5 text-black dark:text-white" />
              </Button>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}