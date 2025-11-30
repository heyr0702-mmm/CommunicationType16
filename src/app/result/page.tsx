"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { calculateScores, determineCharacter, Answers } from "@/lib/logic";
import { CommunicationTypeMeta, AxisResult } from "@/lib/types";

function ResultContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [character, setCharacter] = useState<CommunicationTypeMeta | null>(null);
    const [axisResults, setAxisResults] = useState<AxisResult[]>([]);

    useEffect(() => {
        const data = searchParams.get("data");
        if (!data) {
            router.push("/");
            return;
        }

        try {
            const answers: Answers = JSON.parse(decodeURIComponent(data));
            const results = calculateScores(answers);
            const char = determineCharacter(results);

            setAxisResults(results);
            setCharacter(char);
        } catch (error) {
            console.error("Error parsing result data:", error);
            router.push("/");
        }
    }, [searchParams, router]);

    if (!character) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-xl font-bold">Calculating...</p>
            </div>
        );
    }

    const shareText = `私のコミュタイプは【${character.label}】でした！\nキャッチコピー: ${character.catchCopy}\n\n#16コミュニケーションタイプ診断`;
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent("https://vibetype16.vercel.app")}`;

    return (
        <NotebookLayout className="flex flex-col space-y-8 pb-20">
            {/* Header Card (Free Area) */}
            <div className="bg-white/90 p-6 rounded-lg notebook-border shadow-lg transform rotate-1 max-w-2xl mx-auto w-full relative overflow-hidden">
                {/* Tape decoration */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-white/50 border-l border-r border-gray-200 rotate-[-2deg] z-10 opacity-70"></div>

                <div className="text-center space-y-4 mb-8">
                    <p className="text-sm font-bold text-gray-500 tracking-widest">COMMUNICATION TYPE</p>
                    <h1 className="text-4xl sm:text-6xl font-bold font-handwriting tracking-widest text-ink inline-block border-b-4 border-neon-pink pb-2">
                        {character.label}
                    </h1>
                    <p className="text-lg sm:text-xl font-bold mt-4 bg-neon-yellow/40 inline-block px-4 py-1 transform -rotate-1 rounded-sm">
                        {character.catchCopy}
                    </p>
                </div>

                <div className="space-y-6 p-4 border-2 border-dashed border-gray-300 rounded-lg bg-white/50">
                    <h3 className="text-center font-bold border-b-2 border-gray-300 pb-2 mb-4 font-handwriting text-xl">
                        成分分析 (Parameter Analysis)
                    </h3>
                    {axisResults.map((result) => (
                        <ProgressBar
                            key={result.axis}
                            value={result.percentage}
                            labelLeft={result.labelNegative}
                            labelRight={result.labelPositive}
                            color={
                                result.axis === 'Power' ? 'yellow' :
                                    result.axis === 'Warmth' ? 'pink' :
                                        result.axis === 'Speed' ? 'blue' : 'yellow'
                            }
                        />
                    ))}

                    <div className="mt-6 p-4 bg-white rounded border border-gray-200">
                        <p className="text-sm text-gray-600 font-medium leading-relaxed">
                            {/* Placeholder for short summary */}
                            考えるより先に口が動く、場の空気を転がすムードメーカーです。（※ダミーテキスト）
                        </p>
                    </div>
                </div>

                <div className="mt-6 text-center">
                    <a href={shareUrl} target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto">
                        <Button size="lg" className="w-full sm:w-auto bg-black text-white border-black hover:bg-gray-800 shadow-md">
                            X (Twitter) でシェア
                        </Button>
                    </a>
                </div>
            </div>

            {/* Unlock Area (Dummy) */}
            <div className="max-w-2xl mx-auto w-full relative mt-8 group cursor-pointer">
                <div className="absolute inset-0 bg-gray-200/80 backdrop-blur-sm z-10 flex flex-col items-center justify-center rounded-lg border-2 border-gray-300 border-dashed">
                    <div className="bg-white p-4 rounded-full shadow-lg mb-4">
                        <span className="text-2xl">🔒</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">TAP TO UNLOCK</h3>
                    <p className="text-sm text-gray-600 font-medium">
                        相手との会話ですれ違いやすいポイントをチェックする
                    </p>
                </div>

                {/* Blurred Content underneath */}
                <div className="bg-white p-6 rounded-lg border-2 border-gray-200 opacity-50 filter blur-sm select-none">
                    <h3 className="text-xl font-bold border-b border-gray-300 pb-2 mb-4">相性分析</h3>
                    <p>ここに詳細な相性分析が表示されます。ここに詳細な相性分析が表示されます。</p>
                    <p>ここに詳細な相性分析が表示されます。ここに詳細な相性分析が表示されます。</p>
                    <p>ここに詳細な相性分析が表示されます。ここに詳細な相性分析が表示されます。</p>
                </div>
            </div>

            <div className="text-center pt-8">
                <Link href="/">
                    <Button variant="secondary">トップに戻る</Button>
                </Link>
            </div>
        </NotebookLayout>
    );
}

export default function ResultPage() {
    return (
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
            <ResultContent />
        </Suspense>
    );
}
