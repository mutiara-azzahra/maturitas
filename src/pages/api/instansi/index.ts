import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const instansi = await prisma.instansi.findMany();
      const questionsSafe = instansi.map((q: any) => ({
        ...q,
        id: q.id?.toString(),
        dimension_id: q.dimension_id?.toString(),
        indicator_id: q.indicator_id?.toString(),
      }));
      return res.status(200).json(questionsSafe);
    } catch (error: any) {
      console.error("GET instansi error:", error?.message, error);
      return res.status(500).json({
        error: "Failed to fetch instansi",
        detail: error?.message || error,
      });
    }
  }

  if (req.method === "POST") {
    try {
      // Log body untuk debug
      console.log("POST body:", req.body);
      const { id, agency_id, agency_name, agency_category_id } = req.body;

      if (!id || !agency_id) {
        return res.status(400).json({
          error: "Missing required fields: id, dimension_id, indicator_id",
        });
      }

      const question = await prisma.instansi.create({
        data: {
          id,
          agency_id,
          agency_name,
          agency_category_id,
        },
      });

      const questionSafe = {
        ...question,
        id: question.id?.toString(),
        agency_id: question.agency_id?.toString(),
      };

      return res.status(201).json(questionSafe);
    } catch (error: any) {
      if (error.code && error.meta) {
        console.error("Prisma error:", error.code, error.meta);
      }
      console.error("POST instansi error:", error?.message, error);
      return res.status(500).json({
        error: "Failed to create question",
        detail: error?.message || error,
      });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
