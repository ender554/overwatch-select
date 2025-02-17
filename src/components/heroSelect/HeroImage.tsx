// src/components/heroSelect/HeroImage.tsx
import React, { useState } from "react";

interface HeroImageProps {
  src: string;
  alt: string;
}

const HeroImage: React.FC<HeroImageProps> = ({ src, alt }) => {
  const [errored, setErrored] = useState(false);

  if (errored || !src) {
    // Render fallback if the image fails to load or no src is provided.
    return <div className="hero-thumb hero-fallback">{alt}</div>;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="hero-thumb"
      loading="lazy"
      onError={() => setErrored(true)}
    />
  );
};

export default HeroImage;
