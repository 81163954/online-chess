"use client";
import Square from "@/components/Square";
import { useState, Fragment } from "react";

const Chessboard = ({ chessData }: any) => {
  const [playerColor, setPlayerColor] = useState<string>("1");
  console.log("chessData", chessData);
  const [refresh, setRefresh] = useState<number>(1);

  return (
    <div>
      <h1 className="text-xl font-semibold">111</h1>
      <select
        onChange={(event) => {
          setPlayerColor(event.target.value);
        }}
      >
        <option value={1}>执黑</option>
        <option value={2}>执白</option>
      </select>{" "}
      <button
        onClick={() => {
          setRefresh(refresh + 1);
        }}
      >
        刷新棋盘
      </button>
      {/* {...chessData} */}
      {refresh &&
        chessData instanceof Array &&
        chessData.map((rowData: any, rowIndex: number) => {
          const rowElement: any = [];
          rowData instanceof Array &&
            rowData.map((cell: any, cellIndex: number) => {
              rowElement.push(
                <Fragment key={cellIndex}>
                  <Square
                    position={[rowIndex, cellIndex]}
                    clickData={playerColor}
                    defaultData={cell}
                  />
                </Fragment>,
              );
            });
          return <div key={rowIndex}>{rowElement}</div>;
        })}
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
