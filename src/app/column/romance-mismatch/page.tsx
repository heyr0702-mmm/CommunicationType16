import Link from "next/link";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
    alternates: { canonical: "/column/romance-mismatch" },
    title: "恋愛・パートナーの会話がすれ違う、4軸の理由",
    description: "「なんで分かってくれないの」の裏には、性格の不一致ではなく4軸のズレがあります。決め方・気持ちの伝え方・喧嘩のペース・愛情表現、それぞれのすれ違いを解説します。",
};

export default function RomanceMismatchArticle() {
    return (
        <NotebookLayout className="flex flex-col space-y-8 pb-20">
            <article className="bg-white/90 p-6 sm:p-8 rounded-lg notebook-border shadow-lg">
                <header className="mb-8 border-b-2 border-gray-200 pb-6">
                    <span className="text-4xl mb-4 block">💌</span>
                    <h1 className="text-2xl sm:text-3xl font-bold font-handwriting text-ink leading-tight mb-4">
                        恋愛・パートナーの会話がすれ違う<br/>4軸の理由
                    </h1>
                    <p className="text-gray-500 text-sm font-medium">公開日: 2026年8月6日</p>
                </header>

                <div className="space-y-6 text-gray-800 leading-relaxed font-medium">
                    <p>
                        「もっとちゃんと話し合おうよ」「いや、今その話をするの、しんどいんだけど」。
                    </p>
                    <p>
                        付き合いが長くなるほど、こういう喧嘩が増えていく人は多いはずです。内容そのものより、<strong className="text-neon-pink">話し方のペースをめぐる喧嘩</strong>。これは、性格の不一致でも、愛情が減ったわけでもありません。近い距離だからこそ、4軸のズレが強く表に出てきているだけです。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        近いからこそ、ズレが目立つ
                    </h2>
                    <p>
                        友人や同僚となら、多少テンポが違っても、適度な距離感でやり過ごせます。でも恋愛やパートナーシップは、毎日、何度も接点があります。しかも「分かってほしい」という期待値が、他のどの関係よりも高い。だから同じズレでも、恋愛の場では何倍も痛く感じられます。ここでは、4つの軸それぞれが恋愛でどう表れるかを見てみます。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-pink pl-3 py-1">
                        Power(主導権) — 決めるD、委ねるR
                    </h2>
                    <p>
                        旅行の行き先、休日の過ごし方、将来の話。<strong>主導型(D)</strong>は「じゃあこうしよう」とテンポよく決めていきたい。<strong>受容型(R)</strong>は、じっくり考えてから決めたい、あるいは相手に決めてほしい。
                    </p>
                    <p>
                        D側は「なんで自分で決めてくれないの」と焦れったく感じ、R側は「勝手に決めないでよ」と置いていかれた気持ちになります。でもこれは、どちらかが主体性を欠いているのではなく、<strong>決断にかける時間の長さが違うだけ</strong>です。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-yellow pl-3 py-1">
                        Warmth(温度感) — 気持ちが先のE、解決が先のC
                    </h2>
                    <p>
                        喧嘩や相談ごとのとき、このズレが一番強く出ます。<strong>共感型(E)</strong>は、「まず気持ちを分かってほしい」。<strong>論理型(C)</strong>は、「じゃあどうすればいいか、一緒に考えよう」。
                    </p>
                    <p>
                        E側は「共感してくれない、冷たい」と感じ、C側は「泣かれても、何も解決しないのに」と戸惑う。どちらも、相手のことを大切に思って動いているのに、最初の一手が違うだけで、まったく届き方が変わってしまいます。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        Speed(テンポ) — すぐ話したいI、いったん離れたいS
                    </h2>
                    <p>
                        喧嘩の後、このズレが決定的になりがちです。<strong>即興型(I)</strong>は、その場で話し合って解決したい。時間を置くほど、モヤモヤが大きくなるタイプです。<strong>熟考型(S)</strong>は、頭が整理できていない状態で話すのを避けたい。少し時間をもらってから、ちゃんと向き合いたいタイプです。
                    </p>
                    <p>
                        I側からすると、Sが黙って部屋を出ていくのは「話し合いから逃げた」ように見えます。S側からすると、Iがすぐ詰め寄ってくるのは「考える時間もくれない」と感じられます。実はこれ、望んでいる着地点はほとんど同じで、<strong>そこにたどり着くまでの速度だけが違う</strong>んです。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-pink pl-3 py-1">
                        Volume(存在感) — 表現するX、行動で示すZ
                    </h2>
                    <p>
                        「愛されてる実感がない」というすれ違いの多くは、ここに原因があります。<strong>X</strong>の人は、言葉やスキンシップで愛情をはっきり表現します。「好き」を何度も口にする、リアクションが大きい。<strong>Z</strong>の人は、日々の行動で愛情を示します。さりげない気配り、静かなサポート。
                    </p>
                    <p>
                        X側からすると、Zの静けさは「愛情が薄いのでは」と映ります。Z側からすると、十分に愛情を注いでいるつもりなので、「なんでもっと欲しがるんだろう」と戸惑います。愛情の量ではなく、<strong>表現の&quot;音量&quot;が違うだけ</strong>なんです。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-yellow pl-3 py-1">
                        すれ違いに、犯人はいない
                    </h2>
                    <p>
                        ここまで4つの軸を見てきて分かるのは、恋愛のすれ違いのほとんどに、悪者が存在しないということです。決め方も、気持ちの伝え方も、喧嘩のペースも、愛情の示し方も、どちらも相手のことを思って動いた結果です。ただ、その動き方の&quot;型&quot;が違っていただけ。
                    </p>
                    <p>
                        大事なのは、相手を自分の型に合わせさせることではなく、「あ、いま私たち、違う軸でぶつかってるな」と気づくことです。それだけで、同じ喧嘩でも、責め合いから翻訳作業に変わります。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        お互いの型を、共通言語にする
                    </h2>
                    <p>
                        2人の組み合わせが分かれば、「ここは私が少し急がなくていい」「ここは自分から言葉にしよう」と、具体的な工夫ができるようになります。相性を良くする魔法ではなく、<strong>すれ違いを早めに正体不明のままにしないための地図</strong>です。
                    </p>

                    <p className="font-bold text-center text-lg mt-8">
                        あなたと、あなたの大切な人は、どんな組み合わせでしょうか。
                    </p>
                    <p className="text-center text-sm text-gray-600">
                        できればパートナーと一緒に診断すると、話が早くなります。
                    </p>
                    <div className="flex flex-col items-center gap-2 text-sm mt-4">
                        <Link href="/column/communication-styles" className="text-neon-blue hover:underline">→ 4つの軸のまとめを読む</Link>
                        <Link href="/column/axis-power" className="text-neon-blue hover:underline">→ Power(主導権)の記事を読む</Link>
                        <Link href="/column/axis-warmth" className="text-neon-blue hover:underline">→ Warmth(温度感)の記事を読む</Link>
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
