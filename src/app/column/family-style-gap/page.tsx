import Link from "next/link";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "親子・家族の\"通じなさ\"は世代でなくスタイルの組み合わせ",
    description: "「親とは価値観が合わない」の正体は、世代差ではなく4軸のスタイルの組み合わせかもしれません。実家に帰るたびに疲れる理由を、4軸で読み解きます。",
};

export default function FamilyStyleGapArticle() {
    return (
        <NotebookLayout className="flex flex-col space-y-8 pb-20">
            <article className="bg-white/90 p-6 sm:p-8 rounded-lg notebook-border shadow-lg">
                <header className="mb-8 border-b-2 border-gray-200 pb-6">
                    <span className="text-4xl mb-4 block">🏠</span>
                    <h1 className="text-2xl sm:text-3xl font-bold font-handwriting text-ink leading-tight mb-4">
                        親子・家族の&quot;通じなさ&quot;は世代でなく<br/>スタイルの組み合わせ
                    </h1>
                    <p className="text-gray-500 text-sm font-medium">公開日: 2026年8月6日</p>
                </header>

                <div className="space-y-6 text-gray-800 leading-relaxed font-medium">
                    <p>
                        実家に帰るたびに、なぜか少し疲れる。話している内容自体はたいしたことないのに、会話の後にどっと消耗している自分に気づく。「ジェネレーションギャップだから仕方ない」——そう自分を納得させたことがある人も多いはずです。
                    </p>
                    <p>
                        でも、それは半分正解で、半分は見当違いかもしれません。世代が違えば価値観の違いはたしかにあります。ただ、疲れの正体をよく見てみると、価値観そのものより、<strong className="text-neon-pink">会話のスタイルの組み合わせ</strong>が原因になっていることが、案外多いんです。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        「話が通じない」の中身を分解してみる
                    </h2>
                    <p>
                        家族との会話疲れを、よくよく分解すると、こんな声が混ざっています。
                    </p>
                    <p>
                        「なんでそんなに急かすの?」「なんでそんなに黙ってるの?」「なんでいちいち感情的になるの?」「なんでそんなに素っ気ないの?」
                    </p>
                    <p>
                        これ、実はどれも価値観の話ではありません。<strong>Power・Speed・Warmth・Volumeという、4軸のクセの話</strong>です。世代というラベルを外して見てみると、案外シンプルな構造が浮かび上がります。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-pink pl-3 py-1">
                        「話を最後まで聞いてくれない」の正体
                    </h2>
                    <p>
                        親が話の途中で「で、結局どうしたいの」と割り込んでくる。これは、多くの場合、<strong>主導型(D)×即興型(I)</strong>の組み合わせです。結論を急ぎ、思いついたことをすぐ口にする。悪気があるわけではなく、そのテンポが、その人にとっての自然体なんです。
                    </p>
                    <p>
                        一方、じっくり考えてから話したい<strong>熟考型(S)</strong>の子どもからすると、話の腰を折られる感覚が強く残ります。世代というより、<strong>Speedの噛み合わせ</strong>の問題です。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-yellow pl-3 py-1">
                        「感情的すぎる/冷たすぎる」の正体
                    </h2>
                    <p>
                        家族の会話で頻発するもう一つのすれ違いが、<strong>Warmth(E/C)</strong>です。心配のあまり感情を強く表に出す親と、状況を淡々と報告したい子ども。あるいはその逆。
                    </p>
                    <p>
                        「なんでそんなに怒るの」と感じるとき、相手は怒っているのではなく、Eのクセで心配を大きな声で表現しているだけかもしれません。「もっと気持ちを込めて話してよ」と感じるとき、相手は冷たいのではなく、Cのクセで状況整理を優先しているだけかもしれません。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        家族だからこそ、遠慮なくズレが出る
                    </h2>
                    <p>
                        友人や同僚なら、少し気を遣って自分のスタイルを抑えることがあります。でも家族の前では、その&quot;抑え&quot;が外れやすい。素のスタイルがそのまま出るからこそ、噛み合わないときのズレも、より鮮明に感じられるんです。これは関係が悪いからではなく、むしろ<strong>気を遣わずにいられる関係だから</strong>とも言えます。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-pink pl-3 py-1">
                        世代のせいにする前に、軸で見てみる
                    </h2>
                    <p>
                        もちろん、時代背景による価値観の違いは実在します。それを否定するつもりはありません。ただ、「話が通じない」の全部を世代差のせいにしてしまうと、そこで思考が止まってしまいます。
                    </p>
                    <p>
                        「これはPowerの噛み合わせなのかも」「これはSpeedのズレかも」と分解してみると、対処のしようが見えてきます。急かされて疲れるなら、「ちょっと考えさせて」と一言はさむ。感情の強さに戸惑うなら、「心配してくれてありがとう、大丈夫だよ」と受け止め方を変えてみる。世代を変えることはできませんが、<strong>その場の一言の出し方は、いつでも変えられます</strong>。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-yellow pl-3 py-1">
                        通じなさは、関係が壊れているサインではない
                    </h2>
                    <p>
                        家族との会話に疲れるのは、その関係を大切に思っている証拠でもあります。どうでもいい相手には、そもそも疲れません。
                    </p>
                    <p>
                        親も、あなたも、悪気があって噛み合わないわけじゃない。ただ、生まれ持ったスタイルの組み合わせが、たまたま少しズレているだけです。
                    </p>

                    <p className="font-bold text-center text-lg mt-8">
                        あなたと、家族のスタイルは、どんな組み合わせでしょうか。
                    </p>
                    <p className="text-center text-sm text-gray-600">
                        まずは3分の診断で、自分のコミュニケーションタイプを確かめてみてください。
                    </p>
                    <div className="flex flex-col items-center gap-2 text-sm mt-4">
                        <Link href="/column/type-compatibility-map" className="text-neon-blue hover:underline">→ 16タイプ関係地図の記事を読む</Link>
                        <Link href="/column/communication-styles" className="text-neon-blue hover:underline">→ 4つの軸のまとめを読む</Link>
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
