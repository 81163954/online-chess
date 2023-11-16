"use client";
import Square from "@/components/Square";
import { useState, useEffect, Fragment } from "react";

const Chessboard = ({ chessData: chessData1, boardSize }: any) => {
  const [playerColor, setPlayerColor] = useState<string>("8");
  const { x, y } = boardSize;

  const [chessData, setChessData] = useState<any>();
  // const [chessData, setChessData] = useState<any>(chessData1);

  useEffect(() => {
    refreshBoard();
  }, []);
  const refreshBoard = () => {
    const newArrData = [];
    for (let i = 0; i < y; i++) {
      newArrData.push(Array(x).fill(0));
    }
    setChessData(newArrData);
  };

  return (
    <div>
      <h1 className="text-xl font-semibold">111</h1>
      <select
        onChange={(event) => {
          setPlayerColor(event.target.value);
        }}
      >
        <option value={8}>执黑</option>
        <option value={9}>执白</option>
        <option value={1}>执南瓜</option>
        <option value={2}>执足球</option>
        <option value={3}>执棒球</option>
        <option value={4}>执篮球</option>
        <option value={5}>执独角兽</option>
        <option value={6}>执程序员</option>
        <option value={7}>执宇航员</option>
      </select>
      <button className={"pl-4"} onClick={refreshBoard}>
        刷新棋盘
      </button>
      {/* {...chessData} */}
      {chessData instanceof Array &&
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
