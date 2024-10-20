// import { getBase64 } from "@/lib/getBase64";
import CustomImage from "@/components/common/CustomImage";
import { getPlaceholderImageURL } from "@/lib/utils";

interface CustomImageWrapperProps {
  alt: string;
  src: string;
  priority?: boolean;
  className?: string;
}

export default function CustomImageWrapper({
  alt,
  src,
  priority = false,
  className,
}: CustomImageWrapperProps) {
  const base64 = getPlaceholderImageURL(src);

  return (
    <CustomImage
      alt={alt}
      src={src}
      base64={base64}
      priority={priority}
      className={className}
    />
  );
}
