import Link from "next/link";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
    alternates: { canonical: "/column/combo-warmth" },
    title: "共感型(E)×論理型(C) — 「気持ち」と「結論」の翻訳術",
    description: "「まず分かってほしい」というEと「まず結論から聞きたい」というC。すれ違うのは冷たいからでも重いからでもなく、優先順位の違いです。翻訳のコツを紹介します。",
};

export default function ComboWarmthArticle() {
    return (
        <NotebookLayout className="flex flex-col space-y-8 pb-20">
            <article className="bg-white/90 p-6 sm:p-8 rounded-lg notebook-border shadow-lg">
                <header className="mb-8 border-b-2 border-gray-200 pb-6">
                    <span className="text-4xl mb-4 block">🔄</span>
                    <h1 className="text-2xl sm:text-3xl font-bold font-handwriting text-ink leading-tight mb-4">
                        共感型(E)×論理型(C)<br/>「気持ち」と「結論」の翻訳術
                    </h1>
                    <p className="text-gray-500 text-sm font-medium">公開日: 2026年8月6日</p>
                </header>

                <div className="space-y-6 text-gray-800 leading-relaxed font-medium">
                    <p>
                        「今日、上司にこんなこと言われてさ……」
                    </p>
                    <p>
                        Eの人がそう話し始めると、目的は共感してほしいこと。ただ、聞いてほしいだけです。
                    </p>
                    <p>
                        ところがCの人はこう返します。「それで、結局何が問題なの？」
                    </p>
                    <p>
                        悪気はまったくありません。Cの人にとって、話を聞く＝一緒に解決策を考える、です。でもEの人からすると、まだ気持ちの整理もついていないうちに&quot;結論&quot;を求められて、なんだか置いてけぼりにされた気がしてしまいます。
                    </p>
                    <p>
                        これは、共感型(E)と論理型(C)という<strong className="text-neon-pink">Warmth(温度感)軸のクセ</strong>が生む、ごくありふれたすれ違いです。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        EとCは、会話の&quot;目的地&quot;がそもそも違う
                    </h2>
                    <p>
                        Eの人にとって、会話の目的地は「分かってもらえた」という実感です。結論が出るかどうかより先に、まず気持ちが受け止められたかどうかが大事。
                    </p>
                    <p>
                        Cの人にとって、会話の目的地は「状況が整理され、次の一手が見える」ことです。気持ちに寄り添うことより先に、まず何が問題で、どう解決するかを掴みたい。
                    </p>
                    <p>
                        同じ「話を聞く」という行為でも、向いている方向がまったく違います。片方は感情の着地点を、もう片方は論理の着地点を探している。だから、良かれと思ってかけた言葉が、相手にはズレて届いてしまうんです。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-pink pl-3 py-1">
                        すれ違いが起きる具体的な場面
                    </h2>
                    <p>
                        <strong>場面①: 落ち込んでいるときの相談</strong>
                    </p>
                    <p>
                        Eは「つらかったね」の一言がほしい。Cは「原因は何？改善策は？」と分析を始める。Eは「そんなこと聞いてない」と感じ、Cは「なんで解決策を提案したのに不満そうなんだ」と戸惑います。
                    </p>
                    <p>
                        <strong>場面②: 家族やパートナーとの日常会話</strong>
                    </p>
                    <p>
                        Eは「今日こんなことがあってさ」と、出来事そのものより自分の感情の動きを共有したい。Cは「で、結論は?」と話の要点を先に知りたい。Eは話を遮られたように感じ、Cは話がどこに向かっているのか分からず疲れてしまいます。
                    </p>
                    <p>
                        <strong>場面③: チームでのフィードバック</strong>
                    </p>
                    <p>
                        Eは相手の努力や気持ちに触れてから改善点を伝えたい。Cはまず結論、次に理由という順番で端的に伝えたい。Eからすると、Cのフィードバックはぶっきらぼうに見え、Cからすると、Eの伝え方は要点が見えにくく感じられます。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-yellow pl-3 py-1">
                        翻訳術 — お互いの言葉を変換する
                    </h2>
                    <p>
                        これは「相手に合わせて自分を偽る」話ではありません。ちょっとした変換を挟むだけで、同じ内容がまったく違う受け取られ方をします。
                    </p>
                    <div className="bg-gray-50 p-4 border border-gray-200 rounded space-y-4">
                        <div>
                            <strong className="block mb-1">1. Eは「先に一言、聞いてほしいだけ」と宣言する</strong>
                            <p className="text-sm">「今からちょっと愚痴っていい？解決策はいらないんだけど」。この一言があるだけで、Cは分析モードに入らずに済みます。目的地を先に共有するだけで、すれ違いの大部分は防げます。</p>
                        </div>
                        <div>
                            <strong className="block mb-1">2. Cは「まず気持ちを受け止める一言」を先頭に置く</strong>
                            <p className="text-sm">結論から入る前に、「それは大変だったね」のひとことを添える。中身はそのまま論理的でよくて、ただ最初の一文だけ変える。Eにとっては、その一文があるかないかで印象がまったく違います。</p>
                        </div>
                        <div>
                            <strong className="block mb-1">3. どちらも「今どっちのモードか」を確認していい</strong>
                            <p className="text-sm">「これは気持ちを聞いてほしい話？それとも一緒に考えたい話?」。この確認は、冷たい質問ではなく、むしろ相手を大事にしている証拠です。聞く側から確認してあげることで、Eの人は安心して話し始められます。</p>
                        </div>
                    </div>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        気持ちと結論、どちらも必要
                    </h2>
                    <p>
                        Eの共感力は、人の心を軽くする力です。Cの論理力は、物事を前に進める力です。どちらが優れているという話では、まったくありません。
                    </p>
                    <p>
                        ただ、目的地が違うことに気づかないまま話し続けると、悪意なくすれ違い続けてしまいます。「今、私は気持ちの話をしている」「今、私は結論の話をしている」。それを一言添えるだけで、翻訳はぐっと簡単になります。
                    </p>

                    <p className="font-bold text-center text-lg mt-8">
                        あなたはE寄り、それともC寄り？
                    </p>
                    <p className="text-center text-sm text-gray-600">
                        自分の&quot;会話の目的地&quot;を知ることから始めてみましょう。
                    </p>
                    <div className="flex flex-col items-center gap-2 text-sm mt-4">
                        <Link href="/column/axis-warmth" className="text-neon-blue hover:underline">→ Warmth(温度感)の記事を読む</Link>
                        <Link href="/column/axis-power" className="text-neon-blue hover:underline">→ Power(主導権)の記事を読む</Link>
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
