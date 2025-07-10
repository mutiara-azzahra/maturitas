// corpu_score;
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const questions = await prisma.corpu_score.findMany();
      // Pastikan BigInt diubah ke string agar tidak error saat JSON.stringify
      const questionsSafe = questions.map((q: any) => ({
        ...q,
        id: q.id?.toString(),
        dimension_id: q.dimension_id?.toString(),
        indicator_id: q.indicator_id?.toString(),
      }));
      return res.status(200).json(questionsSafe);
    } catch (error: any) {
      console.error("GET corpu_score error:", error?.message, error);
      return res.status(500).json({
        error: "Failed to fetch questions",
        detail: error?.message || error,
      });
    }
  }

  if (req.method === "POST") {
    try {
      // Log body untuk debug
      console.log("POST body:", req.body);
      const {
        id,
        agency_id,
        year,
        created_by,
        question_id,
        answer_id,
        level_id,
        indicator_score,
      } = req.body;

      // Validasi field wajib
      if (!id || !agency_id) {
        return res.status(400).json({
          error: "Missing required fields: id, dimension_id, indicator_id",
        });
      }

      // Pastikan id bertipe string/number sesuai schema
      // Jika id auto increment di Prisma, jangan kirim id dari client

      const question = await prisma.corpu_score.create({
        data: {
          id,
          agency_id,
          year,
          created_by,
          question_id,
          answer_id,
          level_id,
          indicator_score,
        },
      });

      // Pastikan BigInt diubah ke string jika perlu
      const questionSafe = {
        ...question,
        id: question.id?.toString(),
        agency_id: question.agency_id?.toString(),
      };

      return res.status(201).json(questionSafe);
    } catch (error: any) {
      // Log error Prisma detail
      if (error.code && error.meta) {
        console.error("Prisma error:", error.code, error.meta);
      }
      console.error("POST corpu_score error:", error?.message, error);
      return res.status(500).json({
        error: "Failed to create question",
        detail: error?.message || error,
      });
    }
  }

  // Method not allowed
  res.setHeader("Allow", ["GET", "POST"]);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
