import Link from "next/link";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "職場で「話しかけづらい」と思われるのは性格じゃない — Volume(Z)/Warmth(C)の見え方",
    description: "「話しかけづらい」と言われるのは、冷たいからでも怖いからでもありません。ZとCという2つの軸の\"見え方\"の問題です。誤解を解く工夫を紹介します。",
};

export default function WorkplaceApproachabilityArticle() {
    return (
        <NotebookLayout className="flex flex-col space-y-8 pb-20">
            <article className="bg-white/90 p-6 sm:p-8 rounded-lg notebook-border shadow-lg">
                <header className="mb-8 border-b-2 border-gray-200 pb-6">
                    <span className="text-4xl mb-4 block">🚪</span>
                    <h1 className="text-2xl sm:text-3xl font-bold font-handwriting text-ink leading-tight mb-4">
                        職場で「話しかけづらい」と思われるのは性格じゃない<br/>Volume(Z)/Warmth(C)の見え方
                    </h1>
                    <p className="text-gray-500 text-sm font-medium">公開日: 2026年8月6日</p>
                </header>

                <div className="space-y-6 text-gray-800 leading-relaxed font-medium">
                    <p>
                        「〇〇さんって、ちょっと話しかけづらいよね」
                    </p>
                    <p>
                        新人の頃、そんなふうに言われて傷ついたことはないでしょうか。悪いことをした覚えはない。ただ静かにしていただけ。それなのに、いつのまにか&quot;とっつきにくい人&quot;というレッテルが貼られている。
                    </p>
                    <p>
                        これ、実は性格の冷たさとはあまり関係ありません。<strong className="text-neon-pink">Volume(存在感)が低め（Z）で、Warmth(温度感)が論理寄り（C）</strong>という2つの軸の組み合わせが、外からそう&quot;見えて&quot;しまっているだけのことが多いんです。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        「話しかけづらさ」の正体は、2つの軸の掛け算
                    </h2>
                    <p>
                        Zの人は、表現を大きくしません。感情が動いていても、それが顔や声に出にくい。だから周りからは「何を考えているか分からない」と映ります。
                    </p>
                    <p>
                        Cの人は、まず結論や整理を優先します。雑談よりも要件を先に済ませたい。だから「愛想がない」「淡々としている」と受け取られやすい。
                    </p>
                    <p>
                        このZとCが重なると、本人は普通にしているつもりでも、周りには「静かで、素っ気なくて、ちょっと怖い」人に見えてしまう。これは表現の&quot;見え方&quot;の問題であって、中身が冷たいわけではまったくありません。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-pink pl-3 py-1">
                        中身とのギャップ
                    </h2>
                    <p>
                        実際に話してみると、Zの人はよく人の話を聞いていて、Cの人は困っている人に的確な助言をくれる、ということはよくあります。むしろ信頼して話しかけてみると、一番頼りになるタイプだった、というのはよくある話です。
                    </p>
                    <p>
                        問題は、その中身に辿り着く前に、周囲が「話しかけない」という選択をしてしまうこと。存在感の小ささと、温度感の低さが、&quot;第一印象という関門&quot;で損をしているんです。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-yellow pl-3 py-1">
                        見え方を変える、小さな工夫
                    </h2>
                    <div className="bg-gray-50 p-4 border border-gray-200 rounded space-y-4">
                        <div>
                            <strong className="block mb-1">1. Zの人は「反応を意識的に1段階大きくする」</strong>
                            <p className="text-sm">感情を派手に出す必要はありません。ただ、相槌を1つ増やす、リアクションのタイミングを少し早める。それだけで「ちゃんと聞いてくれている」という印象が伝わります。中身を変えるのではなく、伝わる量を少しだけ上げるイメージです。</p>
                        </div>
                        <div>
                            <strong className="block mb-1">2. Cの人は「用件の前にひとこと添える」</strong>
                            <p className="text-sm">いきなり要件から入るのではなく、「お疲れさまです、ちょっといいですか」の一言をワンクッション置く。中身の論理性はそのままでいい。入り口だけ、少し柔らかくする。</p>
                        </div>
                        <div>
                            <strong className="block mb-1">3. 周囲は「静かさ＝拒絶ではない」と知っておく</strong>
                            <p className="text-sm">話しかける側も、Zの静かさやCの端的さを&quot;冷たさ&quot;と早合点しないことが大切です。「話しかけづらい」と決めつける前に、一度声をかけてみる。多くの場合、拒絶されることはありません。</p>
                        </div>
                    </div>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        見え方の話であって、優劣の話ではない
                    </h2>
                    <p>
                        X(表現大)の人が場を明るくするように、Z(表現小)の人は場を落ち着かせます。E(共感重視)の人が場を温めるように、C(論理重視)の人は場を前に進めます。どちらが優れているという話ではなく、ただ<strong>伝わる量の設定が違う</strong>だけです。
                    </p>
                    <p>
                        「話しかけづらい」という印象は、多くの場合、中身ではなく見え方のズレから生まれています。それに気づくだけで、自分を無理に変えなくても、少しの工夫で周囲との距離は縮まります。
                    </p>

                    <p className="font-bold text-center text-lg mt-8">
                        あなたの職場での見え方は、どんなスタイルでしょうか。
                    </p>
                    <p className="text-center text-sm text-gray-600">
                        まずは3分の診断で、自分のコミュニケーションタイプを確かめてみてください。
                    </p>
                    <div className="flex flex-col items-center gap-2 text-sm mt-4">
                        <Link href="/column/axis-warmth" className="text-neon-blue hover:underline">→ Warmth(温度感)の記事を読む</Link>
                        <Link href="/column/axis-volume" className="text-neon-blue hover:underline">→ Volume(存在感)の記事を読む</Link>
                        <Link href="/column/meeting-silence" className="text-neon-blue hover:underline">→ 会議で発言できないのはSの記事を読む</Link>
                        <Link href="/column/hourenso-style" className="text-neon-blue hover:underline">→ 報連相が噛み合わない理由の記事を読む</Link>
                        <Link href="/column/type-compatibility-map" className="text-neon-blue hover:underline">→ 16タイプ関係地図を見る</Link>
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
