'use client';

import { ReactNode } from 'react';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface CodeBlockProps {
  children: string;
  language?: string;
  title?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({
  children,
  language = 'plaintext',
  title,
  showLineNumbers = true,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = children.split('\n');

  return (
    <div className="my-6 rounded-base overflow-hidden border border-border bg-background">
      {title && (
        <div className="bg-muted/30 px-4 py-2 meta-label text-foreground-muted border-b border-border">
          {title}
        </div>
      )}
      <div className="relative">
        <button
          onClick={copyToClipboard}
          className="absolute top-2 right-2 p-2 rounded-base bg-muted/50 hover:bg-muted transition-colors z-10 border border-border hover:border-primary/30"
          title="Copy code"
        >
          {copied ? (
            <Check size={16} className="text-green-400" />
          ) : (
            <Copy size={16} className="text-foreground-muted hover:text-foreground" />
          )}
        </button>
        <pre className="p-4 overflow-x-auto">
          <code className="text-[13px] md:text-sm font-mono leading-relaxed">
            {lines.map((line, idx) => (
              <div key={idx} className="flex">
                {showLineNumbers && (
                  <span className="inline-block w-8 text-right pr-4 text-foreground-muted select-none font-mono">
                    {idx + 1}
                  </span>
                )}
                <span className="text-foreground-secondary font-light">{line || '\n'}</span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}

interface CalloutProps {
  type: 'tip' | 'warning' | 'info' | 'success';
  children: ReactNode;
  title?: string;
}

const calloutConfig = {
  tip: {
    bg: 'bg-primary/10',
    border: 'border-primary',
    title: '💡 Tip',
    textColor: 'text-primary',
  },
  warning: {
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/50',
    title: '⚠️ Warning',
    textColor: 'text-yellow-500',
  },
  info: {
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/50',
    title: 'ℹ️ Info',
    textColor: 'text-blue-400',
  },
  success: {
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/50',
    title: '✅ Success',
    textColor: 'text-emerald-500',
  },
};

export function Callout({ type, children, title }: CalloutProps) {
  const config = calloutConfig[type];
  return (
    <div
      className={`my-6 p-4 rounded-base border-l-4 ${config.bg} ${config.border}`}
    >
      <p className={`meta-label ${config.textColor} mb-2`}>
        {title || config.title}
      </p>
      <div className="text-foreground-secondary leading-relaxed font-light">{children}</div>
    </div>
  );
}
