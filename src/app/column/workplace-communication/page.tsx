import Link from "next/link";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "職場で使えるコミュニケーション改善テクニック | 16コミュニケーションタイプ診断",
    description: "会議での意見のすれ違いや、上司・部下とのコミュニケーションギャップを埋めるためのタイプ別アプローチ。",
};

export default function WorkplaceCommunicationArticle() {
    return (
        <NotebookLayout className="flex flex-col space-y-8 pb-20">
            <article className="bg-white/90 p-6 sm:p-8 rounded-lg notebook-border shadow-lg">
                <header className="mb-8 border-b-2 border-gray-200 pb-6">
                    <span className="text-4xl mb-4 block">🏢</span>
                    <h1 className="text-2xl sm:text-3xl font-bold font-handwriting text-ink leading-tight mb-4">
                        職場で使える<br/>コミュニケーション改善テクニック
                    </h1>
                    <p className="text-gray-500 text-sm font-medium">公開日: 2025年4月10日</p>
                </header>

                <div className="space-y-6 text-gray-800 leading-relaxed font-medium">
                    <p>
                        「会議がまとまらない」「上司にうまく報告ができない」「部下へのフィードバックが伝わっていない」。職場での悩みは尽きません。
                    </p>
                    <p>
                        ビジネスシーンでは、それぞれの<strong className="text-neon-blue">コミュニケーションスタイル（会話の型）</strong>の違いが、業務効率や心理的安全性に直結します。今回は職場での「あるある」な課題を、タイプ別に解決するヒントをご紹介します。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-gray-800 pl-3 py-1">
                        ケース1：上司への「報・連・相」が通じない
                    </h2>
                    <p>
                        「で、結論は何？」とよく言われる場合、上司は「結論を急ぐ主導型（D）」や「事実を優先する分析的（A）」のスタイルを持っている可能性が高いです。
                    </p>
                    <div className="bg-blue-50 p-4 border border-blue-200 rounded">
                        <strong className="text-blue-800 block mb-2">💡 改善テクニック</strong>
                        <p className="text-sm">
                            プロセスや感情的な背景から話し始めるのではなく、「本日の報告事項は◯点で、結論は〜です」と端的に（C: 凝縮のスタイルで）伝えましょう。
                        </p>
                    </div>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-gray-800 pl-3 py-1">
                        ケース2：会議で発言しないメンバーがいる
                    </h2>
                    <p>
                        会議中ずっと黙っているからといって、意見がないとは限りません。「一度自分の中で咀嚼してから発言する熟考型（P）」の人は、その場で振られてもすぐに言葉が出ないことが多いのです。
                    </p>
                    <div className="bg-yellow-50 p-4 border border-yellow-200 rounded">
                        <strong className="text-yellow-800 block mb-2">💡 改善テクニック</strong>
                        <p className="text-sm">
                            「いきなり意見を求めない」のが鉄則。会議の前にアジェンダを共有しておくか、「この件について、明日までにテキストで意見をください」と、非同期コミュニケーションを併用するのが効果的です。
                        </p>
                    </div>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-gray-800 pl-3 py-1">
                        ケース3：チームの空気が重い・ギスギスしている
                    </h2>
                    <p>
                        プロジェクトが佳境に入ると、業務遂行に特化したD（主導型）やA（分析型）が強くなりすぎ、R（受容型）やE（表現型）のメンバーが委縮しがちです。
                    </p>
                    <div className="bg-pink-50 p-4 border border-pink-200 rounded">
                        <strong className="text-pink-800 block mb-2">💡 改善テクニック</strong>
                        <p className="text-sm">
                            雑談の時間を意図的に設けたり、「ありがとう」の感謝を言葉やスタンプで（E: 表現豊かに）伝える仕組みを取り入れましょう。論理や効率だけではない「温度感」が、チーム全体を機能させる潤滑油になります。
                        </p>
                    </div>

                    <h2 className="text-xl font-bold text-ink mt-8">
                        まとめ：チームの「タイプ分布」を知る
                    </h2>
                    <p>
                        自分のチームにどんな会話スタイルの人が多いのかを知ることは、強力な武器になります。お互いの診断結果を見せ合って、「私はこういう返し方をしがちだから、冷たく聞こえたらごめんね」と宣言しておくだけで、職場の空気は驚くほど良くなりますよ。
                    </p>
                </div>
            </article>

            {/* CTA */}
            <div className="mt-8 text-center bg-gray-50 border border-dashed border-gray-300 p-6 sm:p-8 rounded-lg">
                <h3 className="font-bold text-xl mb-3 font-handwriting">あなたのスタイルはどれ？</h3>
                <p className="text-sm text-gray-600 mb-6">
                    たった数分のテストで、あなたのコミュニケーションのクセが分かります。
                </p>
                <Link href="/diagnosis">
                    <Button size="lg" className="animate-pulse shadow-md border-2 border-black w-full sm:w-auto">無料診断スタート</Button>
                </Link>
                <div className="mt-4">
                    <Link href="/column" className="text-sm text-gray-500 hover:text-neon-blue underline">
                        ← コラム一覧に戻る
                    </Link>
                </div>
            </div>
        </NotebookLayout>
    );
}
