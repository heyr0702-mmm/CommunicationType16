"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { QUESTIONS } from "@/lib/constants";
import { Answers } from "@/lib/logic";

export default function Diagnosis() {
    const router = useRouter();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<Answers>({});
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [selectedValue, setSelectedValue] = useState<number | null>(null);

    const currentQuestion = QUESTIONS[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / QUESTIONS.length) * 100;

    const handleAnswer = (value: number) => {
        if (isTransitioning) return;

        setSelectedValue(value);
        setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }));
        setIsTransitioning(true);

        // Auto-advance after a short delay for visual feedback
        setTimeout(() => {
            if (currentQuestionIndex < QUESTIONS.length - 1) {
                setCurrentQuestionIndex((prev) => prev + 1);
                setSelectedValue(null);
                setIsTransitioning(false);
            } else {
                finishDiagnosis({ ...answers, [currentQuestion.id]: value });
            }
        }, 300);
    };

    const finishDiagnosis = (finalAnswers: Answers) => {
        const answersStr = encodeURIComponent(JSON.stringify(finalAnswers));
        router.push(`/result?data=${answersStr}`);
    };

    const handleBack = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex((prev) => prev - 1);
        } else {
            router.push("/");
        }
    };

    return (
        <NotebookLayout className="flex flex-col justify-between max-w-2xl mx-auto h-full py-4">
            {/* Header / Progress */}
            <div className="space-y-2">
                <div className="flex justify-between items-end border-b-2 border-ink pb-2">
                    <span className="font-bold font-handwriting text-xl">
                        Q.{currentQuestionIndex + 1} <span className="text-sm text-gray-500">/ {QUESTIONS.length}</span>
                    </span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden border border-ink">
                    <div
                        className="h-full bg-neon-yellow transition-all duration-300 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            {/* Question */}
            <div key={currentQuestionIndex} className="flex-grow flex items-center justify-center py-8 sm:py-12 min-h-[200px]">
                <div className="bg-white/90 p-8 rounded-lg notebook-border shadow-lg w-full flex items-center justify-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h2 className="font-bold leading-relaxed text-sm sm:text-3xl">
                        {currentQuestion.text.split('\n').map((line, i) => (
                            <span key={i} className="block mb-2 sm:mb-0 sm:inline">{line}<br className="block sm:hidden" /></span>
                        ))}
                    </h2>
                </div>
            </div>

            {/* Answer Area */}
            <div className="space-y-6 mb-8">
                {/* Scale Labels */}
                <div className="flex justify-between text-xs sm:text-sm font-bold px-2">
                    <span className="text-gray-500">No</span>
                    <span className="text-gray-500">Yes</span>
                </div>

                {/* Buttons */}
                <div className="flex justify-between items-center gap-2 sm:gap-4">
                    {/* -2: Strong No */}
                    <button
                        onClick={() => handleAnswer(-2)}
                        className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 transition-all flex items-center justify-center group ${selectedValue === -2 ? 'bg-neon-yellow border-neon-yellow scale-95' : 'border-ink bg-white active:scale-95 active:bg-gray-200 sm:hover:bg-gray-100'}`}
                    >
                        <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full transition-colors ${selectedValue === -2 ? 'bg-ink' : 'bg-ink sm:group-hover:bg-neon-pink'}`} />
                    </button>

                    {/* -1: Weak No */}
                    <button
                        onClick={() => handleAnswer(-1)}
                        className={`w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 transition-all flex items-center justify-center group ${selectedValue === -1 ? 'bg-neon-yellow border-neon-yellow scale-95' : 'border-ink bg-white active:scale-95 active:bg-gray-200 sm:hover:bg-gray-100'}`}
                    >
                        <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full transition-colors ${selectedValue === -1 ? 'bg-gray-400' : 'bg-gray-400 sm:group-hover:bg-neon-pink'}`} />
                    </button>

                    {/* 0: Neutral */}
                    <button
                        onClick={() => handleAnswer(0)}
                        className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full border-2 transition-all flex items-center justify-center ${selectedValue === 0 ? 'bg-neon-yellow border-neon-yellow scale-95' : 'border-ink bg-white active:scale-95 active:bg-gray-200 sm:hover:bg-gray-100'}`}
                    >
                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gray-300" />
                    </button>

                    {/* +1: Weak Yes */}
                    <button
                        onClick={() => handleAnswer(1)}
                        className={`w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 transition-all flex items-center justify-center group ${selectedValue === 1 ? 'bg-neon-yellow border-neon-yellow scale-95' : 'border-ink bg-white active:scale-95 active:bg-gray-200 sm:hover:bg-gray-100'}`}
                    >
                        <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full transition-colors ${selectedValue === 1 ? 'bg-gray-400' : 'bg-gray-400 sm:group-hover:bg-neon-blue'}`} />
                    </button>

                    {/* +2: Strong Yes */}
                    <button
                        onClick={() => handleAnswer(2)}
                        className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 transition-all flex items-center justify-center group ${selectedValue === 2 ? 'bg-neon-yellow border-neon-yellow scale-95' : 'border-ink bg-white active:scale-95 active:bg-gray-200 sm:hover:bg-gray-100'}`}
                    >
                        <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full transition-colors ${selectedValue === 2 ? 'bg-ink' : 'bg-ink sm:group-hover:bg-neon-blue'}`} />
                    </button>
                </div>

                <div className="text-center text-xs text-gray-400 mt-4">
                    直感で答えてください
                </div>

                {/* Back Button */}
                <button
                    onClick={handleBack}
                    disabled={isTransitioning}
                    className="text-gray-500 hover:text-gray-700 text-sm mt-4 disabled:opacity-50 transition-colors"
                >
                    ← 前の設問に戻る
                </button>
            </div>
        </NotebookLayout>
    );
}
