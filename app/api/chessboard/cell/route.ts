import { db } from "@/lib/db";
import { NextRequest } from "next/server";

const x = 15;
const y = 15;
export async function POST(req: NextRequest) {
  try {
    const newArrData = [];
    for (let i = 0; i < y; i++) {
      newArrData.push(Array(x).fill(0));
    }
    const id = await db.chessboard.update({
      data: {
        data: JSON.stringify({
          arrData: newArrData,
        }),
      },
      select: {
        id: true,
        data: true,
      },
      where: {
        id: 1,
      },
    });
    console.log("添加成功id", id);

    return new Response(JSON.stringify(id));
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 422 });
  }
}
