const ProductCardSkeleton = () => {
  return (
    <div className="animate-pulse duration-1000 flex flex-col gap-1 border rounded-md">
      <div className="relative aspect-square bg-gray-300 rounded-t-md" />
      <div className="flex flex-col gap-2 p-2 rounded-b-md">
        <div className="h-4 bg-gray-300 rounded-md" />
        <div className="h-3 bg-gray-200 rounded-md w-1/2" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
