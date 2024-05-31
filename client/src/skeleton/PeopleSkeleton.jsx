import React from "react";

const PeopleSkeleton = () => {
  return (
    <div>
      <div className="flex gap-4 items-center">
        <div className="skeleton w-12 h-12 rounded-full shrink-0"></div>
        <div className="flex flex-col gap-4">
          <div className="skeleton h-4 w-28"></div>
        </div>
      </div>
      <div className="divider divider-neutral m-1"></div>
    </div>
  );
};

export default PeopleSkeleton;
