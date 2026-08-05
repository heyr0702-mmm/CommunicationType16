import Link from "next/link";
import { NotebookLayout } from "@/components/layout/NotebookLayout";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "「相性が悪い」の正体 — 私たちはただ\"違うゲーム\"をしているだけ | 16コミュニケーションタイプ診断",
    description: "あの人と話が噛み合わないのは、性格でも相性でもありません。会話スタイルという\"別のゲーム\"をしているだけ。4つの軸で、すれ違いの正体をほどきます。",
};

export default function WhyMismatchArticle() {
    return (
        <NotebookLayout className="flex flex-col space-y-8 pb-20">
            <article className="bg-white/90 p-6 sm:p-8 rounded-lg notebook-border shadow-lg">
                <header className="mb-8 border-b-2 border-gray-200 pb-6">
                    <span className="text-4xl mb-4 block">🎲</span>
                    <h1 className="text-2xl sm:text-3xl font-bold font-handwriting text-ink leading-tight mb-4">
                        「相性が悪い」の正体<br/>私たちはただ&quot;違うゲーム&quot;をしているだけ
                    </h1>
                    <p className="text-gray-500 text-sm font-medium">公開日: 2026年8月6日</p>
                </header>

                <div className="space-y-6 text-gray-800 leading-relaxed font-medium">
                    <p>
                        <strong>あの人とだけ、なぜか会話が噛み合わない。</strong>
                    </p>
                    <p>
                        職場のあの先輩。グループLINEのあの友だち。話すたびに、なんだか少し疲れる。悪い人じゃないのは分かっている。でも、テンポが合わない。話の「どこに着地したいか」が、いつもすれ違う。
                    </p>
                    <p>
                        こういうとき、私たちはたいてい2つのうちどちらかを考えます。
                    </p>
                    <p>
                        「わたしのコミュ力が低いのかな」——自分を責める。<br/>
                        「あの人がちょっと変わってるんだよな」——相手を責める。
                    </p>
                    <p>
                        でも、そのどちらもたぶん外れています。本当の原因は、もっと単純です。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        噛み合わないのは、&quot;違うゲーム&quot;をしているから
                    </h2>
                    <p>
                        会話を、キャッチボールだと思ってみてください。
                    </p>
                    <p>
                        ボールを速く投げ合うのが楽しい人がいます。ポンポン、ポンポン。テンポそのものが心地いい。
                        一方で、いいボールを一球ずつ、じっくり返したい人もいます。受け取って、少し握って、それから投げる。
                    </p>
                    <p>
                        この2人がキャッチボールをすると、どうなるでしょう。
                        速い人は「反応おそいな」とそわそわし、じっくりの人は「急かされてる」と感じる。
                    </p>
                    <p>
                        どちらも、間違ったことは何ひとつしていません。ただ、<strong className="text-neon-pink">投げ方のクセが違うだけ</strong>。落球が続くのは、当たり前なんです。
                    </p>
                    <p>
                        つまり、「相性が悪い」の多くは、相性の問題ですらありません。<strong>お互いが、少しずつ違うルールのゲームをしている。</strong>それに気づいていないだけ、という話です。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-pink pl-3 py-1">
                        スタイルには、良いも悪いもない
                    </h2>
                    <p>
                        ここで大事なことを、はっきり言っておきます。
                    </p>
                    <p>
                        会話のスタイルに、優劣はありません。
                    </p>
                    <p>
                        速いテンポが「コミュ力が高い」わけでも、じっくり考えるのが「気が利かない」わけでもない。よく話す人がえらいわけでも、聞き役が地味なわけでもない。
                    </p>
                    <p>
                        これは性格の良し悪しではなく、ただの<strong>&quot;型&quot;の違い</strong>です。右利きと左利きが違うように、ただそこにある。だから、どちらかが無理に相手に合わせて自分を殺す必要も、ありません。
                    </p>
                    <p>
                        必要なのは、たったひとつ。
                    </p>
                    <p>
                        「あ、いまわたしたち、違うゲームをしてるんだ」と気づくこと。
                    </p>
                    <p>
                        それだけで、張り詰めていた空気が、ふっとゆるみます。「じゃあ今日は、こっちがゆっくり投げようかな」「ここは早めに返すね」——ルールを、その場で一緒に調整できるようになる。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-yellow pl-3 py-1">
                        すれ違いを読みとく「4つの軸」
                    </h2>
                    <p>
                        とはいえ、「スタイルが違う」だけでは、まだ少しぼんやりしています。相手の&quot;ゲームのルール&quot;を具体的に知るために、この診断では会話のクセを4つの軸で見ていきます。
                    </p>
                    <ul className="list-disc pl-5 space-y-2 my-6">
                        <li>
                            <strong>
                                <Link href="/column/axis-power" className="text-neon-blue hover:underline">Power(主導権)</Link>
                            </strong> — 会話を引っ張る人（D）か、受け止める人（R）か
                        </li>
                        <li>
                            <strong>
                                <Link href="/column/axis-warmth" className="text-neon-blue hover:underline">Warmth(温度感)</Link>
                            </strong> — 気持ちに寄り添う人（E）か、まず整理したい人（C）か
                        </li>
                        <li>
                            <strong>
                                <Link href="/column/axis-speed" className="text-neon-blue hover:underline">Speed(テンポ)</Link>
                            </strong> — その場でしゃべりながら考える人（I）か、いったん咀嚼してから話す人（S）か
                        </li>
                        <li>
                            <strong>
                                <Link href="/column/axis-volume" className="text-neon-blue hover:underline">Volume(存在感)</Link>
                            </strong> — リアクション大きめの人（X）か、そっと聞き役に回る人（Z）か
                        </li>
                    </ul>
                    <p>
                        たとえば、<strong>主導型で即興（D×I）の人</strong>と、<strong>受容型でじっくり（R×S）の人</strong>。
                        前者は「で、どうする？」とどんどん決めにいき、後者は「ちょっと待って、考えてる」と間をとる。ぶつかっているように見えて、実は&quot;スピードの設定&quot;が違うだけ。それが分かれば、片方は少し待てるし、もう片方は「いま考え中だよ」とサインを出せます。
                    </p>
                    <p>
                        この4つの軸の組み合わせで、人は<Link href="/types" className="text-neon-blue hover:underline">16タイプ</Link>に分かれます。あなたのクセも、あの人のクセも、その中のどこかにちゃんと居場所があります。
                    </p>

                    <h2 className="text-xl font-bold text-ink mt-8 border-l-4 border-neon-blue pl-3 py-1">
                        まずは、自分のルールを知ることから
                    </h2>
                    <p>
                        相手を変えることはできません。でも、「自分がどんなクセで投げているか」を知るだけで、会話はぐっと楽になります。
                    </p>
                    <p>
                        自分のスタイルが分かれば、「あ、いまSpeedが出すぎてるな」と気づける。相手のスタイルが想像できれば、「この人はWarmthを大事にしてるんだな」と、モヤモヤが&quot;理解&quot;に変わる。
                    </p>
                    <p>
                        その小さな共通言語が、人と関わることを、少しだけ楽にしてくれるはずです。
                    </p>

                    <p className="font-bold text-center text-lg mt-8">
                        あなたは、どんなスタイルで会話していますか？
                    </p>
                    <p className="text-center text-sm text-gray-600">
                        まずは3分の診断で、自分のコミュニケーションタイプを確かめてみてください。
                    </p>
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
