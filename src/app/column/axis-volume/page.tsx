import Link from "next/link";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Volume(存在感) — 場に自分を刻むX、そっと溶け込むZ、それぞれの強み | 16コミュニケーションタイプ診断",
    description: "会議で目立つ人と、静かに聞き役に回る人。どちらも場に貢献しています。Volume(存在感)という軸から、XとZそれぞれの強みを解説します。",
};

export default function AxisVolumeArticle() {
    return (
        <NotebookLayout className="flex flex-col space-y-8 pb-20">
            <article className="bg-white/90 p-6 sm:p-8 rounded-lg notebook-border shadow-lg">
                <header className="mb-8 border-b-2 border-gray-200 pb-6">
                    <span className="text-4xl mb-4 block">🎨</span>
                    <h1 className="text-2xl sm:text-3xl font-bold font-handwriting text-ink leading-tight mb-4">
                        Volume(存在感)<br/>場に自分を刻むX、そっと溶け込むZ、それぞれの強み
                    </h1>
                    <p className="text-gray-500 text-sm font-medium">公開日: 2026年8月6日</p>
                </header>

                <div className="space-y-6 text-gray-800 leading-relaxed font-medium">
                    <p>
                        「今日の会議、あの人ばっかり喋ってたな」<br/>
                        「私、今日も何も言えなかった……」
                    </p>
                    <p>
                        同じ会議室にいたのに、感じていることはこんなにも違う。片方は場を賑わせ、片方は静かに座っている。でも、後者が&quot;存在感がない&quot;かというと、そうとは言い切れません。
                    </p>
                    <p>
                        これは、4軸のひとつ<strong className="text-neon-pink">Volume（存在感）</strong>という、場への関わり方のクセです。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        Volumeは「声の大きさ」ではなく「関わり方」
                    </h2>
                    <p>
                        Volumeが高い側は<strong>X（表現大）</strong>、低い側は<strong>Z（表現小）</strong>。
                    </p>
                    <p>
                        Xの人は、言葉や表情、リアクションで自分を場に刻みます。「それ、めっちゃ分かる!」と大きくうなずき、思いついたことをどんどん口にする。存在感を外側に広げることで、場を活気づけようとするタイプです。
                    </p>
                    <p>
                        Zの人は、静かに聞き役に回ることで場に関わります。多くを語らなくても、うなずきや相槌、ふとした一言に、ちゃんと重みがある。存在感を内側に持ちながら、場を支えようとするタイプです。
                    </p>
                    <p>
                        どちらも、その場に貢献したいという気持ちは同じです。ただ、それをどう表現するかが違うだけなんです。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-pink pl-3 py-1">
                        Xの強みと、Xが抱えやすい悩み
                    </h2>
                    <p>
                        Xの強みは、場の空気を動かす力です。誰かが緊張しているとき、Xの人のリアクションひとつで場が和むことがあります。アイデアを外に出し合うブレストのような場面では、Xの人の発信力が議論を前に進めます。
                    </p>
                    <p>
                        一方でXの人は、「うるさいと思われていないか」「もっと落ち着くべきでは」と気にすることがあります。良かれと思って盛り上げたつもりが、「ちょっと圧が強いね」と言われて戸惑う。でもそれは、<strong>場を良くしたいという気持ちの表れ方</strong>が、たまたま外向きだっただけなんです。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-yellow pl-3 py-1">
                        Zの強みと、Zが抱えやすい悩み
                    </h2>
                    <p>
                        Zの強みは、安心して話せる空気をつくる力です。多くを語らないZの人がそばにいると、「この人になら話しても大丈夫」と感じる人は多いものです。深い相談や、繊細な話題ほど、Zの人が信頼される場面は少なくありません。
                    </p>
                    <p>
                        一方でZの人は、「存在感がない」「もっと発言すべき」と言われて、傷つくことがあります。でもそれも、内気さの表れではなく、<strong>場をよく観察してから、言葉を選んで届けようとする姿勢</strong>であることがほとんどです。実際、Zの人がぽつりと発する一言には、場の空気を変えるだけの重みがあることも多いのです。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        X×Zが噛み合うと、居心地のいい場になる
                    </h2>
                    <p>
                        Xが場を明るく照らし、Zがその奥行きを支える。この組み合わせが噛み合うと、賑やかさと安心感が両立した、居心地のいい場が生まれます。
                    </p>
                    <p>
                        逆に噛み合わないと、「あの人ばっかり喋ってる」「なんで何も言わないの」というすれ違いだけが残ってしまう。違いは欠点ではなく、<strong>役割の違い</strong>です。
                    </p>
                    <div className="bg-gray-50 p-4 border border-gray-200 rounded">
                        <ul className="list-disc pl-5 space-y-2 text-sm">
                            <li>Xの人へ: 話し終えたあと、少しだけ間を空けて「〇〇さんはどう思う?」と振ってみる。それだけでZの人は発言のきっかけをつかみやすくなります。</li>
                            <li>Zの人へ: 全部を言葉にしなくていいので、「いいと思う」「気になる」だけでも声に出してみる。短い一言でも、場にはちゃんと届いています。</li>
                        </ul>
                    </div>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-pink pl-3 py-1">
                        自分のVolumeを知ることから
                    </h2>
                    <p>
                        XとZに優劣はありません。場を明るく照らすのも、静かに場を支えるのも、どちらもその場を良くしたいという気持ちから生まれています。
                    </p>
                    <p>
                        自分がどちらの関わり方をしやすいかを知ると、「目立つ人がえらい」という思い込みから、少し自由になれます。
                    </p>

                    <p className="font-bold text-center text-lg mt-8">
                        あなたのVolumeは、XとZどちらに寄っていますか？
                    </p>
                    <p className="text-center text-sm text-gray-600">
                        3分の診断で、Volume軸を含む4つの軸から、あなたのコミュニケーションタイプを確かめてみてください。
                    </p>
                    <div className="flex flex-col items-center gap-2 text-sm mt-4">
                        <Link href="/column/communication-styles" className="text-neon-blue hover:underline">→ 4つの軸のまとめを読む（コミュニケーションスタイルとは？）</Link>
                        <Link href="/column/axis-power" className="text-neon-blue hover:underline">→ Power(主導権)の記事を読む</Link>
                        <Link href="/column/axis-warmth" className="text-neon-blue hover:underline">→ Warmth(温度感)の記事を読む</Link>
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
