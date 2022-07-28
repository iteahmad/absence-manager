import React from "react";

export interface ImageProps {
  url?: string;
  alt?: string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({ url, alt, className }) => {
  return <img src={url} alt={alt} className={className} />;
};

export default Image;
