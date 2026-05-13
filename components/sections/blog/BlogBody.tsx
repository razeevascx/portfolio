interface BlogBodyProps {
  children: React.ReactNode;
  className?: string;
}

export function BlogBody({ children, className = '' }: BlogBodyProps) {
  return (
    <p
      className={`
        text-foreground-secondary text-base md:text-lgmb-6 font-light leading-7 not-first:mt-6
        ${className}
      `}
    >
      {children}
    </p>
  );
}
