'use client';
import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface ImageWithFallbackProps extends ImageProps {
  fallbackSrc?: string;
}

const DEFAULT_FALLBACK = 'https://placehold.co/600x800/e2e8f0/64748b?text=Image+Not+Found';

export default function ImageWithFallback(props: ImageWithFallbackProps) {
  const { src, fallbackSrc = DEFAULT_FALLBACK, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);
  return <Image {...rest} src={imgSrc} onError={() => setImgSrc(fallbackSrc)} />;
}