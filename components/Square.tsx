"use client";
import { useState } from "react";

const displayArrays = ["空", "黑", "白"];

const Square = ({ clickData }: any) => {
  const [data, setData] = useState<number>(0);

  return (
    <button
      className="pr-[10px]"
      onClick={() => {
        if (data === 0) {
          setData(clickData);
        } else {
          setData(0);
        }
      }}
    >
      {displayArrays[data]}
    </button>
  );
};

export default Square;
