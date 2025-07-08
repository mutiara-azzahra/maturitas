"use client"
import React from "react";
import Navbar from '@/src/components/sections/Navbar';
import Footer from '@/src/components/sections/Footer';
import { Button } from '@/src/components/ui/button';
import { Plus, Pencil, Delete } from 'lucide-react';

const sidebarMenu = [
  { label: 'Daftar Pertanyaan', href: '/daftar-pertanyaan' },
  { label: 'Input Survey', href: '/input-survey' },
  { label: 'Profile', href: '/profile' },
  { label: 'Hasil', href: '/results' },
];

const pertanyaanList = [
  { id: 1, pertanyaan: 'Bagaimana tingkat pemahaman pegawai terhadap visi dan misi organisasi?', jenisPertanyaan: 'Pilihan Ganda'},
  { id: 2, pertanyaan: 'Apakah organisasi memiliki program pengembangan kompetensi?', jenisPertanyaan: 'Pilihan Ganda' },
  { id: 3, pertanyaan: 'Seberapa sering dilakukan evaluasi kinerja pegawai?', jenisPertanyaan: 'Pilihan Ganda' },
  { id: 4, pertanyaan: 'Apakah tersedia platform knowledge management?', jenisPertanyaan: 'Pilihan Ganda' },
];

export default function DaftarPertanyaanPage() {
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
          <h1 className="text-2xl font-bold mb-6" style={{ color: 'var(--corpu-primary)' }}>
            Master Data Pertanyaan
          </h1>
          <div className="w-full max-w-full bg-white rounded-xl shadow p-6">
            <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-2 px-4 border-b text-center">No</th>
                  <th className="py-2 px-4 border-b text-center">Pertanyaan</th>
                  <th className="py-2 px-4 border-b text-center">Jenis Pertanyaan</th>
                  <th className="py-2 px-4 border-b text-center">Jenis Pertanyaan</th>
                </tr>
              </thead>
              <tbody className="items-center">
                {pertanyaanList.map((item, idx) => (
                  <tr key={item.id} className="hover:bg-blue-50">
                    <td className="py-2 px-4 border-b w-12">{idx + 1}</td>
                    <td className="py-2 px-4 border-b">{item.pertanyaan}</td>
                    <td className="py-2 px-4 border-b">{item.jenisPertanyaan}</td>
                    <td className="py-2 px-4 border-b">
                      <Button variant="outline" size="sm" className="mr-1 border-blue-500 text-blue-600 hover:bg-blue-50 hover:border-blue-600 focus:ring-2 focus:ring-blue-200" type="button" onClick={() => alert('Tambah data')} aria-label="Tambah">
                        <Plus />
                      </Button>
                      <Button variant="outline" size="sm" className="mr-1 border-amber-500 text-amber-600 hover:bg-amber-50 hover:border-amber-600 focus:ring-2 focus:ring-amber-200" type="button" onClick={() => alert('Edit data')} aria-label="Edit">
                        <Pencil />
                      </Button>
                      <Button variant="outline" size="sm" className="border-red-500 text-red-600 hover:bg-red-50 hover:border-red-600 focus:ring-2 focus:ring-red-200" type="button" onClick={() => alert('Hapus data')} aria-label="Hapus">
                        <Delete />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
