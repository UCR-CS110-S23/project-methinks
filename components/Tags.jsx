import React from "react";

const Tags = () => {
  return (
    <div className="flex items-center gap-x-5 mb-10">
      <p className="text-white font-semibold text-2xl">Tags:</p>
      <p className="bg-white p-1 px-4 rounded-3xl font-medium text-lg">
        Culture
      </p>
      <p className="bg-white p-1 px-4 rounded-3xl font-medium text-lg">Music</p>
      <p className="bg-white p-1 px-4 rounded-3xl font-medium text-lg">
        School
      </p>
      <p className="bg-white p-1 px-4 rounded-3xl font-medium text-lg">
        Politics
      </p>
      <p className="bg-white p-1 px-4 rounded-3xl font-medium text-lg">
        Random
      </p>
    </div>
  );
};

export default Tags;
