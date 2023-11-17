import { NextApiRequest } from "next";

import { NextApiResponseServerIo } from "@/types/next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponseServerIo,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  const { position, clickData } = req.body;

  const updateKey = `chessboard:[${position[0]},${position[1]}]:render`;

  res?.socket?.server?.io?.emit(updateKey, clickData);

  return res.status(200).json("更新成功");
}
