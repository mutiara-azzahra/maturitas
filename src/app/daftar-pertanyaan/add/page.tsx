"use client";
import React from "react";
import Navbar from "@/src/components/sections/Navbar";
import { Button } from "@/src/components/ui/button";
import { Toaster } from "@/src/components/ui/sonner";
import { Plus, Pencil, Delete } from "lucide-react";

const sidebarMenu = [
  { label: "Daftar Pertanyaan", href: "/daftar-pertanyaan" },
  { label: "Input Survey", href: "/input-survey" },
  { label: "Profile", href: "/profile" },
  { label: "Hasil", href: "/results" },
];

export default function UbahPertanyaan() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-gray-100 flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r shadow-sm hidden md:block">
          <nav className="flex flex-col gap-2 p-6">
            {sidebarMenu.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-2 px-4 rounded-lg text-gray-700 hover:bg-blue-50 font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </aside>
        {/* Main Content */}
        <section className="flex-1 flex flex-col items-left justify-start p-8">
          <h1
            className="text-2xl font-bold mb-6"
            style={{ color: "var(--corpu-primary)" }}
          >
            Edit Data Pertanyaan
          </h1>
          <div className="max-w-full bg-white rounded-xl shadow p-6">
            <form className="flex flex-col gap-6">
              {/* Input Pertanyaan */}
              <div>
                <label className="block text-sm font-medium font-bold mb-3">
                  <b>Pertanyaan</b>
                </label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                  placeholder="Masukkan pertanyaan disini"
                  defaultValue="Bagaimana tingkat pemahaman pegawai terhadap visi dan misi organisasi?"
                />
              </div>
              {/* Pilihan Jenis Pertanyaan */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  <b>Jenis Pertanyaan</b>
                </label>
                <div className="flex gap-2">
                  <Button type="button" variant="default">
                    Pilihan Ganda
                  </Button>
                  <Button type="button" variant="outline">
                    Isian
                  </Button>
                </div>
              </div>
              {/* Input Jawaban Pilihan Ganda */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Jawaban Pilihan Ganda
                </label>
                <div className="flex flex-col gap-2">
                  {["A", "B", "C", "D", "E"].map((opt, idx) => (
                    <div key={opt} className="flex items-center gap-2">
                      <span className="w-6 text-center font-bold">{opt}.</span>
                      <input
                        type="text"
                        className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                        placeholder={`Jawaban ${opt}`}
                        defaultValue={
                          idx === 0
                            ? "Sangat Paham"
                            : idx === 1
                            ? "Cukup Paham"
                            : idx === 2
                            ? "Kurang Paham"
                            : idx === 3
                            ? "Tidak Paham"
                            : idx === 4
                            ? "Tidak Tahu"
                            : ""
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-red-500 text-red-600 hover:bg-red-50 hover:border-red-600 focus:ring-2 focus:ring-red-200"
                  type="button"
                  onClick={() => alert("Hapus data")}
                  aria-label="Hapus"
                >
                  Batal
                  <Toaster />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-green-500 text-green-600 hover:bg-green-50 hover:border-green-600 focus:ring-2 focus:ring-green-200"
                  type="submit"
                  onClick={() => alert("Hapus data")}
                  aria-label="Hapus"
                >
                  Simpan
                </Button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
