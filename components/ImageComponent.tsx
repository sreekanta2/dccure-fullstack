"use client";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";

interface ImageComponentProps {
  src: StaticImageData | string;
  alt: string;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  className?: string;
  priority?: boolean;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  alt,
  objectFit = "cover",
  className = "",
  priority = false,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof src === "string") {
      const imageLoader = new window.Image();
      imageLoader.src = src;
      imageLoader.onload = () => setIsLoading(false);
      imageLoader.onerror = () => setIsLoading(false);
    } else {
      // Static images are preloaded, so loading state is not needed
      setIsLoading(false);
    }
  }, [src]);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ width: "100%", height: "100%" }}
    >
      {isLoading && (
        <div className="absolute inset-0 flex justify-center items-center bg-gray-200">
          <span>Loading...</span>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit={objectFit}
        priority={priority}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
};

export default ImageComponent;
