import { Suspense } from "react";
import { Metadata } from "next";
import { ResultView } from "./ResultView";

// Static metadata for static export compatibility
export const metadata: Metadata = {
    title: "診断結果 | 16コミュニケーションタイプ診断",
    description: "あなたの会話・コミュニケーションスタイルを16タイプで診断します。",
    openGraph: {
        title: "私のコミュタイプ診断結果 | 16コミュニケーションタイプ診断",
        description: "あなたの会話・コミュニケーションスタイルを16タイプで診断します。",
        images: [
            {
                url: "https://communicationtype16.com/images/ogp-default.png",
                width: 1200,
                height: 630,
                alt: "16コミュニケーションタイプ診断",
            },
        ],
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "私のコミュタイプ診断結果 | 16コミュニケーションタイプ診断",
        description: "あなたの会話・コミュニケーションスタイルを16タイプで診断します。",
        images: ["https://communicationtype16.com/images/ogp-default.png"],
    },
};

export default function ResultPage() {
    return (
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
            <ResultView />
        </Suspense>
    );
}
