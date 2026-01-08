"use client";

import { useState } from 'react';
import Link from 'next/link';
import { COMMUNICATION_TYPE_META } from "@/lib/constants";
import { RESULT_CONTENTS } from "@/data/contents";
import { CharacterProfile } from "@/components/character/CharacterProfile";
import { DetailedReport } from "@/components/character/DetailedReport";
import { ShareButtons } from "@/components/character/ShareButtons";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { Button } from "@/components/ui/Button";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Props {
    code: string;
}

export function TypeDetailClient({ code }: Props) {
    const [isReportOpen, setIsReportOpen] = useState(false);

    const char = COMMUNICATION_TYPE_META.find((c) => c.code === code);
    const content = RESULT_CONTENTS[code];

    if (!char || !content) {
        return null;
    }

    // JSON-LD Structured Data
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: `${char.label} (${char.code}) の性格分析`,
        image: `https://communicationtype16.com/images/characters/${char.code}.png`,
        author: {
            '@type': 'Organization',
            name: 'VibeType16',
            url: 'https://communicationtype16.com'
        },
        description: content.free.catchCopy,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://communicationtype16.com/types/${code}`
        }
    };

    return (
        <NotebookLayout className="flex flex-col space-y-8 pb-20">
            {/* JSON-LD Script */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Character Profile (No Graph) */}
            <CharacterProfile character={char} content={content}>
                {/* No graph child for static pages */}
            </CharacterProfile>

            {/* Detailed Report (Expandable) */}
            <div className="max-w-2xl mx-auto w-full">
                <button
                    onClick={() => setIsReportOpen(!isReportOpen)}
                    className="w-full bg-gray-100 p-4 rounded-lg border-2 border-dashed border-gray-400 text-center hover:bg-gray-200 transition-colors"
                >
                    <div className="flex items-center justify-center gap-2">
                        {isReportOpen ? (
                            <ChevronUp className="w-5 h-5 text-gray-600" />
                        ) : (
                            <ChevronDown className="w-5 h-5 text-gray-600" />
                        )}
                        <h2 className="text-lg font-bold text-gray-700">
                            {isReportOpen ? '詳細レポートを閉じる' : '👇 タップして詳細レポートを見る'}
                        </h2>
                    </div>
                </button>

                {isReportOpen && (
                    <div className="pt-0 p-4 border-2 border-t-0 border-dashed border-gray-400 rounded-b-lg bg-gray-50/50 animate-in slide-in-from-top-2 duration-300">
                        <DetailedReport content={content} />
                    </div>
                )}
            </div>

            {/* Share Buttons */}
            <ShareButtons character={char} content={content} />

            {/* Navigation / Call to Action */}
            <div className="max-w-2xl mx-auto w-full text-center space-y-6 mt-12 bg-white/90 p-8 rounded-lg notebook-border">
                <h3 className="text-xl font-bold font-handwriting text-ink">あなたのタイプは？</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                    16のタイプから、あなたのコミュニケーションスタイルを診断しよう！
                </p>
                <Link href="/diagnosis">
                    <Button size="lg" className="w-full text-lg py-6 animate-pulse shadow-xl border-2 border-black bg-black text-white hover:bg-gray-800">
                        診断スタート
                    </Button>
                </Link>
                <div className="pt-2">
                    <Link href="/types">
                        <Button variant="ghost" className="text-gray-500">← タイプ一覧に戻る</Button>
                    </Link>
                </div>
            </div>
        </NotebookLayout>
    );
}
