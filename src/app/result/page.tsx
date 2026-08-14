import { Suspense } from "react";
import { Metadata } from "next";
import Link from "next/link";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { ResultView } from "./ResultView";

// Static metadata for static export compatibility
export const metadata: Metadata = {
    title: "診断結果",
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
    robots: {
        index: false,
        follow: true,
    },
};

// 診断結果はURLパラメータから計算するため、本体は常にクライアント側で描画される。
// 空ページにしないため、結果の読み方をこの静的セクションで説明しておく。
function ResultFallback() {
    return (
        <NotebookLayout className="flex flex-col space-y-6 py-8">
            <h1 className="text-2xl font-bold font-handwriting text-center">あなたの診断結果</h1>
            <p className="text-center text-gray-500 text-sm">結果を計算しています…</p>

            <div className="space-y-4 text-gray-800 leading-relaxed font-medium text-sm">
                <h2 className="text-lg font-bold text-ink border-l-4 border-neon-blue pl-3 py-1 mt-4">
                    結果の見方
                </h2>
                <p>
                    このページには、あなたのコミュニケーションタイプ（16タイプのいずれか）と、Power（主導権）・Warmth（温度感）・Speed（テンポ）・Volume（存在感）の4軸それぞれがどちらに寄っているかが表示されます。
                </p>
                <p>
                    注目してほしいのは、タイプ名よりも
                    <strong>バーの傾き</strong>
                    です。真ん中に近い軸は、相手や場面によって振れやすい軸ということ。家族といるときと職場にいるときで喋り方が違うと感じる人は、その軸が中央付近にあることが多いです。
                </p>
                <p>
                    <strong>16タイプに優劣はありません。</strong>
                    会議を前に進める人も、みんなの声を拾う人も、どちらもその場に必要な役割です。結果は、あなたを評価するためのものではなく、「自分はこういう喋り方をしているんだ」と気づくためのものです。
                </p>
                <p className="text-gray-600">
                    結果が表示されない場合は、診断をもう一度受け直してください。
                </p>
            </div>

            <div className="flex flex-col items-center gap-2 text-sm pt-4">
                <Link href="/diagnosis" className="text-neon-blue hover:underline">
                    → 診断をやり直す（全28問・約3分）
                </Link>
                <Link href="/types" className="text-neon-blue hover:underline">
                    → 16タイプ一覧を見る
                </Link>
                <Link href="/compatibility" className="text-neon-blue hover:underline">
                    → 2人の相性診断を試す
                </Link>
            </div>
        </NotebookLayout>
    );
}

export default function ResultPage() {
    return (
        <Suspense fallback={<ResultFallback />}>
            <ResultView />
        </Suspense>
    );
}
