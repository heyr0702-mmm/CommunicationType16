import Link from "next/link";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
    alternates: { canonical: "/column/combo-power-speed" },
    title: "主導型(D)×熟考型(S)がすれ違う理由と、ルールのチューニング法",
    description: "「早く決めて」というDと「まだ考えてる」というS。急かされる方も急かす方もつらいこのすれ違いは、性格ではなくテンポの設定違いです。",
};

export default function ComboPowerSpeedArticle() {
    return (
        <NotebookLayout className="flex flex-col space-y-8 pb-20">
            <article className="bg-white/90 p-6 sm:p-8 rounded-lg notebook-border shadow-lg">
                <header className="mb-8 border-b-2 border-gray-200 pb-6">
                    <span className="text-4xl mb-4 block">⏱️</span>
                    <h1 className="text-2xl sm:text-3xl font-bold font-handwriting text-ink leading-tight mb-4">
                        主導型(D)×熟考型(S)がすれ違う理由と<br/>ルールのチューニング法
                    </h1>
                    <p className="text-gray-500 text-sm font-medium">公開日: 2026年8月6日</p>
                </header>

                <div className="space-y-6 text-gray-800 leading-relaxed font-medium">
                    <p>
                        「で、結局どうする？」
                    </p>
                    <p>
                        会議の終盤、Dの人がそう切り出します。もう十分話した、そろそろ決めよう、というサインです。
                    </p>
                    <p>
                        一方でSの人は、まだ頭の中で情報を並べ替えている最中です。「ちょっと待ってください、まだ整理できてなくて」。この一言に、Dの人は少しイラッとします。「さっきからずっと考えてるのに、まだ？」。
                    </p>
                    <p>
                        これは性格の相性の話ではありません。<strong className="text-neon-pink">主導型(D)と熟考型(S)、それぞれのエンジンの回し方が違うだけ</strong>です。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        DとSは、別のスピードで走っている
                    </h2>
                    <p>
                        Powerが「主導する/受容する」の軸だとすると、この記事で扱うのはPowerとSpeedが組み合わさったときの摩擦です。Dはとにかく前へ進めたい。決めて、動いて、走りながら修正する。エンジンが常に高回転で、止まっている時間がもったいないと感じます。
                    </p>
                    <p>
                        Sはその逆で、動く前に整えたい。情報を並べ、抜け漏れを確認し、納得してから一歩を踏み出す。これは慎重すぎるのではなく、<strong>精度を上げるための必要な時間</strong>です。
                    </p>
                    <p>
                        この2人が同じ会議室にいると、何が起きるか。Dは「決断が遅い」と感じ、Sは「準備不足のまま進めようとしている」と感じます。どちらも間違っていません。ただ、時計の進み方が違うんです。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-pink pl-3 py-1">
                        具体的にすれ違う場面
                    </h2>
                    <p>
                        <strong>場面①: 会議での即決を迫られるとき</strong>
                    </p>
                    <p>
                        Dが「じゃあこれで行こう」と提案し、その場での同意を求めます。Sは頭の中でまだシミュレーションが終わっていないので、返事を保留したくなる。ここでDが「なんで返事しないの」と畳みかけると、Sはますます固まってしまいます。
                    </p>
                    <p>
                        <strong>場面②: プロジェクトの計画段階</strong>
                    </p>
                    <p>
                        Dは「走りながら考えよう、まずやってみよう」というスタンス。Sは「リスクを洗い出してから動きたい」というスタンス。Dからすると石橋を叩きすぎに見え、Sからすると準備なしで崖から飛んでいるように見えます。
                    </p>
                    <p>
                        <strong>場面③: 締め切り直前</strong>
                    </p>
                    <p>
                        Dは早めに手を動かして、多少粗くても形にしたい。Sは締め切りギリギリまで内容を練り上げたい。同じ締め切りに向かっているのに、進み方の体感速度がまったく違います。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-yellow pl-3 py-1">
                        ルールをチューニングする — 3つの工夫
                    </h2>
                    <p>
                        すれ違いに気づいたら、次にできるのは「ルールを一緒に調整すること」です。片方が我慢するのではなく、その場でお互いのペースを歩み寄らせる。
                    </p>
                    <div className="bg-gray-50 p-4 border border-gray-200 rounded space-y-4">
                        <div>
                            <strong className="block mb-1">1. 「決める時間」と「考える時間」を分ける</strong>
                            <p className="text-sm">会議の中で、「まず案を出す時間」と「決める時間」をあらかじめ分けておく。Sは前半で安心して考えられ、Dは後半で気持ちよく決められます。時間割そのものが、2人のための翻訳装置になります。</p>
                        </div>
                        <div>
                            <strong className="block mb-1">2. Dは「いつまでに」を伝える、Sは「今どこまで考えたか」を伝える</strong>
                            <p className="text-sm">Dが「今日中に決めたい」と先に言えば、Sはそこに向けて頭を整理し始められます。Sが「あと2点だけ確認したら決められます」と言えば、Dは待つ理由が分かって安心できます。沈黙のまま待たせる・待たされるのが一番こじれます。</p>
                        </div>
                        <div>
                            <strong className="block mb-1">3. 「仮決定」という中間地点を使う</strong>
                            <p className="text-sm">Dは完璧な決定でなくてもいい、まず仮でいいから前に進みたい人です。Sは「仮」という言葉があるだけで、心理的なハードルが下がります。「これは仮決定、来週見直そう」と言えるだけで、両方が納得できる着地点になります。</p>
                        </div>
                    </div>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        どちらが正しいかではない
                    </h2>
                    <p>
                        Dの速さは、停滞していたものを動かす力です。Sの慎重さは、見落としを防ぐ力です。どちらも組織やチームに必要で、優劣はありません。
                    </p>
                    <p>
                        大事なのは、相手の時計を自分の時計に合わせさせようとしないこと。そして、「今、私たちは違う速度で動いている」と気づける言葉を持っておくことです。
                    </p>

                    <p className="font-bold text-center text-lg mt-8">
                        あなたはD寄り、それともS寄り？
                    </p>
                    <p className="text-center text-sm text-gray-600">
                        まずは自分のテンポを知ることから始めてみましょう。
                    </p>
                    <div className="flex flex-col items-center gap-2 text-sm mt-4">
                        <Link href="/column/axis-power" className="text-neon-blue hover:underline">→ Power(主導権)の記事を読む</Link>
                        <Link href="/column/axis-speed" className="text-neon-blue hover:underline">→ Speed(テンポ)の記事を読む</Link>
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
