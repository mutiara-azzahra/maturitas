import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const profiling = await prisma.corpu_profiling.findMany();
      const profilingSafe = profiling.map((q: any) => ({
        ...q,
        id: q.id?.toString(),
        agency_id: q.agency_id?.toString(),
        year: q.year?.toString(),
        created_by: q.created_by?.toString(),
        profiling_id: q.profiling_id?.toString(),
        profiling_answer: q.profiling_answer?.toString(),
        created_at: q.created_at?.toISOString(),
        instansi: {
          ...q.instansi,
          agency_id: q.instansi?.agency_id?.toString(),
          agency_name: q.instansi?.agency_name?.toString(),
          agency_category_id: q.instansi?.agency_category_id?.toString(),
        },
        instrument_profiling: {
          ...q.instrument_profiling,
          id: q.instrument_profiling?.id?.toString(),
          name: q.instrument_profiling?.name?.toString(),
        },
        user: {
          ...q.user,
          id: q.user?.id?.toString(),
          username: q.user?.username?.toString(),
          email: q.user?.email?.toString(),
        },
      }));
      return res.status(200).json(profilingSafe);
    } catch (error: any) {
      console.error("GET corpu_profiling error:", error?.message, error);
      return res.status(500).json({
        error: "Failed to fetch profiling data",
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
        profiling_id,
        profiling_answer,
      } = req.body;

      if (!id || !agency_id) {
        return res.status(400).json({
          error: "Missing required fields: id, dimension_id, indicator_id",
        });
      }

      const profiling = await prisma.corpu_profiling.create({
        data: {
          id,
          agency_id,
          year,
          created_by,
          profiling_id,
          profiling_answer,
        },
      });

      const profilingSafe = {
        ...profiling,
        id: profiling.id?.toString(),
        agency_id: profiling.agency_id?.toString(),
        year: profiling.year?.toString(),
        created_by: profiling.created_by?.toString(),
        profiling_id: profiling.profiling_id?.toString(),
        profiling_answer: profiling.profiling_answer?.toString(),
        created_at: profiling.created_at?.toISOString(),
      };

      return res.status(201).json(profilingSafe);
    } catch (error: any) {
      if (error.code && error.meta) {
        console.error("Prisma error:", error.code, error.meta);
      }
      console.error("POST corpu_profiling error:", error?.message, error);
      return res.status(500).json({
        error: "Failed to create profiling",
        detail: error?.message || error,
      });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
