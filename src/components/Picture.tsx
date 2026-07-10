import type { ImgHTMLAttributes } from "react";

interface PictureProps extends ImgHTMLAttributes<HTMLImageElement> {
  /** JPG/PNG fallback URL (usually the imported asset). */
  src: string;
  /** WebP variant URL (usually the imported .webp asset). */
  webpSrc: string;
  alt: string;
}

/**
 * Renders <picture> with WebP source + original fallback.
 * All img attrs (width/height/loading/fetchpriority/className/etc.) pass through.
 * Visual layout is unchanged — the <picture> is display:contents-equivalent for CSS.
 */
export const Picture = ({ src, webpSrc, alt, className, ...imgProps }: PictureProps) => (
  <picture className={className ? `contents ${className}` : undefined}>
    <source srcSet={webpSrc} type="image/webp" />
    <img src={src} alt={alt} className={className} {...imgProps} />
  </picture>
);
