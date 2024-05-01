import { useEffect, useState } from "react";
import Spinner from "../../atoms/spinner";
import { twMerge } from "tailwind-merge";

interface ProgressiveImageProps {
  src: string;
  placeholder?: string;
  alt: string;
}

const ProgressiveImage = ({ src, placeholder, alt }: ProgressiveImageProps) => {
  const [currentSrc, updateSrc] = useState(placeholder || src);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setImageLoaded(true);
      updateSrc(src);
    };
  }, [src]);

  return (
    <div
      className={twMerge(
        "relative w-full cursor-pointer",
        !imageLoaded ? "h-48" : ""
      )}
    >
      <img
        src={currentSrc}
        alt={alt}
        className="w-full max-w-full max-h-[300px] h-auto object-cover"
        style={{
          filter:
            placeholder && currentSrc === placeholder ? "blur(10px)" : "none",
          transition: "filter 0.5s linear",
        }}
      />
      {!imageLoaded && (
        <span
          className="
          absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
        "
        >
          <Spinner />
        </span>
      )}
    </div>
  );
};

export default ProgressiveImage;
