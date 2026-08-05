"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { Button } from "@/components/ui/Button";
import { BipolarBar } from "@/components/ui/BipolarBar";
import { calculateScores, determineCharacter, Answers } from "@/lib/logic";
import { CommunicationTypeMeta, AxisResult } from "@/lib/types";
import { COMMUNICATION_TYPE_META } from "@/lib/constants";
import { RESULT_CONTENTS } from "@/data/contents";
import { ResultContent as ResultContentData } from "@/types/content";
import { AdUnit } from "@/components/AdUnit";
import { Lock } from "lucide-react";
import { CharacterProfile } from "@/components/character/CharacterProfile";
import { DetailedReport } from "@/components/character/DetailedReport";
import { ShareButtons } from "@/components/character/ShareButtons";

export function ResultView() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [character, setCharacter] = useState<CommunicationTypeMeta | null>(null);
    const [axisResults, setAxisResults] = useState<AxisResult[]>([]);
    const [content, setContent] = useState<ResultContentData | null>(null);
    const [isUnlocked, setIsUnlocked] = useState(false);

    useEffect(() => {
        const data = searchParams.get("data");
        const code = searchParams.get("code");

        if (data) {
            try {
                const answers: Answers = JSON.parse(decodeURIComponent(data));
                const results = calculateScores(answers);
                const char = determineCharacter(results);

                setAxisResults(results);
                setCharacter(char);
                setContent(RESULT_CONTENTS[char.code] || RESULT_CONTENTS["DEIX"]);
            } catch (error) {
                console.error("Error parsing result data:", error);
                router.push("/");
            }
        } else if (code) {
            const char = COMMUNICATION_TYPE_META.find(c => c.code === code);
            if (char) {
                setCharacter(char);
                setAxisResults([]); // No graph for direct access
                setContent(RESULT_CONTENTS[char.code] || RESULT_CONTENTS["DEIX"]);
            } else {
                router.push("/");
            }
        } else {
            router.push("/");
        }
    }, [searchParams, router]);

    if (!character || !content) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-xl font-bold">Calculating...</p>
            </div>
        );
    }

    // shareText/shareUrl logic moved to ShareButtons component, but if needed elsewhere...
    // Removed unused logic

    const AXIS_CODES: Record<string, { left: string; right: string }> = {
        Power: { left: 'R', right: 'D' },
        Warmth: { left: 'C', right: 'E' },
        Speed: { left: 'S', right: 'I' },
        Volume: { left: 'Z', right: 'X' },
    };

    return (
        <NotebookLayout className="flex flex-col space-y-8 pb-20">
            {/* 🟢 Free Area (Refactored to CharacterProfile) */}
            <CharacterProfile character={character} content={content}>
                {axisResults.length > 0 && (
                    <div className="space-y-6 p-4 border-2 border-dashed border-gray-300 rounded-lg bg-white/50 mb-8">
                        <h3 className="text-center font-bold border-b-2 border-gray-300 pb-2 mb-4 font-handwriting text-xl">
                            成分分析 (Parameter Analysis)
                        </h3>
                        {axisResults.map((result) => (
                            <div key={result.axis}>
                                <p className="text-xs font-bold text-gray-500 mb-1 text-center">
                                    {result.axis === 'Power' && 'Power (主導権)'}
                                    {result.axis === 'Warmth' && 'Warmth (温度感)'}
                                    {result.axis === 'Speed' && 'Speed (テンポ)'}
                                    {result.axis === 'Volume' && 'Volume (存在感)'}
                                </p>
                                <BipolarBar
                                    value={result.percentage}
                                    labelLeft={result.labelNegative}
                                    labelRight={result.labelPositive}
                                    codeLeft={AXIS_CODES[result.axis]?.left}
                                    codeRight={AXIS_CODES[result.axis]?.right}
                                    color={
                                        result.axis === 'Power' ? 'yellow' :
                                            result.axis === 'Warmth' ? 'pink' :
                                                result.axis === 'Speed' ? 'blue' : 'green'
                                    }
                                />
                            </div>
                        ))}
                    </div>
                )}
            </CharacterProfile>

            {/* 🟡 Unlocked Area (Accordion) */}
            <div className="max-w-2xl mx-auto w-full">
                {!isUnlocked ? (
                    <div
                        onClick={() => setIsUnlocked(true)}
                        className="cursor-pointer group relative overflow-hidden rounded-lg border-2 border-dashed border-gray-400 bg-gray-100 p-8 text-center transition-all hover:bg-gray-200"
                    >
                        <div className="absolute inset-0 flex items-center justify-center opacity-10">
                            <Lock size={100} />
                        </div>
                        <div className="relative z-10 flex flex-col items-center gap-4">
                            <span className="text-4xl">👇</span>
                            <h3 className="text-xl font-bold text-gray-800">
                                診断結果の続き（詳細レポート）を読む
                            </h3>
                            <p className="text-sm text-gray-600">
                                会話のすれ違いポイントや、相性の良いタイプを見る
                            </p>
                            <Button variant="secondary" className="mt-2 group-hover:scale-105 transition-transform">
                                タップして展開
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className="animate-in fade-in slide-in-from-top-4 duration-500">
                        <DetailedReport content={content} onClose={() => setIsUnlocked(false)} />
                    </div>
                )}
            </div>

            {/* Share Buttons (Moved) */}
            <ShareButtons character={character} content={content} />

            {/* Compatibility CTA */}
            <div className="max-w-2xl mx-auto w-full bg-gradient-to-r from-pink-50 to-blue-50 p-6 rounded-lg border-2 border-neon-pink text-center space-y-4">
                <p className="font-bold text-lg">💕 2人の相性を診断しよう</p>
                <p className="text-sm text-gray-600">
                    友達・恋人・家族にこの診断をシェアして、<br />
                    お互いのタイプで相性チェック！
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                    <Link href={`/compatibility?my=${character.code}`}>
                        <Button variant="secondary" className="border-2 border-neon-pink hover:bg-neon-pink/10">
                            💕 相性診断ページへ
                        </Button>
                    </Link>
                </div>
            </div>

            {/* AdUnit before footer */}
            <AdUnit slot="1122334455" />

            <div className="text-center pt-8">
                <Link href="/">
                    <Button variant="secondary">トップに戻る</Button>
                </Link>
            </div>
        </NotebookLayout>
    );
}
