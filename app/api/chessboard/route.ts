import { db } from "@/lib/db";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const id = await db.chessboard.update({
      data: {
        data: JSON.stringify({
          arrData: [
            [0, 1, 2],
            [1, 2, 0],
            [0, 1, 0],
          ],
        }),
      },
      select: {
        id: true,
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

export async function GET(req: NextRequest) {
  try {
    const data = await db.chessboard.findUnique({
      select: {
        data: true,
      },
      where: {
        id: 1,
      },
    });
    console.log("data", data);

    return new Response(JSON.stringify(data));
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 422 });
  }
}
