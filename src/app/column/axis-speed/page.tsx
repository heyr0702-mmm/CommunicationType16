import Link from "next/link";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
    alternates: { canonical: "/column/axis-speed" },
    title: "Speed(テンポ) — 会話が\"卓球(I)\"の人と\"手紙(S)\"の人",
    description: "即レスでポンポン返す人と、じっくり考えてから話す人。テンポの違いはSpeed(テンポ)という軸のクセです。IとS、それぞれの流儀とすれ違いを解説します。",
};

export default function AxisSpeedArticle() {
    return (
        <NotebookLayout className="flex flex-col space-y-8 pb-20">
            <article className="bg-white/90 p-6 sm:p-8 rounded-lg notebook-border shadow-lg">
                <header className="mb-8 border-b-2 border-gray-200 pb-6">
                    <span className="text-4xl mb-4 block">🏓</span>
                    <h1 className="text-2xl sm:text-3xl font-bold font-handwriting text-ink leading-tight mb-4">
                        Speed(テンポ)<br/>会話が&quot;卓球(I)&quot;の人と&quot;手紙(S)&quot;の人
                    </h1>
                    <p className="text-gray-500 text-sm font-medium">公開日: 2026年8月6日</p>
                </header>

                <div className="space-y-6 text-gray-800 leading-relaxed font-medium">
                    <p>
                        LINEを送ってすぐ既読がついたのに、返事が来るまで数時間かかる人がいます。逆に、送った瞬間にポンポン返ってくる人もいます。
                    </p>
                    <p>
                        前者を「冷たい」、後者を「軽い」と判断してしまう前に、一度立ち止まってみてください。それはただの、会話の<strong className="text-neon-pink">テンポの違い</strong>かもしれません。4軸のひとつ、<strong>Speed（テンポ）</strong>です。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        会話は、卓球か、手紙か
                    </h2>
                    <p>
                        Speedが高い側は<strong>I（即興・Immediate）</strong>、低い側は<strong>S（熟考・Steady）</strong>。
                    </p>
                    <p>
                        Iの人にとって、会話は卓球です。ボールが来たら、すぐに打ち返す。喋りながら考え、考えながら喋る。言葉にすることで、頭の中を整理していくタイプです。だから、テンポが落ちると「あれ、大丈夫かな」と少し不安になります。
                    </p>
                    <p>
                        Sの人にとって、会話は手紙です。受け取った言葉を、いったん自分の中でよく読み、意味を確かめてから、返事を書く。頭の中で考えをまとめ終えてから、言葉として差し出すタイプです。だから、急かされると「まだ考えてるのに」と焦ってしまいます。
                    </p>
                    <p>
                        どちらも、相手にきちんと向き合おうとする姿勢は同じです。ただ、その向き合い方の速度が違うだけなんです。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-pink pl-3 py-1">
                        Iの強みと、Iが抱えやすい悩み
                    </h2>
                    <p>
                        Iの強みは、場を動かす瞬発力です。会議で誰も口火を切れないとき、Iの人の一言がきっかけになって、議論が動き出すことがよくあります。アイデア出しやブレストのような、テンポが命の場面では、Iの人の存在が場を活気づけます。
                    </p>
                    <p>
                        一方でIの人は、「軽く見られていないか」「もっと考えてから話すべきでは」と、後から自分の発言を振り返って不安になることがあります。でもそれは浅はかさではなく、<strong>言葉にしながら考えるという、ひとつの思考のスタイル</strong>にすぎません。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-yellow pl-3 py-1">
                        Sの強みと、Sが抱えやすい悩み
                    </h2>
                    <p>
                        Sの強みは、考え抜かれた発言の重みです。会議の終盤、それまで静かだったSの人がひと言発すると、議論がすっと収まることがあります。じっくり考える時間があるからこそ、抜け漏れの少ない、質の高い意見が出てくるのがSの人です。
                    </p>
                    <p>
                        一方でSの人は、「反応が遅い」「テンポについてこられない」と言われて、傷つくことがあります。でもそれも、いい加減な返事をしたくないという、<strong>誠実さの表れ</strong>であることがほとんどです。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        すれ違いを防ぐ、小さな一言
                    </h2>
                    <p>
                        IとSのテンポのズレは、少しの合図で驚くほど和らぎます。
                    </p>
                    <div className="bg-gray-50 p-4 border border-gray-200 rounded">
                        <ul className="list-disc pl-5 space-y-2 text-sm">
                            <li>Iの人へ: 相手の返事が遅いとき、「ゆっくりでいいよ」と一言添えてみる。それだけでSの人のプレッシャーは、かなり軽くなります。</li>
                            <li>Sの人へ: 即答できないとき、「ちょっと考えるね」と一言だけ挟んでみる。沈黙の意味が伝わるだけで、Iの人の不安はぐっと減ります。</li>
                        </ul>
                    </div>
                    <p>
                        会話のテンポそのものを変える必要はありません。<strong>&quot;いま何をしているか&quot;を一言共有するだけ</strong>で、噛み合わなかったリズムが、驚くほど合ってきます。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-pink pl-3 py-1">
                        自分のSpeedを知ることから
                    </h2>
                    <p>
                        IとSに優劣はありません。卓球のようにテンポよく打ち返すのも、手紙のようにじっくり言葉を選ぶのも、どちらも会話を大切にする姿勢の表れです。
                    </p>
                    <p>
                        自分がどちらのテンポで会話しているかを知ると、相手の「間」の意味も、もっと正確に読み取れるようになります。
                    </p>

                    <p className="font-bold text-center text-lg mt-8">
                        あなたのSpeedは、IとSどちらに寄っていますか？
                    </p>
                    <p className="text-center text-sm text-gray-600">
                        3分の診断で、Speed軸を含む4つの軸から、あなたのコミュニケーションタイプを確かめてみてください。
                    </p>
                    <div className="flex flex-col items-center gap-2 text-sm mt-4">
                        <Link href="/column/communication-styles" className="text-neon-blue hover:underline">→ 4つの軸のまとめを読む（コミュニケーションスタイルとは？）</Link>
                        <Link href="/column/axis-power" className="text-neon-blue hover:underline">→ Power(主導権)の記事を読む</Link>
                        <Link href="/column/axis-warmth" className="text-neon-blue hover:underline">→ Warmth(温度感)の記事を読む</Link>
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
