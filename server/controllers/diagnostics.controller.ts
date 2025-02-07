import { Request, Response } from "express";
import axios from "axios";

interface DiagnosticsRequest {
  symptoms: string[];
}

export const diagnosticsController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const body: DiagnosticsRequest = req.body;

  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("Content-Type", "text/event-stream");
  res.flushHeaders();

  try {
    const result = await axios.post(
      `${process.env.AI_API_ENDPOINT}/ai/diagnostics`,
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // for await (const textPart of result.data) {
    //   res.write(JSON.stringify(textPart));
    // }
    res.send(result.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
