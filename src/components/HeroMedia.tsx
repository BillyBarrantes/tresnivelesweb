'use client';

import Image from 'next/image';

interface HeroMediaProps {
  mediaSrc?: string;
  mediaType?: 'image' | 'video';
  posterSrc?: string;
}

export default function HeroMedia({ mediaSrc, mediaType, posterSrc }: HeroMediaProps) {
  if (mediaSrc && mediaType === 'image') {
    return (
      <div className="heromedia">
        <Image src={mediaSrc} alt="Vista de sistema 3N" fill className="heromedia-asset" />
      </div>
    );
  }

  if (mediaSrc && mediaType === 'video') {
    return (
      <div className="heromedia">
        <video
          muted
          loop
          autoPlay
          playsInline
          poster={posterSrc}
          className="heromedia-asset"
        >
          <source src={mediaSrc} />
        </video>
      </div>
    );
  }

  return (
    <div className="heromedia">
      <svg
        viewBox="0 0 400 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="heromedia-placeholder-svg"
      >
        <defs>
          <linearGradient id="hmBg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#66645D" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#66645D" stopOpacity="0.07" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="400" height="320" fill="url(#hmBg)" rx="16" />
        <rect x="20" y="20" width="360" height="280" rx="16" stroke="#66645D" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.25" />
        <rect x="40" y="44" width="150" height="100" rx="10" stroke="#66645D" strokeWidth="0.7" opacity="0.2" />
        <rect x="210" y="44" width="150" height="100" rx="10" stroke="#66645D" strokeWidth="0.7" opacity="0.2" />
        <rect x="40" y="164" width="150" height="100" rx="10" stroke="#66645D" strokeWidth="0.7" opacity="0.2" />
        <rect x="210" y="164" width="150" height="100" rx="10" stroke="#66645D" strokeWidth="0.7" opacity="0.2" />
        <rect x="180" y="145" width="40" height="22" rx="999" stroke="#66645D" strokeWidth="0.5" opacity="0.15" />
        <line x1="40" y1="122" x2="190" y2="122" stroke="#66645D" strokeWidth="0.5" opacity="0.1" />
        <line x1="210" y1="122" x2="360" y2="122" stroke="#66645D" strokeWidth="0.5" opacity="0.1" />
        <rect x="191" y="42" width="18" height="18" rx="4" stroke="#66645D" strokeWidth="0.5" opacity="0.1" />
      </svg>
    </div>
  );
}
