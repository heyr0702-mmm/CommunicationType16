import Link from "next/link";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
    alternates: { canonical: "/column/type-compatibility-map" },
    title: "相性の良い組み合わせ・噛み合わない組み合わせ — 16タイプ関係地図",
    description: "「相性がいい/悪い」は実は少しズレた表現です。4軸の組み合わせで\"起きやすいこと\"を地図にすると、どんな2人の間にも扱い方が見えてきます。",
};

export default function TypeCompatibilityMapArticle() {
    return (
        <NotebookLayout className="flex flex-col space-y-8 pb-20">
            <article className="bg-white/90 p-6 sm:p-8 rounded-lg notebook-border shadow-lg">
                <header className="mb-8 border-b-2 border-gray-200 pb-6">
                    <span className="text-4xl mb-4 block">🗺️</span>
                    <h1 className="text-2xl sm:text-3xl font-bold font-handwriting text-ink leading-tight mb-4">
                        相性の良い組み合わせ・噛み合わない組み合わせ<br/>16タイプ関係地図
                    </h1>
                    <p className="text-gray-500 text-sm font-medium">公開日: 2026年8月6日</p>
                </header>

                <div className="space-y-6 text-gray-800 leading-relaxed font-medium">
                    <p>
                        「あの人とは相性がいい」「あの人とはどうも相性が悪い」。
                    </p>
                    <p>
                        私たちは無意識にこの言葉を使います。でも冷静に考えると、これはちょっと乱暴な言い方です。人と人の間に起きることを、良い・悪いの二択に押し込めてしまっているから。
                    </p>
                    <p>
                        この診断でいう「組み合わせ」は、それとは少し違います。良い悪いの判定ではなく、<strong className="text-neon-pink">この2人の間では何が起きやすいか</strong>を先に知っておく、という発想です。天気予報に近いかもしれません。「明日は雨」に良いも悪いもなく、傘を持つかどうかを決められるだけ。組み合わせも同じで、知っていれば備えられます。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        「相性」でなく「地図」として見る
                    </h2>
                    <p>
                        4軸（Power・Warmth・Speed・Volume）の組み合わせは16通り。すべての組み合わせに、それぞれ起きやすい化学反応があります。ここでは代表的な3パターンを地図として描いてみます。
                    </p>
                    <p>
                        <strong>① 同じ軸同士（例: D×D、E×E）</strong>
                    </p>
                    <p>
                        似たクセを持つ2人は、驚くほどスムーズに進みます。主導型(D)同士なら、話が早い。共感型(E)同士なら、気持ちの温度がぴったり合う。
                    </p>
                    <p>
                        ただし落とし穴もあります。D×Dは「どっちが決めるか」で衝突しやすい。E×E同士は、気持ちに寄り添いすぎて結論が出にくいことがある。似ているからこそ、お互いの弱いところも重なってしまうんです。
                    </p>
                    <p>
                        <strong>② 対極の軸同士（例: D×R、I×S）</strong>
                    </p>
                    <p>
                        主導型(D)と受容型(R)。即興型(I)と熟考型(S)。一見かみ合わなそうですが、実はここには補い合う関係が眠っています。Dが決めてRが支える。Iが場を動かしてSが精査する。噛み合ったときの安定感は、同じ軸同士にはないものです。
                    </p>
                    <p>
                        問題は、噛み合うまでに時間がかかること。最初はテンポのズレに戸惑います。「なんでそんなに急ぐの」「なんでそんなに黙るの」。ここで大事なのは、どちらかが我慢して合わせることではなく、「これは補い合いの関係なんだ」と早めに気づくことです。
                    </p>
                    <p>
                        <strong>③ 軸が半分だけ重なる組み合わせ（例: D×I とR×S）</strong>
                    </p>
                    <p>
                        現実に一番多いのはこのパターンです。ある軸は似ていて、別の軸はまったく違う。Powerは同じでもSpeedが逆、というような組み合わせ。
                    </p>
                    <p>
                        ここでは「なぜかいつも半分だけ分かり合えて、半分だけすれ違う」という感覚が起きやすくなります。これは中途半端な相性ではなく、むしろ自然な状態です。人はそう単純に一致しません。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-pink pl-3 py-1">
                        具体例で見てみる — D×SとE×Cの関係地図
                    </h2>
                    <p>
                        たとえば<strong>主導型で熟考型(D×S)</strong>の上司と、<strong>受容型で即興型(R×I)</strong>の部下。
                    </p>
                    <p>
                        上司はテンポよく決めたいのに、部下はその場で反応せず持ち帰って考えたい。あるいは逆に、部下は思いついたことをすぐ口にしたいのに、上司はじっくり型で即答を避ける。組み合わせによって、&quot;詰まるポイント&quot;が変わってきます。
                    </p>
                    <p>
                        <strong>共感型(E)</strong>と<strong>論理型(C)</strong>の関係も同じです。Eは「まず気持ちを分かってほしい」、Cは「まず状況を整理したい」。この2人が一緒にプロジェクトを進めると、報告のたびに小さなズレが生まれます。でもこれは、片方が冷たいとか、片方が甘いという話ではありません。<strong>優先順位の置き場所が違うだけ</strong>です。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-yellow pl-3 py-1">
                        「悪い組み合わせ」は存在しない
                    </h2>
                    <p>
                        ここまで読んで、「うちのチームはこの組み合わせだから難しい」と結論づけたくなるかもしれません。でも、それはこの記事の伝えたいこととは逆です。
                    </p>
                    <p>
                        どの組み合わせにも、得意な場面と苦手な場面があります。Dが多いチームは決断が速い。Sが多いチームはミスが少ない。Xが目立つチームは場が明るい。Zが支えるチームは信頼が厚い。組み合わせに優劣をつけた瞬間、その関係が持つ良さまで見えなくなってしまいます。
                    </p>
                    <p>
                        大事なのは、「この組み合わせでは何が起きやすいか」を先に知っておくこと。すれ違いが起きたときに、「性格の不一致だ」ではなく「あ、これはあの軸の組み合わせのクセだ」と思い出せること。それだけで、同じすれ違いでも受け止め方がまったく変わります。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        まずは自分と相手のマスを知る
                    </h2>
                    <p>
                        関係地図を使うには、まず自分がどのマスにいるかを知る必要があります。そして、できれば相手のスタイルも想像してみる。
                    </p>
                    <p>
                        「私はD×I、あの人はR×S。だから決断のテンポで待ってあげよう」。そんなふうに、具体的な組み合わせで考えられるようになると、人間関係の悩みはぐっと解像度が上がります。
                    </p>

                    <p className="font-bold text-center text-lg mt-8">
                        あなたと、あの人の組み合わせは、どんな地図を描いているでしょうか。
                    </p>
                    <p className="text-center text-sm text-gray-600">
                        まずは3分の診断で、自分のコミュニケーションタイプを確かめてみてください。
                    </p>
                    <div className="flex flex-col items-center gap-2 text-sm mt-4">
                        <Link href="/column/communication-styles" className="text-neon-blue hover:underline">→ 4つの軸のまとめを読む（コミュニケーションスタイルとは？）</Link>
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
