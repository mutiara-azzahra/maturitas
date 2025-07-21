import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // GET method to fetch all instansi kategori
  if (req.method === "GET") {
    try {
      const instrument_question = await prisma.instrument_question.findMany();
      const instrumentQuestionSafe = instrument_question.map((q: any) => ({
        ...q,
        id: q.id?.toString(),
        dimension_id: q.dimension_id?.toString(),
        dimension_name: q.dimension_name?.toString(),
        indicator_id: q.indicator_id?.toString(),
        indicator_question: q.indicator_question?.toString(),
        indicator_weight: q.indicator_weight?.toString(),
        dimension_weight: q.dimension_weight?.toString(),
        final_weight: q.final_weight?.toString(),
        indicator_description: q.indicator_description?.toString(),
      }));
      return res.status(200).json(instrumentQuestionSafe);
    } catch (error: any) {
      console.error("GET instansi kategori error:", error?.message, error);
      return res.status(500).json({
        error: "Failed to fetch instansi kategori data",
        detail: error?.message || error,
      });
    }
  }

  // POST method to create a new instansi
  if (req.method === "POST") {
    try {
      // Log body untuk debug
      console.log("POST body:", req.body);
      const {
        id,
        dimension_id,
        dimension_name,
        indicator_id,
        indicator_question,
        indicator_weight,
        dimension_weight,
        final_weight,
        indicator_description,
      } = req.body;

      // Validasi field wajib
      if (!id || !dimension_id) {
        return res.status(400).json({
          error: "Missing required fields: id, kat_instansi, instansi",
        });
      }

      const instrument_question = await prisma.instrument_question.create({
        data: {
          id,
          dimension_id,
          dimension_name,
          indicator_id,
          indicator_question,
          indicator_weight,
          dimension_weight,
          final_weight,
          indicator_description,
        },
      });

      const instrumentQuestionSafe = {
        ...instrument_question,
        id: instrument_question.id?.toString(),
        dimension_id: instrument_question.dimension_id?.toString(),
        dimension_name: instrument_question.dimension_name?.toString(),
        indicator_id: instrument_question.indicator_id?.toString(),
        indicator_question: instrument_question.indicator_question?.toString(),
        indicator_weight: instrument_question.indicator_weight?.toString(),
        dimension_weight: instrument_question.dimension_weight?.toString(),
        final_weight: instrument_question.final_weight?.toString(),
        indicator_description:
          instrument_question.indicator_description?.toString(),
      };

      return res.status(201).json(instrumentQuestionSafe);
    } catch (error: any) {
      if (error.code && error.meta) {
        console.error("Prisma error:", error.code, error.meta);
      }
      console.error("POST instansi kategori error:", error?.message, error);
      return res.status(500).json({
        error: "Failed to create instansi kategori",
        detail: error?.message || error,
      });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
