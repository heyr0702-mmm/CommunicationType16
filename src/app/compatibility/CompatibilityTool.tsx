"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { COMMUNICATION_TYPE_META } from "@/lib/constants";

function CompatibilityContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [type1, setType1] = useState<string>("");
    const [type2, setType2] = useState<string>("");

    // URLパラメータから自分のタイプをプリセット
    useEffect(() => {
        const myType = searchParams.get("my");
        if (myType && COMMUNICATION_TYPE_META.find(t => t.code === myType)) {
            setType1(myType);
        }
    }, [searchParams]);

    const handleSubmit = () => {
        if (type1 && type2) {
            router.push(`/compatibility/result?type1=${type1}&type2=${type2}`);
        }
    };

    const getTypeLabel = (code: string) => {
        const type = COMMUNICATION_TYPE_META.find(t => t.code === code);
        return type?.label || "";
    };

    const canSubmit = type1 && type2;

    return (
        <div className="flex flex-col space-y-8 scroll-mt-8" id="tool">
            {/* Header */}
            <div className="text-center space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold font-handwriting">
                    タイプを選んで診断する
                </h2>
                <p className="text-sm text-gray-600 max-w-md mx-auto">
                    友達・恋人・家族のタイプを聞いて、<br />
                    相性をチェックしてみよう！
                </p>
            </div>

            {/* Type Selection */}
            <div className="max-w-2xl mx-auto w-full space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Person 1 */}
                    <div className="bg-white p-6 notebook-border rounded-lg space-y-4">
                        <h2 className="font-bold text-center text-gray-700">あなた</h2>
                        <select
                            value={type1}
                            onChange={(e) => setType1(e.target.value)}
                            className="w-full p-3 border-2 border-ink rounded-lg bg-white text-sm font-medium focus:outline-none focus:border-neon-pink transition-colors"
                        >
                            <option value="">タイプを選択...</option>
                            {COMMUNICATION_TYPE_META.map((type) => (
                                <option key={type.code} value={type.code}>
                                    {type.label}
                                </option>
                            ))}
                        </select>
                        {type1 && (
                            <div className="text-center animate-in fade-in">
                                <p className="text-sm font-bold text-neon-pink">{getTypeLabel(type1)}</p>
                            </div>
                        )}
                    </div>

                    {/* Person 2 */}
                    <div className="bg-white p-6 notebook-border rounded-lg space-y-4">
                        <h2 className="font-bold text-center text-gray-700">相手</h2>
                        <select
                            value={type2}
                            onChange={(e) => setType2(e.target.value)}
                            className="w-full p-3 border-2 border-ink rounded-lg bg-white text-sm font-medium focus:outline-none focus:border-neon-blue transition-colors"
                        >
                            <option value="">タイプを選択...</option>
                            {COMMUNICATION_TYPE_META.map((type) => (
                                <option key={type.code} value={type.code}>
                                    {type.label}
                                </option>
                            ))}
                        </select>
                        {type2 && (
                            <div className="text-center animate-in fade-in">
                                <p className="text-sm font-bold text-neon-blue">{getTypeLabel(type2)}</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-4">
                    <Button
                        size="lg"
                        onClick={handleSubmit}
                        disabled={!canSubmit}
                        className={`px-12 py-6 text-xl ${canSubmit ? 'animate-pulse shadow-xl' : 'opacity-50'}`}
                    >
                        💞 相性を診断する
                    </Button>
                </div>

                {/* Hint */}
                <div className="text-center text-sm text-gray-500 space-y-2">
                    <p>相手のタイプがわからない？</p>
                    <Link href="/" className="text-neon-pink underline hover:no-underline">
                        → この診断リンクを送って聞いてみよう
                    </Link>
                </div>
            </div>

            {/* Back to Home */}
            <div className="text-center pt-8">
                <Link href="/">
                    <Button variant="secondary">トップに戻る</Button>
                </Link>
            </div>
        </div>
    );
}

export default function CompatibilityTool() {
    return <CompatibilityContent />;
}

