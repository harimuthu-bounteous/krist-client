import { ProductImage } from "@/types/Product";
import Image from "next/image";
import { FC, useState } from "react";

interface ProductImageGalleryProps {
  images: ProductImage[];
}

const ProductImageGallery: FC<ProductImageGalleryProps> = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="flex flex-col md:flex-row-reverse justify-center gap-4">
      <div className="relative max-w-96 aspect-square">
        <Image
          src={mainImage.Url}
          alt={mainImage.AltText}
          fill
          className="rounded-lg border object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          priority
        />
      </div>
      <div className="flex flex-row md:flex-col gap-2">
        {images.map((image, index) => {
          if (image.AltText !== mainImage.AltText)
            return (
              <button
                key={index}
                onClick={() => setMainImage(image)}
                className="relative w-20 h-20 border rounded-md overflow-hidden"
              >
                <Image
                  src={image.Url}
                  alt={image.AltText}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw" // Add responsive sizes here
                />
              </button>
            );
        })}
      </div>
    </div>
  );
};

export default ProductImageGallery;
