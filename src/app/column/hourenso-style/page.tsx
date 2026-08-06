import Link from "next/link";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "報連相が噛み合わないのは\"型\"の違い — 結論から(C)／背景から(E)、どちらも正しい",
    description: "「結論から話して」と言われて戸惑う人も、「もっと状況を教えて」と言われて戸惑う人もいます。報連相のすれ違いは、CとEという型の違いです。",
};

export default function HourensoStyleArticle() {
    return (
        <NotebookLayout className="flex flex-col space-y-8 pb-20">
            <article className="bg-white/90 p-6 sm:p-8 rounded-lg notebook-border shadow-lg">
                <header className="mb-8 border-b-2 border-gray-200 pb-6">
                    <span className="text-4xl mb-4 block">📋</span>
                    <h1 className="text-2xl sm:text-3xl font-bold font-handwriting text-ink leading-tight mb-4">
                        報連相が噛み合わないのは&quot;型&quot;の違い<br/>結論から(C)／背景から(E)、どちらも正しい
                    </h1>
                    <p className="text-gray-500 text-sm font-medium">公開日: 2026年8月6日</p>
                </header>

                <div className="space-y-6 text-gray-800 leading-relaxed font-medium">
                    <p>
                        「結論から話して」
                    </p>
                    <p>
                        新人時代、何度も言われた言葉かもしれません。言われるたびに、自分の話し方はダメなんだと思ってしまう。でも、順序立てて背景から話すことは、決して欠点ではありません。
                    </p>
                    <p>
                        逆に、「結論から話す人」も、別の場面で「もっと状況も教えて」と言われて戸惑うことがあります。端的に伝えたつもりが、なぜか物足りないと言われる。
                    </p>
                    <p>
                        これは話し方が下手なのではなく、<strong className="text-neon-pink">報連相における&quot;型&quot;がC(論理・結論優先)とE(共感・背景優先)で違う</strong>という、ただそれだけの話です。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        報連相には、2つの正しい型がある
                    </h2>
                    <p>
                        <strong>論理型(C)の報連相</strong>は、結論→理由→詳細、という順番で進みます。「A社との契約は決まりました。理由は価格面で折り合ったからです。詳細は…」。聞き手は最短距離で状況を把握できます。ビジネス書の&quot;報連相の基本&quot;は、たいていこの型を前提に書かれています。
                    </p>
                    <p>
                        <strong>共感型(E)の報連相</strong>は、経緯→状況→結論、という順番で進みます。「実は先週からA社と何度かやり取りしていて、担当者の反応がこう変わってきて…最終的に契約が決まりました」。聞き手は状況の温度感や背景まで含めて理解できます。
                    </p>
                    <p>
                        どちらも、情報として欠けているところはありません。ただ、<strong>情報を届ける順番が逆</strong>なんです。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-pink pl-3 py-1">
                        なぜ「結論から」が正解とされがちなのか
                    </h2>
                    <p>
                        多くの職場マニュアルが「結論から話す」ことを推奨します。これは間違いではありませんが、Cの型を前提にしたルールです。だからE寄りの人が背景から話すと、「要点がつかめない」と評価されがちになる。
                    </p>
                    <p>
                        でも、Eの型には別の価値があります。背景を先に共有することで、聞き手はその後の判断により多くの文脈を持てます。特に、状況が複雑だったり、人間関係が絡む案件では、経緯の共有が結論の理解を助けることも少なくありません。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-yellow pl-3 py-1">
                        噛み合わない具体的な場面
                    </h2>
                    <p>
                        <strong>場面①: トラブル報告</strong>
                    </p>
                    <p>
                        Cは「クレームが1件発生しました。原因は納期遅延です」と即座に結論。Eは「実は先方の担当者が最近変わって、最初のやり取りからちょっと様子が違って…その流れでクレームになりました」と経緯から話す。上司がCタイプだと、Eの報告に「早く結論を」と急かしてしまいがちです。
                    </p>
                    <p>
                        <strong>場面②: 進捗の相談</strong>
                    </p>
                    <p>
                        Eは「ちょっと今の状況、聞いてもらえますか」と切り出し、状況を共有しながら一緒に考えたい。Cは「相談したいことは何ですか、先に教えてください」と要点を先に求める。Eからすると急かされている感覚、Cからすると要領を得ない感覚が生まれます。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        噛み合わせるための工夫
                    </h2>
                    <div className="bg-gray-50 p-4 border border-gray-200 rounded space-y-4">
                        <div>
                            <strong className="block mb-1">1. Eは「結論だけ先出しする一言」を用意する</strong>
                            <p className="text-sm">背景から話したい気持ちはそのままでいい。ただ、冒頭に「結論から言うと〇〇です、経緯も共有します」と一言添える。これだけで、Cの聞き手は安心して背景まで聞いてくれます。</p>
                        </div>
                        <div>
                            <strong className="block mb-1">2. Cは「経緯も知りたい」と自分から聞く</strong>
                            <p className="text-sm">結論だけで判断がつかないときは、「経緯も教えてください」とこちらから引き出す。Eの話し方を遮るのではなく、必要な情報を引き出す姿勢に変えるだけで、関係はぐっと楽になります。</p>
                        </div>
                        <div>
                            <strong className="block mb-1">3. フォーマットを事前に決めておく</strong>
                            <p className="text-sm">「結論・理由・経緯」の3点セットを使う、とチームで先に決めておけば、どちらの型の人も同じフォーマットに情報を当てはめるだけで済みます。型の違いを、個人の努力ではなく仕組みで吸収する方法です。</p>
                        </div>
                    </div>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-pink pl-3 py-1">
                        「話し方が下手」ではない
                    </h2>
                    <p>
                        結論から話せないのは、能力の欠如ではありません。背景を端折れないのは、気配りの証拠でもあります。逆に、結論から話す人が冷たいわけでもありません。ただ、伝える順番の&quot;型&quot;が違うだけです。
                    </p>
                    <p>
                        自分の型を知り、相手の型を想像できれば、報連相はもっと楽になります。
                    </p>

                    <p className="font-bold text-center text-lg mt-8">
                        あなたはC寄り、それともE寄り？
                    </p>
                    <p className="text-center text-sm text-gray-600">
                        自分の報連相の型を知ることから始めてみましょう。
                    </p>
                    <div className="flex flex-col items-center gap-2 text-sm mt-4">
                        <Link href="/column/combo-warmth" className="text-neon-blue hover:underline">→ 「気持ち」と「結論」の翻訳術の記事を読む</Link>
                        <Link href="/column/boss-subordinate" className="text-neon-blue hover:underline">→ 上司・部下のすれ違いの記事を読む</Link>
                        <Link href="/column/axis-warmth" className="text-neon-blue hover:underline">→ Warmth(温度感)の記事を読む</Link>
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
