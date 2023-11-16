"use client";
import { useState, useEffect } from "react";
import { useSocket } from "@/components/providers/socket-provider";

const displayArrays = ["·", "黑", "白"];

const Square = ({ position, clickData, defaultData }: any) => {
  const [data, setData] = useState<number | string>(defaultData);
  const { socket } = useSocket();
  const updateKey = `chessboard:[${position[0]},${position[1]}]:render`;

  useEffect(() => {
    if (!socket) return;
    socket.on(updateKey, (message: any) => {
      console.log(message);
      setData(message);
    });
  }, [updateKey, socket]);

  return (
    <button
      className="pr-[10px] w-7"
      onClick={async () => {
        if (data === 0 || data === "0") {
          setData(clickData);
          await fetch("/api/socket/chessboard", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              position,
              clickData,
            }),
          });
        } else {
          await fetch("/api/socket/chessboard", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              position,
              clickData: "0",
            }),
          });
          setData(0);
        }
      }}
    >
      {displayArrays[data as number]}
    </button>
  );
};

export default Square;
