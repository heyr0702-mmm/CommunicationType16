import Link from "next/link";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "初対面で会話が続かない — Speedと\"質問\"の技術",
    description: "初対面で会話が続かず気まずい沈黙が生まれるのは、コミュ力の低さではありません。Speed(テンポ)軸の噛み合わせと、質問の作り方の問題です。",
};

export default function FirstMeetingSpeedArticle() {
    return (
        <NotebookLayout className="flex flex-col space-y-8 pb-20">
            <article className="bg-white/90 p-6 sm:p-8 rounded-lg notebook-border shadow-lg">
                <header className="mb-8 border-b-2 border-gray-200 pb-6">
                    <span className="text-4xl mb-4 block">🤝</span>
                    <h1 className="text-2xl sm:text-3xl font-bold font-handwriting text-ink leading-tight mb-4">
                        初対面で会話が続かない<br/>Speedと&quot;質問&quot;の技術
                    </h1>
                    <p className="text-gray-500 text-sm font-medium">公開日: 2026年8月6日</p>
                </header>

                <div className="space-y-6 text-gray-800 leading-relaxed font-medium">
                    <p>
                        初対面の自己紹介が終わった後の、あの数秒。「えーと、何を聞けばいいんだろう」と頭が真っ白になって、結局「お仕事は何を?」というありきたりな質問しか出てこない。会話がぶつ切りで続かず、帰り道で「もっとうまく話せたはずなのに」と反省する。
                    </p>
                    <p>
                        これも、コミュ力の高い低いの話ではありません。初対面という場面には、<strong className="text-neon-pink">Speed(テンポ)軸の噛み合わせ</strong>が、いつも以上に強く効いているだけです。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        初対面は、合流地点に似ている
                    </h2>
                    <p>
                        高速道路の合流を思い浮かべてください。<strong>即興型(I)</strong>の人は、合流車線に入った瞬間からアクセルを踏みます。相手の名前を聞いたそばから、思いついた質問をどんどん投げていく。会話にスピードが出るまでの助走がほとんどいりません。
                    </p>
                    <p>
                        <strong>熟考型(S)</strong>の人は、合流にもう少し距離が必要です。相手の話し方、間の取り方をまず観察してから、少しずつ言葉を選び始める。準備なしにいきなり質問をひねり出すのが苦手で、その&quot;助走の時間&quot;が、外からは「会話が続かない沈黙」に見えてしまいます。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-pink pl-3 py-1">
                        I×Iなら弾む、I×Sなら片方が置いていかれる
                    </h2>
                    <p>
                        Iの人同士なら、初対面でもポンポン質問が飛び交い、あっという間に打ち解けます。ところがIとSが組むと、様子が変わります。
                    </p>
                    <p>
                        Iの人は、Sの人の間を「反応が薄いな」「興味ないのかな」と受け取りがちです。Sの人は、Iの人のテンポを「質問攻めにされてる」「考える暇がない」と感じがちです。どちらも悪気はまったくなく、<strong>ただ助走の長さが違うだけ</strong>なのに、初対面という一発勝負の場面では、それが致命的な気まずさに見えてしまうんです。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-yellow pl-3 py-1">
                        助走がいらない質問を、あらかじめ持っておく
                    </h2>
                    <p>
                        この気まずさは、その場の瞬発力に頼らないことで、かなり和らげられます。ポイントは、答える側にも&quot;間&quot;を許す質問を選ぶことです。
                    </p>
                    <div className="bg-gray-50 p-4 border border-gray-200 rounded space-y-4">
                        <div>
                            <strong className="block mb-1">1. Yes/Noで終わらない、でも重すぎない質問を用意しておく</strong>
                            <p className="text-sm">「休日は何してますか?」より、「最近、地味にハマってることありますか?」の方が、答えに小さな物語が生まれやすく、会話が自然に続きます。こうした質問を2〜3個、あらかじめ持っておくと、Iの人は即興で無理に質問をひねり出さなくて済みます。</p>
                        </div>
                        <div>
                            <strong className="block mb-1">2. 相手の答えに、間を置いて反応する</strong>
                            <p className="text-sm">Sの人が答えを言い終えた直後、すぐ次の質問に移らず、一拍待ってみてください。「へえ」「それいいですね」という一言をはさむだけで、Sの人は「ちゃんと聞いてもらえた」と感じ、次の言葉が出やすくなります。</p>
                        </div>
                        <div>
                            <strong className="block mb-1">3. 沈黙を、自分から埋めなくていいと知っておく</strong>
                            <p className="text-sm">Sの人が黙っているのは、興味がないからではなく、<strong>まだ言葉を組み立てている途中</strong>なだけです。3秒待ってみる。それだけで、思いがけず深い答えが返ってくることがあります。</p>
                        </div>
                    </div>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        会話は瞬発力より、準備で決まる
                    </h2>
                    <p>
                        初対面の会話が続くかどうかは、その場のセンスの勝負だと思われがちです。でも実際は、事前にどれだけ&quot;間&quot;を許容する質問を用意できているかで、かなり差が出ます。
                    </p>
                    <p>
                        Iの人もSの人も、相手にちゃんと関心を持っていることに変わりはありません。ただ、その関心の出し方の速度が違うだけです。
                    </p>

                    <p className="font-bold text-center text-lg mt-8">
                        あなたはI寄り、それともS寄り？
                    </p>
                    <p className="text-center text-sm text-gray-600">
                        自分のテンポを知っておくと、初対面での立ち回り方も見えてきます。
                    </p>
                    <div className="flex flex-col items-center gap-2 text-sm mt-4">
                        <Link href="/column/axis-speed" className="text-neon-blue hover:underline">→ Speed(テンポ)の記事を読む</Link>
                        <Link href="/column/silence-awkward-i" className="text-neon-blue hover:underline">→ 沈黙が気まずいのはIだからの記事を読む</Link>
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
