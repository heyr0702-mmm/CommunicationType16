"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { Button } from "@/components/ui/Button";
import { calculateCompatibility, CompatibilityResult } from "@/lib/compatibility";
import { AdUnit } from "@/components/AdUnit";

const SITE_URL = "https://communicationtype16.com";

function CompatibilityResultContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [result, setResult] = useState<CompatibilityResult | null>(null);

    useEffect(() => {
        const type1 = searchParams.get("type1");
        const type2 = searchParams.get("type2");

        if (type1 && type2) {
            try {
                const compatibility = calculateCompatibility(type1, type2);
                setResult(compatibility);
            } catch (error) {
                console.error("Error calculating compatibility:", error);
                router.push("/compatibility");
            }
        } else {
            router.push("/compatibility");
        }
    }, [searchParams, router]);

    if (!result) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-xl font-bold">計算中...</p>
            </div>
        );
    }

    const { type1, type2, starRating, overallScore, catchCopy, axisDetails, conversationExample, goodPoints, cautionPoints, adviceFor1, adviceFor2 } = result;

    const stars = "★".repeat(starRating) + "☆".repeat(5 - starRating);

    return (
        <NotebookLayout className="flex flex-col space-y-8 py-8 pb-20">
            {/* Header */}
            <div className="text-center space-y-4">
                <span className="bg-neon-pink px-3 py-1 text-sm font-bold text-white transform -rotate-1 inline-block">
                    Compatibility Result
                </span>
                <h1 className="text-xl sm:text-2xl font-bold font-handwriting">
                    💕 {type1.label} × {type2.label}
                </h1>
            </div>

            {/* Overall Score */}
            <div className="text-center bg-white p-6 notebook-border rounded-lg max-w-md mx-auto">
                <p className="text-3xl sm:text-4xl mb-2">{stars}</p>
                <p className="text-lg font-bold text-neon-pink">相性 {overallScore}%</p>
                <p className="text-sm text-gray-700 mt-2 font-medium">「{catchCopy}」</p>
            </div>

            {/* Axis Analysis */}
            <div className="max-w-2xl mx-auto w-full space-y-4">
                <h2 className="text-lg font-bold text-center border-b-2 border-gray-300 pb-2">
                    📊 4つの軸で相性チェック
                </h2>
                <div className="space-y-6">
                    {axisDetails.map((axis) => (
                        <div key={axis.axis} className="bg-white p-4 notebook-border rounded-lg">
                            <h3 className="font-bold text-sm text-gray-600 mb-2">
                                {axis.axis === 'power' && '⚡'}
                                {axis.axis === 'warmth' && '❤️'}
                                {axis.axis === 'speed' && '🚀'}
                                {axis.axis === 'volume' && '🔊'}
                                {' '}{axis.axisLabel}
                            </h3>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-xs text-gray-500">似てる</span>
                                <div className="flex-1 h-2 bg-gray-200 rounded-full relative">
                                    <div
                                        className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-neon-pink rounded-full border-2 border-white shadow"
                                        style={{ left: `${(axis.position / 4) * 100}%`, transform: 'translate(-50%, -50%)' }}
                                    />
                                </div>
                                <span className="text-xs text-gray-500">真逆</span>
                            </div>
                            <p className="text-sm text-gray-700">{axis.comment}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Conversation Example */}
            <div className="max-w-2xl mx-auto w-full">
                <h2 className="text-lg font-bold text-center border-b-2 border-gray-300 pb-2 mb-4">
                    💬 こんな会話になりがち
                </h2>
                <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                    {conversationExample.map((line, idx) => (
                        <div key={idx} className={`flex flex-col ${line.speaker === 2 ? 'items-end' : 'items-start'}`}>
                            <span className={`text-xs font-bold mb-1 ${line.speaker === 1 ? 'text-neon-pink' : 'text-neon-blue'}`}>
                                {line.speaker === 1 ? type1.label : type2.label}
                            </span>
                            <div className={`px-4 py-2 rounded-2xl text-sm max-w-[80%] ${line.speaker === 1
                                ? 'bg-white border border-gray-200 rounded-tl-sm'
                                : 'bg-neon-blue/20 border border-neon-blue/30 rounded-tr-sm'
                                }`}>
                                {line.text}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Good Points */}
            <div className="max-w-2xl mx-auto w-full">
                <h2 className="text-lg font-bold text-center border-b-2 border-gray-300 pb-2 mb-4">
                    ✨ ここが噛み合う！
                </h2>
                <div className="space-y-2">
                    {goodPoints.map((point, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-white p-3 rounded-lg border border-gray-200">
                            <span className="text-lg">🎯</span>
                            <span className="text-sm font-medium">{point}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Caution Points */}
            <div className="max-w-2xl mx-auto w-full">
                <h2 className="text-lg font-bold text-center border-b-2 border-gray-300 pb-2 mb-4">
                    ⚡ ここだけ気をつけて
                </h2>
                <div className="space-y-3">
                    {cautionPoints.map((item, idx) => (
                        <div key={idx} className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                            <p className="text-sm font-bold text-gray-800 mb-1">⚠️ {item.point}</p>
                            <p className="text-xs text-gray-600">💡 {item.advice}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Advice */}
            <div className="max-w-2xl mx-auto w-full">
                <h2 className="text-lg font-bold text-center border-b-2 border-gray-300 pb-2 mb-4">
                    💌 2人へのひとこと
                </h2>
                <div className="space-y-4">
                    <div className="bg-white p-4 notebook-border rounded-lg">
                        <p className="text-xs font-bold text-neon-pink mb-2">{type1.label}へ</p>
                        <p className="text-sm text-gray-700">{adviceFor1}</p>
                    </div>
                    <div className="bg-white p-4 notebook-border rounded-lg">
                        <p className="text-xs font-bold text-neon-blue mb-2">{type2.label}へ</p>
                        <p className="text-sm text-gray-700">{adviceFor2}</p>
                    </div>
                </div>
            </div>

            {/* Share & Actions */}
            <div className="max-w-2xl mx-auto w-full space-y-4">
                <div className="bg-gray-100 p-6 rounded-lg text-center space-y-4">
                    <p className="font-bold">💕 友達にも診断してもらおう</p>
                    <p className="text-sm text-gray-600">
                        友達・恋人・家族にこの診断をシェアして、<br />
                        お互いのタイプで相性チェック！
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        <button
                            onClick={() => {
                                const shareUrl = SITE_URL;
                                const shareText = "16コミュニケーションタイプ診断やってみて！";
                                const lineUrl = `https://line.me/R/msg/text/?${encodeURIComponent(shareText + "\n" + shareUrl)}`;
                                window.open(lineUrl, '_blank');
                            }}
                            className="bg-[#06C755] text-white px-4 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity"
                        >
                            LINEで送る
                        </button>
                        <button
                            onClick={() => {
                                const shareUrl = SITE_URL;
                                const shareText = "16コミュニケーションタイプ診断やってみて！";
                                const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
                                window.open(twitterUrl, '_blank');
                            }}
                            className="bg-black text-white px-4 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity"
                        >
                            Xでシェア
                        </button>
                        <button
                            onClick={() => {
                                navigator.clipboard.writeText(SITE_URL);
                                alert('リンクをコピーしました！');
                            }}
                            className="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity"
                        >
                            リンクをコピー
                        </button>
                    </div>
                    <Link href="/compatibility">
                        <Button variant="secondary" size="sm" className="mt-2">
                            💕 もう一度診断
                        </Button>
                    </Link>
                </div>
            </div>

            {/* AdUnit */}
            <AdUnit slot="7788990011" />

            {/* Back to Home */}
            <div className="text-center">
                <Link href="/">
                    <Button variant="secondary">トップに戻る</Button>
                </Link>
            </div>
        </NotebookLayout>
    );
}

// JSが動く前・組み合わせが未指定のときに表示される静的セクション。
// 空ページにしないため、結果の読み方をここで説明しておく。
function ResultFallback() {
    return (
        <NotebookLayout className="flex flex-col space-y-6 py-8">
            <h1 className="text-2xl font-bold font-handwriting text-center">💞 相性診断の結果</h1>
            <div className="space-y-4 text-gray-800 leading-relaxed font-medium text-sm">
                <p className="text-center text-gray-500">結果を計算しています…</p>
                <h2 className="text-lg font-bold text-ink border-l-4 border-neon-blue pl-3 py-1 mt-6">
                    結果の読み方
                </h2>
                <p>
                    このページでは、2人のコミュニケーションタイプをPower（主導権）・Warmth（温度感）・Speed（テンポ）・Volume（存在感）の4軸に分解して、1軸ずつ突き合わせた結果を表示します。
                </p>
                <p>
                    軸ごとに「共鳴／やや似／中間／やや違う／補完」の5段階が出ます。
                    <strong>似ているほど良い、ではありません。</strong>
                    Powerのように役割が分かれたほうが噛み合う軸もあれば、Warmthのように違いすぎるとすれ違いやすい軸もあります。
                </p>
                <p>
                    スコアは「今のままで会話がラクに回るか」の目安であって、関係の良し悪しの点数ではありません。低い組み合わせは、相手の癖を知っておくと効く相手だということです。
                </p>
                <p className="text-gray-600">
                    表示されない場合は、2人のタイプを選び直してください。
                </p>
            </div>
            <div className="text-center pt-4">
                <Link href="/compatibility">
                    <Button variant="secondary">タイプを選び直す</Button>
                </Link>
            </div>
        </NotebookLayout>
    );
}

export default function CompatibilityResultView() {
    return (
        <Suspense fallback={<ResultFallback />}>
            <CompatibilityResultContent />
        </Suspense>
    );
}
