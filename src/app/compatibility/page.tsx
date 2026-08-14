import { Suspense } from "react";
import Link from "next/link";
import { Metadata } from "next";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import CompatibilityTool from "./CompatibilityTool";

export const metadata: Metadata = {
    alternates: { canonical: "/compatibility" },
    title: "2人の相性診断 — 「合わない」の正体は、スタイルの組み合わせ",
    description:
        "友達・恋人・家族との会話が噛み合わないのは、性格が悪いからではなく会話スタイルの組み合わせが違うから。16タイプの組み合わせから、2人の会話のクセと噛み合わせ方を診断します。",
    openGraph: {
        title: "2人の相性診断 | 16コミュニケーションタイプ診断",
        description:
            "「合わない」の正体は、会話スタイルの組み合わせ。16タイプの組み合わせから2人の噛み合わせ方を診断します。",
        type: "article",
    },
};

export default function CompatibilityPage() {
    return (
        <NotebookLayout className="flex flex-col space-y-8 py-8 pb-20">
            {/* ▼ 静的セクション（ここはサーバー側で描画される） */}
            <article className="bg-white/90 p-6 sm:p-8 rounded-lg notebook-border shadow-lg">
                <header className="mb-8 border-b-2 border-gray-200 pb-6 text-center">
                    <span className="bg-neon-pink px-3 py-1 text-sm font-bold text-white transform -rotate-1 inline-block">
                        Compatibility
                    </span>
                    <h1 className="text-2xl sm:text-3xl font-bold font-handwriting text-ink leading-tight mt-4">
                        💕 2人の相性診断
                    </h1>
                    <p className="text-sm text-gray-600 mt-3">
                        「合わない」の正体は、会話スタイルの組み合わせです。
                    </p>
                </header>

                <div className="space-y-6 text-gray-800 leading-relaxed font-medium">
                    <p>
                        話していて、なぜか疲れる相手がいます。悪い人ではないし、嫌いなわけでもない。でも会話のたびに、少しだけ噛み合わない感じが残る。
                    </p>
                    <p>
                        逆に、初対面なのに妙に話しやすい人もいます。特別に気が合う話題があるわけでもないのに、なぜかテンポがぴったり合う。
                    </p>
                    <p>
                        この差を、私たちはつい「相性」という一言で片付けてしまいます。でも中身を分解してみると、そこにあるのは
                        <strong className="text-neon-pink">good / badではなく、スタイルの組み合わせ</strong>
                        です。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        この相性診断が見ているもの
                    </h2>
                    <p>
                        この診断では、2人のコミュニケーションタイプを4つの軸に分解して、1軸ずつ突き合わせます。
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                        <li>
                            <strong>Power（主導権）</strong>: 会話のハンドルを握りたいD／受け止めたいR。どちらが場を進めるか
                        </li>
                        <li>
                            <strong>Warmth（温度感）</strong>: 感情を共有したいE／筋道を通したいC。会話の目的が共感か解決か
                        </li>
                        <li>
                            <strong>Speed（テンポ）</strong>: 即レスで返すI／噛みしめて返すS。返事までの間の長さ
                        </li>
                        <li>
                            <strong>Volume（存在感）</strong>: 自分を出すX／場を聞くZ。しゃべる量のバランス
                        </li>
                    </ul>
                    <p>
                        4つすべてが同じ人はほとんどいません。だいたいは「2つ似ていて、2つ違う」あたりに落ち着きます。その
                        <strong>どこが似ていて、どこが違うか</strong>
                        の内訳こそが、実際の会話で起きることを決めています。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-pink pl-3 py-1">
                        「似ている」が良いとは限らない
                    </h2>
                    <p>
                        相性というと「似ているほど良い」と思いがちですが、軸によってはまったく逆です。
                    </p>
                    <p>
                        たとえばPower。2人ともDだと、どちらも会話を前に進めたいので、話題の主導権をめぐって小さくぶつかります。逆に片方がD、片方がRだと、進める人と受け止める人に自然と役割が分かれて、驚くほどスムーズに回ります。
                        <strong>この軸は「違う」ほうが噛み合う</strong>
                        んです。
                    </p>
                    <p>
                        一方でWarmthは、違いすぎるとしんどくなります。共感してほしいEの人が悩みを打ち明けたとき、Cの人は善意で解決策を出します。Eの人は「まず聞いてほしかった」と感じ、Cの人は「役に立とうとしたのに」と戸惑う。どちらも相手のためを思っているのに、すれ違う。
                    </p>
                    <p>
                        だからこの診断では、軸ごとに
                        <strong>「共鳴」「やや似」「中間」「やや違う」「補完」</strong>
                        の5段階でパターンを出し、その軸では似ているのと違うののどちらが効くのかを添えています。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-yellow pl-3 py-1">
                        点数の読み方（低くても「ダメ」ではない）
                    </h2>
                    <p>
                        結果には100点満点のスコアと星が出ますが、これは
                        <strong>「今のままで会話がラクに回るか」の目安</strong>
                        であって、関係の良し悪しの点数ではありません。
                    </p>
                    <p>
                        スコアが低い組み合わせは、放っておくとすれ違うぶん、
                        <strong>知っておくと効く相手</strong>
                        でもあります。「この人は考えてから話す人だから、沈黙は拒否じゃない」——それがわかっているだけで、同じ会話がまったく違うものになります。実際、長く続いている関係ほど、点数より「相手の癖を知っているかどうか」で決まっています。
                    </p>
                    <p>
                        逆に高スコアの相手とは、最初からラクに話せます。ただしラクすぎて、お互いの見落としに気づきにくいという弱点もあります。どちらが良いという話ではありません。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        使い方
                    </h2>
                    <ol className="list-decimal pl-5 space-y-2 text-sm">
                        <li>まず自分のタイプを診断で確かめます（3分ほど）。</li>
                        <li>
                            相手のタイプがわかっていれば、下の2つのプルダウンから選ぶだけです。
                        </li>
                        <li>
                            相手のタイプがわからないときは、診断のリンクを送って受けてもらってください。「当たってる？」と話すこと自体が、たいてい一番おもしろい時間になります。
                        </li>
                    </ol>
                    <p className="text-sm text-gray-600">
                        ※ この診断は学術的な性格検査ではありません。人を分類して優劣をつけるためではなく、
                        <strong>すれ違いを「誰のせいでもないこと」として話題にするための共通言語</strong>
                        として使ってもらえたら嬉しいです。
                    </p>
                </div>
            </article>

            {/* ▼ ここから下がツール本体（クライアント側） */}
            <Suspense
                fallback={
                    <div className="max-w-2xl mx-auto w-full text-center text-sm text-gray-500 py-12">
                        相性診断ツールを読み込んでいます…
                    </div>
                }
            >
                <CompatibilityTool />
            </Suspense>

            {/* 関連リンク */}
            <div className="text-center text-sm space-y-2 pt-4">
                <p className="font-bold text-gray-700">もっと詳しく知る</p>
                <div className="flex flex-col items-center gap-2">
                    <Link href="/column/type-compatibility-map" className="text-neon-blue hover:underline">
                        → 16タイプ相性マップを読む
                    </Link>
                    <Link href="/column/communication-styles" className="text-neon-blue hover:underline">
                        → 4つの軸のまとめを読む
                    </Link>
                    <Link href="/types" className="text-neon-blue hover:underline">
                        → 16タイプ一覧を見る
                    </Link>
                </div>
            </div>
        </NotebookLayout>
    );
}
