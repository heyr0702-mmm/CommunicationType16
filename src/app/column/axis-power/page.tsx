import Link from "next/link";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Power(主導権) — 会話を引っ張るD、受け止めるR、それぞれの流儀 | 16コミュニケーションタイプ診断",
    description: "会議で先に喋る人と、じっくり聞いてから話す人。その違いはPower(主導権)という軸のクセです。DとR、それぞれの強みとすれ違いを解説します。",
};

export default function AxisPowerArticle() {
    return (
        <NotebookLayout className="flex flex-col space-y-8 pb-20">
            <article className="bg-white/90 p-6 sm:p-8 rounded-lg notebook-border shadow-lg">
                <header className="mb-8 border-b-2 border-gray-200 pb-6">
                    <span className="text-4xl mb-4 block">🎤</span>
                    <h1 className="text-2xl sm:text-3xl font-bold font-handwriting text-ink leading-tight mb-4">
                        Power(主導権)<br/>会話を引っ張るD、受け止めるR、それぞれの流儀
                    </h1>
                    <p className="text-gray-500 text-sm font-medium">公開日: 2026年8月6日</p>
                </header>

                <div className="space-y-6 text-gray-800 leading-relaxed font-medium">
                    <p>
                        会議で真っ先に「じゃあ、こうしましょう」と口火を切る人がいます。かと思えば、みんなの意見が出そろうまでじっと聞いて、最後に「それ、いいと思う」とうなずく人もいます。
                    </p>
                    <p>
                        この2人、どちらが「リーダーシップがある」のでしょうか。
                    </p>
                    <p>
                        答えは、どちらも、です。ただ持ち方が違うだけ。これが、4軸のひとつ<strong className="text-neon-pink">Power（主導権）</strong>が表しているものです。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        Powerは「声の大きさ」ではなく「会話の握り方」
                    </h2>
                    <p>
                        Powerは、会話のハンドルを誰が握るか、というクセを表す軸です。高い側は<strong>D（主導・Driving）</strong>、低い側は<strong>R（受容・Receptive）</strong>。
                    </p>
                    <p>
                        Dの人は、会話を前に進めることに心地よさを感じます。「で、結論は？」「じゃあ次はこうしよう」——不確実な状態が続くと、少しそわそわしてしまう。だから先に動く。決めることで、周りに安心を届けようとしているとも言えます。
                    </p>
                    <p>
                        Rの人は、まず場を受け止めることに心地よさを感じます。「うんうん、それで？」「なるほどね」——相手の話をしっかり聞いてから、自分の考えを差し出す。急いで結論を出すより、その場にある声を拾い集めることを大事にしています。
                    </p>
                    <p>
                        どちらも、会話をより良くしたいという気持ちは同じです。ただ、その表れ方が正反対なだけなんです。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-pink pl-3 py-1">
                        Dの強みと、Dが抱えやすい悩み
                    </h2>
                    <p>
                        Dの強みは、迷いを断ち切る力です。誰かが決めてくれると、場の空気が一気に前に進みます。プロジェクトの初動、緊急の判断、停滞した議論を動かす場面——Dの人がいると、物事が進みます。
                    </p>
                    <p>
                        一方で、Dの人は「せっかちだと思われていないか」「周りの意見をちゃんと聞けているか」と、実は気にしていることも多いものです。良かれと思って前に出た結果、Rの人から「もっと話を聞いてほしかった」と言われて戸惑う。これはDが悪いのではなく、<strong>&quot;進める&quot;ことと&quot;聞く&quot;ことのタイミングが噛み合っていなかっただけ</strong>です。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-yellow pl-3 py-1">
                        Rの強みと、Rが抱えやすい悩み
                    </h2>
                    <p>
                        Rの強みは、場の声を漏らさず拾う力です。誰かが焦って結論に飛びつきそうなとき、Rの人が「ちょっと待って、〇〇さんはどう思う？」と間を取ることで、議論の質がぐっと上がります。安心して話せる相手として、周りから信頼されやすいのもRです。
                    </p>
                    <p>
                        一方で、Rの人は「自分から動かないと、何も決まらないのでは」と不安になることがあります。Dの人から「意見がないの?」と急かされて、戸惑った経験がある人も多いはずです。これも、意見がないわけではなく、<strong>まだ発言のタイミングを見計らっているだけ</strong>ということが、ほとんどです。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        D×Rが噛み合うと、最強のペアになる
                    </h2>
                    <p>
                        面白いのは、DとRは対立する関係ではなく、補い合う関係にもなれるということです。
                    </p>
                    <p>
                        Dが「まず動こう」と場を前に進め、Rが「みんなの声、拾えてる?」と確認する。この役割分担がうまく回ると、決断力と丁寧さを両立したチームになります。逆に、これがうまく噛み合わないと、「勝手に決める人」「なかなか動かない人」というすれ違いだけが残ってしまう。
                    </p>
                    <p>
                        違いは、悪いことではありません。<strong>噛み合わせ方を知っているかどうか</strong>の違いです。
                    </p>
                    <div className="bg-gray-50 p-4 border border-gray-200 rounded">
                        <ul className="list-disc pl-5 space-y-2 text-sm">
                            <li>Dの人へ: 決める前に、一呼吸だけRの人の様子を見てみる。それだけで「置いていかれた」という感覚を減らせます。</li>
                            <li>Rの人へ: 考え中であることを、一言だけ声に出してみる。「いま整理してる」の一言が、Dの人の不安をかなり和らげます。</li>
                        </ul>
                    </div>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-pink pl-3 py-1">
                        自分のPowerを知ることから
                    </h2>
                    <p>
                        DとRに優劣はありません。会議を前に進めるのも、場の声を拾うのも、どちらもチームに必要な役割です。
                    </p>
                    <p>
                        大事なのは、自分がどちらの流儀で会話しているかを知り、相手の流儀も想像してみること。それだけで、「勝手に決めないでよ」「なんで黙ってるの」というすれ違いは、ぐっと減っていきます。
                    </p>

                    <p className="font-bold text-center text-lg mt-8">
                        あなたのPowerは、DとRどちらに寄っていますか？
                    </p>
                    <p className="text-center text-sm text-gray-600">
                        3分の診断で、Power軸を含む4つの軸から、あなたのコミュニケーションタイプを確かめてみてください。
                    </p>
                    <div className="flex flex-col items-center gap-2 text-sm mt-4">
                        <Link href="/column/communication-styles" className="text-neon-blue hover:underline">→ 4つの軸のまとめを読む（コミュニケーションスタイルとは？）</Link>
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
