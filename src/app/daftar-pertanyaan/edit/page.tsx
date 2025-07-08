"use client";
import React from "react";
import Navbar from "@/src/components/sections/Navbar";
import Footer from "@/src/components/sections/Footer";
import { Button } from "@/src/components/ui/button";
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
          <div className="w-full max-w-full bg-white rounded-xl shadow p-6"></div>
        </section>
      </main>
    </div>
  );
}
