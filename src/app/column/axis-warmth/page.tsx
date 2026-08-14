import Link from "next/link";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
    alternates: { canonical: "/column/axis-warmth" },
    title: "Warmth(温度感) — 「わかって(E)」と「つまり?(C)」はどこですれ違うか",
    description: "気持ちに寄り添ってほしいEと、まず結論を整理したいC。悪意のないすれ違いはWarmth(温度感)という軸のクセです。それぞれの流儀を解説します。",
};

export default function AxisWarmthArticle() {
    return (
        <NotebookLayout className="flex flex-col space-y-8 pb-20">
            <article className="bg-white/90 p-6 sm:p-8 rounded-lg notebook-border shadow-lg">
                <header className="mb-8 border-b-2 border-gray-200 pb-6">
                    <span className="text-4xl mb-4 block">🌡️</span>
                    <h1 className="text-2xl sm:text-3xl font-bold font-handwriting text-ink leading-tight mb-4">
                        Warmth(温度感)<br/>「わかって(E)」と「つまり?(C)」はどこですれ違うか
                    </h1>
                    <p className="text-gray-500 text-sm font-medium">公開日: 2026年8月6日</p>
                </header>

                <div className="space-y-6 text-gray-800 leading-relaxed font-medium">
                    <p>
                        「今日こんなことがあってさ、しんどくて……」<br/>
                        「それって、何が原因だったの？」
                    </p>
                    <p>
                        ——このやりとり、モヤっとしたことはありませんか。
                    </p>
                    <p>
                        つらかった気持ちを聞いてほしかったのに、返ってきたのは分析。悪気なんてどこにもないのに、なんだか突き放された気がしてしまう。
                    </p>
                    <p>
                        このすれ違い、性格の冷たさとは関係ありません。4軸のひとつ<strong className="text-neon-pink">Warmth（温度感）</strong>という、会話の&quot;入り口&quot;の違いなんです。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        Warmthは「優しさの量」ではなく「入り口」の違い
                    </h2>
                    <p>
                        Warmthは、会話にどこから入るかのクセを表す軸です。高い側は<strong>E（共感・Emotional）</strong>、低い側は<strong>C（論理・Cognitive）</strong>。
                    </p>
                    <p>
                        Eの人は、気持ちから会話に入ります。「それはつらかったね」「わかるよ、その気持ち」——まず感情を受け止めることで、相手との距離を縮めようとします。相手が求めているのは解決策より、まず&quot;一緒にいること&quot;だと感じているからです。
                    </p>
                    <p>
                        Cの人は、構造から会話に入ります。「つまり、原因は何？」「それで、どうしたいの?」——まず状況を整理することで、相手の力になろうとします。感情に無関心なのではなく、<strong>解決すること自体が、Cの人にとっての思いやりの形</strong>なんです。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-pink pl-3 py-1">
                        すれ違いの正体は「翻訳ミス」
                    </h2>
                    <p>
                        先ほどの会話を、もう一度見てみましょう。
                    </p>
                    <p>
                        Eの人は「しんどかった」という気持ちを伝えたつもりでした。Cの人は「原因を一緒に考えよう」という気持ちを伝えたつもりでした。<strong>どちらも、相手を思う気持ちから発した言葉</strong>なのに、届き方だけがすれ違ってしまった。これは、感情の翻訳ミスと呼ぶのがぴったりです。
                    </p>
                    <p>
                        Eの人からすると、Cの反応は「共感してくれない」「冷たい」と映りがちです。Cの人からすると、Eの反応は「何を求めているのか分からない」「感情的すぎる」と映りがちです。でも実際には、<strong>どちらも相手のために動いている</strong>。ただ、その動き方の&quot;最初の一手&quot;が違うだけなのです。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-yellow pl-3 py-1">
                        Eの強みと、Eが抱えやすい悩み
                    </h2>
                    <p>
                        Eの強みは、相手を安心させる力です。誰かがつらいとき、まず気持ちに寄り添ってもらえるだけで、人は救われます。場の空気を温める力も、Eの人ならではのものです。
                    </p>
                    <p>
                        一方でEの人は、「情に流されやすい」「もっと冷静になるべき」と言われて傷つくことがあります。でもそれは弱さではなく、<strong>共感を通して相手を理解しようとする、ひとつのやり方</strong>にすぎません。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        Cの強みと、Cが抱えやすい悩み
                    </h2>
                    <p>
                        Cの強みは、混乱した状況を整理する力です。感情が渦巻いているときほど、Cの「つまり何が問題?」という一言が、道を照らしてくれます。冷静な判断が必要な場面で、周りから頼られやすいのもCです。
                    </p>
                    <p>
                        一方でCの人は、「冷たい」「話しにくい」と言われて戸惑うことがあります。でもそれも、感情を軽視しているわけではなく、<strong>問題を解決することで相手を助けたいという、不器用な優しさ</strong>であることがほとんどです。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-pink pl-3 py-1">
                        すれ違いを防ぐ、小さな一言
                    </h2>
                    <p>
                        EとCのすれ違いは、少しの一言で驚くほど減らせます。
                    </p>
                    <div className="bg-gray-50 p-4 border border-gray-200 rounded">
                        <ul className="list-disc pl-5 space-y-2 text-sm">
                            <li>Eの人へ: 相談する前に「今日はただ聞いてほしいだけ」と一言添えてみる。それだけでCの人は、分析モードから共感モードに切り替えやすくなります。</li>
                            <li>Cの人へ: 意見を言う前に「大変だったね」と一言だけ挟んでみる。それだけでEの人は、突き放された感覚をかなり減らせます。</li>
                        </ul>
                    </div>
                    <p>
                        大げさな変化はいりません。<strong>入り口をひとつ揃えるだけ</strong>で、会話の温度感は驚くほど合ってきます。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-yellow pl-3 py-1">
                        自分のWarmthを知ることから
                    </h2>
                    <p>
                        EとCに優劣はありません。気持ちに寄り添うのも、状況を整理するのも、どちらも相手を思う気持ちから生まれています。
                    </p>
                    <p>
                        自分がどちらの入り口から会話に入りやすいかを知ると、相手が見せる反応も、もっと素直に受け取れるようになります。
                    </p>

                    <p className="font-bold text-center text-lg mt-8">
                        あなたのWarmthは、EとCどちらに寄っていますか？
                    </p>
                    <p className="text-center text-sm text-gray-600">
                        3分の診断で、Warmth軸を含む4つの軸から、あなたのコミュニケーションタイプを確かめてみてください。
                    </p>
                    <div className="flex flex-col items-center gap-2 text-sm mt-4">
                        <Link href="/column/communication-styles" className="text-neon-blue hover:underline">→ 4つの軸のまとめを読む（コミュニケーションスタイルとは？）</Link>
                        <Link href="/column/axis-power" className="text-neon-blue hover:underline">→ Power(主導権)の記事を読む</Link>
                        <Link href="/column/axis-speed" className="text-neon-blue hover:underline">→ Speed(テンポ)の記事を読む</Link>
                        <Link href="/column/axis-volume" className="text-neon-blue hover:underline">→ Volume(存在感)の記事を読む</Link>
                        <Link href="/types" className="text-neon-blue hover:underline">→ 16タイプ一覧を見る</Link>
                    </div>
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
