import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // GET method to fetch all instansi
  if (req.method === "GET") {
    try {
      const instansi = await prisma.instansi.findMany();
      const instansiSafe = instansi.map((q: any) => ({
        ...q,
        id: q.id?.toString(),
        agency_id: q.agency_id?.toString(),
        agency_name: q.agency_name?.toString(),
        agency_category_id: q.agency_category_id?.toString(),
      }));
      return res.status(200).json(instansiSafe);
    } catch (error: any) {
      console.error("GET instansi error:", error?.message, error);
      return res.status(500).json({
        error: "Failed to fetch instansi",
        detail: error?.message || error,
      });
    }
  }

  // POST method to create a new instansi
  if (req.method === "POST") {
    try {
      // Log body untuk debug
      console.log("POST body:", req.body);
      const { id, agency_id, agency_name, agency_category_id } = req.body;

      // Validasi field wajib
      if (!id || !agency_id || !agency_name || !agency_category_id) {
        return res.status(400).json({
          error:
            "Missing required fields: id, agency_id, agency_name, agency_category_id",
        });
      }

      const instansi = await prisma.instansi.create({
        data: {
          id,
          agency_id,
          agency_name,
          agency_category_id,
        },
      });

      const instansiSafe = {
        ...instansi,
        id: instansi.id?.toString(),
        agency_id: instansi.agency_id?.toString(),
        agency_name: instansi.agency_name?.toString(),
        agency_category_id: instansi.agency_category_id?.toString(),
      };

      return res.status(201).json(instansiSafe);
    } catch (error: any) {
      if (error.code && error.meta) {
        console.error("Prisma error:", error.code, error.meta);
      }
      console.error("POST instansi error:", error?.message, error);
      return res.status(500).json({
        error: "Failed to create instansi",
        detail: error?.message || error,
      });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
