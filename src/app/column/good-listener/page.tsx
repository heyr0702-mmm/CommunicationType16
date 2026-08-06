import Link from "next/link";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "聞き上手になる — 相手のスタイルに合わせる相槌と質問",
    description: "聞き上手とは、話し方が上手いことではありません。相手の4軸のスタイルに合わせて、相槌と質問を微調整できることです。D/R・E/C・I/S・X/Z別の聞き方のコツをまとめました。",
};

export default function GoodListenerArticle() {
    return (
        <NotebookLayout className="flex flex-col space-y-8 pb-20">
            <article className="bg-white/90 p-6 sm:p-8 rounded-lg notebook-border shadow-lg">
                <header className="mb-8 border-b-2 border-gray-200 pb-6">
                    <span className="text-4xl mb-4 block">👂</span>
                    <h1 className="text-2xl sm:text-3xl font-bold font-handwriting text-ink leading-tight mb-4">
                        聞き上手になる<br/>相手のスタイルに合わせる相槌と質問
                    </h1>
                    <p className="text-gray-500 text-sm font-medium">公開日: 2026年8月6日</p>
                </header>

                <div className="space-y-6 text-gray-800 leading-relaxed font-medium">
                    <p>
                        「聞き上手になりたい」と思ったとき、私たちはたいてい「相槌のバリエーションを増やそう」とか「質問を上手に返そう」といったテクニックに走りがちです。もちろんそれも大事です。でも、本当に聞き上手な人がやっているのは、もう一段階手前のことです。
                    </p>
                    <p>
                        <strong className="text-neon-pink">目の前の相手が、今どんなスタイルで話しているかを見極めて、聞き方をそのつど微調整すること。</strong>
                    </p>
                    <p>
                        同じ「うんうん」でも、相手によって効く相槌と、逆効果な相槌があります。ここまでの19本で見てきた4つの軸を、聞く側の視点でもう一度まとめてみます。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        Power(主導権) — Dにはテンポ、Rには余白を
                    </h2>
                    <p>
                        <strong>主導型(D)</strong>が話しているときは、結論に向かってどんどん進みたい心理が働いています。相槌は「なるほど、それで?」とテンポよく短く。話を止めない聞き方が喜ばれます。
                    </p>
                    <p>
                        <strong>受容型(R)</strong>が話しているときは、考えを言葉にするまでに少し時間が必要なことがあります。「うんうん、ゆっくりでいいよ」と、間を許す相槌が効きます。急かす沈黙より、待てる沈黙の方が、Rの人には安心材料になります。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-pink pl-3 py-1">
                        Warmth(温度感) — Eには気持ちを、Cには要点を
                    </h2>
                    <p>
                        <strong>共感型(E)</strong>が話しているときは、内容の正しさより先に、感情を受け止めてほしいというサインが出ています。「それはつらかったね」「よく頑張ったね」——アドバイスより先に、気持ちに一言触れるだけで、ぐっと聞き上手に見えます。
                    </p>
                    <p>
                        <strong>論理型(C)</strong>が話しているときは、要点や結論に興味があることが多いです。「つまり、こういうこと?」と要約して返すと、Cの人は「ちゃんと聞いてもらえた」と感じます。感情に寄せすぎた相槌は、かえって的外れに映ることもあります。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-yellow pl-3 py-1">
                        Speed(テンポ) — Iには即レス、Sには沈黙を
                    </h2>
                    <p>
                        <strong>即興型(I)</strong>が話しているときは、間髪入れずにリアクションすることが、心地よさにつながります。喋りながら考えているので、相槌が遅れると「聞いてないのかな」と不安にさせてしまいます。
                    </p>
                    <p>
                        <strong>熟考型(S)</strong>が話しているときは、逆です。話し終えた直後にすぐ質問を重ねると、まだ整理中だった思考を遮ってしまいます。一呼吸置いてから「それで、どう思ったの?」と聞くくらいがちょうどいいです。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        Volume(存在感) — Xには反応を、Zには余白を
                    </h2>
                    <p>
                        <strong>X</strong>の人が話しているときは、大きめのリアクションが噛み合います。「えー！」「それすごいね!」——控えめな反応は、X側からすると物足りなく映ることがあります。
                    </p>
                    <p>
                        <strong>Z</strong>の人が話しているときは、逆に、静かにうなずくだけで十分なことが多いです。過剰なリアクションは、むしろZの人を委縮させてしまうことがあります。「聞いてるよ」という最低限のサインだけで、安心して話し続けられます。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-pink pl-3 py-1">
                        スタイルを&quot;読む&quot;のではなく、&quot;合わせにいく&quot;
                    </h2>
                    <p>
                        ここまでの4軸を見て、「相手のタイプを正確に見抜かないといけないのか」と身構える必要はありません。完璧な見極めは不要です。大事なのは、<strong>相手のペースに、自分から一歩寄せてみる姿勢</strong>そのものです。
                    </p>
                    <p>
                        相槌が速すぎたら少し待ってみる。反応が薄いと感じたら少し大きくしてみる。その場の微調整の積み重ねが、「この人は話しやすい」という感覚を作ります。聞き上手とは才能ではなく、<strong>相手のスタイルへの小さな寄り添いの積み重ね</strong>なんです。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-yellow pl-3 py-1">
                        20本、ここまで読んでくださったあなたへ
                    </h2>
                    <p>
                        この記事で、4軸の共通言語を使ったコラムは20本になりました。「違うゲームをしているだけ」という思想から始まり、4つの軸、組み合わせ、職場、プライベート——いろんな角度から、同じことを繰り返し伝えてきました。
                    </p>
                    <p>
                        <strong>すれ違いは、誰のせいでもない。</strong>
                    </p>
                    <p>
                        会話が噛み合わないとき、自分を責める必要も、相手を責める必要もありません。ただ、お互いのスタイルという&quot;ゲームのルール&quot;を、ひとつ知っているかどうか。それだけで、関わり方はずいぶん変わります。
                    </p>
                    <p>
                        まだ読んでいない記事があれば、ぜひコラム一覧から気になるものを探してみてください。
                    </p>

                    <div className="flex flex-col items-center gap-2 text-sm mt-4">
                        <Link href="/column/communication-styles" className="text-neon-blue hover:underline">→ 4つの軸のまとめを読む</Link>
                        <Link href="/column/type-compatibility-map" className="text-neon-blue hover:underline">→ 16タイプ関係地図の記事を読む</Link>
                        <Link href="/column/axis-power" className="text-neon-blue hover:underline">→ Power(主導権)の記事を読む</Link>
                        <Link href="/column/axis-warmth" className="text-neon-blue hover:underline">→ Warmth(温度感)の記事を読む</Link>
                        <Link href="/column/axis-speed" className="text-neon-blue hover:underline">→ Speed(テンポ)の記事を読む</Link>
                        <Link href="/column/axis-volume" className="text-neon-blue hover:underline">→ Volume(存在感)の記事を読む</Link>
                        <Link href="/types" className="text-neon-blue hover:underline">→ 16タイプ一覧を見る</Link>
                    </div>
                </div>
            </article>

            {/* コラム一覧への強め導線 */}
            <div className="mt-4 text-center bg-white/90 notebook-border p-6 sm:p-8 rounded-lg shadow-lg">
                <h3 className="font-bold text-xl mb-3 font-handwriting">コラムは全部で20本あります</h3>
                <p className="text-sm text-gray-600 mb-6">
                    職場、プライベート、恋愛、家族——気になるシーンの記事から読んでみてください。
                </p>
                <Link href="/column">
                    <Button variant="secondary" size="lg" className="shadow-md border-2 border-black w-full sm:w-auto">コラム一覧を見る</Button>
                </Link>
            </div>

            {/* CTA */}
            <div className="mt-4 text-center bg-gray-50 border border-dashed border-gray-300 p-6 sm:p-8 rounded-lg">
                <h3 className="font-bold text-xl mb-3 font-handwriting">あなたのスタイルはどれ？</h3>
                <p className="text-sm text-gray-600 mb-6">
                    まだ自分のタイプを診断していない方は、ここから始めてみてください。
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
