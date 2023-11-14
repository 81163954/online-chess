import ChessBoard from "@/components/Chessboard";
import ChessBoardCreateButton from "@/components/chessboard-create-button";
import { db } from "@/lib/db";

export default async function Home() {
  const fetchChessData = async () => {
    const data: any = await db.chessboard.findUnique({
      select: {
        data: true,
      },
      where: {
        id: 1,
      },
    });
    return data?.data?.arrData;
  };
  const chessData = await fetchChessData();
  return (
    <div className="py-10 px-16">
      <ChessBoardCreateButton />
      {JSON.stringify(chessData)}
      <ChessBoard chessData={chessData} />
    </div>
  );
}
