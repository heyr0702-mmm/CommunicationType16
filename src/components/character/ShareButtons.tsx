"use client";

import React from 'react';
import { Button } from "@/components/ui/Button";
import { CommunicationTypeMeta } from "@/lib/types";
import { ResultContent } from "@/types/content";

interface ShareButtonsProps {
    character: CommunicationTypeMeta;
    content: ResultContent;
}

export const ShareButtons: React.FC<ShareButtonsProps> = ({ character, content }) => {
    const shareText = `私のコミュタイプは【${character.label}】でした！\nキャッチコピー: ${content.free.catchCopy}\n\n#16コミュニケーションタイプ診断`;
    const shareUrl = `https://communicationtype16.com/types/${character.code}`;
    const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    const lineShareUrl = `https://line.me/R/msg/text/?${encodeURIComponent(shareText + "\n" + shareUrl)}`;

    return (
        <div className="mt-8 text-center space-y-4">
            <p className="font-bold text-gray-600 mb-2">結果をシェアする</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto">
                    <Button size="lg" className="w-full sm:w-auto bg-black text-white border-black hover:bg-gray-800 shadow-md">
                        X (Twitter) でシェア
                    </Button>
                </a>
                <a href={lineShareUrl} target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto">
                    <Button size="lg" className="w-full sm:w-auto bg-[#06C755] text-white border-[#06C755] hover:bg-[#05b34c] shadow-md">
                        LINE で送る
                    </Button>
                </a>
                <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gray-200 text-gray-800 border-gray-300 hover:bg-gray-300 shadow-md"
                    onClick={() => {
                        navigator.clipboard.writeText(shareText + "\n" + shareUrl);
                        alert("リンクをコピーしました！");
                    }}
                >
                    リンクをコピー
                </Button>
            </div>
        </div>
    );
};
