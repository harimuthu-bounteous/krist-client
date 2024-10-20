"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";
import { useInView } from "react-intersection-observer";

interface CustomImageProps {
  alt: string;
  src: string;
  priority: boolean;
  base64: string;
  className?: string;
}

const CustomImage: FC<CustomImageProps> = ({
  alt,
  src,
  priority,
  base64,
  className,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={cn(
        "relative bg-gray-300 h-full w-full",
        !inView && "animate-pulse",
        className
      )}
    >
      <Image
        alt={alt}
        src={src}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        placeholder="blur"
        blurDataURL={base64}
        priority={priority}
        className={cn(
          inView ? "opacity-100" : "opacity-0",
          "object-cover",
          className
        )}
        style={{
          transition: "opacity 0.7s cubic-bezier(0.3, 0.2, 0.2, 0.8)",
        }}
      />
    </div>
  );
};

export default CustomImage;
