"use client";
import { useState, useEffect } from "react";
import { useSocket } from "@/components/providers/socket-provider";

const displayArrays = [
  "·",
  "🎃",
  "⚽",
  "🏐",
  "🏀",
  "🦄",
  "👨🏼‍💻",
  "👨🏼‍🚀",
  "⚫",
  "⚪",
];

const Square = ({ position, clickData, defaultData }: any) => {
  const [data, setData] = useState<number | string>(defaultData);
  const { socket } = useSocket();
  const updateKey = `chessboard:[${position[0]},${position[1]}]:render`;
  const [isRendering, setIsRendering] = useState<boolean>(false);

  useEffect(() => {
    if (!socket) return;
    socket.on(updateKey, (message: any) => {
      console.log(message);
      setData(message);
      setIsRendering(false);
    });
  }, [updateKey, socket]);

  return (
    <button
      disabled={isRendering}
      className="px-[10px] w-[26px]"
      onClick={async () => {
        setIsRendering(true);
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
      {isRendering ? "⌛" : displayArrays[data as number]}
    </button>
  );
};

export default Square;
