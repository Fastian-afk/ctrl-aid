"use client";

import { useChat } from "@ai-sdk/react";
import { TextStreamChatTransport, type UIMessage } from "ai";
import { useState, useEffect, useRef, useMemo } from "react";
import { Bot, User, Send, Sparkles, Loader2 } from "lucide-react";

const quickActions = [
  "Where is the nearest shelter?",
  "Flood safety tips",
  "Emergency contacts in Islamabad",
  "What supplies should I prepare?",
  "Is there a flood warning today?",
  "Where is the nearest hospital?",
];

export default function AiAssistant() {
  const [input, setInput] = useState("");

  const transport = useMemo(
    () => new TextStreamChatTransport({ api: "/api/chat" }),
    []
  );

  const { messages, sendMessage, status, error } = useChat({
    transport,
    messages: [
      {
        id: "welcome",
        role: "assistant" as const,
        parts: [
          {
            type: "text" as const,
            text: "Hello! I'm **Ctrl+Aid AI**, your emergency information assistant. I can help you with:\n\n• **Finding nearby shelters and hospitals**\n• **Emergency safety guidelines**\n• **Flood preparedness tips**\n• **Emergency contact information**\n• **Evacuation guidance**\n\nHow can I help you stay safe today?",
          },
        ],
      },
    ] as UIMessage[],
  });

  const isLoading = status === "streaming" || status === "submitted";
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    sendMessage({ text: input });
    setInput("");
  };

  const onQuickAction = (text: string) => {
    if (isLoading) return;
    sendMessage({ text });
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-teal-400" />
          AI Emergency Assistant
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Powered by Gemini AI — Ask anything about emergency preparedness
        </p>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-2 mb-4">
        {quickActions.map((action) => (
          <button
            key={action}
            onClick={() => onQuickAction(action)}
            disabled={isLoading}
            className="px-3 py-1.5 rounded-lg text-xs font-medium bg-navy-800/50 text-slate-400 border border-white/5 hover:bg-teal-500/10 hover:text-teal-300 hover:border-teal-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {action}
          </button>
        ))}
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto space-y-4 pr-1 mb-4"
      >
        {messages.map((message) => {
          const isUser = message.role === "user";
          // Extract text from parts
          const textContent = message.parts
            ?.filter((p): p is { type: "text"; text: string } => p.type === "text")
            .map((p) => p.text)
            .join("") || "";

          return (
            <div
              key={message.id}
              className={`flex gap-3 ${isUser ? "flex-row-reverse" : ""}`}
            >
              {/* Avatar */}
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  isUser
                    ? "bg-teal-500/20 border border-teal-500/20"
                    : "bg-cyan-500/10 border border-cyan-500/20"
                }`}
              >
                {isUser ? (
                  <User className="w-4 h-4 text-teal-400" />
                ) : (
                  <Bot className="w-4 h-4 text-cyan-400" />
                )}
              </div>

              {/* Bubble */}
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  isUser ? "chat-bubble-user" : "chat-bubble-ai"
                }`}
              >
                <div className="chat-content whitespace-pre-wrap">
                  {textContent
                    .split(/(\*\*[^*]+\*\*)/g)
                    .map((part, i) =>
                      part.startsWith("**") && part.endsWith("**") ? (
                        <strong key={i} className="text-teal-300 font-semibold">
                          {part.slice(2, -2)}
                        </strong>
                      ) : (
                        <span key={i}>{part}</span>
                      )
                    )}
                </div>
              </div>
            </div>
          );
        })}

        {/* Loading indicator */}
        {isLoading && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
              <Bot className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="chat-bubble-ai rounded-2xl px-4 py-3">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Loader2 className="w-4 h-4 animate-spin" />
                Thinking...
              </div>
            </div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
              <Bot className="w-4 h-4 text-red-400" />
            </div>
            <div className="bg-red-500/5 border border-red-500/20 rounded-2xl px-4 py-3 text-sm text-red-300">
              Unable to connect to AI. Please ensure the Gemini API key is configured in <code className="bg-red-500/10 px-1 rounded text-xs">.env.local</code>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about emergency preparedness, shelters, safety..."
          className="flex-1 px-4 py-3 bg-navy-800/50 border border-white/5 rounded-xl text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-teal-500/30 transition-colors"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white hover:opacity-90 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0"
          aria-label="Send message"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
