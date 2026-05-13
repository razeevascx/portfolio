import Image from 'next/image';

interface BlogPictureProps {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export function BlogPicture({
  src,
  alt,
  caption,
  width = 800,
  height = 400,
}: BlogPictureProps) {
  return (
    <figure className="my-8 md:my-12">
      <div className="relative w-full rounded-base overflow-hidden border border-border">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto object-cover"
          priority={false}
        />
      </div>
      {caption && (
        <figcaption className="text-center text-foreground-muted text-sm mt-4">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
