import { FC } from "react";

const FilterSectionSkeleton: FC = () => {
  return (
    <div className="h-[70vh] flex flex-col gap-8 md:h-auto overflow-y-scroll md:overflow-auto bg-gray-100 py-2 px-4 md:p-5 rounded-md animate-pulse">
      {/* Loading Categories */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Categories</h2>
        <div className="flex flex-col gap-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="h-6 w-6 bg-gray-300 rounded"></div>
              <div className="h-6 w-3/4 bg-gray-300 rounded"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Loading Price Range */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Price Range</h2>
        <div className="h-5 bg-gray-300 rounded-full"></div>
        <div className="flex justify-between mt-2">
          <span className="h-5 w-5 bg-gray-300 rounded"></span>
          <span className="h-5 w-5 bg-gray-300 rounded"></span>
        </div>
      </div>

      {/* Loading Colors */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Colors</h2>
        <div className="flex flex-col gap-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="h-6 w-6 bg-gray-300 rounded"></div>
              <div className="h-6 w-3/4 bg-gray-300 rounded"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Loading Sizes */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Sizes</h2>
        <div className="flex flex-col gap-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="h-6 w-6 bg-gray-300 rounded"></div>
              <div className="h-6 w-3/4 bg-gray-300 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSectionSkeleton;
