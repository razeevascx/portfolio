interface BlogHeadingProps {
  level?: 'h1' | 'h2' | 'h3' | 'h4' ;
  children: React.ReactNode;
  className?: string;
}

export function BlogHeading({
  level = 'h2',
  children,
  className = '',
}: BlogHeadingProps) {
  const baseStyles = 'text-foreground font-medium scroll-m-20 mb-4 mt-8 first:mt-0 tracking-tight';


  const sizeStyles = {
    h1: "text-3xl md:text-4xl lg:text-5xl leading-[0.95] font-extrabold text-balance",
    h2: "text-2xl md:text-3xl lg:text-4xl border-b pb-2 font-semibold tracking-tight first:mt-0 leading-[0.95]",
    h3: "text-xl md:text-2xl lg:text-3xl leading-[0.95] font-semibold tracking-tight",
    h4: "text-lg md:text-xl lg:text-2xl leading-[0.95] font-semibold tracking-tight  tracking-tight",
  };

  const HeadingTag = level;

  return (
    <HeadingTag className={`${baseStyles} ${sizeStyles[level]} ${className}`}>
      {children}
    </HeadingTag>
  );
}
