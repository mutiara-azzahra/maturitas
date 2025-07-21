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
      const instansi_kategori = await prisma.instansi.findMany();
      const instansiKategoriSafe = instansi_kategori.map((q: any) => ({
        ...q,
        id: q.id?.toString(),
        kat_instansi: q.kat_instansi?.toString(),
        instansi: q.instansi?.toString(),
      }));
      return res.status(200).json(instansiKategoriSafe);
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
      const { id, kat_instansi, instansi } = req.body;

      // Validasi field wajib
      if (!id || !kat_instansi || !instansi) {
        return res.status(400).json({
          error: "Missing required fields: id, kat_instansi, instansi",
        });
      }

      const instansiKategoriSafe = await prisma.instansi_kategori.create({
        data: {
          id,
          kat_instansi,
          instansi,
        },
      });

      return res.status(201).json(instansiKategoriSafe);
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
