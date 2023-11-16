import ChessBoard from "@/components/Chessboard";
import ChessBoardCreateButton from "@/components/chessboard-create-button";
import { db } from "@/lib/db";

export default async function Home() {
  //可以读取缓存棋盘数据
  const fetchChessData = async () => {
    const data: any = await db.chessboard.findUnique({
      select: {
        data: true,
      },
      where: {
        id: 1,
      },
    });
    return JSON.parse(data?.data)?.arrData;
  };
  const chessData = await fetchChessData();
  return (
    <div className="py-10 px-16">
      <ChessBoardCreateButton />
      <ChessBoard chessData={chessData} boardSize={{ x: 15, y: 15 }} />
    </div>
  );
}
