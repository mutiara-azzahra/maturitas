import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // GET method to fetch all instrument profiling
  if (req.method === "GET") {
    try {
      const instrument_profiling = await prisma.instrument_profiling.findMany();
      const instrumentProfilingSafe = instrument_profiling.map((q: any) => ({
        ...q,
        id: q.id?.toString(),
        profiling_question: q.profiling_question?.toString(),
        profiling_description: q.profiling_description?.toString(),
        type: q.type?.toString(),
      }));
      return res.status(200).json(instrumentProfilingSafe);
    } catch (error: any) {
      console.error("GET instrument profiling error:", error?.message, error);
      return res.status(500).json({
        error: "Failed to fetch instrument profiling data",
        detail: error?.message || error,
      });
    }
  }

  // POST method to create a new instansi
  if (req.method === "POST") {
    try {
      // Log body untuk debug
      console.log("POST body:", req.body);
      const { id, profiling_question, profiling_description, type } = req.body;

      // Validasi field wajib
      if (!id || !profiling_question || !profiling_description || !type) {
        return res.status(400).json({
          error: "Missing required fields: id, kat_instansi, instansi",
        });
      }

      const instrument_profiling = await prisma.instrument_profiling.create({
        data: {
          id,
          profiling_question,
          profiling_description,
          type,
        },
      });

      const instrumentProfilingSafe = {
        ...instrument_profiling,
        id: instrument_profiling.id?.toString(),
        profiling_question: instrument_profiling.profiling_question?.toString(),
        profiling_description:
          instrument_profiling.profiling_description?.toString(),
      };

      return res.status(201).json(instrumentProfilingSafe);
    } catch (error: any) {
      if (error.code && error.meta) {
        console.error("Prisma error:", error.code, error.meta);
      }
      console.error("POST instrument profiling error:", error?.message, error);
      return res.status(500).json({
        error: "Failed to create instrument profiling",
        detail: error?.message || error,
      });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
