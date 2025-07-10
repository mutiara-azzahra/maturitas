"use client";
import React from "react";
import Navbar from "@/src/components/sections/Navbar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { ChartContainer } from "@/src/components/ui/chart";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  Legend as RechartsLegend,
  ResponsiveContainer,
} from "recharts";

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
            Grafik Hasil Survei 2024
          </h1>
          <section className="flex flex-col gap-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Pie Chart 1 */}
              <Card>
                <CardHeader>
                  <CardTitle>Distribusi Jawaban Survey A</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={{}}>
                    <ResponsiveContainer width="100%" height={250}>
                      <PieChart>
                        <Pie
                          data={[
                            { name: "A", value: 12, color: "#2563eb" },
                            { name: "B", value: 19, color: "#22d3ee" },
                            { name: "C", value: 3, color: "#fbbf24" },
                            { name: "D", value: 5, color: "#f87171" },
                            { name: "E", value: 2, color: "#a3e635" },
                          ]}
                          dataKey="value"
                          nameKey="name"
                          outerRadius={80}
                        >
                          {[
                            "#2563eb",
                            "#22d3ee",
                            "#fbbf24",
                            "#f87171",
                            "#a3e635",
                          ].map((color) => (
                            <Cell key={color} fill={color} />
                          ))}
                        </Pie>
                        <RechartsTooltip />
                        <RechartsLegend />
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                  <div className="text-sm text-gray-600 mt-2">
                    Pie chart distribusi jawaban untuk pertanyaan A.
                  </div>
                </CardContent>
              </Card>
              {/* Pie Chart 2 */}
              <Card>
                <CardHeader>
                  <CardTitle>Distribusi Jawaban Survey B</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={{}}>
                    <ResponsiveContainer width="100%" height={250}>
                      <PieChart>
                        <Pie
                          data={[
                            { name: "A", value: 7, color: "#f59e42" },
                            { name: "B", value: 11, color: "#6366f1" },
                            { name: "C", value: 5, color: "#f43f5e" },
                            { name: "D", value: 8, color: "#10b981" },
                            { name: "E", value: 3, color: "#fbbf24" },
                          ]}
                          dataKey="value"
                          nameKey="name"
                          outerRadius={80}
                        >
                          {[
                            "#f59e42",
                            "#6366f1",
                            "#f43f5e",
                            "#10b981",
                            "#fbbf24",
                          ].map((color) => (
                            <Cell key={color} fill={color} />
                          ))}
                        </Pie>
                        <RechartsTooltip />
                        <RechartsLegend />
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                  <div className="text-sm text-gray-600 mt-2">
                    Pie chart distribusi jawaban untuk pertanyaan B.
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {/* Bar Chart 1 */}
              <Card>
                <CardHeader>
                  <CardTitle>Responden per Kategori</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={{}}>
                    <ResponsiveContainer width="100%" height={250}>
                      <BarChart
                        data={[
                          { name: "Komitmen", value: 30 },
                          { name: "Struktur", value: 25 },
                          { name: "Kurikulum", value: 20 },
                          { name: "Teknologi", value: 15 },
                        ]}
                      >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="value" fill="#2563eb" />
                        <RechartsTooltip />
                        <RechartsLegend />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                  <div className="text-sm text-gray-600 mt-2">
                    Bar chart jumlah responden per kategori.
                  </div>
                </CardContent>
              </Card>
              {/* Bar Chart 2 */}
              <Card>
                <CardHeader>
                  <CardTitle>Skor Rata-rata per Kategori</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={{}}>
                    <ResponsiveContainer width="100%" height={250}>
                      <BarChart
                        data={[
                          { name: "Komitmen", value: 4.2 },
                          { name: "Struktur", value: 3.8 },
                          { name: "Kurikulum", value: 4.0 },
                          { name: "Teknologi", value: 3.5 },
                        ]}
                      >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="value" fill="#f59e42" />
                        <RechartsTooltip />
                        <RechartsLegend />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                  <div className="text-sm text-gray-600 mt-2">
                    Bar chart skor rata-rata per kategori.
                  </div>
                </CardContent>
              </Card>
              {/* Bar Chart 3 */}
              <Card>
                <CardHeader>
                  <CardTitle>Jumlah Jawaban per Opsi</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={{}}>
                    <ResponsiveContainer width="100%" height={250}>
                      <BarChart
                        data={[
                          { name: "A", value: 10 },
                          { name: "B", value: 15 },
                          { name: "C", value: 8 },
                          { name: "D", value: 12 },
                          { name: "E", value: 5 },
                        ]}
                      >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="value" fill="#10b981" />
                        <RechartsTooltip />
                        <RechartsLegend />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                  <div className="text-sm text-gray-600 mt-2">
                    Bar chart jumlah jawaban per opsi.
                  </div>
                </CardContent>
              </Card>
              {/* Bar Chart 4 */}
              <Card>
                <CardHeader>
                  <CardTitle>Distribusi Nilai Survey</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={{}}>
                    <ResponsiveContainer width="100%" height={250}>
                      <BarChart
                        data={[
                          { name: "1", value: 2 },
                          { name: "2", value: 8 },
                          { name: "3", value: 15 },
                          { name: "4", value: 20 },
                          { name: "5", value: 10 },
                        ]}
                      >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="value" fill="#f43f5e" />
                        <RechartsTooltip />
                        <RechartsLegend />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                  <div className="text-sm text-gray-600 mt-2">
                    Bar chart distribusi nilai survey.
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
