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

  console.log(body.data);

  res.json({
    data: {
      desease: "name",
      description: "description",
    },
  });

  // try {
  //   const result = await axios.post(
  //     `${process.env.AI_API_ENDPOINT}/ai/diagnostics`,
  //     body.data,
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  //   res.write({
  //     data: {
  //       deseases: result.data.deseases,
  //     },
  //   });
  //   res.end();
  // } catch (error) {
  //   res.status(500).send(error.message);
  // }
};
