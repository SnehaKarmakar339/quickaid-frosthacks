import { Request, Response } from "express";
import axios from "axios";

interface DiagnosticsRequest {
  data: {
    symptomsText: string;
    symptomsOptions: string[];
  };
}

export const diagnosticsController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const body: DiagnosticsRequest = req.body;

  try {
    const result = await axios.post(
      `${process.env.AI_API_ENDPOINT}/ai/text`,
      {
        prompt: body.data.symptomsText,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    res.json({
      data: {
        disease: result.data.disease,
        description: `https://www.google.com/search?q=${result.data.disease}`,
      },
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
