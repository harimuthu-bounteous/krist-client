import { FC } from "react";

const ProductDescriptionSkeleton: FC = () => {
  return (
    <div className="container mx-auto p-8 md:px-20 md:py-8 space-y-8">
      <div className="flex flex-col items-center justify-evenly lg:flex-row gap-6 lg:gap-12">
        {/* Product Image Gallery Skeleton */}
        <div className="flex flex-col md:flex-row-reverse justify-center gap-4">
          <div className="relative w-[20rem] md:w-[30rem] aspect-square rounded-md animate-pulse bg-gray-300" />
          <div className="flex flex-row md:flex-col gap-2">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="w-20 h-20 animate-pulse bg-gray-300 rounded-md"
              />
            ))}
          </div>
        </div>

        {/* Product Info Skeleton */}
        <div className="flex flex-col gap-4 w-full ">
          <div className="h-8 w-1/2 bg-gray-300 animate-pulse rounded-md"></div>
          <div className="flex items-center gap-2">
            <div className="w-16 h-4 bg-gray-300 animate-pulse rounded-md"></div>
            <div className="w-8 h-4 bg-gray-300 animate-pulse rounded-md"></div>
          </div>
          <div className="w-20 h-6 bg-gray-300 animate-pulse rounded-md"></div>
          <div className="w-full h-20 bg-gray-300 animate-pulse rounded-md"></div>
          <div className="w-1/4 h-6 bg-gray-300 animate-pulse rounded-md"></div>
          <div className="flex gap-2">
            <div className="w-8 h-8 bg-gray-300 animate-pulse rounded-full"></div>
            <div className="w-8 h-8 bg-gray-300 animate-pulse rounded-full"></div>
          </div>
          <div className="flex gap-2">
            <div className="w-12 h-6 bg-gray-300 animate-pulse rounded-md"></div>
            <div className="w-12 h-6 bg-gray-300 animate-pulse rounded-md"></div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-32 h-10 bg-gray-300 animate-pulse rounded-md"></div>
            <div className="w-10 h-10 bg-gray-300 animate-pulse rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Product Tabs Skeleton */}
      <div className="mt-8">
        <div className="flex gap-4 mb-4">
          <div className="w-32 h-8 bg-gray-300 animate-pulse rounded-md"></div>
          <div className="w-32 h-8 bg-gray-300 animate-pulse rounded-md"></div>
          <div className="w-32 h-8 bg-gray-300 animate-pulse rounded-md"></div>
        </div>
        <div className="w-full h-32 bg-gray-300 animate-pulse rounded-md"></div>
      </div>
    </div>
  );
};

export default ProductDescriptionSkeleton;
