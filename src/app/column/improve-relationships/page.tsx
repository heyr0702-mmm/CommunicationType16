import Link from "next/link";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "人間関係を楽にする！コミュニケーションタイプ診断の活用法 | 16コミュニケーションタイプ診断",
    description: "合わない人ともうまく付き合うには？相手のスタイルを理解することで、会話のストレスを減らす具体的な方法。",
};

export default function ImproveRelationshipsArticle() {
    return (
        <NotebookLayout className="flex flex-col space-y-8 pb-20">
            <article className="bg-white/90 p-6 sm:p-8 rounded-lg notebook-border shadow-lg">
                <header className="mb-8 border-b-2 border-gray-200 pb-6">
                    <span className="text-4xl mb-4 block">🤝</span>
                    <h1 className="text-2xl sm:text-3xl font-bold font-handwriting text-ink leading-tight mb-4">
                        人間関係を楽にする！<br/>コミュニケーションタイプ診断の活用法
                    </h1>
                    <p className="text-gray-500 text-sm font-medium">公開日: 2025年4月10日</p>
                </header>

                <div className="space-y-6 text-gray-800 leading-relaxed font-medium">
                    <p>
                        「どうしてあんな言い方しかできないんだろう」「私の言葉、ちゃんと伝わってるかな？」。日々の生活の中で、私たちは絶えず誰かとコミュニケーションを取り、そしてすれ違っています。
                    </p>
                    <p>
                        今回は、当サイトのコミュニケーションタイプ診断を使って、人間関係のストレスを根本から減らすための3つのステップをご紹介します。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-pink pl-3 py-1">
                        STEP 1: 自分にとっての「当たり前」を疑う
                    </h2>
                    <p>
                        自分にとって居心地の良い会話のテンポや熱量は、他の人にとっては苦痛かもしれません。例えば、言葉をたくさん交わすことで安心感を得る人（X: 拡張型）と、必要最小限の言葉でノイズを減らしたい人（C: 凝縮型）では、「無言」に対する感じ方が真逆です。
                    </p>
                    <p>
                        まずは診断結果を読み、「自分はこういうクセがあるんだな」と自覚することがスタート地点です。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-pink pl-3 py-1">
                        STEP 2: 相手の行動を「スタイル」で翻訳する
                    </h2>
                    <p>
                        「冷たい態度を取られた」と感じたとき、実は相手は「分析的（A）」に事実を述べているだけかもしれません。「ズカズカ踏み込んでくる」と感じた相手も、ただ「表現豊か（E）」で親愛を示しているだけかもしれません。
                    </p>
                    <div className="bg-gray-50 p-4 border border-gray-200 rounded">
                        <ul className="list-disc pl-5 space-y-2 text-sm">
                            <li><strong>冷たい</strong> → 感情より論理を優先するスタイルかも？（A）</li>
                            <li><strong>強引</strong> → 結論を急ぐ主導型のスタイルかも？（D）</li>
                            <li><strong>ノリが悪い</strong> → じっくり考える熟考型のスタイルかも？（P）</li>
                        </ul>
                    </div>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-pink pl-3 py-1">
                        STEP 3: 相手の周波数に合わせて歩み寄る
                    </h2>
                    <p>
                        相手のスタイルが掴めてきたら、少しだけ相手の周波数に合わせてみましょう。相手が論理を重んじるA（分析的）なら、こちらも「感情的な前置き」を減らして結論から話してみる。相手が共感を求めるR（受容型）なら、「そうだね」と同調する時間を多く取る。
                    </p>
                    <p>
                        無理に自分を変える必要はありません。<strong className="font-bold border-b-2 border-neon-pink">“相手が受け取りやすいボール”を投げる技術</strong>こそが、コミュニケーションスキルなのです。
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
