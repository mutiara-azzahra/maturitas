import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    // Get all instrument questions
    try {
      const questions = await prisma.instrument_question.findMany();
      res.status(200).json(questions);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch questions" });
    }
  } else if (req.method === "POST") {
    // Create a new instrument question
    try {
      const data = req.body;
      const question = await prisma.instrument_question.create({
        data: {
          id: data.id, // Make sure to provide a unique id value here
          dimension_id: data.dimension_id,
          dimension_name: data.dimension_name,
          indicator_id: data.indicator_id,
          indicator_question: data.indicator_question,
          indicator_weight: data.indicator_weight,
          dimension_weight: data.dimension_weight,
          final_weight: data.final_weight,
          indicator_description: data.indicator_description,
        },
      });
      res.status(201).json(question);
    } catch (error) {
      res.status(500).json({ error: "Failed to create question" });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
