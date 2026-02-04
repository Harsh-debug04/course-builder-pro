import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight, oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, Check, CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
  return (
    <div className="prose-course animate-fade-in">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          code({ node, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            const isInline = !match;

            if (isInline) {
              return (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            }

            return (
              <CodeBlock language={match[1]}>
                {String(children).replace(/\n$/, "")}
              </CodeBlock>
            );
          },
          h1: ({ children }) => (
            <h1 className="text-4xl font-bold text-primary mb-6 animate-fade-in">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl font-semibold content-heading mt-8 mb-4">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-semibold content-heading mt-6 mb-3">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-lg font-semibold content-heading mt-4 mb-2">
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className="mb-4 text-foreground/90 leading-relaxed">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="mb-4 pl-6 space-y-2">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="mb-4 pl-6 space-y-2 list-decimal">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="text-foreground/90 list-disc">{children}</li>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-foreground">{children}</strong>
          ),
          hr: () => <hr className="my-8 border-border" />,
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-muted-foreground">
              {children}
            </blockquote>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

interface CodeBlockProps {
  language: string;
  children: string;
}

const CodeBlock = ({ language, children }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isDark = document.documentElement.classList.contains("dark");

  return (
    <div className="code-block relative group my-4">
      <div className="flex items-center justify-between px-4 py-2 bg-muted/50 border-b border-code-border">
        <span className="text-xs font-medium text-muted-foreground uppercase">
          {language}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              Copy
            </>
          )}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={isDark ? oneDark : oneLight}
        customStyle={{
          margin: 0,
          padding: "1rem",
          background: "transparent",
          fontSize: "0.875rem",
        }}
        codeTagProps={{
          style: {
            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
          },
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default MarkdownRenderer;
