import React from "react";

function GrowingLine() {
  return (
    <div className="flex justify-center mt-10">
      {/* The growing line */}
      <div className="w-10 h-1 bg-orange-500 animate-grow"></div>
    </div>
  );
}

export default GrowingLine;
