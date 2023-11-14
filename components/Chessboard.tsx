"use client";
import Square from "@/components/Square";
import { useState } from "react";

const Chessboard = ({ chessData }: any) => {
  const [playerColor, setPlayerColor] = useState<string>("黑");
  console.log("chessData", chessData);

  return (
    <div>
      <h1 className="text-xl font-semibold">棋盘</h1>
      <select
        onChange={(event) => {
          setPlayerColor(event.target.value);
        }}
      >
        <option value="黑">执黑</option>
        <option value="白">执白</option>
      </select>
      {/* {...chessData} */}
      {/* {chessData instanceof Array &&
        chessData.map((rowData: any, rowIndex: number) => {
          const rowElement: any = [];
          rowData instanceof Array &&
            rowData.map((cell: any, cellIndex: number) => {
              rowElement.push(
                <Square position={[rowIndex, cellIndex]} clickData={cell} />,
              );
            });
          return <div key={rowIndex}>{rowElement}</div>;
        })} */}
      {/* <div>
        <Square position={[0, 0]} clickColor={playerColor} />
        <Square position={[0, 1]} clickColor={playerColor} />
        <Square position={[0, 2]} clickColor={playerColor} />
      </div>
      <div>
        <Square position={[1, 0]} clickColor={playerColor} />
        <Square position={[1, 1]} clickColor={playerColor} />
        <Square position={[1, 2]} clickColor={playerColor} />
      </div>
      <div>
        <Square position={[2, 0]} clickColor={playerColor} />
        <Square position={[2, 1]} clickColor={playerColor} />
        <Square position={[2, 2]} clickColor={playerColor} />
      </div> */}
    </div>
  );
};

export default Chessboard;
