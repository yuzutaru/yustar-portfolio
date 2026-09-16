"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { useChat } from "@ai-sdk/react";
import { isTextUIPart } from "ai";
import { LoaderCircle, MessageSquare, Send, Sparkles, X } from "lucide-react";

const SUGGESTIONS = [
  "What does Yustar do?",
  "Kotlin experience?",
  "Tell me about his AI work",
];

function Bubble({
  role,
  children,
}: {
  role: "user" | "assistant" | "system";
  children: ReactNode;
}) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] border px-3 py-2 text-sm leading-relaxed ${
          isUser
            ? "border-accent/40 bg-accent/10 text-slate-100"
            : "border-line bg-panel2 text-slate-300"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export function Chat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, sendMessage, status, error } = useChat();
  const scrollRef = useRef<HTMLDivElement>(null);

  const isBusy = status === "submitted" || status === "streaming";

  useEffect(() => {
    const node = scrollRef.current;
    if (node) node.scrollTop = node.scrollHeight;
  }, [messages, open, isBusy]);

  function submit(text: string) {
    const value = text.trim();
    if (!value || isBusy) return;
    setInput("");
    void sendMessage({ text: value });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    submit(input);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Close Aira chat" : "Open Aira chat"}
        aria-expanded={open}
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center border border-accent/50 bg-panel text-accent shadow-[0_0_40px_-12px_rgba(45,212,191,0.6)] transition-colors hover:bg-accent/10"
      >
        {open ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </button>

      {open ? (
        <div className="fixed bottom-24 right-5 z-40 flex h-[min(70vh,560px)] w-[calc(100vw-2.5rem)] max-w-sm flex-col border border-line bg-panel shadow-[0_0_40px_-12px_rgba(45,212,191,0.35)]">
          <header className="flex items-center gap-3 border-b border-line bg-panel2 px-4 py-3">
            <span className="flex h-8 w-8 items-center justify-center bg-ink text-accent">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-display text-sm font-bold text-white">
                Aira
              </span>
              <span className="block font-mono text-[11px] text-slate-500">
                Yustar&apos;s portfolio assistant
              </span>
            </span>
            <span className="flex items-center gap-1.5 font-mono text-[10px] text-accent">
              <span className="h-1.5 w-1.5 animate-blink rounded-full bg-accent" />
              online
            </span>
          </header>

          <div
            ref={scrollRef}
            className="flex-1 space-y-4 overflow-y-auto px-4 py-4"
          >
            <Bubble role="assistant">
              Hi, I&apos;m Aira — ask me anything about Yustar&apos;s experience,
              projects, or skills.
            </Bubble>

            {messages.map((message) => (
              <Bubble key={message.id} role={message.role}>
                {message.parts.filter(isTextUIPart).map((part, index) => (
                  <span key={index} className="whitespace-pre-wrap">
                    {part.text}
                  </span>
                ))}
              </Bubble>
            ))}

            {status === "submitted" ? (
              <div className="flex items-center gap-2 text-slate-500">
                <LoaderCircle className="h-3.5 w-3.5 animate-spin" aria-hidden="true" />
                <span className="font-mono text-[11px]">Aira is typing…</span>
              </div>
            ) : null}

            {error ? (
              <p className="font-mono text-[11px] text-red-400">
                Something went wrong. Please try again.
              </p>
            ) : null}
          </div>

          {messages.length === 0 ? (
            <div className="flex flex-wrap gap-2 border-t border-line px-4 py-3">
              {SUGGESTIONS.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => submit(suggestion)}
                  className="border border-line bg-panel2 px-2.5 py-1 font-mono text-[11px] text-slate-400 transition-colors hover:border-accent/40 hover:text-accent"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          ) : null}

          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 border-t border-line bg-panel2 px-3 py-3"
          >
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              maxLength={500}
              placeholder="Ask about Yustar…"
              aria-label="Message Aira"
              className="min-w-0 flex-1 bg-transparent px-1 font-mono text-sm text-slate-200 outline-none placeholder:text-slate-600"
            />
            <button
              type="submit"
              disabled={isBusy || input.trim().length === 0}
              aria-label="Send message"
              className="flex h-9 w-9 items-center justify-center border border-accent/50 text-accent transition-colors hover:bg-accent/10 disabled:cursor-not-allowed disabled:border-line disabled:text-slate-600"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>
        </div>
      ) : null}
    </>
  );
}
