"use client"
import React, { useState } from 'react';
import { Button } from '@/src/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card';
import Navbar from '@/src/components/sections/Navbar';
import Footer from '@/src/components/sections/Footer';
import { ChevronLeft, ChevronRight, Save, Send } from 'lucide-react';

// Dummy survey questions
const surveyQuestions = [
  {
    id: 1,
    question: "Apakah Instansi Bapak/Ibu memiliki bahan pembelajaran terkait Literasi Digital?",
    options: [
      "Ada",
      "Tidak ada",
    ]
  },
];

export default function InputSurveyPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{[key: number]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAnswerChange = (questionId: number, answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < surveyQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      alert('Survey berhasil dikirim! Terima kasih atas partisipasi Anda.');
      setIsSubmitting(false);
      // Redirect to results page
      window.location.href = '/results';
    }, 2000);
  };

  const progress = ((currentQuestion + 1) / surveyQuestions.length) * 100;
  const currentQ = surveyQuestions[currentQuestion];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-xl font-bold text-gray-900 mb-4">
              Survey Maturitas ASN Corpu Instansi
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Identifikasi Knowledge Management terkait Kompetensi Generik Nasional
            </p>
          </div>

          {/* Profile Reminder */}
          <div className="mb-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-yellow-600 text-xl">👤</span>
                </div>
                <div>
                  <h3 className="font-semibold text-yellow-800">
                    Lengkapi Profile Anda
                  </h3>
                  <p className="text-sm text-yellow-700">
                    Untuk hasil survey yang lebih akurat, silakan lengkapi profile Anda terlebih dahulu.
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                onClick={() => window.location.href = '/profile'}
                className="border-yellow-300 text-yellow-700 hover:bg-yellow-100"
              >
                Isi Profile
              </Button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">
                Pertanyaan {currentQuestion + 1} dari {surveyQuestions.length}
              </span>
              <span className="text-sm font-medium text-gray-700">
                {Math.round(progress)}% selesai
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Question Card */}
          <Card className="mb-8 shadow-lg border-0">
            <CardHeader className="bg-gradient-to-r p-5 from-blue-600 to-blue-700 text-white rounded-t-lg">
              <CardTitle className="text-xl">
                {currentQ.question}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-4">
                {currentQ.options.map((option, index) => (
                  <label 
                    key={index} 
                    className="flex items-start gap-4 p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 cursor-pointer transition-all group"
                  >
                    <input
                      type="radio"
                      name={`question-${currentQ.id}`}
                      value={option}
                      checked={answers[currentQ.id] === option}
                      onChange={(e) => handleAnswerChange(currentQ.id, e.target.value)}
                      className="mt-1 w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-gray-700 group-hover:text-gray-900 leading-relaxed">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Sebelumnya
            </Button>

            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => alert('Progress disimpan!')}
                className="flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                Simpan Progress
              </Button>

              {currentQuestion === surveyQuestions.length - 1 ? (
                <Button
                  onClick={handleSubmit}
                  disabled={!answers[currentQ.id] || isSubmitting}
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? 'Mengirim...' : 'Kirim Survey'}
                </Button>
              ) : (
                <Button
                  onClick={nextQuestion}
                  disabled={!answers[currentQ.id]}
                  className="flex items-center gap-2"
                >
                  Selanjutnya
                  <ChevronRight className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>

          {/* Survey Info */}
          <div className="mt-12 bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              Informasi Survey
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-800">
              <div>
                <strong>Waktu Pengisian:</strong> ± 15-20 menit
              </div>
              <div>
                <strong>Total Pertanyaan:</strong> {surveyQuestions.length} pertanyaan
              </div>
              <div>
                <strong>Kategori:</strong> 8 aspek maturitas
              </div>
              <div>
                <strong>Hasil:</strong> Laporan komprehensif dalam 3 hari kerja
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-blue-200">
              <p className="text-sm text-blue-700">
                <strong>💡 Tips:</strong> Pastikan Anda telah mengisi{' '}
                <button 
                  onClick={() => window.location.href = '/profile'}
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  profile lengkap
                </button>
                {' '}untuk mendapatkan hasil analisis yang lebih personal dan akurat.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
