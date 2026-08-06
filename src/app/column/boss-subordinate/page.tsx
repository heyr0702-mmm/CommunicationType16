import Link from "next/link";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "上司・部下のすれ違いを4軸で読み解く",
    description: "上司と合わない、部下の考えが分からない。それは立場の問題ではなく、4軸のスタイルの組み合わせです。よくあるすれ違いパターンを解説します。",
};

export default function BossSubordinateArticle() {
    return (
        <NotebookLayout className="flex flex-col space-y-8 pb-20">
            <article className="bg-white/90 p-6 sm:p-8 rounded-lg notebook-border shadow-lg">
                <header className="mb-8 border-b-2 border-gray-200 pb-6">
                    <span className="text-4xl mb-4 block">🧭</span>
                    <h1 className="text-2xl sm:text-3xl font-bold font-handwriting text-ink leading-tight mb-4">
                        上司・部下のすれ違いを<br/>4軸で読み解く
                    </h1>
                    <p className="text-gray-500 text-sm font-medium">公開日: 2026年8月6日</p>
                </header>

                <div className="space-y-6 text-gray-800 leading-relaxed font-medium">
                    <p>
                        「うちの上司、何を考えているか分からない」<br/>
                        「うちの部下、何を考えているか分からない」
                    </p>
                    <p>
                        不思議なことに、この2つのセリフはよく対になって出てきます。同じ関係の中で、お互いがお互いを「分からない」と思っている。上下関係という力学のせいにされがちですが、正体はもっとシンプルです。<strong className="text-neon-pink">4つの軸のクセが、立場の違いによって余計に増幅されているだけ</strong>です。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        上司・部下関係は、軸のズレが目立ちやすい
                    </h2>
                    <p>
                        対等な関係なら「テンポが違うね」で流せることも、上司・部下という力関係が入ると、話が変わってきます。部下は上司に合わせざるを得ない場面が多く、上司は部下の反応を評価と結びつけて見てしまう。同じスタイルのズレでも、緊張感が一段階上がるんです。
                    </p>
                    <p>
                        ここでは4軸それぞれで、よくあるすれ違いパターンを見ていきます。
                    </p>
                    <p>
                        <strong>Power（主導権）— D上司×D部下、R上司×D部下</strong>
                    </p>
                    <p>
                        主導型(D)の上司のもとに、同じく主導型(D)の部下がつくと、意見がぶつかりやすくなります。どちらも「自分が引っ張りたい」タイプだから。逆に、受容型(R)の上司に主導型(D)の部下がつくと、部下は「もっと自分から決めてほしい」ともどかしく感じ、上司は「頼もしいけど暴走しないか心配」と感じることがあります。
                    </p>
                    <p>
                        <strong>Warmth（温度感）— E上司×C部下</strong>
                    </p>
                    <p>
                        共感型(E)の上司は、まず部下の状況や気持ちを聞いてから話を進めたい。論理型(C)の部下は、雑談抜きで結論から話してほしい。上司は「もっと心を開いてほしい」と感じ、部下は「毎回長い」と感じてしまう組み合わせです。
                    </p>
                    <p>
                        <strong>Speed（テンポ）— I上司×S部下</strong>
                    </p>
                    <p>
                        即興型(I)の上司はその場で指示を出し、その場で反応を求めます。熟考型(S)の部下は、指示を持ち帰って考えたい。上司は「反応が薄い」と感じ、部下は「即答を求められて焦る」と感じます。<Link href="/column/meeting-silence" className="text-neon-blue hover:underline">会議で発言できない</Link>で扱った構造がそのまま上下関係にも当てはまります。
                    </p>
                    <p>
                        <strong>Volume（存在感）— X上司×Z部下</strong>
                    </p>
                    <p>
                        表現の大きい(X)上司は、部下にも同じくらいのリアクションを期待しがちです。表現の小さい(Z)部下は、内心では納得していても、それが表に出にくい。上司は「本当に分かっているのか不安」になり、部下は「ちゃんと聞いているのに」と戸惑います。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-pink pl-3 py-1">
                        すれ違いの共通点 — 「評価」と「クセ」を混同しない
                    </h2>
                    <p>
                        これらのパターンに共通するのは、上司が部下の&quot;クセ&quot;を&quot;能力や意欲の差&quot;だと誤読してしまうこと、そして部下が上司の&quot;クセ&quot;を&quot;圧&quot;だと感じてしまうことです。
                    </p>
                    <p>
                        D部下の積極性は、意欲の高さであって生意気さではありません。S部下の沈黙は、思考の時間であって消極性ではありません。Z部下の控えめさは、性格の弱さであって熱意の低さではありません。逆に、D上司の即決も、E上司の気配りも、X上司の熱量も、それぞれのクセであって、部下を試しているわけではありません。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-yellow pl-3 py-1">
                        関係を楽にする3つの視点
                    </h2>
                    <div className="bg-gray-50 p-4 border border-gray-200 rounded space-y-4">
                        <div>
                            <strong className="block mb-1">1. 自分と相手、両方の軸を言葉にしてみる</strong>
                            <p className="text-sm">「自分はD×I、上司はR×S」というふうに、具体的に言語化してみる。感覚のズレが、構造として見えてくると、感情的な反応が少し落ち着きます。</p>
                        </div>
                        <div>
                            <strong className="block mb-1">2. 評価の前に、クセを疑う</strong>
                            <p className="text-sm">部下の反応が薄い、意見が出ない、というときに、まず能力や意欲を疑う前に、「これはVolumeやSpeedのクセかもしれない」と一拍置いてみる。</p>
                        </div>
                        <div>
                            <strong className="block mb-1">3. 立場が違っても、伝え方は歩み寄れる</strong>
                            <p className="text-sm">上司だから、部下だから、と役割に閉じずに、「今日はこのペースで進めましょう」と一言添えるだけで、力関係の緊張は和らぎます。</p>
                        </div>
                    </div>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        上下関係でも、組み合わせの理屈は変わらない
                    </h2>
                    <p>
                        立場が違っても、すれ違いの正体は<Link href="/column/type-compatibility-map" className="text-neon-blue hover:underline">16タイプ関係地図</Link>で見た組み合わせの理屈とまったく同じです。ただ、上司・部下という力学が、そのズレを増幅させているだけ。
                    </p>
                    <p>
                        正体が分かれば、「合わない上司」「使えない部下」という結論に飛びつく前に、もう一段階、深く相手を見られるようになります。
                    </p>

                    <p className="font-bold text-center text-lg mt-8">
                        あなたと上司・部下の組み合わせは、どの軸でズレていますか。
                    </p>
                    <p className="text-center text-sm text-gray-600">
                        まずは3分の診断で、自分のコミュニケーションタイプを確かめてみてください。
                    </p>
                    <div className="flex flex-col items-center gap-2 text-sm mt-4">
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
