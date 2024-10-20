import { ProductImage } from "@/types/Product";
import { FC, useState } from "react";
import CustomImageWrapper from "../common/CustomImageWrapper";

interface ProductImageGalleryProps {
  images: ProductImage[];
}

const ProductImageGallery: FC<ProductImageGalleryProps> = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="flex flex-col md:flex-row-reverse justify-center gap-4">
      <div className="relative w-[20rem] md:w-[30rem] aspect-square border rounded-md">
        <CustomImageWrapper
          alt={mainImage.AltText}
          src={
            "https://nocajhsrlymhnxsemfoa.supabase.co/storage/v1/object/public/krist_DB_images" +
            mainImage.Url
          }
          className="rounded-md"
          priority={true}
        />
      </div>
      <div className="flex flex-row md:flex-col gap-2">
        {images.map((image, index) => {
          if (image.AltText !== mainImage.AltText)
            return (
              <div
                key={index}
                onClick={() => setMainImage(image)}
                className="relative w-20 h-20 border rounded-md overflow-hidden cursor-pointer"
              >
                <CustomImageWrapper
                  alt={image.AltText}
                  src={
                    "https://nocajhsrlymhnxsemfoa.supabase.co/storage/v1/object/public/krist_DB_images" +
                    image.Url
                  }
                />
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default ProductImageGallery;
