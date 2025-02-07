import { Request, Response } from "express";
import tips from "../db/data/tips";

export const tipsController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const randomTips = tips.sort(() => 0.5 - Math.random()).slice(0, 4);
    res.json(randomTips);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
